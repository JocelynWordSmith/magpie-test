# Streaks — Visual UX Research

Streaks (by Australian indie studio **Crunchy Bagel**) is the canonical Apple-platform habit tracker and a former **Apple Design Award** winner (2016). The app is famous for an opinionated constraint: a hard cap on the number of habits per page (originally 6, later expanded with a second/third page so you can track up to a few dozen tasks across 4 pages — but the front page is always 6, presented as 2x3 rings). Streaks pairs that minimalism with deep iOS integration: HealthKit, Siri Shortcuts, Focus Filters, Live Activities, Dynamic Island, watchOS complications, Lock Screen widgets, StandBy, Mac Catalyst and visionOS. The visual language is dead simple — a saturated gradient background, white pictographic icons, and a single rotating fill ring per habit — but it's executed with such polish that it has set the bar for "Apple-native" habit UX since 2015.

---

## Home / habit grid

Streaks' signature view: six round habit "rings" laid out 2x3 over a full-bleed gradient. Each ring has a glyph in the centre, the streak count, and a fill arc showing progress for the day. Tapping a ring fills it with a satisfying animation. There is no list view — every habit is one of these tiles.

![Streaks home grid on iPhone — six habit rings over a violet-to-pink gradient, with "Don't Smoke" (negative), "Run 2.3 km", "Eat a Healthy Meal", "Brush Your Teeth" (timed), "Walk the Dog", and an "Add Task" placeholder](images/streaks/appstore-iPhone_16_Pro_Max-05-tasks.png)

