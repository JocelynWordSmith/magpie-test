# Forest — Visual UX Research

Forest (by Seekrtech) is the OG "stay-off-your-phone" focus app: you plant a virtual seed, it grows into a tree over a Pomodoro-style timer, and if you leave the app, the tree withers and dies — a permanent, ugly headstone in your otherwise lush forest. The system bolts on a coin economy (unlock 90+ tree species and ambient sounds), tag-based time tracking, friend rooms ("Plant Together") where one defector kills everyone's tree, and the now-iconic real-world payoff: spend enough virtual coins and Forest pays its partner **Trees for the Future** to plant an actual tree in Sub-Saharan Africa. Over 1.95M real trees planted to date, 50M+ users, and the design language is unmistakable — chunky low-poly trees, a forest-green palette, big rounded sans-serif type, and an isometric "garden plot" metaphor that turns your year of focused time into a single screenshot-able landscape.

---

## App Store hero / "What you sell" framing

How Forest positions itself in 2025 — these are the screenshots a prospective user actually sees on the iOS App Store.

![Hero: timer with growing seedling — "Spend Your Time Smarter, trusted by 50m users"](images/forest/ios-en.jpg)
*Lead screenshot: the angled-phone hero shot. A seedling cocooned in leaves sits inside the iconic round dirt-bowl, the 120:00 timer ghosted behind. Bottom badge: "trusted by 50m users." Sells scale and beauty before mechanics.*

![Hero: "Make Focus Addictive" — isometric forest of unlockable species](images/forest/ios-en-1.jpg)
*Second hero: the isometric forest tile crammed with rare tree species (crystal pines, sakura, cypress, lavender) with a withering tree saying "Stay focused, or I'll wither!" Sells collection + loss aversion in a single frame.*

![Featured graphic: dandelion/sunflower trio with achievement, gift box, and progress UI floating around it](images/forest/play-02.png)
*Play Store featured banner. Note the surrounding icons (trophy, gift box, fire/streak, progress bar) preview the gamification layer without showing UI chrome.*

---

## Onboarding

A six-page intro carousel sets the entire metaphor before you ever touch a timer.

![Onboarding 1/6: "Plant a Tree — Whenever you want to focus, plant trees."](images/forest/ts-2374.png)
*Cream/brown half-and-half background with a single sprout poking out of the soil line. Aggressive whitespace, a 2-tone palette, no UI chrome. Establishes the planting metaphor in one frame.*

![Onboarding 2/6: "Stay Focused — In the following time, the tree will grow while you work."](images/forest/ts-2375.png)
*Same template, now a chunky low-poly pine. The literal "tree grows over time" mechanic, communicated without animation.*

![Onboarding 3/6: "Stop Phubbing — Your tree will die if you leave the app."](images/forest/ts-2376.png)
*Background inverts (warm cream → ominous brown) and the tree is now a leafless dead husk. "Phubbing" = phone snubbing. Loss aversion introduced on slide 3 of 6.*

![Onboarding 4/6: "Build Your Forest — The harder you work, the lusher your forest becomes."](images/forest/ts-2377.png)
*Isometric plot of pines establishes the long-term reward: not one tree, but a whole forest you accumulate.*

![Onboarding 5/6: "Develop Work Patterns — Speed up your productivity by developing a 'phone free zone.'"](images/forest/ts-2378.png)
*Flat illustration of a desk with phone face-down by the keyboard. Reframes the app from gamification toy to behavior-change tool.*

![Onboarding 6/6: "Use Forest and be present in your daily life" — three use-case icons](images/forest/ts-2379.png)
*Working (iMac) / Studying (book) / With Friends (chat bubbles). Tells you when to use it, ending on the "Go" CTA.*

---

## Plant-a-tree screen (timer setup)

The home screen IS the planting screen. No tabs, no nav — just one giant round dirt bowl, a timer numeral, and a Plant button.

![Default home: 25:00 timer, low-poly pine in a yellow dirt bowl, "Study" tag pill, coin counter top-right](images/forest/ts-2386.png)
*Note the deliberate minimalism: hamburger nav, mode toggle (hourglass/flame = timer/stopwatch), coin balance. Everything else removed.*

![Coach-mark: "Tap here to switch between Timer Mode and Stopwatch Mode"](images/forest/ts-2380.png)
*First-run guidance overlay highlights the mode pill — Timer (fixed countdown) vs Stopwatch (open-ended, useful as a habit tracker).*

