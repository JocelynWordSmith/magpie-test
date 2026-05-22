# SleepTown — Visual Design Research

SleepTown is Seekrtech's sleep-domain sibling to Forest: same loss-aversion engine, different metaphor. Instead of planting a tree during a focus timer, you commit to a bedtime and wake-up window, and the app constructs a tiny isometric house while your phone sits idle through the night. Hit your goals → the house is yours, dropped into an ever-growing town tile. Touch your phone after bedtime → the construction site collapses into a broken crate of timbers and stones. Repeated nights of consistency accumulate into a screenshot-able micro-civilization, a Buildex of 70+ unique structures, weekly tickets that boost rare-building odds, and ultimately collaborative "Wonders of the World" (Taj Mahal, etc.) built across a friend Circle. The design language is unmistakable: chunky low-poly isometric buildings, mint/teal pastels, big rounded sans-serif type, and a single quiet town tile that *is* your sleep history.

**Relevance to Tend:** SleepTown is the cleanest non-Forest example of "accumulating visual record" as the entire UX. Tend's offerings-to-deities loop has the same structural problem SleepTown solves: how do you make N days of compliance feel like *one persistent object* a user can show off, return to, and grieve when broken? SleepTown's answer — an isometric tile that fills in one micro-structure at a time, with a hard "destroyed crate" failure state and a 2-days-off mercy mechanic — is directly portable to a witchy "altar grows over the lunar month" or "deity's domain accumulates icons" system. The building-as-record metaphor is a model for any accumulating-progress system, and the destruction state is the single most-imitated UX moment in the genre.

---

## App Store hero / "What you sell" framing

The screenshots a prospective user actually sees in 2025 on the US iOS App Store and Google Play, in order.

![Hero 1/8: "Build healthy sleep habits — Construct dreamlike towns." A woman sleeping on her side, hair fanned out across the pillow, three tiny houses (red, blue, gold) tucked into the green hillside around her with Zzz floating up.](images/sleeptown/ios-1.png)
*Lead App Store screenshot. The hero doesn't show app UI at all — it shows the metaphor. Two-tone half illustration (daytime grass below, starry indigo night above), warm flat character art, and the smallest possible "preview" of the gameplay reward (three houses, one bottom-left already "yours"). Sells dreaminess before mechanics.*

![Hero 1 Play variant with award ribbon "Best Personal Growth Apps of 2019" across regions AU/CA/GB/MX/BR/RU/DE/FR/ES/IT/TR/IO/TH/ID & MENA.](images/sleeptown/play-1.png)
*Play Store uses the same hero but bolts on a 15-region award ribbon at the bottom — credibility framing for a $1.99 paid app.*

![Hero 2/8: "Set sleep goals — Avoid staying up late." Phone mock-up showing the round timer at 07:00 am with bedtime/wake-up pills and a single isometric house with trees on the home screen.](images/sleeptown/ios-2.png)
*Second screenshot communicates the entire core UI in one frame: bedtime/wake-up goal pills top, big round alarm clock center, "Sleep" CTA button, single house with trees waiting on the green ground plane.*

![Hero 3/8: "Reach sleep goals — Get exquisite houses." A traditional Japanese-style house with sunburst rays behind it, two yellow tooltip bubbles: "Put down your phone and go to bed on time to construct buildings" and below "Use your phone during bedtime and your building will collapse!" — the collapse shown as a broken wooden crate at the bottom.](images/sleeptown/ios-3.png)
*The most important screenshot in the entire set. Loss aversion is taught in one image: the reward state (rays, exquisite Asian-style house) directly contrasts with the punishment state (broken crate of timbers). This is the SleepTown thesis in a single frame.*

![Hero 4/8: "Form regular sleep habits — Collect surprise buildings." Phone showing a multi-tile town with a ferris wheel, circus tent, food carts, and a road network. Coin counter top-right shows 100 +10%, ticket counter shows 10.](images/sleeptown/ios-4.png)
*Pivots from single building to long-term collection. Carnival-themed tile (ferris wheel + striped circus tent) suggests holiday/rare buildings exist. The "+10%" coin badge teases streak bonuses.*

![Hero 5/8: "Team up to achieve a mutual goal — Build wonders of the world." Bedtime/wake-up pill at top with a 0/10000 progress bar showing 8110 energy filled; phone shows an island Wonder under construction (green mountain with snow caps, archery range, port). Below the phone: Member 1 Sophia (3710 energy, 1 day), Member 2 Jackson (1440 energy, 5 days).](images/sleeptown/ios-5.png)
*Sells the Circle feature. Note the progress bar is shared across members — each successful sleep contributes "energy" to one giant collective build. The Wonder visual is dramatically different from individual buildings (island base, scale, snow).*

