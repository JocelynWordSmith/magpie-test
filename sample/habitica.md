# Habitica — Visual UX Research

Habitica (formerly HabitRPG) is a free habit tracker that wraps a standard to-do list inside a 16-bit-style RPG. Players create a pixel-art avatar, then earn XP, gold, gear, pets, and mounts by checking off real-world Habits, Dailies, and To-Dos. Missing Dailies damages the avatar's HP; "Death" wipes XP and one piece of gear. Multiplayer (Parties, Quests, Challenges) makes accountability social: party members take collateral damage when others miss tasks, and they collectively chip a boss's HP by completing real work. The audience skews toward gamers, ADHD/neurodivergent users, and people for whom "checkbox dopamine" alone doesn't stick — i.e., users who need narrative consequences attached to behavior.

Visually, Habitica is the rare productivity app that fully commits to a non-utilitarian aesthetic: chunky pixel sprites, JRPG-style stat bars, brown wood market UIs, and a SNES-era serif display font are non-negotiable parts of the brand. The product trade-off is density: even on mobile, every screen carries an HP/XP/MP triple-bar header, a gem/gold ledger, and a 5-icon bottom nav.

---

## 1. Marketing positioning & overall mood

These are the screens Habitica's team chose to lead with on the App Store and Play Store — useful as a statement of what the brand believes is most important to show first.