![Coach-mark: "On Timer Mode, drag the green button to adjust time"](images/forest/ts-2381.png)
*The time isn't picked from a wheel — you drag a green nub around the circumference of the bowl. The bowl itself IS the time dial.*

![Coach-mark: "Tap the tree to select different species"](images/forest/ts-2382.png)
*Same gesture overlay teaching you the tree is tappable to open the species picker.*

![Tree species picker sheet: "Planting Settings" tab with a grid of 14 tree/plant species, time slider (10–40 min), and tag chips (Rest/Social/Study/Work/Unset)](images/forest/ts-2386.png)
*The whole planting flow lives in one bottom sheet: species, duration, tag, "favourite" heart, Plant CTA. Recently-unlocked species shown first; locked ones are silhouettes.*

![Tree species picker: "My Favourite" tab with all locked silhouettes, swipe-up hint](images/forest/ts-2385.png)
*Locked species are grayed-out silhouettes — a visible inventory of what you don't yet own, driving the coin grind.*

![Advanced timer options sheet: "Deep focus / Plant together / Count exceeded time" toggles](images/forest/ts-2388.png)
*Three power-user toggles in a single sheet:*
*• Deep focus — "Leaving the app will cause the tree to wither"*
*• Plant together — "If one fails, all trees wither" (social pressure)*
*• Count exceeded time — keep counting up after the timer ends.*

![Sound picker sheet: "Forest Rain" selected, footer "More sounds to be unlocked on the Store page"](images/forest/ts-2389.png)
*Ambient sounds are a separate unlockable tier. Headphones icon top-right opens this sheet.*

---

## Active focus session (growing tree)

The work-mode UI is almost defiantly empty: a single tree in a circle, a tag pill, a giant thin-numeral timer, and a "Give Up" button you have to confirm.

![Active session — Deep Focus OFF warning: "You have turned off Deep Focus Mode. Leaving the app does not affect the tree."](images/forest/ts-2387.png)
*Bright, full-bleed teal background, sprout in a yellow bowl, Work tag, 09:56 counting down, "Cancel (6)" countdown forces you to wait ~6 seconds before quitting — speed-bump friction. The warning makes the lighter mode visually explicit so users feel the absence of stakes.*

![Active session — classic "Stop phubbing!" timer (old iPhone 5S frame from marketing site)](images/forest/site-preview.png)
*The legacy 29:58 timer with the sprout and a "Give Up" button. The brand language has barely changed in years.*

---

## Withered tree / failure state

Forest's defining UX move: the broken-promise screen.

![Withered tree — leafless, brown husk in dirt with the caption "Stop Phubbing — Your tree will die if you leave the app."](images/forest/ts-2376.png)
*This same screen template is reused when you actually fail. The dead tree stays in your forest permanently as a tiny brown stump on the isometric land.*

![Marketing illustration: cracked dead seedling — "If you can't resist the temptation, your tree will die"](images/forest/site-intro3.png)
*Round badge style: yellow halo, bowl, but the sprig is a broken brown twig. Versions of this asset appear throughout marketing and FAQ.*

---

## Tree planted / success state

![Success modal: "Hooray! You've planted 1 healthy tree(s) in your forest!" with the flowering bush you just grew + "You've Got [bush icon] + 3 coins" OK dialog](images/forest/ts-2392.png)
*Two-step celebration: full-screen congratulation, then a coin-drop modal. Action footer offers Alarm (set break) / Forest (jump to collection) / Share.*

![Success follow-up: "Take a Break — 5 mins" wheel-picker modal](images/forest/ts-2393.png)
*Immediately prompts you to start a break timer — auto-suggests Pomodoro-style cadence (4/5/6 minute wheel).*

![Post-session: "New User Register Gift" modal blocking the next plant](images/forest/ts-2395.png)
*Conversion push after first tree: 30 Time Crystals if you create an account to "back up your precious trees." Loss-aversion applied to lifetime data, not just one session.*

---

## Forest view (the accumulating landscape)

The "Forest" view is the long-term reward — an isometric chunk of land that fills up over time.

![Day view, Jul 27 2021: an empty 6x6 grass plot with a single flowering bush in the corner, 10 minutes focused, planted-vs-withered counters in the bottom right (1 / 0)](images/forest/ts-2394.png)
*One bush per session. The empty grid signals how much more you could plant. Below the plot: time-of-day bar chart.*

![Week view, Jul 25–31 2021: same isometric plot, weekly bar chart underneath showing "Most Focused at 17:00 every day in general"](images/forest/ts-2408.png)
*Aggregates a week's plantings onto one shared plot — the forest is cumulative, not per-day.*

