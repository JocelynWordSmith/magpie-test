# Visual UX Research Playbook

Reusable instructions for an AI agent (Sonnet, Opus, etc.) to generate competitive visual UX/design research reports on apps and games. Designed to be portable — drop this file into any repo and follow the steps.

The output is one markdown report per target app/game, with downloaded screenshots embedded inline and a structured `Design language & takeaways` section at the bottom.

---

## 1. Goal of each report

For one target app/game, produce a markdown document that:

1. **Embeds 25-60+ real screenshots** of the app, organized by UI area / flow / interaction
2. **Has specific captions** explaining what each image shows (not "screenshot of app")
3. **Ends with a `Design language & takeaways` section** of 6-12 bullets explaining what the calling project should borrow, contrast with, or learn from
4. **Renders in any markdown viewer** (VSCode preview, GitHub, Obsidian) because all images are local files referenced with relative paths

Reports are written from the perspective of a specific project being designed — the "calling project." Each takeaways section is tailored to *that* project's goals.

---

## 2. Output structure

```
<repo>/research/competitive-apps/
├── README.md                  # Master index (rewritten after each batch)
├── <slug>.md                  # One report per app
├── <slug>.md
├── ...
└── images/
    ├── <slug>/                # Per-app image directory
    │   ├── 01-onboarding.png
    │   ├── 02-home.png
    │   └── ...
    └── <slug>/
```

**Slugs:** lowercase kebab-case, derived from the app name. e.g., `Cult of the Lamb` → `cult-of-the-lamb`, `The Pattern` → `the-pattern`, `Zombies, Run!` → `zombies-run`.

Optionally maintain a status catalog at `<repo>/research/intake/apps_index.md` listing every app with a ✅ / ⬜ / 📝 / ⏭ status marker (see step 8).

---

## 3. Calling project context

Before dispatching agents, write down the calling project's:

