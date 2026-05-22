#!/usr/bin/env python3
"""Build a static Magpie site into ./dist for hosting on GitHub Pages
(or any other dumb static host).

Bundles www/ plus the gallery directory into a single deployable tree,
and writes the file manifest the SPA uses for report auto-discovery.

Usage:
    python3 build.py

Reads the same .env vars as the Docker/local-server setup:
    MAGPIE_GALLERY_PATH   default: ./sample
"""

from __future__ import annotations

import json
import os
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
WWW = ROOT / "www"
DIST = ROOT / "dist"


def load_env(path: Path) -> None:
    if not path.is_file():
        return
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def build_manifest(gallery_in_dist: Path) -> list[dict]:
    # Mirror the nginx `autoindex_format json` shape — the SPA only reads
    # name + type, but include size to match the real listing.
    entries = []
    for child in sorted(gallery_in_dist.iterdir()):
        entries.append({
            "name": child.name,
            "type": "directory" if child.is_dir() else "file",
            "size": child.stat().st_size if child.is_file() else 0,
        })
    return entries


def main() -> int:
    load_env(ROOT / ".env")

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

    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    shutil.copytree(WWW, DIST, dirs_exist_ok=True)
    research = DIST / "research"
    shutil.copytree(gallery, research)

    manifest = build_manifest(research)
    (research / "index.json").write_text(json.dumps(manifest, indent=2))

    # Tell GitHub Pages not to run Jekyll (which would skip dotfiles
    # and underscore-prefixed paths).
    (DIST / ".nojekyll").write_text("")

    md_count = sum(1 for e in manifest if e["type"] == "file" and e["name"].lower().endswith(".md"))
    print(f"Built dist/ from:")
    print(f"  www:     {WWW}")
    print(f"  gallery: {gallery}")
    print(f"  reports: {md_count} markdown files indexed")
    print(f"Output:   {DIST}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