![Month view, Jul 2021: same plot, monthly bar chart, "Most Focused Day of The Week: Tue"](images/forest/ts-2409.png)
*Month aggregation. The visualization stays a forest plot — never switches to abstract numbers as the primary view.*

![Year view: tag filter modal — Unset / Work / Study / Social / Rest / Entertainment, "8 option(s) selected" with Confirm CTA](images/forest/ts-2410.png)
*Tag filter selectable for analytics. Per-tag stats let you ask "how much did I actually study this year?"*

![Marketing render: a finished forest — multiple species, even some tiny treehouses with people inside the plot](images/forest/site-forest.png)
*The aspirational endgame: a dense, varied plot. Treehouses (visible in older versions) represent friend sessions completed together.*

---

## Multi-year achievement / showcase view

![iOS App Store: "Grow Your Achievement" — 4 isometric forest plots (winter trees / spring florals / autumn maples / cherry blossoms with sheep grazing) overlaid for 2025](images/forest/ios-en-3.jpg)
*The forest plot can be re-skinned with seasonal themes; long-term users accumulate multiple plots, each visually distinct. This is the screenshot that sells the "look how much I've focused" identity.*

---

## Real Tree planting (Trees for the Future)

The signature feature — and the moral hook.

![iOS App Store: "Your Focus Grows Real Trees" — full-bleed photo of a smiling child clutching a tree seedling in a sapling pot. "Real Forest" panel: 5 by you / 52 by friends / 1,954,554 by everyone. Current Tree Planting Partner: Trees for the Future logo](images/forest/ios-en-7.jpg)
*"Photo courtesy of Trees for the Future." This shifts the value prop from gamification (collect species) to ethical (you literally fund reforestation in Sub-Saharan Africa). The three-number split (you/friends/everyone) frames focus as both personal achievement and collective impact.*

![Partner logo: Trees for the Future](images/forest/site-tff-logo.png)
*The real partnership; spending ~2,500 in-app coins triggers Forest to pay TFTF to plant one real tree.*

---

## Timeline (chronological session log)

![Timeline view: "Today / Jul 27" header, vertical timeline with two events — "17:44 Successfully planted a 10-minute Bush" (with a card showing the tree, time range, and Work tag) and "17:34 Bush planted." dot below](images/forest/ts-2420.png)
*Card-based vertical timeline anchored by colored dots. Each card shows the tree image, start–end time, duration, and tag — feels like an Instagram story for your focus sessions.*

---

## Tags

![Tag picker: full-screen Tags screen with "Search or create tags" field + default tags Work / Study / Social / Rest / Entertainment / Other / Sport, each with a colored dot](images/forest/ts-2419.png)
*Custom tag colors drive the donut/pie chart in stats. Tags are global (not per-session) and create-on-the-fly.*

---

## Stats / focus time charts

![Weekly stats: "See Your Focus Improve" — Day/Week/Month/Year segmented control, "Total focused time: 25h 30m," a 7-bar chart peaking at Thursday 360m, scrolled below: donut Tag Distribution (Study 55%, Exercise 23%, Meditation 18%)](images/forest/ios-en-5.jpg)
*Forest's stats panel is honest dataviz with brand greens — bar chart with a labeled max bubble (360m), donut with category labels in cartoon speech-bubble pills.*

![Day stats: empty plot top, "Focused Time Distribution — Total focused time: 10 mins" 24-hour bar chart with a single spike at 17:00–18:00, dashed baseline below the bars](images/forest/ts-2405.png)
*Same chart template at day granularity. Dashed baseline highlights how little of the day was actually focused — designed to make you feel the deficit.*

---

## Achievements

![Achievements list: Novice Planter (4 hrs) / Apprentice Planter (3 days) / Adept Planter (7 days) / Expert Planter (15 days) / Green Thumb (30 days) / 3-7-30 Days in a Row / Planting Group](images/forest/ts-2411.png)
*Tiered, locked icons (all in monochrome until earned). Each achievement is named with a planter-rank metaphor and shows progress (0/4, 0/3 etc).*

![Achievement detail modal: "Novice Planter — Total focused time reaches 4 hours (0/4)" with reward × 200 coins and grayed "Get Reward" button](images/forest/ts-2412.png)
*Color icon, progress bar, fixed coin reward. "Get Reward" only enabled at 100%. Explicit reward magnitude (200 coins) primes the player.*

![Achievement detail: "Apprentice Planter" with red ring + trowel icon, × 300 coins](images/forest/ts-2413.png)
*Same template, different icon color/illustration for every tier — gives each achievement a distinctive trophy-feel.*

