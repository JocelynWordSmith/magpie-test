# Magpie QoL — Favorites, Tags, Collections, Category Filtering

**Date:** 2026-05-22

## Summary

Add quality-of-life features to the Magpie SPA: favorites, manual tags, curated collections, and category-based organization derived from `apps-index.md`. All state persisted in `localStorage`. No backend, no build-step changes. Implemented entirely within `www/app.js` and `www/styles.css`.

---

## Data Model

All state lives under namespaced `localStorage` keys.

| Key | Type | Shape |
|---|---|---|
| `magpie:favorites` | JSON array | `["streaks", "co-star"]` |
| `magpie:tags` | JSON object | `{"streaks": ["habit", "watch"]}` |
| `magpie:collections` | JSON array | `[{id, name, slugs[]}]` |

A `Storage` object in `app.js` wraps all reads/writes. No other code touches `localStorage` directly.

---

## Categories

Parsed at runtime from `research/apps-index.md` (fetched in parallel with `README.md` on home load). Parser:
- `## Heading` → category name
- Bullet lines with `[report](path/slug.md)` → slug → category mapping
- Fails silently if file absent; all other features still work
- One category per slug (last heading wins for slugs that appear under multiple sections)

---

## UI Components

### Filter bar (home page, above report grid)

- **Category** dropdown — populated from `apps-index.md` sections; "All categories" default
- **★ Favorites** toggle button — filters to favorited reports only
- **Tags** dropdown — populated from all tags currently in localStorage; hidden if no tags exist
- **Sort** dropdown — Default order / A → Z / Z → A
- **Clear** button — resets all filters; hidden when no filters are active

### Collections bar (home page, above filter bar)

- One pill button per saved collection — clicking filters the grid to that collection's slugs; active pill is highlighted
- **+ New** button — inline text input appears; Enter/blur saves the collection
- Clicking the active collection pill a second time clears the collection filter

### Report cards (home page)

Enhanced with:
- **★ button** (top-right, always visible) — filled when favorited; click toggles without navigating
- **Tag pills** below the standout line — shows the report's current tags
- **Category badge** in the meta line — derived from `apps-index.md`
- **⊕ button** (bottom-right) — opens the collection modal for this report

### Collection modal (`<dialog>`)

- Title: "Add to collection — *App Name*"
- Checkbox list of all existing collections (checked = report is in that collection)
- "New collection" text input at the bottom — Enter creates and immediately checks it
- Close button / click-backdrop dismisses

### Tag editor (report page)

- Rendered below the `<h1>` title on every report page
- Existing tags shown as dismissible chips (click × to remove)
- "＋ Add tag" chip — click turns it into a text input; Enter/blur saves; autocompletes from existing tags across all reports

---

## Filter Logic

Filters are AND-combined (a report must pass all active filters):

1. Favorites: `Storage.isFavorite(slug)`
2. Category: `Categories.getFor(slug) === filterState.category`
3. Collection: slug in `collection.slugs`
4. Tag: `Storage.getTagsFor(slug).includes(filterState.tag)`

Sort applied after filtering.

---

## Architecture

Single IIFE in `app.js`, extended with clear comment sections:

```
// -------- storage --------
// -------- categories --------
// (existing utility, routing, home, report, lightbox, boot sections)
```

Filter state is a module-level `let filterState = { ... }` object. Home page re-renders the grid in-place when filters change (does not re-fetch markdown).

---

## Out of Scope

- Automatic/AI tagging (deferred)
- URL-encoded filter state (not bookmarkable — in-memory only)
- Sync across devices
- Making the category source file configurable (hardcoded to `apps-index.md` for now)
