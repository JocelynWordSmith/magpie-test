# Magpie

A static gallery for screenshots and design notes — Pinterest-style boards rendered straight from a folder of markdown files. Drop in a directory of `.md` files plus their images and Magpie serves it as a small browsable site.

Useful for: competitive UX research, mood boards, design swipe files, art reference collections, anything that's "a folder of essays with a lot of pictures."

## Quick start (local)

```sh
git clone https://github.com/<you>/magpie.git
cd magpie
python3 run.py
open http://localhost:8086
```

That's it — the bundled `sample/` directory loads by default. Requires Python 3.8+ (already on macOS and most Linux distros — no `pip install` needed). To point Magpie at your own collection, copy `.env.example` to `.env` and set `MAGPIE_GALLERY_PATH`.

## Deploy to GitHub Pages

Magpie is a static site, so it deploys to any dumb host. The included build script bundles `www/` plus your gallery (and writes a manifest the SPA uses to discover reports) into a `dist/` directory:

```sh
python3 build.py
# → ./dist  ready to serve from any static host
```

A GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes that `dist/` to GitHub Pages on every push to `main`. To turn it on:

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. Push to `main`. The workflow builds with `MAGPIE_GALLERY_PATH=./sample` by default — set it in the workflow env (or commit a `.env`) if you want to bundle a different directory.

For a manual one-off (no Actions), run `python3 build.py` and push the contents of `dist/` to a `gh-pages` branch.

## Gallery layout

Magpie expects your gallery directory to look like this:

```
my-gallery/
  README.md              # index page — see below
  some-report.md         # one file per "board"
  another-report.md
  images/
    some-report/
      screenshot1.png
      screenshot2.jpg
    another-report/
      ...
```

### Per-report markdown (`some-report.md`)

- A single `# Title` heading becomes the page title.
- Text between the title and the first `## ` is rendered as a muted intro.
- Each `## Section heading` becomes its own masonry board.
- The first text paragraph(s) of a section become a wide section lead.
- Everything else flows into the masonry: `![alt](images/some-report/foo.png)` becomes an image tile, paragraphs become text tiles, list items each become their own tile.
- A section whose heading contains "takeaways" or "design language" gets a dark-tile treatment for its bullets.

### Index page (`README.md`)

The home page parses a markdown table from your `README.md` to populate the report grid. The table must have at least four columns: **App** (display name), **Report** (a link to the `.md` file), **Images** (a count, displayed as a meta line), and **Standout idea** (a one-line description).

```markdown
| App | Report | Images | Standout idea |
|---|---|---|---|
| **Some App** | [some-report.md](some-report.md) | 42 | One-line description of the standout idea. |
| **Another** | [another-report.md](another-report.md) | 30 | … |
```

The text immediately following the `# ` heading in `README.md` is shown as the home page intro.

## Configuration

All overrides live in `.env`. See [`.env.example`](.env.example) for the full list. Defaults:

| Var | Default | Purpose |
|---|---|---|
| `MAGPIE_PORT` | `8086` | Local port for `run.py` |
| `MAGPIE_GALLERY_PATH` | `./sample` | Path to your gallery directory |

## How it works

- The SPA is plain HTML/CSS/JS with no build step. Markdown is fetched at runtime and parsed in the browser using [marked](https://marked.js.org/) (loaded from a CDN).
- Locally, [`run.py`](run.py) is a zero-dependency Python stdlib server that serves `www/` and aliases `research/` to your gallery directory.
- For GitHub Pages, [`build.py`](build.py) bundles everything into `dist/` and writes a `research/index.json` manifest so the SPA can still discover reports without a server-side directory listing.
- The masonry layout is CSS columns — no JS layout library.
- Click any image to open a lightbox.

## License

MIT. See [LICENSE](LICENSE).

**Image disclaimer:** The images in any bundled sample gallery or screenshots are not owned by this project's author. They are collected for personal reference, research, and educational purposes only. All images remain the property of their respective owners.