![Achievement detail: "Adept Planter" (potted sapling icon, × 400)](images/forest/ts-2414.png)

![Achievement detail: "Expert Planter" (water-drop icon, × 500)](images/forest/ts-2415.png)

![Achievement detail: "Green Thumb" (hands cupping seedling, × 1000)](images/forest/ts-2416.png)
*Note how coin rewards compound: 200 → 300 → 400 → 500 → 1000. The biggest payouts are at 30 days, anchoring long-term retention.*

![Achievement detail: "3 Days in a Row" (calendar icon, 1/3 progress filled, × 100)](images/forest/ts-2417.png)
*Streak achievements layered on top of cumulative-time achievements. Forest tracks both flavors of consistency.*

---

## Side navigation (information architecture)

![Side drawer: avatar at top, then Forest / Timeline / Tags / Friends / Achievements / Store / Real Forest / News / Settings, "Seekrtech" wordmark at bottom](images/forest/ts-2404.png)
*Nine destinations in a left drawer, each with a custom outlined icon. Notable: "Real Forest" and "Store" are top-level — Forest treats environmental impact and the coin economy as first-class features, not tucked away.*

---

## Plant Together / Friends Room

![iOS App Store: "Stay Motivated with Friends" — green full-bleed background, four avatar chips of users at the top, "Let's Stay Focused!" copy, the central tree-in-bowl badge, "Group Project" tag pill, 57:29 counting down, dimmed "Give Up" button](images/forest/ios-en-6.jpg)
*The friend room takes the same single-tree-on-green canvas and just adds four avatars at the top. Everyone shares one tree; one quitter means everyone's tree dies. Pure social-pressure design.*

---

## Block apps / App Allow List

![iOS App Store: "Block Apps, Scroll Less" — a Block List card showing Instagram/TikTok/Threads/WhatsApp/Snapchat/Youtube/Messenger/X icons ("8 Apps"), Schedule (From 8:00 To 17:00, M-F selected), Pause toggle, big "Block" CTA at bottom](images/forest/ios-en-2.jpg)
*Newer Allow/Block List feature: pick up to 8 social apps, schedule M–F 8am–5pm. Different from the in-session "Deep Focus" — this is an always-on screen-time policy independent of any active tree.*

---

## Reset Your Mind (breathing mini-module)

![iOS App Store: "Reset Your Mind" — green gradient background, anthropomorphic round leaf-character with closed eyes (the "Forest pal"), "Breathe in" with progress bar above, page-indicator dots beneath](images/forest/ios-en-4.jpg)
*A bolted-on breathing meditation feature. The mascot is a cuter, rounder evolution of the seedling — Seekrtech expanding past the tree metaphor toward generic mindfulness.*

---

## Settings & Account

![Settings: Account section (templateshake / templateshake@gmail.com profile chip, Gift Box, "Invite Friends and Get Rewards Special" badge, Sync just now), Planting and Timer (Custom Phrases / Keep Screen On / Extend Time Limit to 3hr), Forest Overview (First Day of Week, Beginning time of day, Display in Hours, Don't Expand Forest Land Unless it's Full, Arrange Trees by Planting Time)](images/forest/ts-2398.png)
*Three settings groups visible: Account (with prominent "Invite Friends" reward callout), Planting and Timer (power-user toggles), Forest Overview (visualization preferences).*

![Settings continued: Social and Friend (Hidden from Global Ranking, Allow Friend Requests Sent Through Profile, Allow "Plant Together" Notifications), Sound and Notification (Planting Reminder, Sound Effect, Notification), Other (Change Language English, Store Data to HealthKit, Connect Only on Wi-Fi, Automatically Send Usage and Crash Reports, App Allow List)](images/forest/ts-2402.png)
*Granular privacy/notification controls — Forest exposes "Hidden from Global Ranking" as a first-class privacy toggle, signaling the leaderboard is real and ranked.*

