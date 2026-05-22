# Finch — Visual UX Research

Finch: Self Care Pet (by Finch Care PBC) is a $30M+ ARR self-care app built around a single inverted premise: the user does the wellness, the pet receives the reward. Players hatch a baby "birb" (Piper, Skittles, Sparkles — every user names their own), then complete real-world micro-tasks (drink water, breathe, journal, stretch) to power up the bird's daily "adventure." The UI is the most aggressively soft, pastel, low-pressure interface in the wellness category: rounded illustrations, oversized green CTA buttons, friendly all-lowercase microcopy, no streaks-as-punishment, and a relentless reframing of self-care as "caring for Piper." The catalogue of features is enormous (goals, reflections, breathing, soundscapes, movements, quizzes, first aid kit, micropets, cross-stitch, tree town friends), but every entry point routes back to the home screen where the bird stands in a parallax forest and waits for you. Below: a tour of ~80 screens covering onboarding through paywalls.

---

## Onboarding & pet hatching

The onboarding leads with the pet, not with feature copy or sign-in. Within the first three taps you're picking an egg color, naming a bird, and reading its first message.

![Egg selection screen: 6 pastel speckled eggs arranged around a grey baby Finch with the headline "Choose your Finch Egg! Finches are lively, social, and inquisitive. They symbolize energy and brighter days ahead." A full-bleed green "Hatch egg" CTA pins the bottom.](images/finch/sd_01.webp)

![Pronoun selection ("You hatched a birb! Your birb's pronouns") with three large pill rows — he/him, she/her, they/them — each with a heart icon that fills pink when selected. Onboarding starts inclusive by default.](images/finch/sd_02.webp)

![Returning-user branch: a single grey baby bird centered, with the question "Have you used Finch before?" and two emoji-prefixed options — "🍼 No, this is my first time!" and "☕ Yes, but I'm starting fresh." Coffee-cup emoji for "starting fresh" is a small but emotionally accurate detail.](images/finch/sd_03.webp)

![Pronoun selection (Android variant) showing the same flow with a purple speckled egg above the prompt. Active radio uses a filled purple heart with a check mark.](images/finch/utd_08.jpg)

![Naming flow: the baby Finch tilts its head with a "?" while delivering its first line of dialogue — "Cheep cheep, thanks for hatching me. It's so much brighter out here! But what is a 'name'?" — followed by two response buttons that double as a values check ("A name is how you identify yourself" vs "A name is a word others use to get your attention").](images/finch/mu_02_name.jpeg)

![Naming reveal: bird hugs a red heart while confetti falls. "I am Skittles, hear me cheep!" Two stat callouts appear — "Skittles gained +0.2 Compassion" and "Skittles found +103 Rainbow Stones." Personality stats are introduced from minute one.](images/finch/mu_03_newbird.jpeg)

![Generating-goals loading screen: the bird animates inside a green ring with the copy "Generating your self-care goals with Piper…" — the loading state is anthropomorphized as the pet doing the work, not a spinner.](images/finch/sd_06.webp)

---

## Home screen & daily energy

The home screen is a vertical stack: pet in a parallax forest scene up top, then a colored "energy" progress bar with the bird's name and current adventure day, then a scrollable list of today's tasks. A floating tab bar at the bottom (Home / Quests / Shop / Friends / Piper) plus a "+" FAB houses every activity.

![Marketing tile featuring a baby Skittles standing alone in a green forest with the home screen overlay: hamburger menu top-left, sun overhead, energy widget top-right, "61st Adventure / 4 of 20" gold progress bar, then "4 goals for today!" with "Drink a glass of water" and "Sleep Reflection" task cards.](images/finch/appstore_02.png)

![Home screen, fresh user state: a baby grey Skittles stands in a forest. Below sit "Day 1 / Finchie Forest / 5 of 10" with the copy "Gain ⚡ energy for Skittles so she can go out and explore today!" — the loop is stated in plain language rather than buried in a settings menu.](images/finch/sd_04.webp)

![Full home screen with completed early-game state. Energy bar reads "1st Adventure / 0 of 15 / Gain ⚡ energy so Piper can go discover new things today!" Task cards: Get out of bed, Brush teeth, Wash my face — each with a 5⚡ reward badge and a green checkbox on the right. Five-tab bottom nav: Home, Quests, Shop, Friends, Piper.](images/finch/sd_07.webp)

