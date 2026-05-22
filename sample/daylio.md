# Daylio — Visual UX Research

Daylio (by Habitics / Relaxio) is the category-defining "micro-diary" mood tracker — Apple App of the Day, Google Editors' Choice, 21M+ users, ~4.8 stars on both stores. Its core proposition is that you can keep a complete daily journal **without typing a single word**: log a 5-point mood face, tap a few activity icons, done in 5 seconds. Everything else — calendar heatmaps, line/bar/donut charts, "Year in Pixels," activity-vs-mood correlations, goals, achievements, streaks, gentle paywall nudges — is built on top of that one quick-entry primitive. This report captures Daylio's UI across onboarding, capture, retrospective views, statistics, customization, and monetization. Screenshots are sourced from the iOS App Store, Google Play, Adapty's paywall library, App Fuel's onboarding catalog, Templateshake's screenshot archive, moodtrackers.org and androidpolice.com reviews, and a long-time-user blog post.

---

## App Store hero shots (iOS, December 2025)

The current iOS App Store listing leads with award badges and a sample calendar grid in their signature green palette, then walks through capture → activities → entries → calendar → mood chart → year-in-pixels → PIN lock → writing prompts → advanced stats → goals.

![App Store screenshot 1 — green hero with "App of the Day Apple" laurel, press logos (Forbes, Guardian, Mashable, Lifehacker), and a February calendar of color-coded square mood emojis with the laughing-yellow and heart-eyes-pink faces called out](images/daylio/ios_01_promo.jpg)
*ios_01 — "App of the Day" hero. Note the rounded-square mood emojis (the calendar "tile" treatment) as opposed to the round emojis used inside the entry flow.*

![App Store screenshot 2 — "Select Mood" blue gradient with the 5-face circular mood scale (rad/good/meh/bad/awful) under "How are you?" and a date pill](images/daylio/ios_02_promo.jpg)
*ios_02 — The famous 5-face circular mood picker. Mood names are lowercased. A small calendar pill lets you backdate before committing.*

![App Store screenshot 3 — "Select Activities" coral background showing categorized icon grid: Sleep (good/medium/bad/sleep early), Social (family/friends/date/party), Hobbies (tv/reading/gaming/sport/relax), Food. Selected items are filled green circles, unselected are outlined](images/daylio/ios_03_promo.jpg)
*ios_03 — Activity selection grid. Categories collapse/expand with +/chevron. Selected = filled green pill; unselected = outlined gray. Each category has its own `+` to add a custom activity.*

![App Store screenshot 4 — "Keep Track of Your Life" green hero with the Entries feed: TODAY MAR 24 good 8:45 AM with activity chips and a free-text note "Morning run. Feeling good and full of energy", YESTERDAY 23 MAR rad 6:07 PM with a photo strip (dog, person with dog, cocktail), and a meh entry from 1:20 PM](images/daylio/ios_04_promo.jpg)
*ios_04 — The Entries feed, Daylio's home view. Each entry: round mood emoji + mood name in matching color + timestamp + activity chips + optional note + optional photo strip. Note free-mixing of native emoji and Daylio's vector icons in the prose.*

![App Store screenshot 5 — "Explore Charts" green hero. Top card: Mood Chart line chart for March with colored mood-emoji axis labels (rad/good/meh/bad/awful) and a "friends" filter pill. Bottom card: Mood Count donut with center number "30" and small bubble counts on each mood face (3/7/4/2/4)](images/daylio/ios_05_promo.jpg)
*ios_05 — Stats home. Two-chart scrollable surface. Y-axis uses the actual mood emoji icons, not numbers — preserving the "no-numbers" feel even in analytics.*