![Settings — About Forest: v4.42.1, FAQ and Support, Rate us, Privacy Policy, Core Concept link. "About Us" — SleepTown, WaterDo, Your Personal Flower, Wallpaper Generator (Seekrtech's other apps), Seekrtech wordmark footer](images/forest/ts-2403.png)
*Cross-promotes the Seekrtech app family at the bottom of Settings — quietly funnels Forest's huge audience into sister apps.*

![Sign-up modal: Your Name / Email / Password / Password Confirmation, ToS checkbox, big green "Sign Up" CTA over a dimmed Settings backdrop](images/forest/ts-2396.png)
*Account creation is a centered card over the settings page. Filled state example:*

![Sign-up filled in: name "templateshake" email "templateshake@gmail.com" with ToS checked](images/forest/ts-2397.png)
*Notice how the green "Sign Up" button is darker/active only when conditions met — visual state feedback.*

---

## Diagnostics consent (legal/privacy UX)

![Modal: Diagnostics and Usage — "The information enables us to resolve issues and help improve Forest." Refuse (red) / Accept (green) buttons](images/forest/ts-2383.png)
*Red/green binary buttons rather than the iOS-default neutral pair. Forest doesn't dark-pattern this — Refuse is just as visually prominent as Accept.*

---

## Marketing / scenario illustrations

How Forest pitches itself when storytelling the use case:

![Scenario 1: top-down desk illustration — iMac, keyboard, mouse, phone face-down with Forest active. "Working"](images/forest/site-scenario1.png)

![Scenario 2: top-down desk illustration — desk lamp, open book, coffee, phone with Forest active. "Studying"](images/forest/site-scenario2.png)

![Scenario 3: top-down dinner table — wine bottle, two bowls of pasta, two phones face-up with Forest running. "With Friends"](images/forest/site-scenario3.png)
*The third illustration is the most distinctive — it sells social use (don't be the rude one looking at your phone over dinner) and is paired with the multi-phone Plant Together feature.*

---

## Marketing icon library

![Intro 1: yellow halo + dirt bowl + seedling (the planting badge)](images/forest/site-intro1.png)

![Intro 2: yellow halo + dirt bowl + low-poly pine (the grown badge)](images/forest/site-intro2.png)

![Intro 3: yellow halo + dirt bowl + dead twig (the withered badge)](images/forest/site-intro3.png)
*This three-state badge system (seed → grown → withered) is reused across every onboarding and FAQ page. The yellow halo is the brand's "tree state" container — instantly recognizable in any context.*

---

## Design language & takeaways

**1. Loss aversion is the entire product.** The withered-tree screen and its persistence in the forest plot is a Kahneman/Tversky textbook execution. Every other gamification app rewards good behavior; Forest *punishes* bad behavior by destroying something you watched grow in real time, then leaves the corpse on your land forever. The dead tree is more memorable than the live one — that's the design.

**2. The forest itself is the long-term progress visualization.** Instead of "you've focused 47 hours this month" (a number), Forest gives you an isometric plot of land covered in things you grew. It's screenshot-able, identity-forming, and grows visibly even on a bad week. Tend should consider what's the equivalent "single image of my year of consistency" — a number on a stats screen isn't it.

**3. One screen, one job.** The home/timer screen has effectively three interactive elements: the tree (tap for species), the time dial (drag to set duration), and the Plant button. No tabs, no nav chrome — the whole nav lives in a hamburger drawer. Compare to most productivity apps that show 5 tabs and 12 buttons on the home screen.

**4. Real-world stakes graft an ethical layer onto a game.** "Your focus grows real trees" gives users moral cover for hours spent in a gamified app. The Trees for the Future partnership transforms what could be guilt-inducing screen time ("I spent 8 hours playing tree game") into virtue ("I funded 12 real trees in Senegal"). A productivity competitor without a real-world payoff feels strictly inferior on this axis.

**5. Social pressure as opt-in difficulty mode.** "Plant Together" rooms — where one friend leaving the app kills *everyone's* tree — turn focus into a small-stakes social contract. This is harder, scarier, and more effective than solo accountability. Friend rooms also generate viral group photos / shared trees.

**6. The coin economy gates two things: aesthetics and impact.** Coins unlock new tree species (cosmetic), new ambient sounds (cosmetic), AND fund real trees (impact). That dual sink keeps the economy honest — you can't accidentally hoard. Premium users get coin boosts but the loop still works free-to-play.

**7. Mascot-free, low-poly art direction.** Until the recent breathing module, Forest avoided characters entirely. Trees, bowls, soil — no narrator avatar, no Duo-the-owl. The low-poly chunky tree style is so distinctive it's instantly identifiable in a thumbnail. The art is friendly without being childish, which lets adults use it at work without embarrassment.

**8. Seasonal/yearly forest plots = built-in screenshot moment.** The "Grow Your Achievement" multi-plot screen (winter pines / spring florals / autumn maples / cherry blossoms with sheep) is the screenshot people share on social media at year-end. It's also a feature that *requires* longevity — you can't fake a 4-season forest. That's a design that doubles as a retention mechanic.