![App Store hero shot: 8-bit Editor's Choice badge plus a Dailies list with color-coded difficulty bars on the left edge of each row — establishes the "RPG meets task list" pitch in one frame.](images/habitica/01-appstore-mockup-overview.png)

![Play Store hero variant: same Dailies list, but the level header is exposed showing avatar portrait, three stacked progress bars (HP red, XP gold, MP blue), Level 53 Rogue class, and a gem/gold/streak ledger.](images/habitica/25-playstore-screenshot.png)

![iPad-sized version of the same hero — note the screenshot is intentionally tilted at ~10° in the marketing comp, a treatment Habitica uses across all tablet store assets.](images/habitica/06-appstore-ipad-mockup.png)

---

## 2. Home dashboard — Habits / Dailies / To-Dos / Rewards (mobile)

The four-tab task model is Habitica's core IA. Each tab is reached via the bottom tab bar (Habits, Dailies, To-Dos, Rewards, Menu).

![Habits tab on mobile: avatar tile (lavender ground tile, Level 3 character), full-width HP/XP/Mana stacked bars, "Beginner Objectives" gamified-onboarding progress card with a 100-gold reward, then a list of habits each with a "+" and "-" pill on opposite sides — tapping + reinforces a good habit, tapping - logs a bad one. The yellow "+" indicates a habit currently rated "weak" by Habitica's red-yellow-green color system.](images/habitica/40-geek-habitica-habits-new.jpg)

![Dailies tab: same persistent header, but tasks are now checkbox-prefixed. Bottom-of-screen toast confirms a single check earned +6.00 XP, +1.00 mana, +1.02 gold, and +0.98 item drop — Habitica surfaces the exact stat math on every check-off, which is unusual versus competitors that hide it.](images/habitica/40-geek-habitica-dailies-newest.jpg)

![To-Do's tab: visually identical row pattern to Dailies but with a single one-off "Write Assignment" task. The shared layout across all four task types reduces learning cost.](images/habitica/40-geek-habitica-to-do-new.jpg)

![Mobile Dailies list zoomed in showing color-coded difficulty bars (red/orange/yellow/teal) on the LEFT edge of each task row — the same color the user picked at task-creation time. Checkboxes are square, large-tap targets; a "1/3" chip on one row shows checklist subtask progress.](images/habitica/02-appstore-tasks.png)

![Alternate Dailies layout combining multiple task types with checklists expanded inline ("Household chores" → Buy Groceries / Cut the grass / Vacuum). Note the bottom-tab bar peeking with To Do's and Rewards labels visible — confirms 5-tab nav.](images/habitica/22-playstore-screenshot.png)

![Web app: the four-column dashboard that desktop users see — Habits | Dailies | To Do's | Rewards laid out side-by-side. Each column has its own filter chips (All / Weak / Strong; All / Due / Not Due; Active / Scheduled / Complete; All / Custom / Wishlist). This horizontal layout is impossible to replicate on mobile and is the main reason power-users prefer the web app.](images/habitica/41-bipolarcoaster-screenshot.png)

---

## 3. Task creation flow

![Mobile "New Daily" sheet: title, notes, checklist sub-items, then a 4-pill DIFFICULTY selector (Trivial / Easy / Medium / Hard) with sparkle icons growing in size — gamified version of the standard "priority" picker. Scheduling shows Start date / Repeats / Every / weekday letters as toggle bubbles.](images/habitica/03-appstore-character-creation.png)

![Same flow on a more recent build with a richer "Flexible scheduling" pitch: Title "Go for a short walk", notes "At least 15min - a silly little walk is good for you!!!!", Difficulty as four star clusters where "Hard" is selected (4 stars), Repeats Daily, Every 1 Day. Note that Habitica encourages playful self-talk in the notes field.](images/habitica/30-playstore-screenshot.png)

![iPad-sized task creation modal floating over a blurred Dailies background — shows the FULL form on one screen: Title, Notes, Checklist, Difficulty pills, Scheduling (Start date, Repeats, Every, weekday toggles S M T W T F S), and a "New Tag" affordance at the bottom for cross-cutting tag-based filtering.](images/habitica/08-appstore-ipad-creation.png)

---

## 4. Avatar & character creation

![Character creation flow on iPad — a horizontal carousel of skin tones (six options), then hair color (eight options), then a sprite preview that animates. Crucially Habitica was one of the first habit apps to ship wheelchair-using avatars, custom skin tones including bright green/blue (for users who don't want a "realistic" avatar), and non-gendered body shapes.](images/habitica/08-appstore-ipad-creation.png)

![Outfit/skin set promo art from Habitica's blog: three avatars in coordinated themed outfits (winter coral, ice-shaman, polar bear) demonstrating the pet+mount+armor+background stacking. Each is purchasable separately.](images/habitica/51-skins-customization.png)

---

## 5. Stats & header (HP, XP, MP, gold, gems, streak)

![Permanent header pattern used on every task screen: avatar portrait at top-left (left-half lavender ground tile = standing pose; right-half darker = idle), Health bar (red, currently 50/50), Experience bar (gold, partial), Mana bar (greyed-out with "Unlocks at level 10" label — Habitica gates the magic system until L10). Right-aligned: Level 3 chevron, gem count (0), gold (M for million? — here just 18).](images/habitica/40-geek-habitica-habits-new.jpg)

![Wear OS / smartwatch stats view: a single circular gauge with three concentric arcs (HP red outermost, XP gold middle, MP/level blue inner), with the raw numbers 41/50, 50/620, 35/68 in pixel-font numerals. Habitica also ships a glanceable wearable companion.](images/habitica/24-playstore-screenshot.png)

![Wear OS reward summary: pill-shaped chips showing XP (14), gold (2), gems (.5), item drop (.6 sword) earned for a single check-off — a tighter expression of the same toast that appears on mobile.](images/habitica/31-playstore-screenshot.png)

---

## 6. Class system (Warrior / Mage / Healer / Rogue)

![Promotional pixel art showing all four classes mid-action: Mage in witch-hat casting an ice spell on a frozen pool, Necromancer-style undead enemy, Healer with halo of healing icons, Rogue with stealth dagger. Classes unlock at Level 10 and grant unique skills that consume Mana — a deliberate gating mechanism to keep new users from being overwhelmed.](images/habitica/50-class-casting-spells.png)

---

## 7. Rewards screen & loot loop

![Rewards tab on mobile: a centered animated treasure chest with a "+1" gem-encrusted sword pulsing on top, two flanking chests carrying a potion and a runestone. The card list below mixes Habitica's built-in rewards with USER-DEFINED rewards: "Watch 15 min of videos on your favorite app :)" for 3 gold, "Buy a coffee" for 20 gold, "Grab some take out — You deserve to treat yourself a lil!" for 100 gold. The killer-feature is this dual-economy where users can convert in-game gold into permission to do real-life indulgences.](images/habitica/21-playstore-screenshot.png)

![iPad version of the same screen, showing the same self-defined rewards but in landscape proportions — emphasizes that the "buy yourself a coffee" pattern is Habitica's signature mechanic.](images/habitica/09-appstore-ipad-rewards.png)

![Equipment shop ("Market" — NPC: Alex the shopkeeper, drawn into a Halloween-themed wooden storefront with pumpkins, candelabra, and bat decorations). Equipment is grouped by class with locked/unlocked states: 1-gold beginner sword unlocked, 20-gold short sword locked behind level/quest, all the way up to 120-gold legendary blades. Locked items use a grey lock-icon overlay; pinned items get a pushpin icon top-left.](images/habitica/40-geek-habitica-shop-new.jpg)

![Time Travelers / Quest Shop variant — NPC "Ian" in front of a fall-themed market stall offers "Discounted Quest Bundles" that rotate every 16 days. Below: an "Unlockable Quests" grid where locked items show "7 Check-Ins" or "22 Check-Ins" requirements — Habitica gates content behind login streaks as a retention mechanic.](images/habitica/40-geek-habitica-bundle-new.jpg)

---

## 8. Check-in rewards & daily-loop hooks

![Modal that appears after consecutive daily check-ins: dimmed parent screen, dark sheet says "You unlocked a Check-In Prize!" with a "Bardic Robes" pixel sprite as the reward. Bottom CTA is a single bright-purple "See you tomorrow" button — explicitly nudging the user to come back the next day. "Next prize in 1 Check-Ins" countdown drives retention.](images/habitica/40-geek-habitica-login-new.jpg)

---

## 9. Pets, mounts & collection

![Pets & Mounts grid: a 4-column grid of pixel-sprite tiles labeled "Veteran Wolf", "Hydra", "Mammoth" (greyed = not yet collected), "Gryphatrice", "Phoenix", "Royal Purple Gryphon" (greyed), "Mantis Shrimp", "Jackolope" (greyed), and so on. Counter at top right reads "65 / 480" — Habitica has nearly 500 collectibles, the long-tail collection mechanic that keeps engaged users locked in for years. SPECIAL PETS section is fenced off from common pets.](images/habitica/05-appstore-pets.png)

![Same Pets & Mounts page rendered larger on iPad — sprite art legibility is dramatically better at this size, and the grid expands to show more rows simultaneously.](images/habitica/11-appstore-ipad-pets.png)

![Marketing tile from the blog showing pet variety: bear sprite splashing through water with seashells, two pigs (parent and baby), and a sleeping cat with a hatched egg — Habitica's pets each have hand-drawn animation frames rather than auto-tinted color swaps.](images/habitica/60-tumblr-blog.png)

![Underwater-themed pet bundle: mermaid-warrior on a turtle mount, seahorse pet, and underwater-shaman fighting a whale-mount — illustrates the level of artistic investment in seasonal/themed bundles.](images/habitica/62-tumblr-blog.png)

![Winter-themed bundle: bird mage under a starry sky, candy-cane elf, holiday-shopping village, ornament-decorated warrior, snowy-otter sprite, and a snow-village sprite — Habitica refreshes themed art monthly.](images/habitica/72-tumblr-content.png)

![Spooky/Halloween bundle of four sprites — armored character, robed wraith, fire-warrior chief, and lantern-bearer — showing Habitica's monthly seasonal rotation of cosmetics.](images/habitica/76-tumblr-content.png)

---

## 10. Party, quests & raid bosses

![Party screen "Vice Awakens": a hero-sized boss banner of "Vice, the Shadow Wyrm" pixel art, a participation counter (3/10 Participating), a boss HP bar (gradient red→yellow→green, 1224/1500 HP), a bright orange "21 Damage Done" button, then a MEMBERS list. Each member row shows their avatar in a tile, username with leader/role chip, level, HP/XP mini-bars in red+blue. Critical UX detail: when YOU miss a Daily, OTHER party members take collateral damage — turning social accountability into a survival mechanic.](images/habitica/29-playstore-screenshot.png)

![Empty party state with onboarding: pixel art of a wizard, monk, druid and grim-reaper boss centered, then a "Play Habitica in a Party" headline. Single primary "Create a new Party" CTA in Habitica purple. A secondary "You're looking for a Party!" CTA in a green-outlined button lets users opt-in to a matchmaking pool.](images/habitica/40-geek-habitica-party-new.jpg)

![Party detail page (iPad/landscape): left rail shows the active quest "Vice Awakens" with party-member avatars and their levels, right column is a real-time chat thread with timestamps, mentions, and inline reactions like "[user] sent Blessing for the day" (a buff one party member casts on another). Threading and quoting are supported.](images/habitica/10-appstore-ipad-quests.png)

---

## 11. Challenges (curated task packs)

![Challenges discovery screen — three vertically stacked cards: "Daily Exercise Routine — Easy 10min exercises for the month" with 1,236 participants and 5 tasks / 10 prizes; "ADHD Tips and Tricks — Stay focused and productive" with 12,890 participants and 24 tasks; "Pomodoro time! Use the pomodoro method to work" with 589 participants. Each card previews the first 2-3 task names below ("Do 10 Push-ups", "Break down a large task"). Note green gem icon = entry-cost.](images/habitica/26-playstore-screenshot.png)

![Challenge detail page: a specific official Habitica challenge "Gaining Inspiration Points! (TAKE THIS Challenge — October 2024)" tagged Official with category chips (Creativity, Mental Health + Self-Care, Habitica Official). 7,142 participants, 10 gems prize. Description explains that runners-up get gems and ALL participants get a piece of the "Take This" armor set — Habitica partners with mental health nonprofits and creates challenges around their content.](images/habitica/40-geek-habitica-challenge-new.jpg)

---

## 12. Achievements & streaks

![Achievements list: stacked cards on a sunset-orange background. First card "Starting Objectives" shows a 50% progress bar with four locked badge slots beneath (representing partial completion of the onboarding achievement). Second card "3 Perfect Days" with a gold star coin centered in a burst of sparkles. Third card "21 Day Streak" with a coin showing the number 21. Habitica uses literal coins/medals as the visual language for achievements rather than icon-stamps.](images/habitica/27-playstore-screenshot.png)

---

## 13. Profile screen

![User profile — top card shows avatar in a lavender tile with red HP (50/50) + gold XP (30/75) bars beside it; "warrior - Level 3" label. Metadata rows: Username (nxtxleh), User ID (full UUID exposed by default), Member Since, Last logged in. BATTLE GEAR section lists 8 equipment slots: Head Gear / Head Accessory / Eyewear / Armor / etc. Profile transparency is high — full UUIDs are publicly displayed, a relic of the open-API origin.](images/habitica/40-geek-habitica-profile-new.jpg)

---

## 14. Smartwatch / Wear OS surface

![Wear OS task entry: large pill-shaped buttons stacked on a black background — "New Task" highlighted purple at top, then "Dailies (7)" and "To Do's (12)" as secondary pills. Calendar icon for Dailies, checkmark icon for To Do's. Glanceable, voice-control-friendly.](images/habitica/28-playstore-screenshot.png)

![Wear OS habits subview: same pill stack but each row shows the habit's +/- color circle (blue Drink water, orange Think negatively, green Clear inbox) so users can tap a single +/- without going into the phone.](images/habitica/23-playstore-screenshot.png)

---

## 15. Older Android / legacy UI reference

![Habitica's older Android UI (Wikipedia screenshot, circa 2017–18): purple-themed header with hamburger menu, avatar tile (Lvl 19 Rogue, Gloria B), then a 4-tab top bar (HABITS / DAILIES / TODOS / REWARDS) instead of bottom nav. Notable: floating action button is a "+" with a contextual sub-menu showing "New Habit / New Daily / New Todo / New Reward" as quick-add chips. The colored vertical strip on the left of each task is still present — color persistence is one of Habitica's longest-running visual conventions.](images/habitica/33-wikipedia-android.png)

---

## 16. Brand mascot & on-boarding tone

![Promotional pixel art tile combining mermaid-bear, mountain-moose, snow-fairy, and elf-with-moon: representative of how Habitica's blog/promo pages prefer to lead with stylized pixel illustrations rather than UI screenshots — the brand voice is "you're entering a game world", not "you're entering a productivity tool".](images/habitica/73-tumblr-content.png)

![Thanksgiving-themed pixel art with a harvest table, turkey, and three characters (kid in turkey costume, adult in turkey costume, elder farmer). Habitica regularly themes its art for US holidays — a community signal that the team is small, warm, and US-based.](images/habitica/78-tumblr-content.png)

![Frozen-knight class promo art used in blog posts — illustrates how Habitica leans into "you ARE the hero, your enemies are real" framing, not "you are a person managing tasks".](images/habitica/77-tumblr-content.png)

---

## 17. iPad / landscape rewards screen

![Rewards on iPad — vertical layout of the same chest + sword + reward list, but with extra breathing room around the sword art. The pixel-art sword's diamond gems are clearly visible at this size, demonstrating that Habitica's art holds up at scale.](images/habitica/04-appstore-rewards.png)

---

## Design language & takeaways

- **Aesthetic fully committed to 16-bit JRPG, not a thin theme layer.** Every UI element — the brown-wood market backgrounds, the gradient HP/XP/MP bars, the chunky pixel font for numerals, the diamond-gem currency icon — is consistent with a fictional SNES-era game world. This is rare in productivity apps and is Habitica's strongest differentiator. The trade-off: zero appeal to users who want a "clean" Notion/Things aesthetic.

- **Dual economy is the killer feature.** Users earn in-game gold that can be spent on user-defined real-life rewards ("Buy a coffee — 20 gold", "Grab some takeout — 100 gold"). This turns productivity into a saving-and-spending loop rather than a pure-grind loop. Most habit-tracker competitors only offer in-app rewards.

- **Permanent HP/XP/MP header is non-negotiable.** Every task screen reserves the top ~25% of mobile real estate for the stat header. This is what makes Habitica feel "RPG" rather than "checklist with a sprite" — but it also means task lists are visually cramped vs. competitors like Todoist that maximize task list density.

- **Color-coded left edge for difficulty, persistent across every task type.** Habits, Dailies, To-Dos all use the same red→orange→yellow→teal→blue stripe on the left of each task row. The color is set at creation time via the difficulty picker (Trivial/Easy/Medium/Hard) and reinforced everywhere — instantly readable signal of where you're succeeding vs. struggling.

- **Negative consequences are explicit, not implied.** HP drops when Dailies are missed. Party members take collateral damage when you miss. Hit zero HP and you "die" — losing a piece of equipment and XP. This is the opposite of most modern habit apps (Streaks, Atomic Habits, etc.) which are aggressively positive-only. The negative loop is polarizing but is exactly why the userbase that loves Habitica calls it "the only thing that worked".

- **Social accountability as a survival mechanic.** Parties of up to 30 turn habit-tracking into a co-op MMO — quest bosses' HP only drops when YOU complete your real-world tasks, and the boss damages the whole party when anyone misses. This is structurally different from "friend feed" social in competitors; it's enforced co-dependence.

- **Content gating via "check-in" streaks.** Quests, equipment, and Armoire items unlock at 7 / 22 / 30+ consecutive logins. Habitica blends pure habit-tracking with collectible-game retention tactics — and unapologetically so.

- **Long-tail collection (480+ pets/mounts) drives multi-year retention.** Where most habit apps lose users at 3-6 months, Habitica's collection mechanic gives engaged users a years-long reason to keep checking in. Each pet has unique pixel art rather than recolored variants — high art investment is part of the moat.

- **Dense by design — five-tab bottom nav, dual stat ledgers, persistent quest HUD.** Habitica deliberately rejects iOS HIG-style minimalism. New users have a steep onboarding curve (Beginner Objectives card is the only concession), and the team's design philosophy seems to be "trust users to absorb the complexity, because that complexity IS the product".