![Home screen at night: same forest scene shifted to a deep purple night sky with a yellow moon and stars. The bird is sitting (not standing) on the grass. Top bar swaps a mailbox notification (1 unread) and shopping cart badge (1 sale). "Wind down for the night" section appears with Night Reflection, New Day New You, Wind Down Stretches cards. State is time-of-day-aware.](images/finch/mu_04_home.jpeg)

![Home screen, Android: "Baby Sassy / Day 1 / Finchie Forest" with one orange goal card ("be more mindful — clean the kitchen") in a Complete state, plus an "Afternoon reset" section listing Afternoon Reflection, Your Inner Voice, "Add a Tree Town neighbor," New Day New You, Yearly Look Forward. A "Shuffle" pill lets the user reroll suggestions instead of feeling locked in.](images/finch/utd_04.jpg)

![Same screen, scrolled higher to show the forest scene fully with the bird mid-screen and the energy bar attaching at the very bottom — illustrates how the parallax background covers most of the home view.](images/finch/utd_06.jpg)

![Home screen with a widget-coaching toast at the bottom — "You can find how to add the widget in settings." Notice how even the toast uses a soft rounded shape and lowercase tone.](images/finch/utd_07.jpg)

---

## Self-care tasks list & completion flow

Tasks are not check-boxes attached to goals — they are interpreted as "feeding" the pet. Completing a task earns energy and ends in a celebration animation.

![Tap-to-complete state: a goal card ("Drink a glass of water") with a green check tile on the right. The reward sits on the same row (5⚡), so the user can see the energy gain before they commit.](images/finch/mu_12_goalstoday.jpeg)

![Energy-fed celebration: the bird stands flexing in front of a sunny mountain scene, confetti raining down. "MAX" energy bar is filled to a glowing yellow lightning bolt. Copy: "Woohoo! Piper munched on Corn and energized for Day 1" and "Piper got +132 Rainbow Stones." Stones tumble out of the screen, currency animation included.](images/finch/sd_05.webp)

![Android variant of the energization celebration on a solid orange background. "Woohoo! Energized for Day 1 / Sassy finished munching on Bread and feels a little stronger! Sassy is ready to go exploring today to learn something new!" Bread loaf and bird illustration stacked vertically. Confetti animation throughout.](images/finch/utd_09.jpg)

![Empty goals state: a giant orange "+" tile next to the prompt "0 goals for today!" with a "Suggested by Finch" carousel below ("Drink a glass of water 5⚡, Set 3 priorities for tomorrow 5⚡"). The empty state is never accusing — it just offers gentle suggestions.](images/finch/mu_13_blankgoals.jpeg)

![Goals tab list: three custom goals visible with bird-themed reward icons — "Get out of bed 5⚡, Drink a glass of water 5⚡, Set 3 priorities for tomorrow 5⚡, Take a shower 5⚡." Each row has a left-edge color stripe matching its self-care area.](images/finch/mu_15_goalsscreen.jpeg)

---

## Goal setting