![Same six-ring layout on iPad — the grid keeps its 2x3 form rather than expanding to a denser layout, preserving the design's minimal feel on a larger canvas](images/streaks/appstore-iPad_Pro_13-inch__U0028M4_U0029-05-tasks.png)

![Mid-state on a partially full second page — bigger streak numbers, the in-line star "best streak" indicator, and the bottom toolbar (settings · page dots · stats)](images/streaks/sweetsetup-habits-6.png)

![Original orange-theme home grid from the App Store marketing — Walk, Stand, Read, Write, Add a Task. The "Add a Task" tile is itself a ring, reinforcing that the grid is the only navigation primitive](images/streaks/macstories-old-iconsuggest.png)

## Habit completion & ring-fill metaphor

Every habit is a circle. Marking complete fills the ring; partial completions (e.g. 3 of 8 cups of water) show a proportional arc. Timed tasks display a play button overlay; negative tasks invert (you "complete" by NOT doing the thing).

![Close-up of a Health-linked walking task at 2,271 / 7,729 steps — the ring fills automatically as HealthKit records steps, no user tap required](images/streaks/cb-streaks10-image.png)

![Marketing comparison of completed vs. empty rings across multiple themes — note how the ring stroke alone communicates state](images/streaks/marketing-iphone-task.png)

![Apple Watch home grid — same six-ring 2x3 layout scaled to the watch, with tap-to-complete and a small badge showing remaining count](images/streaks/appstore-Apple-Watch-01.png)

## Habit creation flow — task type picker

New tasks are filtered through a 5-icon top bar: regular task (check), Health task (heart), Eat task (utensils), Timed task (clock), and Negative task (no-symbol). The pattern is unusual — task *type* is chosen first, before name, which constrains the rest of the flow.

![Add Task entry screen — task-type filter chips at top, "Create your own" text input, then a list of preset templates (Eat a Healthy Meal, Do Your Homework, Walk the Dog, …)](images/streaks/sweetsetup-habits-1.png)

![Add Task — Health task variant. Each preset declares which HealthKit metric it reads (Walk or Run, Stand Minutes, Cycle, Swim, Mindful Minutes, Climb Flights, Activity Rings, Stand Hours)](images/streaks/appstore-iPhone_16_Pro_Max-20-add-health.png)

![Add Task — Eat task variant. Includes nuanced presets like "Energy Deficit", "Decrease Sugar Intake", "Decrease Caffeine Intake" — the calorie/diet equivalents of negative habits](images/streaks/sweetsetup-health.jpg)

## Icon picker

After naming a task, Streaks shows a vast SF-Symbol-style icon library (the app advertises 600+). The picker also accepts emoji input and can rotate/flip them to multiply the available choices.

![Icon picker grid — categorised SF-Symbol-style monochrome glyphs over the active theme colour. The search field accepts emoji, which then appear as selectable circles](images/streaks/sweetsetup-habits-2.png)

![Emoji icon search ("🎉👀💏🎊") — entered emojis become first-class icon options, with the confirm screen showing the result inside a ring](images/streaks/cb-streaks10-image-7.png)

![Auto-suggested icon: typing "10 Push Ups" causes Streaks to propose a push-up glyph automatically — a small delight that removes a friction step](images/streaks/macstories-old-iconsuggest.png)

## Confirm Task screen — schedule, goal, days

The final step pulls together title, goal (5,000 steps; 8 cups; 5:00 minutes), task days, notifications, and Health linkage in a single scrollable panel.

![Confirm Task for "Walk 5,000 Steps" — Day-Long Task toggle, Goal, Task Days, Save Task CTA. Note the Health badge ("This task uses data from the Health app") and the tinted theme that follows the task's colour](images/streaks/appstore-iPhone_16_Pro_Max-25-steps.png)

![Confirm Task for "Drink 8 Cups of Water" with `8 times/day` increment stepper — a quantified non-Health task](images/streaks/sweetsetup-water.jpg)

![Confirm Task for "Mindful Minutes" — timed Health task with a 5:00 goal pre-populated](images/streaks/sweetsetup-habits-4.png)

## Task scheduling — days of week / month

Schedules are surprisingly flexible: any combination of weekdays, days-of-month, an "X-day rule" (e.g. complete N days per week), or "last day of month minus N" patterns for monthly habits.

![Task Days picker — Specific days of week with M-T-W-T-F-S-S toggles, a `2-Day Rule` minimum, and a "Number of days per week" slider underneath](images/streaks/cb-streaks10-image-6.png)

![Specific days of month — a 31-day grid (1st, 4th, 8th, 12th, 15th, 20th, 22nd selected) plus relative "Last Day" / "Last Day minus 1" anchors. This is the most expressive scheduler I've seen in a habit app](images/streaks/cb-streaks10-image-5.png)

## Negative habits & timed tasks

![Negative habit "Don't Smoke" on the grid — rendered with a no-symbol glyph; the streak count means "days successfully avoided"](images/streaks/appstore-iPhone_16_Pro_Max-05-tasks.png)

![Timed task "Practice Guitar" running as a Live Activity on the Lock Screen — 18:56 elapsed against the goal](images/streaks/appstore-iPhone_16_Pro_Max-45-live.png)

![Same timed task expanded full-screen in landscape — large progress ring around the glyph and a giant 6:55 countdown](images/streaks/cb-ios17-lockscreen.png)

![Timed task in the Dynamic Island — ring around the book icon, elapsed timer in the centre, pause button on the right](images/streaks/cb-ios17-dynamic-island.png)

## Stats / charts per habit

Tapping into a habit reveals an All-Time / This-Month toggle, three big numbers (Best Streak, completion %, Total Completions), and two charts: a long-range completion line and a weekday breakdown.

![Stats — pink theme. 21-day best streak, 80.1% all-time, 297 completions, a 101-day completion line chart, and weekday + hour-of-day completion bars at the bottom](images/streaks/appstore-iPhone_16_Pro_Max-10-stats.png)

![Stats compared — All Time (469 best, 87.3%, 1461 completions) vs. a single drilled-in month (189 best, 96.8%, 30 completions in July 2020). The icon "wallpaper" backdrop is a subtle recurring motif on every stats screen](images/streaks/sweetsetup-stats.jpg)

![Older Streaks stats — same template five years apart, showing how stable Crunchy Bagel keep this view](images/streaks/macstories-old-stats.png)

## Notes / journal

Each habit has a per-day notes pane reached by long-pressing the ring. The keyboard appears with a single big text field over the theme colour.

![Daily note attached to "Eat a Healthy Meal" — "Today was a great day - I met my goal!" with a pin (favourite) button top-left and the carrot icon centred at top](images/streaks/appstore-iPhone_16_Pro_Max-15-notes.png)

## Customization — themes, colours, dark mode

Streaks ships 78 colour themes plus light/dark variants. The theme tints *everything*: gradient background, ring colour, icon fill, even system controls. Most habit apps have "an accent colour"; Streaks has whole environments.

![Three theme renders of the same Bible/Pray/Stretch/Meditation/Guitar/Water grid — light cream, saturated orange, and pure-black dark mode. Notice how the icons invert (white-on-tint vs. black-on-white) to preserve contrast](images/streaks/sweetsetup-themes.jpg)

![Dark mode with blue accent — same six rings, gradients suppressed in favour of pure black for OLED](images/streaks/sweetsetup-icons.jpg)

![Stretch + Meditation + Mindful Minutes against an aged-paper light theme — Streaks' light themes have a distinct "to-do list paper" feel](images/streaks/sweetsetup-habits-6.png)

![High-saturation pink "How Do You Feel?" mood survey — slider from Pissed → Pleased, then a tag grid of emotional descriptors, an optional "Why?" tag grid, and "Add to Health". This is the *Mind* task type added in Streaks 10](images/streaks/cb-streaks10-image-2.png)

![Five-watch lineup showing the same habit theme across notifications, timer, complications, watch-face glance, and "1 remaining" reminder](images/streaks/marketing-five-watches.png)

## Notifications & reminders

Reminders auto-time themselves (Streaks learns your usage), or you can set custom times per task. Each notification carries the habit's glyph, lets you complete from the notification, and supports Time-Sensitive delivery.

![Notifications settings for "Run 5 km" — three reminder modes (No Reminders / Automatic / Custom), Time-Sensitive toggle, Sound = Islands, and a Completed-state section below](images/streaks/appstore-iPhone_16_Pro_Max-30-notifications.png)

![Custom-times reminder editor for the "Journal" task — single 9:30 PM Every Day entry with an "Add Notification" affordance](images/streaks/sweetsetup-monthly.jpg)

## Sharing tasks

Streaks supports shared habits so a partner or accountability buddy can see your progress.

![Task Shared screen — "Eat a Healthy Meal" carrot icon, an explanation, and a 5-emoji row to pick how the task owner is represented in your grid](images/streaks/appstore-iPhone_16_Pro_Max-35-sharing.png)

![Same sharing flow on iPad — full-canvas layout uses the extra space for the explanatory copy rather than denser controls](images/streaks/appstore-iPad_Pro_13-inch__U0028M4_U0029-35-sharing.png)

## Apple Watch

Streaks' watch app is one of the most-praised on the platform: it mirrors the 2x3 ring grid, supports full-screen timers, smart-stack widgets, and a library of seven first-party complication-rich watch faces.

![Apple Watch grid — same six rings as iPhone, with a settings gear in the top-right and an Ultra-style orange band](images/streaks/cb-ios17-watch.png)

![Detail view of "Write in Journal" on the Watch — single huge glyph, streak count 1, dots-menu top-left for actions, expand-arrow top-right](images/streaks/appstore-Apple-Watch-02.png)

![Smart Stack widget — the next-due habit ("Brush Your Teeth, 3:00") with a horizontal strip of remaining-habit glyphs underneath the watch face](images/streaks/appstore-Apple-Watch-03.png)

![Task-completed confirmation on the Watch — circular icon, "Task Completed" label, "Walk 5,000 Steps · 1★" status](images/streaks/appstore-Apple-Watch-04.png)

![Per-task daily note on the Watch — pin & X buttons, page-turn arrows, and a tap-to-edit text bubble. Streaks brings the iPhone note feature to the wrist faithfully](images/streaks/appstore-Apple-Watch-06.png)

![Watch Face Library inside the iPhone app — Streaks ships seven pre-built watch faces (analog with complications, Infograph, Modular, X-Large, …) that the user can one-tap install to their Watch](images/streaks/macstories-watch-faces.png)

## Widgets — iPhone Home Screen

Three widget families (App-icon-grid, Dots, Tasks) each highly customisable. Streaks won the iOS 14 widget moment by treating widgets as first-class surfaces rather than thumbnails.

![Six widgets on a single Home Screen page: 2x2 app-icon grid, single big ring (small), completion line graph, weekday bars, giant streak number "3", and a 30-day dot-matrix calendar — each sized differently](images/streaks/appstore-iPhone_16_Pro_Max-41-widgets.png)

![Same six widgets in iOS 18's "Clear Glass" Liquid Glass aesthetic — Streaks already supports the translucent vibrancy treatment](images/streaks/appstore-iPhone_16_Pro_Max-40-widgets-clear.png)

![The full widget gallery rendered as marketing — large "S" ring + stats card up top, 2x icon-grid in the middle, a line chart + bar chart pair at the bottom. Notice the widgets don't just track one habit — they aggregate multiple](images/streaks/sweetsetup-widgets.jpg)

![Widget configuration panel — every variable exposed: Page Number, Theme, Streak Numbers, Background (gradient/flat), per-slot task assignment. Power users can tune each tile individually](images/streaks/macstories-widget-customization.png)

![Two widget variants side-by-side — a single solid icon-grid widget vs. a multi-stat widget (Streak 3, Best 3, Last 7 Days 100%, Last 30 Days 100%)](images/streaks/cb-streaks10-image-3.png)

## Lock Screen, StandBy, Dynamic Island, Live Activities

Streaks 8 + 10 leaned heavily into iOS 16/17 surfaces: tiny circular Lock Screen complications, Live Activity timers, and StandBy charts.

![Lock Screen with a Streaks Live Activity at the bottom — book icon ring, "Read a Book 10:00" label, 7:20 elapsed, pause button. The Live Activity follows you out to Dynamic Island automatically](images/streaks/cb-ios17-lockscreen.png)

![Lock Screen widget showcase — Streaks 8 promotional image showing next due task + overall progress + per-task stats all docked under the clock](images/streaks/cb-streaks8-lockwidgets.png)

![StandBy mode — landscape Live Activity for a timed reading task fills the full nightstand display with the ring on the left and a giant 6:55 countdown beside it](images/streaks/cb-ios17-standby.png)

![Dynamic Island close-up — ring fills the leading area, time/timer in the centre, pause button trailing. Streaks uses the compact, expanded, and minimal Island states](images/streaks/cb-ios17-dynamic-island.png)

## Shortcuts & automation

Streaks ships eight Shortcut actions: Complete Task, Start/Stop Timer, Task Status, Task List, Miss Task, Export Data, Send Task Reminder.

![Shortcuts library for Streaks — 2x4 grid of action tiles (Complete Task, Start Timer, Task Status, Stop Timer / Task List, Miss Task, Export Data, Send Task Reminder)](images/streaks/cb-ios17-shortcuts.png)

![Old Siri Shortcuts entry from Streaks 4 — voice phrases per task ("I worked out", "I did 10 push ups") attached to specific completions](images/streaks/macstories-s4-siri.png)

![Control Center & Action Button integration — Streaks Controls (Complete Task, Start Timer) accessible from the iOS 18 Control panel, and an "interactive widget" preview of completing "Be Happy" from the home screen](images/streaks/cb-streaks10-image-4.png)

## Focus Filters & Up Next

Streaks 8 added Focus Filter integration: link a Focus mode to a task category and only those habits show up while the Focus is active.

![Focus Filter setup — "Streaks · Choose which category of tasks to display." with category list (Relax, Working, Health Tasks, Eat Tasks, Timed Tasks, Negative Tasks, Shared With Me, Shared By Me)](images/streaks/cb-streaks8-focus.png)

![Up Next menu — popover from the home grid showing the same category list as a filter, so a single tap narrows the visible habits to what's relevant right now](images/streaks/cb-streaks8-upnext.png)

## iPad & Mac

Streaks is the same app on every Apple platform — it just gains breathing room.

![iPad split view — Streaks running as a side panel beside the Books app. The grid maintains its 2x3 rhythm and gradient even at a fraction of full width](images/streaks/macstories-ipad-splitview.png)

![Mac Catalyst — Streaks as a window over a macOS desktop wallpaper. The window itself stays narrow, like a permanent companion sidebar](images/streaks/appstore-desktop_1.png)

![macOS Notifications settings — identical layout to iOS but in a Mac window chrome](images/streaks/appstore-desktop_3.png)

## visionOS

![Vision Pro spatial computing — Streaks tiles floating in the user's kitchen as spatial widgets, each habit its own anchor point](images/streaks/appstore-vision-pro-01.png)

## Devices ecosystem shot

![Crunchy Bagel's hero — iPhone (grid), iPad (stats), MacBook (window), and Apple Watch all displaying the same data via iCloud sync](images/streaks/marketing-devices.png)

---

## Design language & takeaways

- **Constraint as a feature.** Streaks famously enforces a small per-page habit cap (6 visible at a time, max ~24 across pages). This is the central design bet: the limit forces users to *choose* the habits that matter. The 2x3 grid is therefore not a list-with-a-cap but a deliberately fixed canvas. Competitors who let users add unlimited habits compete on a different axis — Streaks competes on focus.
- **One primitive, repeated.** Every habit, every "add" slot, every widget tile, every Apple Watch complication is the same ring-around-a-glyph shape. There is no list view, no card view, no detail header — just rings. This radical commitment to one component makes the whole product feel inevitable.
- **Type-first task creation.** Most habit apps let you name a habit and then add details. Streaks makes you pick a *type* (Check / Health / Eat / Timed / Negative / Mind) first, because each type unlocks different scheduling, Health linkage, and goal semantics. The user is steered into a coherent schema rather than left to mis-model their habit.
- **Theme as environment, not accent.** A theme in Streaks tints the entire app — gradient background, ring stroke, glyph fill, sheet chrome, even the keyboard accent. Switching themes feels like changing apps. This makes the app feel ownable in a way that an accent-colour swatch never does.
- **Negative habits are first-class.** The "no-symbol" type is one of the five top-level filters, equal weight to "complete this thing today." Most competitors treat avoiding-a-thing as an afterthought; Streaks treats it as a core verb.
- **Native depth over feature breadth.** Streaks doesn't have social feeds, leaderboards, AI coaches, or gamified XP. What it does have is HealthKit two-way sync, Siri Shortcuts (8 actions), Focus Filters, Live Activities, Dynamic Island, StandBy, 7 watch faces, 8 widget families, Control Center controls, Action Button, App Intents, and visionOS. The competitive moat is "we built every iOS surface natively, by ourselves."
- **Automation as completion.** A Streaks habit can complete itself via HealthKit (steps, mindful minutes, stand hours, calorie burn, etc.). The ring fills passively. This dissolves the "did I remember to mark it?" friction that kills most habit-tracking — the system marks it for you.
- **Stable visual identity across a decade.** Side-by-side, a 2016 Streaks screenshot and a 2025 Streaks screenshot share the exact same ring grid and stats layout. The team adds platform integrations every year (widgets, Live Activities, Vision Pro) but never redesigns the core. For a competitor, this is a lesson: pick a visual primitive you can keep forever.