![App Store screenshot 6 — "Year in Pixels" orange hero. A 12-column × 31-row grid where each cell is a color-coded dot for that day's average mood. Months J-D across top, days 1-31 down the left, monthly mood-score totals (71/73/69/80/72) at the bottom](images/daylio/ios_06_promo.jpg)
*ios_06 — Year in Pixels. Daylio's signature retrospective view: an entire year rendered as a mood mosaic. Empty days are missing dots. Bottom row shows per-month mood "score" sums.*

![App Store screenshot 7 — "Locked & Private" slate hero. PIN entry pad with phone-style 0-9 numeric keypad, "ENTER PIN" prompt and four circle placeholders](images/daylio/ios_07_promo.jpg)
*ios_07 — PIN lock screen. Daylio leans into privacy as a feature, advertised on-marquee. (Premium also offers biometric on Android.)*

![App Store screenshot 8 — "Discover Formatting and Writing Prompts" blue hero. Note editor with title "Gratitude Entry" (folded hands emoji), a numbered list (1. Amazing friends, 2. My dog, 3. Lovely weather), and a "Templates" / keyboard / Aa-style formatting bar above the iOS keyboard](images/daylio/ios_08_promo.jpg)
*ios_08 — Newer journaling layer on top of the icon entry: structured templates (Gratitude, To-Do List, Morning Reflection, Night Brain Dump, Worries, etc.), rich text formatting, and a chevron-up emoji-prompt strip.*

![App Store screenshot 9 — "Advanced Stats" coral hero. "friends" activity pinned at top with Relative/Month/Year/All Time tabs. Frequency bar histogram for March (11 occurrences vs 9 in Feb, +22% trend). Below: "Influence on Mood" comparing 4.3 with friends vs 2.9 without, +34% delta, and previous-day/same-day/next-day spillover deltas (+9% / +37% / +7%)](images/daylio/ios_09_promo.jpg)
*ios_09 — The killer premium feature: activity-vs-mood causal lookup with a labeled "Confidence: High" indicator and adjacent-day spillover analysis. This is the kind of insight users screenshot and post.*

![App Store screenshot 10 — "Set Your Goals" green hero. Open Challenges card (Better Sleep, Get Fit, with cartoon illustrations and goal counts). Start a New Challenge: Live Healthier, Reduce Stress, with a sticky "Create New Goal" CTA at bottom](images/daylio/ios_10_promo.jpg)
*ios_10 — Goals/Challenges are framed as pre-packaged "challenges" with friendly cartoon characters, plus a custom path. Note the consistent illustration style used across goal templates.*

---

## Onboarding

Daylio's onboarding is deliberately short (~5-7 screens) and customization-first: pick your mood emoji set, pick your color theme, pick the activities you want to track, set a reminder, then go straight into your first entry.

![Onboarding 1 — splash showing the Daylio mascot face fading in (low-opacity Continue button), background hints at illustration of a person on a couch reading](images/daylio/ob_01.png)
*ob_01 — First-launch splash. Daylio uses a single mascot face (the calm, slightly-smiling neutral) as its brand identity.*

![Onboarding 2 — "Keep a Diary" with full-color illustration of a woman reading on a couch, body copy "Keep a personal diary, without writing down a single word!", green Continue button](images/daylio/ob_02.png)
*ob_02 — First substantive screen. Note the explicit "without writing down a single word" pitch — the entire product positioning in one sentence.*

![Onboarding 3 — purple "Customize Your Moods" with an oversized yellow smiley + male character illustration, an Emojis row showing the 5-emoji default set, a Colors row showing palette swatches (red-blue-orange / orange-green-purple-blue-pink / purple-pink-yellow-pink). Purple ▶ next button](images/daylio/ob_05.png)
*ob_03 — Mood + theme customization happens BEFORE any entry. Hyper-customization is the first interaction.*

![Onboarding 4 — "Help Us Improve Daylio" with multi-person illustration. Toggleable checkboxes for "Send crash reports" and "Provide anonymized app usage". Disagree / Agree buttons](images/daylio/ob_03.png)
*ob_04 — Privacy/telemetry consent gets its own screen with copy "We treasure your privacy, and only you can access your data."*

![Onboarding 5 — pink "Pick Things You Want to Track" with seated yoga illustration. Checkbox cards for Social (family/friends/date/party), Hobbies (movies & tv/reading/gaming…), Sleep (good sleep/medium sleep/bad…), Food (eat healthy/fast food/homem…)](images/daylio/ob_06.png)
*ob_05 — Activity bundle picker. Pre-grouped into categories, each with a chip-style category description showing examples. The "lots of small choices" approach.*

![Onboarding 6 — "Set Up Reminders" with illustration of a person holding a clock, single reminder time card showing "20:00" with bell icon, hint "You can add more reminders later in the app"](images/daylio/ob_07.png)
*ob_06 — Single-reminder setup screen. Defaults to 8pm. Reminders are treated as essential, not opt-in.*

![Onboarding 7 — system iOS notification permission prompt overlaid on the reminder screen: "Daylio Would Like to Send You Notifications"](images/daylio/ob_08.png)
*ob_07 — System notification prompt is shown AFTER context. Daylio earns the permission first by showing how reminders will be used.*

![Onboarding 8 — first "How are you?" screen but in outlined/unselected state with red/orange theme accent applied: 5 outlined emoji rings labeled rad/good/meh/bad/awful, "Edit Moods" affordance in the corner](images/daylio/ob_11.png)
*ob_08 — Immediately after onboarding the user lands on their first capture, themed in their chosen palette. The unselected state is outlined, the selected state fills with mood color.*

![Onboarding 9 — red "Create a Goal" with archer illustration, suggestion list with arrow/dumbbell/bed/water/heart/meditation/book icons (skip goal / exercise / sleep early / drink water / eat healthy / meditation / reading). SKIP top-left, ▶ bottom-right](images/daylio/ob_09.png)
*ob_09 — Goal setup is offered with a curated suggestion list AND a "skip goal" option as the first row — friction-minimal.*

![Onboarding 10 — first activity-selection screen in red theme: SOCIAL (family selected), HOBBIES (movies&tv selected), SLEEP (good sleep selected), FOOD; sticky red "Note, Photo & Save" bar at the bottom](images/daylio/ob_12.png)
*ob_10 — First entry's activity grid pre-organized with collapsible category headers (▲ chevrons). A persistent "Note, Photo & Save" action bar at the bottom drops anchor on the primary action.*

![Onboarding 11 — Apprentice achievement modal: "Daylio Apprentice" mortarboard-cap badge with copy "Welcome! The prophecy talked about you." and an OK button, with grayed-out achievement grid behind](images/daylio/ob_13.png)
*ob_11 — First-entry payoff: an instant "Daylio Apprentice" achievement modal celebrates the user. Hook completed inside the first 60 seconds.*

![Onboarding 12 — Achievements grid in red theme: Daylio Apprentice unlocked (red ring), 14 other badges locked in gray (Going Strong, Going for Ages, Mighty Streak, Mega Streak, What a Year, Busy Bee, Complex Person, Dedicated, Colorful Life, Hat-trick, Good Group, Playing Safe, Our Hero)](images/daylio/ob_14.png)
*ob_12 — The locked-badges grid that's visible immediately after the first entry. Strong "collect them all" gamification with explicit star levels (1-3 stars per badge).*

![Onboarding 13 — pink Premium paywall: "Start Free Trial — You are getting these awesome Premium Features" with checkmark list (Unlimited Moods, 2000+ Icons, Infinite Reminders, Automatic Backups), an illustration of a celebrating woman with confetti, "GET 4 MONTHS FOR FREE" ribbon, Annual €23.99 (€1.99/mo, was €2.99) selected, Monthly €2.99, "Start Free Trial — Try 7 days, then €23.99 per year", SKIP link](images/daylio/ob_10.png)
*ob_13 — Paywall surfaced very early in the funnel (after first entry / first achievement). Annual is anchored as default with crossed-out monthly equivalence; monthly looks deliberately unappealing.*

![Onboarding 14 — alternate "Customize Your Moods" lighter variant of the theme picker (same screen layout, slightly different copy)](images/daylio/ob_04.png)
*ob_14 — Alternate state of the mood/colors picker showing the color carousel mid-swipe (orange-green-purple-blue-pink swatch row).*

---

## Quick mood entry & activity selection

The two-tap entry loop is Daylio's signature flow. Five emojis on screen 1, an activity grid on screen 2, optional note/photo, save.

![Light-mode mood picker: white background, 5 outlined circular mood emojis with green/lime/blue/orange/red theme colors and "How are you?" prompt, date pill](images/daylio/mt_14_createmood2.png)
*Light-mode mood picker (outlined, theme-colored).*

![Dark-mode mood picker showing the same 5-face row in neon-pink/orange/yellow theme on a pure-black background](images/daylio/ts_content.png)
*Dark-mode mood picker with a neon pink/yellow/orange/red theme — same layout, themed colors. Daylio supports themes as a first-class concept (not just dark mode).*

![Activity selection in light Ukrainian-locale theme: Соціальні (family/friends/date/party), Хобі (movies/reading/games/sport/relax + "Дев"), Сон (good sleep/medium/bad/early) — same categorized grid as English](images/daylio/mt_15_createmood3.png)
*Activity grid in Ukrainian locale. Each category has its own collapse/expand chevron and a `+` to add a custom activity inline. Each activity is icon + lowercase label.*

![Dark-mode activity grid with pink accent: SOCIAL row with "family" selected (filled), HOBBIES with "movies & tv" selected, SLEEP with "good sleep" selected. Bottom: Note field, "Add Note..." placeholder](images/daylio/ts_content3.png)
*ts_content3 — Selected-state visual: in dark/themed mode the selected activity fills with the theme color while unselected stays outlined. The category dot indicator (small pink dot next to "SOCIAL") signals that an activity was selected in that group.*

![Bright dark-themed activity grid — full activity set visible: Social, Hobbies (movies/reading/gaming/sport/relax), Sleep (good/medium/bad/sleep early). Add Note... field. No selected items yet](images/daylio/ts_content2.png)
*Unselected/empty state of the same activity grid — useful for seeing the visual baseline.*

![Center-stage screenshot from a long-time user's blog: side-by-side of the "How are you?" purple mood picker (with custom "Anxious"/"Lazy"/"ねむい"/"Surprised" emojis added by the user) and a packed activity grid with Social (family/friends/work/memorable pictures/love life), CHORES (cooking/cleaning/laundry/organize/iron/clean ref/package), and more](images/daylio/blog_moodactivities.jpg)
*blog_moodactivities — Real long-term user customization: extra mood emojis (Anxious/Lazy/ねむい/Surprised) added beyond the default five, and the activity grid stretched to ~25+ items across many custom categories including "Chores" with iron, package, clean-ref. Demonstrates the deep extensibility.*

![Pink-theme entry on first-ever entry (Templateshake demo): "TODAY 16 JAN — good 18:03 — family • movies & tv • good sleep", a thumbs-up illustration and reassuring message "This has been your first entry. Now let's make some history!"](images/daylio/ts_content4.png)
*ts_content4 — Empty-state-after-first-entry copywriting: warm congratulatory message rather than an empty feed.*

---

## Entries feed (the home view)

![Light entries feed in green theme (Ukrainian locale): green hero card with an inspirational quote "Your illness is not your identity. Your chemistry is not your character.", then a stack of cards — TODAY 27 APR good 11:56 with гри/релакс chips, YESTERDAY 26 APR bad 20:00 with one chip, "2 Days Missing" gap indicator, then WEDNESDAY 23 APR good 07:16 (twice) with sport activity](images/daylio/mt_02_main.png)
*mt_02 — Light entries feed. Notable: (1) a rotating quote/banner pinned to the top, (2) "2 Days Missing" explicit gap label between entries — Daylio names the absence rather than hiding it, (3) multiple entries per day are stacked vertically inline with a connector dot.*

![Light entries feed (English) with photo strip: TODAY MARCH 26 good 8:45 AM with activity chips and free-text note, YESTERDAY MARCH 25 rad 6:07 PM with photo strip (dog/person+dog/cocktail) and chips friends/tv/relax/eat healthy/Luna, MONDAY MARCH 22 awful 3:40 PM with bad sleep/family/walk chips visible](images/daylio/play_landscape_05.webp)
*play_landscape_05 — English entries feed showing photo attachments inline (3-up grid). "Luna" is the user's pet, added as a custom activity. Demonstrates the "personal life database" feel.*

![Tablet view of entries feed: same December feed layout but wider, with a "Today's Goals 1/1 ✓ — Show" sticky banner up top, TODAY DECEMBER 22 good 12:10 PM, YESTERDAY DECEMBER 21 rad 7:55 AM with a 3-photo strip (concert crowd / dog / pancake stack), MONDAY DEC 20 with both bad and meh entries grouped by day with a connector line](images/daylio/play_landscape_15.webp)
*Tablet feed showing the "Today's Goals 1/1" completion banner pinned at the top of the feed, and the grouped-entries-per-day visual treatment with a vertical connector line between same-day entries.*

![Single-entry zoomed view: header "Aug 6, 2025", one card WEDNESDAY AUGUST 6 — meh 4:00 PM with activity chips family/read/scrolling phone/medium sleep, an "Add a new entry!" green sticky CTA at the bottom](images/daylio/ap_06_calendar2.jpg)
*ap_06 — Single-day drill-down from the calendar. When you tap a day on the calendar, this is where you land — a focused "day view" with explicit "Add a new entry!" CTA, supporting the multi-entries-per-day model.*

![Entries feed with an audio note: YESTERDAY AUGUST 18 good 8:12 PM with chips exercise/eat healthy/read/gaming, free-text "Felt good after a grueling upper body workout.", and a waveform audio playback bar showing 0:06 with a green play button. Below: SUNDAY AUGUST 17 meh 8:00 PM](images/daylio/ap_01_main.jpg)
*ap_01 — Voice-note attached to a mood entry. The waveform UI is fully embedded inline in the entries feed. Bottom shows an unobtrusive "Let's go Premium! Unlimited Goals" upsell strip — premium prompts ride along the bottom of the main views.*

---

## Calendar view (mood-colored)

![Light calendar (Ukrainian locale): "April 2025" header, "emoji 7×" filter pill at top, week grid Mon-Sun with each day shown as either a `+` (empty) or a colored mood emoji circle. Days 19-22 show a streak of green/turquoise (rad/good), 26-27 with red/orange (bad)](images/daylio/mt_16_calendar.png)
*mt_16 — Calendar view. Every day is either a mood-circle or a `+`. The filter pill at top lets you re-color the calendar to show ONLY a specific mood or activity — a powerful retrospective filter.*

![Light calendar in Android style: "August 2025" header, "emoji 19×" filter pill, mood-emoji grid with rad/good/meh/bad mix across early August. Today (20) shown as a `+` in a teal-outlined circle. Bottom: "Let's go Premium! Automatic Backups" strip](images/daylio/ap_05_calendar1.jpg)
*ap_05 — Same calendar in Android. Highlighting of "today" with a teal-outlined `+` makes the next action obvious. The compact mood emojis are sized so you can scan a month in one glance.*

![Dark-mode calendar with neon-pink theme: "January 2021" header, "daily moods" filter pill, day grid Mon-Sun. Almost all cells empty (just numbers) with day 16 highlighted as a hot-pink circled selection — represents a heavy-skinned calendar showing how customization changes the entire visual feel](images/daylio/ts_calendar.png)
*ts_calendar — Dark-mode pink theme calendar showing the depth of customization. Color counters at the bottom show how many days hit each mood color this month.*

---

## Statistics (charts & correlations)

Daylio's stats tab is the data-product layer. Free users get Mood Chart, Mood Count donut, Days-in-a-Row, basic Activity Count, and one premium-locked card per scroll. Premium unlocks Average Daily Mood, Mood Stability, Influence on Mood, monthly/yearly bars, and Often Together.

![Light Stats home: "Days in a Row" streak card showing Wed ✓ / Thu + / Fri + / Sat ✓ / Today ✓ with "2" in the rightmost circle, and "Longest Chain: 11" with a trophy icon. Below: Mood Chart line graph for April 19-27 with two colored series, and Achievements card starting](images/daylio/mt_03_stats1.png)
*mt_03 — Top of the Stats screen: streaks first. The "Days in a Row" row of bubbles makes today's contribution feel like part of an active sequence — gentle daily nudge.*

![Stats continued: Achievements card with 3 horizontal badges (2024 Award, Going Strong ★★★, Going for Ages locked), "10 out of 25 — Show All"; Mood Count donut with center "8" and per-mood counts (rad 1, good 5, meh 1, bad 1, awful 0); Goals card starting](images/daylio/mt_04_stats2.png)
*mt_04 — Achievements visible inline in stats (not buried in settings). Mood Count donut sized so it dominates above the fold.*

![Stats continued: Goals card with "Goals help you to create a nudge for your desired behavior change. Set up a goal now!" empty-state, Activity Count row with 6 activities and small badge counters, Average Daily Mood card locked with Premium badge](images/daylio/mt_05_stats3.png)
*mt_05 — Empty Goals state is also a hook. The Activity Count bubbles use the same icon language as the entry grid — visual continuity throughout.*

![Stats continued: Average Daily Mood premium-locked bar chart (faded gray), Mood Stability premium-locked card with "75" and waveform, "Often Together" card starting](images/daylio/mt_06_stats4.png)
*mt_06 — Premium cards are rendered as faded previews inline, not hidden — the user sees what they're missing. Each premium card has its own "Available only in Premium / Learn More" inline upsell.*

![Stats continued: Mood Stability locked card again, then "Often Together" card with a "good (5x)" pill and "You often do this: games / sport / relax" — showing which activities cluster together with the rad/good moods](images/daylio/mt_07_stats5.png)
*mt_07 — "Often Together" surfaces co-occurring activities for a selected mood. A simple but powerful insight pattern.*

![iOS Stats list 1: Mood Chart line + Mood Count donut (April), both with "Tap on the chart to see more" subtitle and a share icon in top-right. Mood Count donut has a center "30" with colored arc segments, and the 5 mood faces sit below it with badge counts](images/daylio/ios_05_promo.jpg)
*Mood Chart + Mood Count duo — Daylio's two "hello, here's your data" charts. The "Tap on the chart to see more" affordance hints at a richer drilldown.*

![Stats: line chart toggle showing March mood chart with line/bar toggle pills bottom-left (line is selected) and a "friends" activity filter pill. Line drops to red in mid-month, recovers to good](images/daylio/play_landscape_16.webp)
*play_landscape_16 — Mood Chart with the activity-filter pill, illustrating how the same chart re-renders for a single tracked activity (here: "friends" days only).*

![Advanced Stats deep-dive (premium): "friends" pinned activity, Relative/Month/Year/All Time tabs. Frequency bar histogram with green bars showing March activity, x11 March / x9 vs February / ▲2 Trend +22%. "Influence on Mood" comparison: with friends 4.3 (green good face) vs 2.9 (blue meh face) without, +34% delta highlighted. Previous Day +9% / Same Day +37% / Next Day +7%](images/daylio/ios_09_promo.jpg)
*ios_09 — The premium "Influence on Mood" panel: causal-feel comparison with confidence indicator (3-bar signal-strength icon, labeled "Confidence: High") and adjacent-day spillover. This is the chart users screenshot.*

![Yearly Stats panel: header "2025" with Back arrow, "Mood Chart" yearly line with J-D axis showing big February dip, "Monthly Activity Count" locked behind premium with faded green bars labeled 20/14/23/19/20/13/21/18/15/22/19/16, "Yearly Report 2024" card with party-hat illustration](images/daylio/mt_08_year1.png)
*mt_08 — Yearly view zooms the same Mood Chart out to 12 months. Note the per-month total under each bar in the locked Monthly Activity Count.*

![Yearly Stats cont'd: Monthly Activity Count locked, Yearly Report 2024 card (Entries 60, Activities 18, Mood 3,4, Wo...), Mood Count yearly donut locked with faded mood ring](images/daylio/mt_09_year2.png)
*mt_09 — "Yearly Report" card surfaces an annual recap (similar to Spotify Wrapped) entry point.*

![Long-term user yearly stats (blog screenshot): Mood Count donut center "704" with surrounding stats — 85 Crazy / 52 rad / 8 Excited / 394 good / 65 meh / 37 Surprised / 23 Anxious / 11 bad / 8 Tired / 6 Emotional / 12 Angry / 3 awful. Middle panel: Average Monthly Mood green bar chart Jan-Dec. Right panel: Average Daily Mood S/M/T/W/T/F/S bars + "Often Together — Surprised (37x) — love life/work/friends/phone call/cleaning…"](images/daylio/blog_yearly_stats.jpg)
*blog_yearly_stats — A power-user's 2019 stats showing 12 custom moods, by-weekday averages, and "Often Together" cross-tabulated with 9 co-occurring activities including "phone call", "cleaning", "shopping", "dieting". This is what "fully customized" Daylio looks like at the data layer.*

---

## Year in Pixels (signature retrospective)

![iOS Year in Pixels: 12-column J-D × 31-row grid of color dots. "average mood (365×)" filter pill at top. Each dot is one day, colored by mood (turquoise=rad, lime=good, blue=meh, orange=bad, red=awful). Monthly totals 71/73/69/80/72 at the bottom](images/daylio/ios_06_promo.jpg)
*ios_06 — Year in Pixels. The single most-shared Daylio chart on social media. 365 dots, no labels needed, immediately legible. Empty days = no dot.*

![Android Year in Pixels variant: same J-D × 1-31 grid but with empty 2025 prefix months showing only blue dots (mostly meh recordings during testing), a single red day on Apr 4, and several orange off-mood days](images/daylio/play_landscape_06.webp)
*play_landscape_06 — Android phone version of Year in Pixels. The dot-grid is identical across platforms (this is brand IP).*

![Yearly screen variant 1 (Premium-locked panels): "2025" header, Yearly Report 2024 card with confetti illustration, Mood Count yearly donut faded behind a Premium badge](images/daylio/mt_10_year3.png)
*mt_10 — Around Year in Pixels live other yearly retrospectives — the Yearly Report is its own annual story.*

![Yearly screen variant 2: faded/locked yearly Mood Count donut with very small mood face icons (faded), and "Often Together" locked card](images/daylio/mt_11_year4.png)
*mt_11 — More locked-yearly panels, illustrating Daylio's preview-as-paywall pattern.*

![Yearly screen variant 3 with promotion: yearly "Often Together" card faded behind premium upsell](images/daylio/mt_12_year5.png)
*mt_12 — Bottom of the yearly view. The whole yearly stack has free + premium interleaved.*

---

## Goals & Habits

![iOS Goals: Open Challenges section with two illustrated cards (Better Sleep — 2 goals — See Details, Get Fit — 1 goal — See Details). Start a New Challenge: Live Healthier, Reduce Stress, both with full-figure illustrations of people. Sticky "Create New Goal" CTA at the bottom](images/daylio/ios_10_promo.jpg)
*ios_10 — Goals are framed as "Challenges" with curated suggestion templates. The cartoon-illustration approach is also used in onboarding and is internally consistent across the surface.*

![Android Goals (phone): header "Goals" + `+` button, "Start a New Challenge" section with vertically-stacked illustrated cards (Get Fit, Better Sleep, Live Healthier visible)](images/daylio/play_landscape_14.webp)
*play_landscape_14 — Compact phone layout of the same Challenges UI. Each challenge gets a 1:1 illustration matched to its tone (yoga, runner, sleeper).*

![Tablet Goals view: "Set Your Goals" headline with the Challenges screen shown on both a portrait tablet and a landscape tablet, illustrating that the same UI scales across devices and crops the illustrations beautifully](images/daylio/play_landscape_08.webp)
*play_landscape_08 — Tablet promo of Challenges. 7 prebuilt categories visible: Get Fit, Better Sleep, Live Healthier, Reduce Stress, Self-Growth, Break Bad Habits.*

![Android Goals (Build Habits flow): "Create New Goal" with green CTA, "Start a New Challenge" cards (Get Fit, Build Habits), and "Create goal from your activities" section showing 6 of the user's tracked activities (exercise/sleep/read/cleaning/home/sleep) as selectable circles](images/daylio/ap_09_goals.jpg)
*ap_09 — Goals lets the user create a goal directly from their existing activities. The activity icons are reused as goal "subjects" — no separate goal taxonomy.*

![Android "Build Habits" suggestion screen: red-flag woman illustration, copy "Small goals with big impact. These habits are easy to start, help you build momentum, learn discipline, and lead to significant results in your life.", then 2×N grid of habit cards (Make Bed, Wash Face, Take Shower, Brush Teeth, Set Alarm, Tree-care…)](images/daylio/ap_10_habits.jpg)
*ap_10 — Habit suggestions are pre-built atomic habits (BJ Fogg / atomic habits style). Each habit gets its own icon and a 2-up card grid.*

---

## Achievements & gamification

![Light Achievements grid (long-time user blog screenshot): 15 unlocked badges showing star ratings (1-3 stars per badge): Daylio Apprentice, Going Strong (★★★), Going for Ages (★★★), Mighty Streak (★★★), Mega Streak (★★), What a Year, Busy Bee (★★★), Complex Person (★★★), Dedicated (★★), Colorful Life, Hat-trick, Good Group, Playing Safe, Our Hero](images/daylio/blog_achievements.jpg)
*blog_achievements — 15 unlocked achievements with star levels visible. Each badge is illustrated in a consistent rounded-cartoon style (mortarboard for "Apprentice", flame for streak, party popper for "What a Year", trophy ribbon for "Dedicated").*

![Secret Achievements (blog detail): 6 specially-themed badges — Emotional Roller Coaster (split-face yellow/green half), Daredevil (yellow caution diamond), Gorgeously Good (grinning green face), Ridiculously Rad (laughing yellow), I Want It All (bowling pins+ball), Lucky Streak (4-leaf clover) — all in purple-ring style](images/daylio/blog_secret_achievements.jpg)
*blog_secret_achievements — Daylio has a separate "Secret Achievements" tier with surprise unlocks. Discovering them creates an extra discovery loop on top of the visible badges.*

---

## Customization (moods, activities, icons)

![Onboarding "Customize Your Moods" screen — purple theme variant showing emoji-style selector (yellow laughing / green / blue / orange / red) and a Colors row swatch carousel](images/daylio/ob_04.png)
*ob_04 — Even at first launch, mood emoji + color palette are first-class customization choices.*

![Long-term user's mood list: 9 mood faces visible (meh, Anxious, Lazy, ねむい (Japanese for "sleepy"), Surprised) and adjacent activity list showing custom categories — Social (family/friends/work/memorable pictures/love life), CHORES (cooking/cleaning/laundry/organize, crafts/dresser/iron/clean ref/package)](images/daylio/blog_moodactivities.jpg)
*blog_moodactivities (re-shown for customization context) — Demonstrates what "unlimited moods" actually looks like in practice: bilingual mood names, custom activities like "memorable pictures" and "clean ref" (refrigerator).*

![Settings/More menu (light, English): Daylio mascot card showing "Free Version — All essentials for unlimited time", then list items Goals / Weekly Reports / Monthly Reports / Important Days / Photo Gallery / Achievements / Reminders 20:00 / Edit Moods / Edit Activities, with bottom nav](images/daylio/mt_17_settings.png)
*mt_17 — The "More" tab. Notably "Edit Moods" and "Edit Activities" live at the bottom, with Reminders explicitly showing the current default time. Each menu item has its own colored square icon (consistent visual language).*

![Settings/More menu (Android, English): same layout, "Free Version" card with the calming-face mascot, list items Goals / Weekly Reports / Monthly Reports / Important Days / Photo Gallery / Achievements / Reminders 8:00 PM / Edit Moods. Bottom: "Let's go Premium! Automatic Backups" upsell strip](images/daylio/ap_07_reports.jpg)
*ap_07 — Same "More" tab on Android. Cross-platform parity is high.*

---

## Privacy / PIN lock

![iOS PIN entry: slate-blue background, "Locked & Private" heading, 4 PIN dots, phone-style 1-2-3-4-5-6-7-8-9-0 numeric keypad with letter sub-labels (ABC/DEF/GHI...)](images/daylio/ios_07_promo.jpg)
*PIN screen on iOS. Privacy is sold as a feature: "Locked & Private."*

![Android PIN entry — same layout but Android-styled fingerprint indicator below the dots ("Touch sensor") and Material-style number keypad](images/daylio/play_landscape_01.webp)
*play_landscape_01 — Android version adds biometric (Touch sensor / fingerprint). Same 4-dot PIN above.*

![Tablet PIN screen: same layout scaled up for tablet aspect, with Android navigation bar at the bottom](images/daylio/play_landscape_13.webp)
*play_landscape_13 — Tablet PIN.*

---

## Multiple entries per day & free-text notes

![Single-day drill-down: "Aug 6, 2025" detail view showing one entry (WEDNESDAY AUGUST 6 — meh 4:00 PM — family/read/scrolling phone/medium sleep) and an "Add a new entry!" sticky bottom CTA](images/daylio/ap_06_calendar2.jpg)
*ap_06 (re-shown) — Daylio explicitly supports multiple entries per day and surfaces the "Add a new entry" CTA prominently on the day-detail view.*

![Templates / writing prompts entry editor: title bar with trash and save buttons, big "🙏 Gratitude Entry" template title, body with a numbered list ("1. Amazing friends, 2. My dog, 3. Lovely weather"), and a "Templates / keyboard / Aa-bullet" formatting bar above the iOS keyboard](images/daylio/ios_08_promo.jpg)
*ios_08 (re-shown) — On top of the icon entry, Daylio offers structured "Templates" (Gratitude / To-Do / Morning Reflection / Night Brain Dump / Worries / Instant Cheer-Up / Daily Routine). Each template seeds the note with a numbered scaffold.*

---

## Reminders

![Onboarding "Set Up Reminders" screen — illustration of a clock-holding person, single "20:00" reminder card, "You can add more reminders later in the app" helper text](images/daylio/ob_07.png)
*ob_07 (re-shown) — Reminders are configured during onboarding and shown as a primary feature.*

![iOS Notifications permission prompt overlaid on the reminder screen, with "Notifications may include alerts, sounds and icon badges"](images/daylio/ob_08.png)
*ob_08 (re-shown) — Permission is asked in context, AFTER the user has seen the reminder card — much higher consent rate than asking cold at launch.*

---

## Themes & dark mode

![Pink/red dark theme mood picker showing the 5 outlined moods (rad/good/meh/bad/awful) on a pure-black background, with a hot-pink rad emoji on the left](images/daylio/ts_content.png)
*Dark theme variant. Daylio's themes are not just dark/light — each theme is a full color palette + accent that applies to charts, calendar dots, navigation, etc.*

![Pink/red dark calendar: January 2021 grid, day 16 selected with hot-pink ring](images/daylio/ts_calendar.png)
*The same theme propagated to the calendar — accent color, navigation, mood dots all re-color together.*

![Dark-themed activity grid with all activities in selected (filled-pink) and unselected (outlined) states](images/daylio/ts_content2.png)
*Dark theme on the activity grid.*

---

## Premium paywall

![iOS-style Premium paywall sheet: "Start Free Trial — You are getting these awesome Premium Features", woman-with-confetti illustration, checkmark list (Unlimited Moods, 2000+ Icons, Infinite Reminders, Automatic Backups). "GET 4 MONTHS FOR FREE" red ribbon. Annual $23.99 ($1.99/mo, was $2.99) selected with red border, Monthly $2.99 in a flat secondary card. "Recurring billing. Cancel anytime." Terms of Use • Restore Purchases. Big green "Start Free Trial — Try 7 days, then $23.99 per year" CTA. SKIP link](images/daylio/adapty_paywall.webp)
*adapty_paywall — The full Daylio paywall (sourced from Adapty's paywall library). 4 feature checkmarks (Moods/Icons/Reminders/Backups) covers the entire premium pitch. Annual is the default selection with monthly anchored as the "bad deal".*

![Onboarding paywall variant (€-currency, EU localization): same layout in pink with €23.99 annual / €2.99 monthly](images/daylio/ob_10.png)
*ob_10 — Locale-aware paywall with EU pricing.*

---

## Inline premium nudges

![Entries feed with a thin yellow-trophy "Let's go Premium! Unlimited Goals" strip pinned just above the bottom nav](images/daylio/ap_01_main.jpg)
*ap_01 (re-shown) — Daylio uses a rotating slim upsell strip directly above the bottom nav: trophy + "Unlimited Goals" today, diamond + "Striking Color Themes" tomorrow, medal + "Automatic Backups" the next day. Always-present, low-friction.*

![Calendar with diamond-icon "Striking Color Themes" strip](images/daylio/ap_03_patterns1.jpg)
*ap_03 — Different upsell strip variant.*

![More tab with medal-icon "Automatic Backups" strip](images/daylio/ap_07_reports.jpg)
*ap_07 (re-shown) — Yet another upsell strip variant.*

---

## Cross-platform / tablet

![Landscape tablet promo of Entries feed showing the same December feed UI scaled up](images/daylio/play_landscape_15.webp)
*Tablet Entries feed.*

![Landscape tablet view of Goals/Challenges with two device frames (portrait + landscape) showing the same screen at different aspect ratios](images/daylio/play_landscape_08.webp)
*Tablet Goals — the 2×3 grid of challenges scales to a 3×2 grid in landscape.*

![Tablet mood picker — same 5-face row, just wider whitespace](images/daylio/play_landscape_18.webp)
*Tablet mood picker.*

![Tablet activity grid — wider 5-column layout with the Goals/Note/Photo sticky bottom stack visible](images/daylio/play_landscape_09.webp)
*Tablet activity grid showing a "Goals 1/1 — Exercise — 1-Day Streak" inline cell sandwiched between activities and the note field — goals integrated with capture.*

![Tablet Mood Chart + Mood Count + Goals stack — same Stats UI laid out vertically for tablet](images/daylio/play_landscape_11.webp)
*Tablet Stats.*

---

## App Store creative gallery (older marketing screenshots)

![Older App Store collage style screenshot showing the December 2019 Monthly Mood Chart inside a phone frame, against an "App of the Day Apple" laurel and press logos](images/daylio/ts_01_appstore.png)
*ts_01 — Older App Store hero. The Daylio iconography (round mascot + line chart) has been visually consistent for years.*

![Older App Store: white screenshot of a stats page with bar chart, mood line, mood count donut](images/daylio/ts_02_appstore.png)
*ts_02 — Older statistics composition.*

![Older App Store: yearly view](images/daylio/ts_03_appstore.png)
*ts_03 — Older yearly view.*

![Older App Store: green mood emoji + entries feed teaser](images/daylio/ts_04_appstore.png)
*ts_04 — Older entries teaser.*

![Older App Store: activity grid teaser](images/daylio/ts_05_appstore.png)
*ts_05 — Older activities teaser.*

![Older App Store: 5-mood picker teaser](images/daylio/ts_06_appstore.png)
*ts_06 — Older mood-picker teaser.*

![Older App Store: calendar teaser](images/daylio/ts_07_appstore.png)
*ts_07 — Older calendar teaser.*

![Older App Store: locked teaser](images/daylio/ts_08_appstore.png)
*ts_08 — Older PIN/Private teaser.*

![Older App Store: themes teaser](images/daylio/ts_09_appstore.png)
*ts_09 — Older themes teaser.*

![Older App Store: goals teaser](images/daylio/ts_10_appstore.png)
*ts_10 — Older goals teaser.*

---

## Loading / launch state

![Splash screen — bone-white background with the Daylio mascot (calm-faced smiley) centered, no logotype](images/daylio/mt_01_load.png)
*mt_01 — Cold-start splash. Just the mascot, no Daylio wordmark or version chrome. Minimal launch impression.*

---

## Android Play Store hero shots

![Android Play Store "Easy Journaling — Private and Personal" promo with the calendar grid + lock badge + Google Editors' Choice laurel, surrounded by floating "To-Do List", "Morning Reflection", "Gratitude Entry", "Night Brain Dump", "Instant Cheer-Up" pills](images/daylio/play_landscape_02.webp)
*play_landscape_02 — Google Play hero showing the templates/writing-prompts feature surrounded by the calendar tile grid + PIN screen. Floats both Templateland and the Mood Calendar around the lock screen as compositional anchors.*

![Android Play Store landscape "Locked & Private" hero with the PIN screen inside an Android phone frame](images/daylio/play_landscape_04.webp)
*play_landscape_04 — Android phone PIN.*

![Android Play Store landscape Mood Chart + Mood Count on phone](images/daylio/play_landscape_03.webp)
*play_landscape_03 — Phone Stats.*

![Android Play Store: Activities grid in light theme — clean phone version](images/daylio/play_landscape_07.webp)
*play_landscape_07 — Phone activities.*

![Android Play Store: Entries feed phone](images/daylio/play_landscape_10.webp)
*play_landscape_10 — Phone entries.*

![Android Play Store: Stats phone variant](images/daylio/play_landscape_12.webp)
*play_landscape_12 — Phone stats variant.*

![Android Play Store: Mood picker (phone, March 26)](images/daylio/play_landscape_17.webp)
*play_landscape_17 — Phone mood picker.*

![Android Play Store: Mood picker (tablet, December 22)](images/daylio/play_landscape_19.webp)
*play_landscape_19 — Tablet mood picker (alt aspect).*

![Android Play Store: Mood picker tablet](images/daylio/play_landscape_20.webp)
*play_landscape_20 — Tablet mood picker.*

---

## Design language & takeaways

- **Icons replace text everywhere except the journal note.** Mood = 1 of 5 faces. Activity = an icon + a 1-word lowercase label. Note = optional. Stats Y-axis = mood emoji, not numbers. This is the single biggest reason daily compliance stays high: writing is offered, not required.
- **5 moods, not more, not fewer.** The default scale is locked at 5 (rad/good/meh/bad/awful) with the option to add custom emojis. The discrete scale removes calibration anxiety ("is today a 6 or a 7?") and makes the data trivially aggregatable into charts.
- **The brand mascot IS the product.** Daylio's calming-face mascot (the splash, the "free version" card, the apprentice achievement, the empty states) doubles as the neutral "meh" mood emoji. The product's avatar literally is one of its data points — a remarkable bit of identity compression.
- **Two-tap capture, but with depth.** Quick entry is genuinely 2 taps. But every screen offers a graceful upgrade: notes → templates → photos → audio. Power users get a full journaling app on top of the same fast loop.
- **Hyper-customization, but with strong defaults.** Day-one user gets sensible Social/Hobbies/Sleep/Food categories and a green theme; year-three user has 12 custom moods including Japanese kanji, 25+ custom activities, and a pink-on-black theme. Daylio doesn't force a journey — it scales with the user.
- **Statistics-forward retention.** Every other screen surfaces a chart or a streak. "Days in a Row," Mood Chart, Mood Count, Year in Pixels, Often Together, Influence on Mood, Yearly Report. Users open Daylio not just to log but to see the data they've already logged — a self-reinforcing dopamine loop.
- **Inline preview paywall, not a wall.** Premium-only charts render as faded ghosts INSIDE the free Stats tab with a "Learn More" link. The user always knows what they're missing and can preview the layout. Combined with always-on rotating "Let's go Premium!" strips above the nav, this is a high-conversion pattern without being abusive.
- **Year in Pixels is the social/marketing moat.** A single screen — 365 colored dots — has become a meme on Reddit/TikTok/Instagram. Daylio has effectively brand-owned an entire visualization pattern. Any competitor designing a mood-history screen has to consciously avoid it or knock it off.
- **Gamification without leaderboards.** Achievements + Secret Achievements + streak counters + per-month mood "scores" + per-activity trends. All private, all single-player. No social features, no sharing-by-default, no comparison anxiety — but plenty of internal "collect them all" loops.
- **Privacy is a feature, not a footer link.** PIN lock has its own onboarding screen, its own App Store screenshot, its own marketing language ("Locked & Private"). For a category where stigma is real, this is a UX win and a positioning win.
- **Friendly cartoon illustration as a tone-setter.** Goals/Challenges use full-figure cartoon characters (yoga, runner, sleeper, archer, red-flag woman) that humanize what could be a clinical mental-health tool. Same illustration set reused in onboarding and habit suggestions for consistency.
