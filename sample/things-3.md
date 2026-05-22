# Things 3 — Visual Design Research

## Overview

Things 3 is a task manager for iPhone, iPad, Mac, and Apple Watch made by Cultured Code, a two-person indie studio in Stuttgart. It has won multiple Apple Design Awards and is widely cited as the gold standard for refined, opinionated iOS app design — achieving near-zero visual noise while handling complex GTD-style information architecture. For Tend, Things 3 is the most relevant reference not for its feature set but for the discipline behind every spacing decision, typographic choice, and interaction detail. Its restraint is the lesson.

---

## Today View

The Today view is the emotional center of Things 3 — a daily digest that separates "this evening" from the rest of the day, uses generous whitespace to make even a long task list feel calm, and anchors the current date with light-weight typography that never fights for attention.

![Things 3 Today view on iPhone 14 Pro Max from App Store](images/things-3/appstore-iphone14-1.jpg)
![Things 3 Today view on Mac — sidebar, task list, and date header](images/things-3/today-mac.png)
![Things 3 Today view on iPhone — evening section separator visible](images/things-3/today-iphone.png)
![Things 3 Today and task list from 9to5Mac review](images/things-3/9to5mac-things3-1.jpg)

---

## Project List & Areas

Areas (life domains like "Work" or "Home") act as non-clickable grouping headers — pure information architecture with no chrome. Projects sit beneath them as navigable items. The visual weight difference between area headers and project rows is achieved entirely through typography and color, with no lines or boxes.

![Things 3 project and area list on iPhone — minimal sidebar hierarchy](images/things-3/appstore-iphone14-2.jpg)
![Things 3 logbook and completed items view on iPhone](images/things-3/appstore-iphone14-6.jpg)
![Things 3 remastered hero showing project list layout](images/things-3/meet-things-remastered-poster.jpg)

---

## Task Detail & Editing

The task detail screen is a masterclass in progressive disclosure: title up top in large type, then notes in a slightly smaller weight, then checklist items, then metadata (tags, deadline, reminder) at the bottom — each layer accessible without modals or tabs.

![Things 3 task detail screen on iPhone — title, notes, checklist structure](images/things-3/appstore-iphone14-3.jpg)
![Things 3 task with checklist sub-items on Mac](images/things-3/checklists-mac.png)
![Things 3 task with section headings inside a project on Mac](images/things-3/headings-mac.png)
![Things 3 reminder and deadline metadata on iPhone](images/things-3/reminders-iphone.png)

---

## Quick Entry & Capture

The Magic Plus button sits in the lower right, always visible. Tapping it drops in a new task with a single animated motion — no sheet, no modal, just an inline row that accepts typing immediately. The Mac Quick Entry panel is a floating HUD, summoned with a keyboard shortcut.

![Things 3 Quick Find search on Mac — full-screen overlay with keyboard focus](images/things-3/quickfind-mac.png)
![Things 3 Quick Entry / add task on iPhone](images/things-3/appstore-iphone14-7.jpg)
![Things 3 Jumpstart empty-state prompt on Mac](images/things-3/jumpstart-mac.png)

---

## Upcoming & Scheduling

Upcoming presents a scrolling calendar-grouped list — not a grid calendar, not a timeline. Dates with no tasks are omitted entirely. The "When" system lets users assign a date or just "Someday" with no friction; a disclosure arrow reveals a date picker only when needed.

![Things 3 Upcoming view on iPhone — date-grouped task list](images/things-3/appstore-iphone14-4.jpg)
![Things 3 Anytime view — tasks without a deadline](images/things-3/appstore-iphone14-5.jpg)
![Things 3 reminders and scheduling metadata on Mac](images/things-3/reminders-mac.png)

---

## Logbook & Empty States

The Logbook is a read-only archive of completed tasks, styled identically to the active list but with a subtle strikethrough and dimmed color — completion is celebrated softly, not with confetti. Empty states use the Jumpstart system: friendly illustrated prompts, not blank screens.

![Things 3 completed tasks in Logbook on iPhone](images/things-3/appstore-iphone14-8.jpg)
![Things 3 iPhone hero shot — clean light-mode list](images/things-3/things3-iphone-shot.jpg)
![Things 3 watch face 6 — minimal glanceable complication](images/things-3/appstore-watch-6.jpg)

---

## iPad & Multi-Window Layout

On iPad, Things 3 adds a persistent sidebar that mirrors iPhone's navigation — the same information architecture, just always visible. Two-column and three-column Split View work because the layout is column-native, never a stretched phone UI.

![Things 3 multi-window and sidebar on Mac — three-column layout](images/things-3/multiwindows-mac.png)

---

## watchOS

The Apple Watch companion is radically simplified: one-tap completion, a next-task view, and a complication. Typography is pushed to maximum legibility — San Francisco Display at large sizes, no decorative elements.

![Things 3 watchOS complication and task view — Watch Series 8](images/things-3/appstore-watch-1.jpg)
![Things 3 watchOS task list with completion circles](images/things-3/appstore-watch-2.jpg)
![Things 3 watchOS next task and quick-add screen](images/things-3/appstore-watch-3.jpg)

---

## Design Language & Takeaways for Tend

- **Typography does all the hierarchy work** — Things 3 never uses lines, dividers, or background fills to separate sections; size, weight, and color alone carry the load. Tend should establish a strict type scale (e.g., offering title / deity name / streak count) and rely on it rather than reaching for decorative separators.

- **Whitespace is not empty space — it is pacing** — The generous padding around each task row makes a 20-item list feel manageable. Tend's "offerings" list will feel ritualistic rather than overwhelming only if each item has room to breathe; cramming reduces reverence.

- **Progressive disclosure prevents metadata overwhelm** — Things 3 shows only title and checkmark in the list; notes, tags, and scheduling appear only when you open a task. Tend should hide streak history, deity metadata, and offering details behind a tap — the list view should show only the offering name and status.

- **Completion is quiet, not loud** — The strikethrough + dim treatment in Things 3 marks done tasks without interrupting focus. Tend's "offering accepted" state should be similarly understated in the list — reserve any animation or flourish for the moment of marking complete, not the persistent completed state.

- **Navigation is information architecture made visible** — The area → project → task hierarchy in Things 3 maps cleanly to how people think. Tend's deity → domain → offering hierarchy needs the same clarity: one level per screen, no hybrid views that mix levels.

- **Empty states are onboarding, not absence** — The Jumpstart screens in Things 3 treat an empty list as an invitation, not a failure state. Tend should design "no offerings yet" screens with the same care — they are the first impression for new practitioners.
