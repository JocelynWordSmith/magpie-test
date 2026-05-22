#!/usr/bin/env python3
"""Run Magpie locally without Docker.

Uses only the Python 3 standard library. Reads the same .env vars as the
Docker setup (MAGPIE_PORT, MAGPIE_GALLERY_PATH) and serves www/ plus the
gallery at /research/, including the nginx-style JSON directory listing
the SPA uses for auto-discovery.

Usage:
    python3 run.py
"""

from __future__ import annotations

import json
import os
import sys
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
WWW = ROOT / "www"

MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".htm": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".md": "text/plain; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
}


def load_env(path: Path) -> None:
    if not path.is_file():
        return
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        if "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def safe_join(base: Path, rel: str) -> Path | None:
    """Resolve `rel` under `base`, returning None if it escapes."""
    target = (base / rel.lstrip("/")).resolve()
    try:
        target.relative_to(base)
    except ValueError:
        return None
    return target


def mime_for(path: Path) -> str:
    return MIME_TYPES.get(path.suffix.lower(), "application/octet-stream")


def make_handler(gallery: Path):
    class Handler(BaseHTTPRequestHandler):
        # Quieter logs — one line per request, no env dump.
        def log_message(self, format: str, *args) -> None:
            sys.stderr.write(
                "%s - %s\n" % (self.address_string(), format % args)
            )

        def do_GET(self) -> None:  # noqa: N802
            self._serve(include_body=True)

        def do_HEAD(self) -> None:  # noqa: N802
            self._serve(include_body=False)

        def _serve(self, *, include_body: bool) -> None:
            path = unquote(urlsplit(self.path).path)

            if path.startswith("/research/") or path == "/research":
                self._serve_research(path, include_body=include_body)
                return

            self._serve_static(path, include_body=include_body)

        def _serve_research(self, path: str, *, include_body: bool) -> None:
            rel = path[len("/research"):]  # leading "/" or empty
            target = safe_join(gallery, rel)
            if target is None:
                self.send_error(HTTPStatus.FORBIDDEN)
                return

            if target.is_dir():
                # Mirror nginx `autoindex_format json` — array of entries
                # with at least {name, type}. The SPA only reads those.
                entries = []
                for child in sorted(target.iterdir()):
                    entries.append({
                        "name": child.name,
                        "type": "directory" if child.is_dir() else "file",
                        "size": child.stat().st_size if child.is_file() else 0,
                    })
                self._send_bytes(
                    json.dumps(entries).encode("utf-8"),
                    "application/json; charset=utf-8",
                    include_body=include_body,
                )
                return

            if target.is_file():
                self._send_file(target, include_body=include_body)
                return

            self.send_error(HTTPStatus.NOT_FOUND)

        def _serve_static(self, path: str, *, include_body: bool) -> None:
            if path == "/":
                target = WWW / "index.html"
            else:
                resolved = safe_join(WWW, path)
                if resolved is None:
                    self.send_error(HTTPStatus.FORBIDDEN)
                    return
                target = resolved

            if target.is_dir():
                target = target / "index.html"

            if not target.is_file():
                # SPA fallback — same as nginx `try_files $uri $uri/ /index.html`
                target = WWW / "index.html"
                if not target.is_file():
                    self.send_error(HTTPStatus.NOT_FOUND)
                    return

            self._send_file(target, include_body=include_body)

        def _send_file(self, target: Path, *, include_body: bool) -> None:
            data = target.read_bytes()
            self._send_bytes(data, mime_for(target), include_body=include_body)

        def _send_bytes(self, data: bytes, content_type: str, *, include_body: bool) -> None:
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", content_type)
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Cache-Control", "no-cache")
            self.end_headers()
            if include_body:
                self.wfile.write(data)

    return Handler


def main() -> int:
    load_env(ROOT / ".env")

    port = int(os.environ.get("MAGPIE_PORT", "8086"))
    gallery_raw = os.environ.get("MAGPIE_GALLERY_PATH", "./sample")
    gallery = Path(gallery_raw)
    if not gallery.is_absolute():
        gallery = (ROOT / gallery).resolve()
    else:
        gallery = gallery.resolve()

    if not gallery.is_dir():
        print(f"error: gallery path is not a directory: {gallery}", file=sys.stderr)
        return 1
    if not WWW.is_dir():
        print(f"error: missing www/ directory at {WWW}", file=sys.stderr)
        return 1

    handler = make_handler(gallery)
    server = ThreadingHTTPServer(("127.0.0.1", port), handler)

    print(f"Magpie serving on http://localhost:{port}")
    print(f"  www:     {WWW}")
    print(f"  gallery: {gallery}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print()
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