![Hero 6/8: Two completed Wonder islands floating in starry sky — a Great Wall fortress (top) and a fortified outpost (bottom) connected by a yellow ladder. Phone with the member list peeking in bottom-left.](images/sleeptown/ios-6.png)
*Pure aspiration shot — no UI chrome at all, just two completed Wonders as floating sky islands with ladder-as-progression. This is the "lush forest" of SleepTown.*

![Hero 7/8: "Sleep cycle records — Track sleep hours." Phone shows weekly Town view: 4 houses + trees on a small green tile up top, with a green bar chart below mapping 5 weekdays of bedtime (~22:30) to wake (~05:30), labeled Dec 08 - Dec 14 2019.](images/sleeptown/ios-7.png)
*Shows the secondary data view: each completed week becomes both a town tile (visual) and a bar chart (quantitative). Town tile sits *above* the chart, not the other way around — the visual is the primary record.*

![Hero 8/8: "Dark/light mode — Switch as you please." Same home screen as #2 but dark theme: navy sky with stars, single illuminated house on a darker green hill.](images/sleeptown/ios-8.png)
*Dark mode preserves the same isometric building, but the sky inverts to starry navy and the green ground darkens. Building emission glow becomes the focal point.*

---

## Landing site & iPad framing

SleepTown's web landing (sleeptown.seekrtech.com) condenses the funnel to four illustrations and a phone mockup.

![Landing-page phone mock: two iPhones angled, left shows weekly Town + bar chart, right shows the 07:00 timer with "Go to bed in 00 hrs 48 mins" copy and a single house on the hill.](images/sleeptown/phones.png)
*Same dual-screen split used on TapSmart's featured image — Town view + Timer view is the canonical "two-panel sell." Note the landing page uses the older clean-mint palette before the dark-mode redesign.*

![Landing intro #1: an isolated isometric house — yellow walls, red pitched roof, brown door, two windows.](images/sleeptown/intro_1.png)
*The "completed building" hero asset, used in marketing materials. Pure asset on white — note the soft drop shadow and the slightly off-axis isometric (~30°). This is the canonical "house" silhouette that all 70+ Buildex variants are designed against.*

![Landing intro #2: a destroyed building — broken brown crate, two diagonal wooden timbers, a couple of grey stones scattered, all sitting on a sandy/dirty tile.](images/sleeptown/intro_2.png)
*The destroyed-building marketing asset, isolated. Tan/khaki color story (vs. the vivid yellow+red of the success state) signals failure without using red alarm color. The composition is deliberately "tipped over."*

![Landing intro #3: a rare/aspirational glass greenhouse-style modern home — fully transparent walls, blue framing, internal furnishings visible (bed, dining table), flower-box landscaping at the base.](images/sleeptown/intro_3.png)
*Marketing asset for rare buildings. Far more architectural detail than the starter house — internal furniture, transparent walls, multiple landscaping pieces — communicates "you'll get cooler stuff if you stick with it" in one frame.*

![Landing intro #4: a small completed town tile — 5 colorful houses (red/blue roofs) clustered with 4 evergreen trees on a thick mint platform.](images/sleeptown/city.png)
*The "promised land" asset. One platform, ~5 buildings, deliberate negative space between them. This is the *minimum viable* town that already feels like a place.*

![iPad screenshot: "Attain a healthy sleep schedule." 12-tab nav (chart, building, book/Buildex, achievements, settings), big round timer at 08:00 AM with "Sleep in 01 hrs 02 mins", red-roof house with trees on a deeper green tile.](images/sleeptown/ipad-1.png)
*iPad layout reveals the full top-bar nav (5 icons) usually hidden in the iPhone hamburger. Worth noting: the timer is sized to dominate even at iPad scale — vertical hierarchy is preserved.*

![iPad pure illustration: "Set healthy bedtime and wake-up time goals" with a horizontal slider connecting bed/wake icons; below it "Put down your phone at bedtime to start constructing a building" with an isometric construction site — wooden crane, white pallet of bricks, red brick stack, two pine trees.](images/sleeptown/ipad-2.png)
*A rare "under construction" marketing illustration. Wooden crane is the universal symbol — used as the literal "building in progress" state in-app. Pallet of bricks signals materials/effort.*

![iPad triptych: "Go to bed and get up in time to construct buildings" (red-roof house), "Your building will be destroyed if you fail" (broken crate), "Achieve your goal consistently to build unique buildings" (glass greenhouse).](images/sleeptown/ipad-3.png)
*The three-state cycle in one frame: success → failure → rare reward. This is the entire game-loop boiled to three illustrations stacked vertically.*

![iPad "Customize your towns": two large isometric town tiles stacked, top is a partial village with carnival, bottom is a road-gridded medium town with church + ferris wheel. Right rail shows decoration shop pricing (trees: 20 coins, lampposts, statues: 50).](images/sleeptown/ipad-5.png)
*The decoration/customization layer — coins buy ground tiles, trees, lampposts, fences. The two stacked tiles imply infinite expansion as you collect more buildings.*

---

## Onboarding flow

SleepTown's onboarding is a tooltip-overlay tutorial layered on the actual home screen (rather than a separate intro carousel like Forest).

![Onboarding step 1: home screen tinted dark with a tooltip pointing at the bedtime/wake-up pills (01:00 AM / 07:00 AM) explaining "These are your bedtime and wake-up time goals. You are supposed to go to bed BEFORE your bedtime goal and wake up BEFORE your wake-up time goal."](images/sleeptown/designx-7.jpg)
*First in-app tooltip. The home screen is dimmed to ~50% black, the pill being explained is highlighted, and a white tooltip with a tail anchors below. The dot indicator at the bottom shows progress through ~8 tutorial steps.*

![Onboarding step 2: "You can take up to two days off" with a list of weekdays (Sun-Sat). Sun and Sat are checked. Below the list: "Going to bed late on the day before your day off or waking up late and causing your construction to fail on your day off won't break your consecutive days progress."](images/sleeptown/designx-6.jpg)
*Days-off explanation — the mercy mechanic. Two checkmarks pre-filled on Sun and Sat. The detailed copy explicitly addresses the previous-night-edge-case ("late the day BEFORE your day off"). Reduces onboarding anxiety about commitment.*

![Onboarding step 3: full home screen post-tutorial — bedtime 01:00 AM / wake 07:00 AM pills, big round 07:00 AM alarm clock with arc dial showing current time (04:01 PM tick mark), "Sleep" CTA button, "08 hr 59 min from bedtime goal" caption, and 6 small isometric pines on a green hill.](images/sleeptown/designx-15.jpg)
*Home screen after tutorial dismissal. Note how much of the screen is empty hillside — the building/timer floats in cyan, the ground anchors the "place" you're building on. No bottom nav, no tabs.*

![Onboarding step 4 / first run: "Challenge yourself by maintaining a consistent sleep schedule" with a half-moon/half-sun arch illustration — left side dark blue with sleeping figure in bed, right side cream with sitting-up figure in bed. Sub copy: "Put down your phone when it's time to go to bed."](images/sleeptown/designx-1.jpg)
*The first-launch carousel before tooltips begin. 5-dot indicator at the bottom suggests this is page 1 of 5. The half-night/half-day illustration is the most thematic illustration in the entire app.*

![New Features modal: pyramids backdrop with three sheep wearing colored caps (yellow/red/blue) sleeping side by side. Title "New Features", body: "Form a circle with your friends, reach your sleep goals together and construct wonders of the world!" with a "View" CTA.](images/sleeptown/designx-featured.jpg)
*Feature-announcement modal that runs on app update. Sheep-as-mascots is the only cartoon character moment in the app — used to soften a power-user feature (Circles + Wonders).*

---

## Bedtime / wake-up goal setup

The setup affordance is the entire home screen — there's no separate "settings" mode for sleep windows.

![iOS Set a New Goal screen: dark navy background, three-row list: "Bedtime Goal: 11:00 pm", "Wake-up Time Goal: 7:00 am", "Day off: Fri Sat". Top bar has Cancel / Save. "TOTAL SLEEPING DURATION: 08H 00M" caption.](images/sleeptown/tapsmart-3.png)
*The minimum-friction settings sheet: three rows total. Day-off picker is collapsed into a single row showing the two selected days as a single string. Total duration is computed and shown explicitly so users can see if 11→7 is the right window for them.*

![iOS home screen (dark mode): hamburger menu top-left, "11:00 pm Bedtime Goal" + "07:00 am Wake-up Time Goal" pills, big 07:00 am clock with "Alarm On" + bell icon, tick mark at "05:26 pm" on the arc, "Sleep" button, "05 hr 34 min from bedtime goal" caption, dark hills with pine trees, dot pagination bottom.](images/sleeptown/tapsmart-4.png)
*Dark-mode home with all UI elements. The arc surrounding the clock is the *visualization of how far around the dial the current time is from the wake-up time* — a continuous countdown ring, not just a label.*

![Android home (Julie's screenshot): light mode, "01:00 Bedtime Goal" / "09:00 Wake-up Time Goal", arc dial with 11:07 tick mark, 08:10 displayed inside circle with "Alarm On", below: "You can start constructing your next building 2 hours before your set bedtime." Tooltip: "Number of days you have successfully achieved your goal. Reach 7 days to receive a ticket. Skipping a day or fail to construct a building won't reset your progress."](images/sleeptown/julie_screenshot_20190119-110704.jpg)
*Real-user home with the "2-hour pre-bedtime build window" rule made explicit. Notice the ticket-streak mechanic is taught as a tooltip *on the home screen*, not in a separate help area — the home screen IS the help system.*

---

## Sleep state — building under construction

When you tap "Sleep", the app locks into a single non-interactable construction screen until your wake-up window opens or you exit the app (and destroy the build).

![iOS in-app preview: house with sunburst rays behind it, large dialog "Put down your phone and go to bed on time to construct buildings", below the house tooltip: "Use your phone during bedtime and your building will collapse!" with a broken crate at bottom.](images/sleeptown/ios-3.png)
*Same as Hero 3 but worth re-examining: the *promise* (house under sunburst rays) and the *threat* (broken crate) literally share one screen during onboarding. The rays + slight float = "active construction in progress" visual language.*

![iPad "Put down your phone at bedtime to start constructing a building" with an isometric construction site: wooden crane with hook, white pallet of bricks, red brick stack, two evergreens around it.](images/sleeptown/ipad-2.png)
*Reused for emphasis — the construction-site illustration (crane + bricks) is the canonical "sleep in progress" graphic. The crane being wooden, not industrial, keeps the cozy palette.*

---

## Wake-on-time success — completed building

When you wake within the window and tap to claim, the building reveals with rays + stars animation.

![Next Building modal: dark dimmed home screen behind, white modal with title "Next Building", a grey question-marked house icon, sub-copy "A random one", three circular icon buttons (X / gift box / finger-tap).](images/sleeptown/julie_screenshot_20190128-131228.jpg)
*The pre-construction "what am I building tonight?" picker. Three buttons: cancel, redeem ticket (gift box), or random pick (finger tap). The mystery-house question mark is the canonical "surprise reward" visual.*

![Redeem Ticket modal: castle-with-question-mark icon (pink/purple/teal), "1 ticket" badge with red ticket illustration, copy "The next building is more likely to be a rare one if you redeem a ticket." Cancel / Redeem buttons.](images/sleeptown/julie_screenshot_20190119-110655-1.jpg)
*The 7-day-streak ticket redemption. Beautiful detail: the unknown-rare-building is illustrated as a pastel "castle" silhouette with question mark — different from the standard mystery-house icon, signaling "this is the better gacha pool."*

![Taj Mahal completion screen: full ivory/cream Taj Mahal with central dome + 4 minarets, reflecting pool in front, manicured gardens with cypress trees, all on a green platform. Sunburst yellow-and-white rays radiate from behind. Stars and dot confetti float around. "Congratulations on constructing Taj Mahal!" subtitle.](images/sleeptown/julie_screenshot_20190119-091858-1-e1548681864623.jpg)
*The Wonder of the World completion celebration. Yellow sunburst (vs. the smaller sunburst for individual buildings) signals scale. Stars + light-yellow confetti dots. Note the architectural fidelity — Taj Mahal is rendered with real reflecting pool and 4 minarets, not a generic "fancy temple."*

---

## Building destroyed state (phone-use failure)

This is the single most distinctive UI moment in the app and the entire reason loss-aversion users return.

![Marketing asset: isolated destroyed-building tile — sandy/khaki rectangular foundation with broken brown crate slats tipped on top, two angled timber planks crossing each other, scattered grey stones, drop shadow.](images/sleeptown/intro_2.png)
*The destruction asset isolated. Critical design choice: it's not red, blood, fire, or a skull — it's a *broken construction crate*, framed as "the materials were ruined, try again tomorrow." Punishment without melodrama. Color story stays in the cozy palette.*

![iOS Hero 3 again — destroyed crate below "Use your phone during bedtime and your building will collapse!" tooltip.](images/sleeptown/ios-3.png)
*Notice the crate sits *below* the active house in the marketing screenshot. It's the same physical position as a finished building, just broken. Implication: this same spot in your town could become either reward or scar tomorrow.*

---

## Town view — collected buildings over weeks/months

Each "Town" is a fixed-size isometric tile that fills in as you complete buildings.

![Weekly Town tile: medium-density tile with 6 buildings — a clock tower with red roof + tan walls, an L-shape red-roof house with a small pool/courtyard, two smaller blue-roof houses, a gas station with parked truck, sparse pine trees. Bar chart below showing 7 days Jan 7–13 2019 with bedtimes ~22:30 and wake times ~07:00.](images/sleeptown/julie_screenshot_20190119-110738-1.jpg)
*One week = one tile. Six buildings = six successful nights (with Sun "day off" implied). Bar chart below the tile uses the same green palette and is treated as secondary data. Spatial arrangement of buildings on the tile is automatic/randomized, not user-controlled.*

![Different week's Town tile: same isometric platform, different buildings — a school with athletics track, two food stalls (fries/popcorn), a fast-food booth, a brown-roof house, a service station. Bar chart Jan 14–20 2019 below.](images/sleeptown/julie_screenshot_20190119-110729-1.jpg)
*Adjacent week's tile shows entirely different building set + arrangement. Continuity between weeks comes from the *big Town view* (next image), not from week-to-week tile evolution.*

![The Big Town view: a massive isometric square tile crammed with 100+ buildings, a Taj Mahal cluster top-center, paved road grid, ferris wheel + carnival on west side. Top-right: 549 +76% (streak bonus), 105 (building count). Coin badge 37645 bottom-right. Light cyan-cream sky background.](images/sleeptown/julie_screenshot_20190119-091935.jpg)
*Julie's actual long-term town after 85+ days. This is THE screenshot SleepTown is built around — what one person's sleep consistency looks like as a single image. Every building is one successful night.*

![Larger Big Town: 589 +85% streak bonus, 114 buildings, 46985 coins. Taj Mahal anchors the top with reflecting pool. Tile is denser than the previous shot, with more carnival rides and a power plant cluster.](images/sleeptown/julie_screenshot_20190128-122308.jpg)
*Same Big Town a week later — 9 more buildings, streak bumped from 76% to 85%. Demonstrates how the town *grows* (densifies) over months, not just expands.*

![Long-term iPad Town tile (~10 buildings): yellow apartment block centered + 4 smaller red/blue-roof houses + pine trees on a thick mint platform.](images/sleeptown/ipad-4.png)
*The "medium-tenure" town view used in marketing — small enough to be readable, dense enough to feel rewarding. Note the deliberate gaps left for future buildings.*

---

## Building catalog (Buildex) — 70+ unique buildings

The Buildex is a paginated grid where unobtained buildings show as grey silhouettes ("Pokédex of houses").

![Buildex page 1: "My Buildex" header. 3x4 grid: red-roof house, blue-pitched-roof house, grey unrevealed silhouette, flat-top building, mailbox house, blue-A-frame house, taller blue-spire chimney house, two grey silhouettes, three small-house variants in bottom row.](images/sleeptown/julie_screenshot_20190128-130130.jpg)
*Standard starter Buildex page. Grey silhouettes are a powerful collection driver — exact silhouette shape is shown, so users can guess what it'll look like. Page indicator at bottom shows 7 pages of houses.*

![Buildex page 2: a turret/hexagonal yellow tower, tents (red triangle + green dome), a striped-awning shop, three small house variants, plus 2 grey silhouettes.](images/sleeptown/julie_screenshot_20190128-130135.jpg)
*Variety of building *types*: tents and modern shops mixed with traditional houses. The turret tower is one of the rarer architectural shapes.*

![Buildex page 3: chimney-roof house, blue-A-frame house, hexagonal turret house, blue-balcony modern, fire-tower wedge house, grey silhouette, red-roof bungalow, 24-Z convenience store, three-story rooftop-shop, two french-fries snack-bars, half-timber pitched-roof cottage, grey silhouette.](images/sleeptown/julie_screenshot_20190128-130140.jpg)
*Mid-pages show urban/commercial buildings. The 24-Z convenience store is a clear nod to 7-Eleven (recognizable retail parody is part of the charm).*

![Buildex page 4: cottage with red roof, restaurant with parasols, grey silhouette, clock-tower house, gas station, glass-walled greenhouse cafe, food-truck cart, modern-glass-cube greenhouse, three more variants.](images/sleeptown/julie_screenshot_20190128-130144.jpg)
*Commercial variety expanded: greenhouse, food truck, gas station. The glass-cube cafe shares its style with the "rare building" marketing asset.*

![Buildex page 5: ice-cream-cone-topped parlor, red church with steeple, BAR with stools, grey silhouette, arcade with controller signage, grey silhouette, BANK building, blue swim-shop, grey silhouette in the rightmost column.](images/sleeptown/julie_screenshot_20190128-130149.jpg)
*Themed buildings: a literal ice-cream-cone-roof parlor, a church, a bar, an arcade with a giant gamepad sign. Each one feels handcrafted, not procedurally generated.*

![Buildex page 6: blue-trim manor, red-canopy cafe with rooftop diners, grey silhouette, clock-tower with red roof, modern gas station, glass-walled cafe with bunting, food-truck, factory with modular sections, grey silhouette, blue-trim police station, fire station, grey silhouette.](images/sleeptown/julie_screenshot_20190128-130154.jpg)
*Civic buildings: police, fire station, factory. Police and fire share a paired color story (blue + red) and matching mass.*

![Buildex page 7: factory conveyor system, windmill barn with cart, flower shop with striped awning, SLEEP TOWN cinema (logo on marquee), white clinic with cross, grey silhouette, ferris wheel + carnival cluster, grey silhouette, tall mall, grey silhouette, mansion, factory with cooling towers.](images/sleeptown/julie_screenshot_20190128-130158.jpg)
*Late-game/rare buildings: the cinema literally says SLEEP TOWN on its marquee (self-referential branding). Ferris wheel + carnival is shown as one *composed scene*, not a single building — these are the multi-tile rares.*

![Buildex page 8 (final): white-pillar school with running track, grey silhouette of a Greek-temple shape, modern SLEEP TOWN train station with bus stop. A single grey land-tile silhouette below.](images/sleeptown/julie_screenshot_20190128-130203.jpg)
*The last page is sparse, signaling rarity. The SLEEP TOWN train station continues the self-referential branding.*

---

## Themed building sets

Holiday and regional themes overlay the standard building art with seasonal variants (snowfall, decorations, etc.).

![Christmas/snow-themed Wonder island under construction: a green island with snow-capped mountain peaks, a small archery range, watchtower, dock with port — rendered with white snow on every peaked surface. Bedtime/wake pills 11:00 PM / 07:00 AM with shared progress bar 8110/10000.](images/sleeptown/ios-5.png)
*The Wonder islands include snow-cap rendering on mountainous variants — likely also extended into the December seasonal theme (Christmas overlay snow on existing buildings).*

![Carnival/festival-themed tile: ferris wheel, red-and-white striped circus tent, food carts (popcorn, fries), red-roof small stall on a roundabout, ticket booth.](images/sleeptown/ios-4.png)
*A themed scene composed of related buildings (carnival = ferris wheel + circus tent + concessions). This composite-set approach is how SleepTown delivers "holiday vibes" without seasonal-only rebuilds.*

---

## Achievements

![Achievements grid: 17 octagonal badges, 3 per row. Visible: triangle/Penrose logo (red border), camper van (yellow), grey crushed-can pair, gold bar stack, light bulb (yellow), cake slice (red), grey ball/ribbon, calendar "7" (red border), calendar "30" (red border), grey "100", brown house (single), brown house (double), brown house (chimney), red coin (yellow center), red coin trio, grey bonsai tree.](images/sleeptown/julie_screenshot_20190128-130109.jpg)
*Achievement badges as physical octagonal "coins" with chunky drop shadows — locked ones are grey-stamped, unlocked are colored. Streak achievements (7/30/100 days) sit alongside collection counts and consumable milestones (cake = first-anniversary?). Bonsai tree (grey, locked) suggests a Zen/meditation tier.*

---

## Circle / Friends — shared sleep goals

The Circle is SleepTown's social layer: invite up to 15 members, share a single bedtime+wake goal, every successful night contributes energy to one collective Wonder.

![Circle screen: isometric Wonder under construction (cream foundation with green grass patches, brown earth pit in center, two ramps, three white sheep grazing). Below: bed/wake icons "01:00 / 09:00", progress bar 400/10000 (small orange fill). "Members of the circle (2/15)" — Member 1 jukivea with selfie avatar, 08:10 alarm, 76 days, 250 energy. Member 2 elkz, 11:07 alarm, 22 days, 150 energy.](images/sleeptown/julie_screenshot_20190119-110757__01-1.jpg)
*Early-stage Circle. The Wonder is barely started — earth pit + foundation outline + a few decorative sheep. Members ranked by energy contribution (250 vs 150). Shared bedtime goals enforced at the *circle level*, not per-member.*

![Same Circle, days later: Wonder now has paved interior + staircases + ramparts taking shape. Progress 3900/10000 (40% filled, orange bar). jukivea now 2000 energy / 83 days; elkz 1900 / 29 days.](images/sleeptown/julie_screenshot_20190126-122520__01-1.jpg)
*Same Wonder a week later — interior structures + ramparts have appeared. Both members' energy contributions have jumped roughly 8x. The Wonder visibly transformed as the bar hit 40%.*

![Wonder islands floating: two completed Wonders (Great Wall, fortified outpost) as separate sky islands with a yellow ladder between them. Phone with member list peeks in bottom-left.](images/sleeptown/ios-6.png)
*Completed Wonders become permanent floating islands you can revisit. Yellow-ladder connection suggests "level up" path between them.*

---

## Settings — bedtime windows + days off

![Set a New Goal screen: dark navy bg, three list rows — Bedtime Goal 11:00 pm, Wake-up Time Goal 7:00 am, Day off "Fri Sat" — Cancel/Save in nav.](images/sleeptown/tapsmart-3.png)
*Reused for the settings section: this is the entire sleep-window configuration UI. Day-off shows the two selected days as a compact summary, expanding to the full picker on tap.*

![Days-off picker: "You can take up to two days off." Sun/Mon/Tue/Wed/Thu/Fri/Sat list with checkmarks on Sun and Sat. Helper copy at bottom: "Going to bed late on the day before your day off or waking up late and causing your construction to fail on your day off won't break your consecutive days progress." Back / Next buttons.](images/sleeptown/designx-6.jpg)
*The days-off configuration — the merciful "you can't fail on these days" mechanic. Hard-capped at 2 days per week. Explicitly addresses the edge case "what about the night before my day off?" — a remarkable amount of careful copy for one settings screen.*

---

## Color palette & isometric art style

![Reference isolated house: cream walls, salmon-red pitched roof with overhang, brown door + frame, two yellow-square windows, soft drop shadow on neutral background.](images/sleeptown/intro_1.png)
*The canonical SleepTown building. Color palette is built around: cream/buff walls (#F5E6C8-ish), salmon-red roofs (#E07060-ish), warm browns for woodwork, with windows as cheerful yellow squares. Soft drop shadow, no outline — relies on color contrast to define edges.*

![Reference destroyed crate: tan/khaki crate with broken slats, two diagonal timbers, grey rounded stones, all in muted earth tones — distinctly desaturated from the success palette.](images/sleeptown/intro_2.png)
*Failure palette: drained of the warm reds and creams, replaced with desaturated tans and greys. Saturation is the primary signal of state, not hue shift to red/alarm.*

![Reference glass greenhouse: cyan-framed transparent glass walls, internal red dining table + chairs, white refrigerator/appliances, lush green garden + pink flower planters at the base.](images/sleeptown/intro_3.png)
*Rare/aspirational building palette: cool cyan + transparent glass + bright internal accents. Distinctly more saturated than starter buildings, justifying its "rare" status visually.*

![Reference completed town tile: mint-green platform with darker green ground plane, five chunky houses with red/blue roofs, four solid pine trees with brown trunks + lush green tops.](images/sleeptown/city.png)
*Ground plane: mint/sage gradient (#9FD6B8-ish), platform edge in slightly darker mint. Pine trees are 4-step gradient cones with stubby brown trunks. The platform "floats" with a dark green cliff edge, visually distinguishing it from the cyan sky background.*

![App icon: a cream house with red pitched roof inside a pink dialog bubble with "Zz" inside it, set on a mint-gradient circle background.](images/sleeptown/play-9.png)
*The app icon distills the entire app to: one house (the reward), one Zz bubble (the action), one mint plane (the context). Pink (vs. red) for the bubble keeps the icon warm rather than alarming.*

---

## Design language & takeaways for Tend

- **Building-as-record is the entire game.** The Big Town tile (Julie's 114-building screenshot) *is* the long-term reward — there is no leaderboard, no XP bar, no level. The accumulated visual *is* the proof of consistency. For Tend, this means: an offering accumulating on an altar over a lunar cycle, or a deity's domain growing with each kept routine, should be a single screenshot-able image — not a stats screen with charts. The bar chart in SleepTown is *secondary*; the tile is primary.

- **Destruction over neutrality on failure.** SleepTown could have just "not given" you a building on a failed night. Instead it shows a broken crate sitting in the spot a house should be. That negative space is *occupied by visible damage* — far stronger loss aversion than absence. For Tend's pagan frame: a missed offering shouldn't just be a gap, it should leave a smudge, withered herb, or empty altar dish — *presence of absence*, not erasure.

- **The "days off" mercy mechanic is what makes loss-aversion sustainable.** SleepTown lets you pre-designate 2 days a week as immune to streak-breaks. This is the difference between "punishing app users hate" and "loving challenge users return to." Tend's "offerings" framing should include explicit Sabbath/holy-day mechanics where the user can declare 1-2 days/week as "the deity rests" without breaking accumulation. This is a *feature* (mercy, ritual rest), not a *concession*.

- **Isometric cozy is a defined visual genre.** SleepTown sits in a tight cluster with Forest, Habitica, Pocket City, Animal Crossing Pocket Camp, Townscaper: ~30° isometric, soft drop shadows, chunky low-poly forms, no outlines, cream/mint/salmon palette, warm yellow window glows. For Tend's witchy/pagan aesthetic, the same cozy isometric language could be inverted: midnight-purple/forest-green base palette, candle-flame yellow as the warm accent, with the same chunky low-poly form vocabulary applied to altars, candles, crystals, herb bundles instead of houses.

- **Color = state.** SleepTown communicates success (warm saturated reds/yellows), failure (desaturated tans/greys), and rarity (cool saturated cyans/glass) entirely through palette shifts — same forms, different paint. Tend can use the same trick: a fresh offering glows warm, a withered one desaturates, a rare/blessed one shifts to cool jewel tones.

- **Random rewards beat earned rewards for collection-driving.** SleepTown deliberately does not let you choose the building you'll get — every successful night is a surprise. The Buildex with grey silhouettes makes the *missing* buildings the motivator. Tend could apply this to gift offerings: don't let users select what they offer; the deity "asks" for something each day, and the user accumulates a grimoire of offerings-given-so-far with silhouettes of the not-yet-encountered.

- **The "ticket" streak booster is gentler than a streak counter.** SleepTown's 7-day streak doesn't reset on failure; it just *doesn't tick up*. The reward is a probabilistic rare-building boost (one ticket = higher chance of rare on next night). This is materially less punishing than Streaks/Duolingo's "you lost it all" framing. Tend's equivalent: 7 days of offerings earns the deity's "blessing" — a buff on the next prayer's outcome rarity, not a streak that disappears.

- **Shared rituals via a Circle, not a leaderboard.** SleepTown's Circle has one shared goal (a Wonder being built together) with energy contributions — not a leaderboard of who's most consistent. Members see each other's bedtime and streak, but the framing is *cooperation toward one collective object*, not competition. For Tend: a coven where members collectively build a shared shrine/altar/grove, with individual offerings contributing to a single accumulating structure visible to all. Much warmer than streak-shaming.

- **The home screen IS the help system.** SleepTown teaches mechanics through tooltips overlaid on the actual home screen during onboarding, not a separate tutorial. The hamburger menu hides 90% of the app. For Tend: avoid a tab bar. Let the altar/ritual screen be the central artifact and surface options as tooltip-overlays the first time they're relevant.

- **Self-reference in the catalog deepens the world.** SleepTown's Buildex contains a literal "SLEEP TOWN" cinema marquee and a "SLEEPTOWN" train station. These tiny in-world brand placements make the town feel like a place, not a stat collection. Tend could include offerings/buildings named for the app's own deity pantheon — a "Tender's Grimoire" book offering, a "Tend Stone" relic — to give the world an internal economy.

- **One-shot screenshot-ability is the marketing moat.** Look at every SleepTown App Store screenshot: each one is *one* compelling object on *one* background. The Big Town view, the destroyed crate, the Taj Mahal — all isolated, all beautiful at thumb-size, all shareable to Instagram with no context needed. For Tend: every major artifact (each deity's domain, each ritual screen, each completed offering set) should be designed to look good as a square Instagram screenshot. If it needs explanation, it's not ready.