Goals are user-typed bullets with a rainbow word-highlighting effect (each noun/verb auto-styled in a different pastel color so the screen looks playful even when it's a chore list).

![Goal entry screen on Mar 16. Prompt: "What's most important for you to do tomorrow?" Below it three bullets reading "Take out the trash / Cook a meal for family / 3 push-ups." Keywords auto-tinted purple, magenta, etc. Bottom row shows running energy reward (12⚡), Cancel, and a big green "Done" CTA.](images/finch/mu_06_goalsetting.jpeg)

![Free-form goals list (no prompt, just bullets) — "Brush the cat / Vacuum upstairs / Complete all assignments on time" — same rainbow-keyword pattern, energy counter at 0⚡ until the user submits.](images/finch/mu_15_goalsscreen.jpeg)

![Suggested-goals tray with horizontal category chips: Suggested / Sleep / Exercise / Loved Ones. Each card has a labeled "intention" prefix above the goal text — "Be more mindful — Avoid using YouTube," "Build a kinder world — Make dinner for someone in need," "Declutter your life — Clean kitchen countertops," "Easy win for the day — Yoga." Framing turns a to-do list into a values exercise.](images/finch/mu_11_suggestedgoals.jpeg)

![Suggested-goals tray, Android, scrolled deeper. Notable copy: "We've all been there — Look in the mirror and say 'I can do it'," "Easy win for the day — Walk around the neighborhood," "Improve your sleep — Complete breathing exercise before bed." Soft sticky bottom button "Add 1 Goal" appears once a card is selected.](images/finch/utd_05.jpg)

![Goal-reminder configuration screen — pickers for days of the week, time of day, and a switch for "Notify me." Reminder copy reads in second-person and active voice: "Remind me to drink a glass of water at 8:00 AM every day."](images/finch/mu_16_goalreminder.jpeg)

---

## Journaling & reflections

Reflections are bite-sized journal prompts (3-5 bullets max) attached to a mood/time-of-day context. They are positioned not as journaling but as feeding the bird's "insights."

![Reflections entry: "Today, Mar 30 / Reflections" with two bullets — "Glad that someone helped out when my car broke down" and "I made it home safe from a trip." Same rainbow-keyword styling, energy counter and Done CTA at the bottom.](images/finch/mu_19_reflections.jpeg)

![Prompted reflection: "Today, Mar 31 / What distracted your mind from being present?" with one in-progress bullet "Felt upset when …" The prompt is gentle and present-tense.](images/finch/mu_19_reflections.jpeg)

![Past-year reflection: "Today, Mar 30 / What is something from the past year that Future You can draw strength from?" Empty bullet ready for input. Finch leans heavily on "future-you" framing — never "your past self failed."](images/finch/mu_18_pastyear.jpeg)

![Daily reflections list view with a top "Insights — Leaning positive ›" pill banner (sentiment-classified summary of recent entries). Below: "Mar 20 Sunday — The going is the goal." (Tagline of the day.) Two goal bullets, then three reflection rows tagged "Morning Reflection" with mood-emoji avatars — party-popper, neutral face, heart-eyes — each summarizing the entry in one phrase.](images/finch/mu_17_dailyreflections.jpeg)

![Reflection library tabbed by mood: Calm / Morning / Night / Big Picture / Energize. Cards: "A Step Toward Healing — Take baby steps forward 2+⚡, Feel Better — Give your mind positive nudges 2+⚡, Moment of Vulnerability — Spend 2 minutes to be honest with yourself 2+⚡, Regroup Time — It's okay to not feel okay. Reflect to regroup 2+⚡, Rant Zone — Sometimes you just need to write your troubles away 2+⚡, Gratitude Jar 2+⚡, Happiness Magnifier, Thoughts Dump, Work Cooldown (locked), First Impressions (locked)." Mixes free-form and CBT-style structured prompts.](images/finch/utd_02.jpg)

![Daily reflections marketing tile (in-store iPhone mockup): "Goals & reflections" with sample rainbow-highlighted entries. App-store framing reinforces journaling as a primary use case.](images/finch/mu_05_goalsreflections.jpeg)

---

## Mood check-in & insights

![Insights pill at top of the reflections tab — "Leaning positive ›" — taps into a sentiment-classified summary that aggregates recent reflections into a single calm verdict instead of a dashboard of charts.](images/finch/mu_17_dailyreflections.jpeg)

![Mental health quiz: "Over the last 2 weeks, how often have you been bothered by — Moving or speaking so slowly that other people could have noticed. Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual." Four labeled A-D options (Not at all / Several days / More than half the days / Nearly every day). This is the PHQ-9 depression instrument repackaged into Finch's pastel UI.](images/finch/utd_10.jpg)

---

## Breathing & "First Aid Kit"

Breathing exercises are bundled into a feature called the "First Aid Kit" — a panic-button entrypoint accessible from any screen.

![First Aid Kit screen with a teal helpline button top-right. Stack of cards: "3-3-3 Rule — Quickly ground yourself from anxiety 5⚡, 5 to 1 Technique — Engage your senses to slow down racing thoughts 5⚡, Rainbow Grounding — Find colors around you to ground yourself 5⚡, Anxiety Breathing — Help soothe the mind and body during high anxiety 10+⚡, Panic Breathing — Manage panic attacks with this simple exercise 10+⚡, Deep Dive — Managing your Triggers." Each row is a fully-iconified emoji + colored corner radius.](images/finch/appstore_04.png)

![First Aid Kit screen marketing illustration with a sad-looking dark-blue bird hugging a red heart above the phone mockup. Headline: "Self-care for every mood." Frames acute distress with the most cuddly imagery in the app.](images/finch/appstore_04.png)

![Panic Breathing exercise screen: deep purple background with three labeled circular dials — Inhale 4 sec Nose / Exhale 4 sec Mouth / Hold 5 sec. Explanatory body copy: "Brief breath holds on the exhale can quiet the nervous system and restore you to a calm state of mind. This technique reduces the likelihood of hyperventilation during times of panic." Footer warning: "Stop if you ever feel overexerted." A single white "Okay" CTA. Notable: the technique is explained, not just performed.](images/finch/mu_25_panicbreathing.jpeg)

![First Aid menu with onboarding red arrow pointing at the first-aid icon — a coach-mark moment that teaches users where to find emergency help. Background dimmed and dark blue. Eight stacked icon-labeled rows: First Aid, Act of Kindness, Soundscapes, Movements, Breathe, Quizzes, Reflections, Goals.](images/finch/mu_27_lockedbreathing.jpeg)

![First-aid library + soundscapes (Android): same cards from the appstore but with a dark navy backdrop, plus the next-page rows "Forest Soundscapes" and "Rain Soundscapes."](images/finch/utd_01.jpg)

![Locked breathing techniques screen — Focus Breathing, Unwind Breathing, Destress Breathing — each gated with a padlock icon. Free user sees four free + many locked. The cards use the same purple panel pattern as the active breathing screen.](images/finch/mu_27_lockedbreathing.jpeg)

![First Aid resources list (resources beyond breathing) showing crisis-line and grounding entries in the same card UI.](images/finch/mu_24_firstaidres.jpeg)

---

## Soundscapes

![Locked Soundscapes screen — multi-genre catalogue (Forest, Rain, City, etc.) with several premium-only entries shaded with padlocks. Layout mirrors the breathing catalogue exactly — Finch reuses one card pattern for ~6 different content libraries.](images/finch/mu_28_lockedsound.jpeg)

---

## Activities hub (the "+")

A floating + button on the home tab opens a vertical menu of every non-task activity, with arrow coach-mark.

![Quick-access menu fanned out over a dimmed home screen — First Aid (red), Act of Kindness (green leaf), Soundscapes (blue music note), Movements (pink walking figure), Breathe (purple wind), Quizzes (orange xoxo), Reflections (teal feather), Goals (green flag). Eight pillars of the product, all one tap away.](images/finch/mu_23_firstaid.jpeg)

![Activities hub, Android variant. Same eight items but with a "Backup your Finch data!" reminder card visible behind the dim, illustrating where the modal sits in the navigation stack.](images/finch/utd_03.jpg)

![Marketing image: "Mindful goals and exercises" with a phone showing a 2×4 grid of activity tiles (Goal Ideas / Reflections / Breathe / Quizzes / Soundscapes / Movements / Timers / Act of Kindness) plus a bottom "First Aid Kit" row. The pet floats above holding a pencil — every illustration has the bird interacting with the feature being sold.](images/finch/appstore_03.png)

---

## Quizzes (CBT-style & body image)

Finch ships clinical instruments (FAS body appreciation, PHQ-9, anxiety screens) wrapped in candy-bright styling.

![Body Appreciation Quiz intro screen — magenta-pink full-bleed background with a single waving-hand emoji. Body copy: "Measure body appreciation with FAS, a standardized scale used in clinical and research settings. Having a better appreciation for the functionality of the body can be helpful for self care." White "Start" CTA. Footer disclaimer: "For educational purposes." Soft-paywall style: the assessment is gated by emotional check, not a credit card.](images/finch/mu_20_bodyquiz.jpeg)

![Body Image Quiz question screen — same magenta, with a Likert-scale question and pill options ("Strongly disagree" → "Strongly agree").](images/finch/mu_21_bodyimg.jpeg)

![Body Appreciation Quiz results screen — score with brief interpretive copy and a "Save to history" pill.](images/finch/mu_22_quizscore.jpeg)

![PHQ-9-style anxiety question (Android) with A/B/C/D options described above. Standard mental-health screen logic, cute fonts.](images/finch/utd_10.jpg)

---

## Adventures / Microadventures

When energy hits MAX, the bird leaves on a multi-hour "adventure" and comes back with discoveries and stones. The adventuring screen acts as a low-pressure return-tomorrow nudge.

![Adventuring screen — bird shown walking sideways with a backpack across the green hills. "Adventuring… 7:19:54" countdown timer in a green pill. Copy below: "Come back later, or gain extra ⚡ energy to help Skittles return sooner!" — gives the user agency without demanding return. Below the timer: "Start your day" Morning Reflection / Sleep Reflection cards remain accessible.](images/finch/mu_07_adventuring.jpeg)

![Marketing tile: "Watch them grow day by day" with a pet wearing heart-shaped sunglasses and a donut floatie, music notes around it. Profile card overlay: "Kitty / He·Him · 423 Adventures / AGE 2 years, 2 months / FRIENDSHIP Soulmates ❤ / 3.6g 0.5cm 2.0cm". "Explore 100% of London 4/50 adventures" location progress bar at bottom. Adventures are tied to real-world cities.](images/finch/appstore_06.png)

---

## Pet stats & growth

The bird is a tamagotchi — weight, height, wingspan, "personality" all surface in a stats card. Visible aging is the long-term engagement loop.

![Baby Skittles stats card (Day 1, 3.1g weight / 0.9cm height / 2.9cm wingspan). Three primary action tiles — Edit profile, Change outfit, Tree Town. Below: heart count (28 ♥), energy total (74⚡), pen icon (43, journals written), flag (0, goals completed), cloud (1, adventures), dice (0). "Personality" section with emoji avatars (thinking-face, sunglasses-face) representing emergent traits.](images/finch/mu_08_babystats.jpeg)

![Same screen at Day 6 — "Toddler Skittles, 6.0g / 2.0cm / 5.0cm" now visibly blue and feathered. Heart, energy, journal, goal, and adventure counters have all grown. Tangible long-term progress.](images/finch/mu_10_toddlerstats.jpeg)

![Expanded baby stats (more counters) with the same emoji-driven personality preview at the bottom.](images/finch/mu_09_morebabystats.jpeg)

---

## Pet customization (outfits, accessories)

![Marketing tile: "Customize your pet's look" on a navy background with a confetti pattern. A baby Finch wearing a sleeping-cap-and-pink-tuxedo combo overlays a phone showing "Mr. Prickles' Shop / 50% OFF SALE / 450 stones." Hedgehog mascot in a top hat is the shopkeeper. The shop has its own brand identity inside the app.](images/finch/appstore_05.png)

![Bottom of the shop shows a horizontal scroll of recently-purchased items (cat hat, mushroom hat, bow) plus a "Rare refresh: 12:14:39" gacha-style timer. Stones currency (1277) sits top-right.](images/finch/appstore_05.png)

---

## Micropets & discoveries (collectibles)

![Marketing tile: "Meet and collect new micropets" — beach scene with the bird in a sunhat and sunglasses. Phone shows a grass-and-forest play area with a small lab-coat micropet labeled "Lab," a sleeping hedgehog, a snowman, etc., plus a 4×3 grid of micropet eggs/portraits ("12/30" collected). Pokémon-style collection with a wellness skin.](images/finch/appstore_07.png)

![Marketing tile: "Make new discoveries every day" — bird with a coconut drink on a beach. Phone shows a Discovery scrapbook with thumbnails labeled Food 45/76, Drinks 17/21, Books 38/41, Music 30/31, Movies 31/35, Toys 19/19, Desserts, Games, Shows. Discoveries earned by sending the bird adventuring.](images/finch/appstore_08.png)

---

## Stones (currency)

Rainbow Stones are gem-colored hexagons that fall out of every completed task and adventure. They drive shop purchases and the gacha-style "Rare refresh" pulls.

![Animation still: a single rainbow-hexagon stone tumbling down with a "171" counter in the top corner against a green forest backdrop. (Frame from the celebration-after-energizing screen — sd_05.)](images/finch/sd_05.webp)

---

## Friends / Tree Town

Friends features are present but never demanded — they require an explicit friend code exchange. No social graph imports.

![Tree Town entry visible in the home "Afternoon reset" stack: "Add a Tree Town neighbor — Who do you want to show support to?" with a small package-icon. The friend nudge is buried in a value-led prompt, not a banner.](images/finch/utd_06.jpg)

---

## Premium (Finch Plus) paywall — current

Finch is famous for its "soft paywall." The free tier is fully usable; premium gates extra outfits, extra discoveries, deeper soundscapes, and (importantly) bonus *insights*.

![Current Finch Plus screen (~2026): bright purple background, baby Skittles waving in the center, four floating premium-feature icons (golf flag, pen, cloud, X). Headline: "Try [PLUS] for free." Subhead: "Plus Users are 4x more likely to stick with their self care goals!" Two benefit blocks: "🔒 Unlock all 100+ exercises — Goals, quizzes, movements, breathing, reflections, soundscapes and more to come!" and "📈 More insights in Skittles's mailbox — Access The Skittles Times, Resolve Tribune, and Journey Post. See all history." Below: "7 day free trial, then $39.99 per year ($3.33/month)." White full-bleed "Start my 7-day free trial" CTA, with a quieter underlined "See all plans" beneath. Notable: no scarcity timer, no negative framing.](images/finch/mu_26_premium.jpeg)

![Paywall snapshot from late 2025: shows the trial timeline ("Today / Get instant access… / Day 5 / We'll remind you with a notification that your trial is ending. / Day 7 / You will be charged on Oct 17, cancel anytime before. / 100% Satisfaction Guaranteed! Full refund anytime, no questions asked."). The "we'll remind you with a notification" line is the iconic Finch trust move. Bottom: "Unlimited free access for 7 days, then $69.99 $39.99 per year (save 43%)" with the original price struck through. Footer: "Skip this one-time offer" and "Offer expires when you exit this screen!" (the only urgency Finch will allow itself).](images/finch/paywall_2025_10.png)

![Paywall variant (mid-2025, large iPhone resolution).](images/finch/paywall_2025_06.png)

![Paywall variant (early 2025).](images/finch/paywall_2025_03.png)

![Paywall variant (early 2026).](images/finch/paywall_2026_01.png)

![Paywall variant (most recent, 2026).](images/finch/paywall_2026_04.png)

![Win-back / one-time offer screen: bird in sunglasses eating a popsicle. "Biggest deal ever! One-time 43% OFF when you start your free trial now / Biggest discount ever—just for you & Piper." Single green "See one-time FREE offer" CTA. The pet shares ownership of the deal — "you & Piper" — even in the pricing screen.](images/finch/sd_07.webp)

![Win-back variant: minimalist white background, same sunglasses-popsicle bird. "One-time offer! 50% OFF when you start your free trial now / Biggest discount ever—just for you & Sparkles." Green "See FREE offer details" CTA. Different pet name shows the dynamic insertion.](images/finch/sparrow_03.png)

![Original ~2022 paywall (Adapty/historical archive) — shows how the layout has evolved while keeping the same warm purple palette.](images/finch/paywall_2022.png)

![Adapty archive variant 1.](images/finch/paywall_adapty1.webp)

![Adapty archive variant 2.](images/finch/paywall_adapty2.webp)

---

## Premium-gated content

![Locked-breathing exercises view (Focus, Unwind, Destress) with padlock badges. The gate is shown in-context — not behind a paywall sheet — so the user sees what they're missing without being interrupted.](images/finch/mu_27_lockedbreathing.jpeg)

![Locked-soundscapes view with the same in-context padlock pattern.](images/finch/mu_28_lockedsound.jpeg)

![Premium upsell card on the home tab.](images/finch/mu_14_plusscreen.jpeg)

---

## App icon & branding

![Marketing splash: "Meet your new self-care best friend" — pink-yellow bird, rabbit-suited duck, and red-haired doll character peeking from a meadow. Establishes the warm pastel palette and the "best friend" positioning.](images/finch/appstore_01_home.png)

![Same hero from the secondary store carousel (MWM/Marketing variant).](images/finch/mwm_01.png)

![Marketing variant: "A unique companion who grows with you" — large grey adult Finch and small grey baby Finch behind the home-screen phone mockup. Establishes the "grows with you" core promise.](images/finch/mwm_02.png)

![App icon (round, white-on-pink Finch silhouette) at promo crop.](images/finch/mu_01_appicon.jpg)

---

## Mailbox / The Skittles Times (Premium insights)

![The premium upsell explicitly references "Skittles's mailbox / The Skittles Times, Resolve Tribune, Journey Post." Visible in the paywall image above (mu_26_premium.jpeg) — long-form, newspaper-themed insights addressed *to the pet, about the user*. The user's data is anthropomorphized into mail the pet receives.](images/finch/mu_26_premium.jpeg)

---

## More marketing surface (App Store screenshots)

![App Store mockup #4: "Self-care for every mood" — bird hugging a red heart, with the First Aid Kit content list visible in the phone mockup.](images/finch/mwm_04.png)

![App Store mockup #5: "Customize your pet's look" — Mr. Prickles' Shop.](images/finch/mwm_05.png)

![App Store mockup #6: "Watch them grow day by day" — Kitty's pet profile.](images/finch/mwm_06.png)

![App Store mockup #7: "Meet and collect new micropets" — beach micropet grid.](images/finch/mwm_07.png)

![App Store mockup #8: "Make new discoveries every day" — Discovery scrapbook.](images/finch/mwm_08.png)

---

## YouTube review thumbnails (external context)

![Honest review and walkthrough thumbnail (Vlogmas 2025).](images/finch/yt_01_vlogmas.jpg)

![Finch App Review (2025) — best self-care pet thumbnail.](images/finch/yt_02_review2025.jpg)

![Finch App Review 2025: Pros and Cons.](images/finch/yt_03_proscons.jpg)

![Finch App Review: Why Android Users Are Paying 4× More.](images/finch/yt_04_android4x.jpg)

![Finch App Review 2025 — The Most Wholesome Self-Care App?](images/finch/yt_05_wholesome.jpg)

![Finch App Review — Is It Worth It? (2026).](images/finch/yt_06_2026.jpg)

![Finch App — 2025 Recap (YouTube Short thumbnail).](images/finch/yt_07_recap.jpg)

---

## Growth & retention illustrations (3rd-party analysis)

![Annotated Finch growth/retention diagram from a SparrowApps newsletter — overlay context on the dopamine loop.](images/finch/sparrow_01.png)

![Annotated comparison/segmentation chart from the same article.](images/finch/sparrow_02.png)

![Mid-2025 paywall captured in 3rd-party teardown.](images/finch/sparrow_04.png)

![Win-back popup ("One-time offer 50% OFF") in the 3rd-party teardown.](images/finch/sparrow_05.png)

![Final teardown frame showing the trial-timeline paywall pattern.](images/finch/sparrow_06.png)

---

## Design language & takeaways

- **Anthropomorphic displacement.** The single highest-leverage UX choice: every self-care reward is framed as something *the pet* receives. "Piper got +132 Rainbow Stones" instead of "you earned points." Users get to be kind to a bird that secretly is them, which sidesteps the shame loop most wellness apps fall into.
- **Soft, lowercase, no-blame microcopy.** "Come back later, or gain extra ⚡ energy to help Skittles return sooner!" — never "Don't miss out!" Empty states say "0 goals for today" without judgment; missing a day shows the pet sleeping, not crying.
- **One illustration system, used everywhere.** Rounded pastel icons, blob-shadow under every object, pencil-stroke-free vector style. Even the PHQ-9 depression screen and the body-image FAS instrument inherit the same candy-bright treatment — clinical content does not switch to a serious visual register.
- **Identity is non-negotiable on day one.** Pronouns (he/him, she/her, they/them) are the *second* screen of onboarding, before goals or interests. Inclusivity is structural, not a settings toggle.
- **Activities catalog reuses a single card pattern across ~10 surfaces.** Breathing, soundscapes, movements, quizzes, reflections, first-aid kit, micropets — all rendered as colored-icon + title + subtitle + ⚡reward + lock-icon. Once a user learns the shape, every new content type is free to learn.
- **Aggressive feature breadth, lazy feature discovery.** A FAB-style "+" on the home tab hides 8 entire feature pillars. Onboarding never tours them; users find them organically as the bird grows. The home screen stays minimal even though the app has 100+ exercises.
- **Soft paywall with explicit trust beats.** The trial timeline screen tells you exactly when you'll be reminded and exactly when you'll be charged, and adds "100% satisfaction guaranteed — full refund anytime, no questions asked." Cosmetic-only premium and "Plus users 4× more likely to stick with goals" is the only quantified pitch.
- **Currency without leaderboards.** Rainbow Stones drop after every interaction but there is no global rank, no comparison to friends, no "you're behind." Friends require explicit code exchange. The social loop is opt-in support, not competition.
