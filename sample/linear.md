# Linear — Visual Design Research

## Overview

Linear is a software project management tool that has become the industry benchmark for "polish" in dense productivity software. It operates at a standard most tools never reach: every pixel is intentional, every interaction is instant, and the information architecture never asks you to hunt. For Tend — a daily ritual app where habits are offerings to patron deities — Linear defines the ceiling: a dark, opinionated surface that feels like a luxury instrument rather than a spreadsheet. The goal is not to copy Linear but to internalize *why* it feels the way it does, then translate those principles into something witchier.

---

## Issue List & Information Density

Linear's issue list is the product's spine. Rows are compact — roughly 32–36px — yet every status indicator, priority flag, assignee avatar, and label fits without crowding. The typographic hierarchy is tight: issue title in medium-weight sans at ~14px, metadata in a muted monochrome at ~11px. Nothing competes.

![Changelog overview showing dense multi-column issue rows and team navigation](images/linear/04-reorder-groups.png)

![Releases view showing grouped issue rows with priority and status chips](images/linear/05-releases-a.png)

![Issue list with sub-team hierarchy and status columns visible simultaneously](images/linear/11-sub-teams.png)

![Project comments panel alongside the main list — dual-column without clutter](images/linear/12-project-comments.png)

---

## Issue Detail & Side Panel Layout

The issue detail view splits into a wide content column and a narrower metadata sidebar. The content area uses generous line-height and left-aligned text — readable prose at density. The right rail holds all structured fields (status, priority, assignee, label, cycle, estimate) as compact inline controls that expand on click rather than surfacing a modal.

![Issue detail with agent panel — right sidebar metadata at a glance](images/linear/15-agent-a.png)

![Split view: issue content left, structured metadata right, no wasted margin](images/linear/16-agent-b.png)

![Broader agent interface showing full-width document mode with rail collapsed](images/linear/17-agent-c.png)

![Detail with AI annotations inline — shows how Linear adds info layers without layout shifts](images/linear/18-agent-d.png)

---

## Sidebar Information Architecture

The left sidebar is Linear's most quietly brilliant achievement. Navigation is three levels deep — workspace → team → view — but it never feels deep. Active state is a subtle background tint, not a heavy accent. Icon-only collapse mode works because the icons are precise enough to stand alone. The 2026 design refresh reduced icon count and size, removing colored team backgrounds in favor of a neutral, text-first hierarchy.

![Sidebar before/after comparison — icon reduction and warmer neutral palette](images/linear/23-sidebar-compare.png)

![Tab bar comparison showing navigation refinement across redesign iterations](images/linear/24-tabbar-compare.png)

![Mobile sidebar — same hierarchy, adapted for narrower viewport without information loss](images/linear/28-design-sidebar-mobile.png)

![Desktop header with full-bleed layout — sidebar and topbar blend into one surface](images/linear/22-design-header.png)

---

## Dark Mode Palette & Typography System

Linear's dark mode is not a simple color inversion. It uses near-black backgrounds (~#14141A range), cool-neutral mid-tones for surfaces and borders, and a restrained accent system where violet/indigo hues signal interactivity. The 2026 refresh moved toward warmer grays that feel less "startup dark mode" and more editorial. Typography throughout is Inter at tight tracking — monospace only for identifiers (issue IDs, commit hashes).

![Full-bleed dark UI header — shows the warm-near-black base tone and type scale](images/linear/19-ui-refresh-a.png)

![Refined dark mode with reduced border contrast and calmer neutral grays](images/linear/20-ui-refresh-b.png)

![Changelog card layout — typography hierarchy from H3 to caption in one dark surface](images/linear/07-releases-c.png)

![AI coding deeplink screen — monospace accent against dark base, clear visual rhythm](images/linear/21-ai-coding.png)

---

## Release & Roadmap Views

The Releases view is a masterclass in timeline density — columns for status, grouped rows by initiative, no whitespace padding for its own sake. Every cell earns its space. Color-coded status chips (not full-row tints) keep the grid scannable without becoming a traffic light.

![Releases board — grouped rows, status chips, and cycle columns at a glance](images/linear/06-releases-b.png)

![Release detail showing metadata-rich rows and initiative grouping](images/linear/07-releases-c.png)

---

## Theme System & Customization

Linear ships a full theme editor that exposes semantic color tokens — background, surface, border, accent, destructive — rather than raw hex values. This means custom themes stay internally consistent. The editor UI itself is a side panel with live preview, demonstrating that customization surfaces can be as polished as the product proper.

![Theme editor side panel — semantic token system with live preview](images/linear/26-theme-editor.png)

![Border/separator density comparison — shows how contrast tuning affects perceived depth](images/linear/25-borders-compare.png)

---

## Integrations & Notification Surface

Even secondary surfaces — Slack channels for projects, Microsoft Teams notifications, MCP tool panels — maintain the same density and typographic discipline as core views. Linear does not have a "settings look" that diverges from the product look. Every surface is the product.

![Project Slack channel panel integrated natively into Linear's sidebar](images/linear/01-slack-channels.png)

![Microsoft Teams notification card — same typography and status chip system](images/linear/10-ms-teams.png)

![MCP support panel — developer tooling rendered with same visual language as issues](images/linear/08-mcp-support-a.png)

![Asks agent web form — public-facing form inherits Linear's design system](images/linear/14-web-forms-b.png)

---

## Design Language & Takeaways for Tend

- **Density is a design choice, not a failure mode.** Linear fits more information per row than almost any competitor by treating padding as intentional, not generous — Tend should establish a tight row height (~36–40px) for its daily offering list and hold it across all views.

- **Dark mode requires its own palette logic, not inversion.** Linear's near-black is warm, not cool-gray-on-black; for Tend's occult aesthetic, a deep ink tone (e.g. #0E0C14 — midnight violet-black) used as the base will read as intentional atmosphere rather than generic dark mode.

- **Status indicators should carry meaning, not decoration.** Linear's priority and status chips are 5–6 semantic values rendered as compact colored dots or short labels — Tend's "offering status" (pending / made / received / lapsed) should follow this model: one color per state, no gradients, consistent across all surfaces.

- **Sidebar hierarchy earns trust through restraint.** Linear's navigation works because active states are soft, not loud — Tend's deity and ritual navigation should use a single left-border accent line or subtle background, never a glowing slab or full-color selection.

- **Typography should be a system, not a choice per screen.** Linear uses one typeface at three weights and four sizes everywhere — for Tend, pick one serif or humanist sans for body and one display face for deity names/headings; never deviate per section.

- **Transitions signal speed, not decoration.** Linear's UI feels instant because micro-transitions (150ms ease-out) confirm state changes without delaying them — Tend's "offering made" confirmation should feel like flipping a switch, not watching a ritual animation.