- **One-paragraph description** (what is it, who it's for, what makes it distinctive)
- **Key design questions** (e.g., "how should patron deities be portrayed", "what does the offering UI feel like")
- **Aesthetic direction(s) under consideration** (e.g., "warm-witchy editorial vs. folk-pagan AAA vs. candlelit folk horror")
- **Mechanical parallels worth flagging** (e.g., "habits as offerings — find apps/games with offering-like mechanics")

Every agent prompt embeds a 1-2 sentence version of this so its takeaways section is project-specific, not generic.

---

## 4. Selecting apps to research

If starting from scratch, write `research/intake/apps_index.md` first — a catalog of candidate apps organized by function (habit trackers, focus timers, astrology apps, games with relevant aesthetic, etc.) with 1-2 sentence summaries each.

Add a status legend so the user can flag what to research:

```markdown
- **✅** — Report exists (linked inline)
- **⬜** — No report yet
- **📝** — Report requested
- **⏭** — Skip permanently
```

User flips ⬜ → 📝 on what they want covered. Agents only dispatch against 📝 entries.

---

## 5. Per-app agent workflow

Each agent does the following, in this exact order:

### 5a. Create the image directory

```bash
mkdir -p research/competitive-apps/images/<slug>/
```

### 5b. Find and download images

Best sources, in approximate order of reliability:

| Source | URL pattern | Notes |
|---|---|---|
| Apple App Store | `apps.apple.com/us/app/<name>/<id>` | Screenshots at `is1-ssl.mzstatic.com/image/thumb/...`. Fetch the page HTML with `curl` and grep for `mzstatic.com.*\.\(jpg\|png\|webp\)` |
| Google Play | `play.google.com/store/apps/details?id=<package>` | Screenshots at `play-lh.googleusercontent.com` |
| Steam (for games) | `store.steampowered.com/app/<id>/<name>/` | Screenshots at `cdn.cloudflare.steamstatic.com` and `shared.akamai.steamstatic.com` |
| Developer marketing site | varies | Usually has the highest-quality product shots |
| ScreensDesign / Mobbin | screensdesign.com | UI gallery archives (some paywall) |
| Adapty paywall archive | paywallscreens.com | For paywall-specific screenshots |
| Press kit | dev's `presskit()` page | Logos + screenshots |
| YouTube review thumbnails | `i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg` | Search YouTube for "<app> review" |
| Tech reviews | MacStories, IGN, Polygon, RPS, MakeUseOf, TheSweetSetup, AndroidPolice | High-quality embedded screenshots |
| Reddit | r/<appname>, r/<genre> | User-shared screenshots |
| Game wikis | Fandom (often Cloudflare-walled), official wikis | Character/portrait galleries |

Always download with a real browser user-agent — many sites block default `curl`:

```bash
curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36" -o <local_path> <url>
```

Skip a source after 2 failed retries — don't burn time fighting one site.

### 5c. Verify downloads

```bash
file research/competitive-apps/images/<slug>/*    # confirm they're real images, not HTML error pages
find research/competitive-apps/images/<slug>/ -type f -size -5k -delete   # remove tracking pixels / failed downloads
```

### 5d. Compress images (NEW — required step)

Downloaded images can be huge (4 MB+ App Store hero shots). Compress aggressively — markdown reports need ~600-1000px wide images max for readability. This step **dramatically reduces repo size** and **prevents the 2000px crash** that happens when an agent later tries to `Read` an oversized image during reasoning.

**Pick the first tool available:**

```bash
# Option A — sips (built-in on macOS, no install)
# Resize to 1600px on longest side, JPEG quality 75
for img in research/competitive-apps/images/<slug>/*.{jpg,jpeg,png,webp}; do
  [ -f "$img" ] || continue
  sips -Z 1600 "$img" >/dev/null 2>&1
done

# Option B — ImageMagick (cross-platform)
for img in research/competitive-apps/images/<slug>/*.{jpg,jpeg,png,webp}; do
  [ -f "$img" ] || continue
  magick "$img" -resize '1600x1600>' -quality 78 -strip "$img"
done

# Option C — cwebp (best ratio, but emits .webp)
for img in research/competitive-apps/images/<slug>/*.png; do
  [ -f "$img" ] || continue
  cwebp -q 78 -resize 1600 0 "$img" -o "${img%.png}.webp" && rm "$img"
done
```

**Important:** `-resize '1600x1600>'` (with the trailing `>`) only resizes images *larger* than 1600px — it leaves smaller images untouched.

Target: every file under ~400 KB after compression. Spot-check a few with `ls -lh` to confirm.

If a tool isn't available, fall back to the next option. If none are available, at minimum **delete any image >2000px on its longest side** before continuing:

```bash
# Drop any file >2 MB as a crude proxy for "too big to embed"
find research/competitive-apps/images/<slug>/ -type f -size +2M -delete
```

### 5e. Inventory what's available

```bash
ls research/competitive-apps/images/<slug>/ | wc -l    # total count
ls research/competitive-apps/images/<slug>/            # filenames (grep for specifics)
```

Do **not** paste the full ls output anywhere — it bloats context. Just count, then grep for specific categories (`ls | grep onboarding`, `ls | grep portrait`).

### 5f. Write the report

See [§7 Report template](#7-report-template) below.

### 5g. Spot-check, don't deep-inspect

- `file <img>` on 2-3 random files to confirm they're valid images
- **Do NOT use Read on any image file.** Many will exceed the 2000px image-size cap and crash the session. Caption based on filename + general app knowledge.

---

## 6. Hard constraints (learned from production)

These prevent the most common failure modes. Include them verbatim in every agent prompt:

```
HARD CONSTRAINTS
1. DO NOT use Read on any image — large images crash the session. Use `ls` + `file` only.
2. Cap WebSearch + WebFetch at 0-2 calls total. Most app knowledge is in your training data already.
3. Don't paste full `ls` output anywhere. Use `wc -l` to count, grep for specifics.
4. No new downloads unless the existing image dir has <10 files. Write from what's there; note gaps.
5. Captions ≤ 20 words each. No paragraph-length captions.
6. Report length ≤ 250 lines. Each focus-area section ≤ 4 image refs. Skip sections that have no fitting image — don't pad with marketing context.
7. `Design language & takeaways` section ≤ 6 bullets, each ≤ 2 sentences.
8. Return summary ≤ 80 words. Just: path, image count, 3 one-line findings.
```

These cut per-report token use by ~80% with no visible quality loss.

---

## 7. Report template

```markdown
# <App Name> — Visual Design Research

## Overview

<2-4 sentences. What the app is, who makes it, who it's for. Then 1-2 sentences specifically tying it to the calling project's design questions — why this app is worth studying.>

## <Focus area 1, e.g., "Onboarding">

<Optional 1-2 sentence intro for the section.>

![Specific caption describing what this UI shows, what's notable](images/<slug>/01-onboarding-name-entry.png)
![Another specific caption](images/<slug>/02-onboarding-permissions.png)

## <Focus area 2, e.g., "Home screen">

![...](images/<slug>/03-home-default.png)
![...](images/<slug>/04-home-empty-state.png)

<...continue per focus area. Cover what you have images for. Skip sections with no images — don't pad.>

## Design language & takeaways for <Calling Project>

- **<Bold lead phrase>** — <1-2 sentences on what to borrow, contrast with, or learn from. Specific to the calling project, not generic.>
- **<Bold lead phrase>** — <...>
- **<Bold lead phrase>** — <...>
- <6 bullets total, max>
```

**Image-embed syntax must be markdown image syntax `![caption](path)`, not inline-code backticks `` `path` ``.** Otherwise images won't render. (Common failure mode — explicitly call this out in the prompt.)

---

## 8. Agent prompt template

```
Write a visual UX/design report on **<App Name>** (<one-sentence-description>) for **<Calling Project>** — <1-2 sentence project description with key design questions>.

**Images already downloaded** at `<absolute path to images dir>` (~<N> files). They've been compressed.

## HARD CONSTRAINTS
1. DO NOT Read images.
2. 0 WebSearch/WebFetch calls — you know <App>.
3. No `ls` output dumps.
4. No new downloads.
5. Captions ≤20 words.
6. Report ≤250 lines, ≤4 image refs per section.
7. Takeaways: ≤6 bullets, ≤2 sentences each.
8. Return ≤80 words.

## Job
`ls | wc -l` + grep filenames. Write at `<absolute path to report.md>`.

## Structure
- `# <App Name> — Visual Design Research`
- Overview (3 sentences) — what the app is + why it's relevant to <Calling Project>
- Sections per focus area: <comma-separated list of 8-15 focus areas, customized per app>
- `## Design language & takeaways for <Calling Project>` — max 6 bullets

Captions from filename + your knowledge. Use markdown image syntax `![caption](images/<slug>/file.png)` — NOT backticks. Embed locally — don't reference external URLs.

## Return
≤80 words: report path, # images embedded, gaps, 2-3 findings.
```

---

## 9. Parallelism

- **Initial download/research pass**: 4 parallel agents max. More than that and rate limits / session caps hit. Dispatch as a wave, wait for completion, dispatch next wave.
- **Report-writing pass** (after images are already on disk): one at a time is fine — each finishes in 60-90 seconds because constraints are tight.
- After dispatching an agent, do not poll for completion — the harness will notify on completion. Don't dispatch another until the current one finishes.

If a session limit hits mid-batch, image directories usually survive (they were written before the limit). Report `.md` files often don't. On retry, agents should `ls` first to find what's already downloaded and skip re-downloading.

---

## 10. After all reports are written

1. **Verify image syntax** in every report:
   ```bash
   for f in research/competitive-apps/*.md; do
     refs=$(grep -c '!\[' "$f")
     echo "$f: $refs image refs"
   done
   ```
   Any report with 0 refs has the backtick bug — fix by converting `` `images/<slug>/<file>` — caption `` to `![caption](images/<slug>/<file>)`.

2. **Update the status catalog** (`research/intake/apps_index.md`):
   - Flip every 📝 to ✅ with `([report](../competitive-apps/<slug>.md))` inline

3. **Rewrite the master README** (`research/competitive-apps/README.md`) with:
   - Reports table (App | link | image count | one-line standout finding for the calling project)
   - Cross-cutting themes section (aesthetic candidates, character-design references, mechanic models, anti-patterns)

4. **Repo size check** — total image dataset can easily reach 150-300 MB. Decide: commit to a public repo? Put in a private/research branch? Add `research/competitive-apps/images/` to `.gitignore` and keep local-only?

---

## 11. Tools used / required

| Tool | Purpose | Install |
|---|---|---|
| `curl` | Image downloads | Built in |
| `sips` | Image resize/compress (macOS) | Built in |
| `magick` / `convert` | Image resize/compress (any OS) | `brew install imagemagick` |
| `cwebp` | WebP conversion | `brew install webp` |
| `file` | Confirm image validity | Built in |
| `grep`, `ls`, `wc` | Filename inventory | Built in |
| Agent's WebSearch / WebFetch | Locating image source URLs | (LLM tool) |
| Agent's Bash | Running the above | (LLM tool) |
| Agent's Write / Edit | Creating reports | (LLM tool) |

---

## 12. Cost / time estimates

Based on a 35-report production run:

| Phase | Per-app cost | Notes |
|---|---|---|
| Image download + research | 50-150k tokens, 8-15 min | Bulk of cost. Cut with strict source list. |
| Image compression | <1 min, ~0 tokens | Bash only |
| Report writing (with tight constraints) | 15-20k tokens, 60-90 sec | Tight constraints essential |
| **Total per app** | **~80-200k tokens, ~15 min** | |

Without the hard constraints from §6, per-report cost roughly **5×** higher and quality marginally better.
