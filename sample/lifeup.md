# LifeUp — Visual Design Research

## Overview

LifeUp is an open-source Android RPG habit tracker built around a **user-defined economy**: you invent your own skill attributes, set your own XP rewards, build your own shop, price your own treats, and even craft items from recipes. Nothing is prescribed — the meaning is authored by the user. This is the direct structural parallel to Tend's "offerings to patron deities" model: instead of a fixed virtue ledger, the practitioner decides what counts as devotion, what a deity wants, and what the reciprocal blessing looks like. LifeUp is especially loved by ADHD users because the external reward loop is real, immediate, and self-tuned — the user designs the dopamine schedule that works for their brain.

## Onboarding & marketing language

The hero screens lean playful-RPG (pixel-ish coins, mascots, level-up flares) rather than productivity-minimal. The pitch is explicit: "Gamify your life." Onboarding surfaces the four pillars early — tasks, attributes, shop, achievements — so the user grasps the loop before committing.

![Hero marketing screen with RPG framing](images/lifeup/lifeup_hero.webp)
![Secondary hero with feature collage](images/lifeup/ulives_hero.webp)
![CTA screen — gamify your life pitch](images/lifeup/lifeup_cta1.webp)
![About screen with mascot and value props](images/lifeup/lifeup_about1.webp)

## Home & task list

The task list reads like a quest log: each row shows title, attribute icons it feeds, and a coin/XP reward badge on the right. Completion fires a celebratory flourish. Tasks can be one-shot, daily, or habit-style.

![Task list with per-task XP and coin rewards visible](images/lifeup/wiki_tasks.png)
![Marketing phone shot showing daily task layout](images/lifeup/lifeup_marketing_phone02.jpg)
![Quick-create focus/task sheet](images/lifeup/ulives_170_focus-quick-create.png)
![Timeline view of completed actions](images/lifeup/lifeup_timeline.png)

## Custom skill attribute creation

Users define their own attributes (Strength, Wisdom, Creativity, or anything — "Coven Standing," "Lunar Attunement"). Each has icon, color, and level curve. Tasks then map to one or many attributes.

![Attribute list — fully user-authored stat lines](images/lifeup/wiki_attributes.png)
![Status page with reorderable attribute stack](images/lifeup/ulives_170_status-page-reorder.png)
![Feelings/mood as a parallel custom dimension](images/lifeup/wiki_feelings.png)

## Custom XP value assignment

Per-task XP is user-set. A 2-minute task can be worth 1 XP or 500 — the user calibrates what feels proportionate to effort and meaning. Difficulty pickers and incentive editors surface this directly.

![Incentive editor — user sets XP and coin payout](images/lifeup/wiki_incentive.png)
![Incentive marketing illustration](images/lifeup/lifeup_incentive.png)
![Task config showing reward fields](images/lifeup/ulives_blog_image-20250914165140334-en.png)

## User-built shop & reward economy

The centerpiece. Users author shop items (a coffee, an hour of guilt-free gaming, a tarot deck purchase) and set their own coin prices. Purchases deduct from earned currency. This externalizes the bargain: the user trades real-world devotion for a real-world treat they personally chose.

![Shop grid — every item user-created and user-priced](images/lifeup/wiki_shop.png)
![Shop in the eight-up screenshot collage](images/lifeup/wiki_screenshots_tiny4.png)
![Inventory widget surfacing owned items](images/lifeup/wiki_widget_inventory.png)
![Blog showcase of shop editing flow](images/lifeup/ulives_blog_image-20250914170722078-en.png)

## Loot boxes

Users build their own loot boxes — define drop tables, rarity weights, and contents. Opening animates a reveal. This adds variable-ratio reinforcement (the slot-machine pull ADHD brains often crave) without predatory monetization, because the user owns the table.

![Loot box editor and reveal UI](images/lifeup/wiki_loot_box.png)
![Loot/world exploration screen](images/lifeup/wiki_world.png)

## Crafting recipes

Items can be crafted from other items via user-defined recipes — a meta-economy on top of the shop. Useful for staged rewards ("collect 7 herbs, craft a sabbat feast").

![Crafting recipe configuration](images/lifeup/wiki_feature191_03.png)
![Crafting flow continued](images/lifeup/wiki_feature191_05.png)
![Recipe result preview](images/lifeup/wiki_feature191_07.png)

## Achievement grid

Achievements are also user-creatable, with capsule lists, countdown modes, and batch creation. They function as long-arc devotional milestones rather than fixed badges.

![Achievement grid in capsule list mode](images/lifeup/ulives_170_achievement-capsule-list.png)
![Countdown-mode achievements](images/lifeup/ulives_170_achievement-countdown-list.png)
![Batch-create achievements flow](images/lifeup/ulives_170_achievement-batch-create.png)
![Wiki achievements overview](images/lifeup/wiki_achievements.png)

## Coin/currency balance

Coin balance is always visible in the top bar — a persistent reminder that today's actions are accruing toward chosen rewards. Multiple currencies are supported for advanced setups.

![Top-bar coin balance with shop affordance](images/lifeup/lifeup_en_pic_03.jpg)
![Balance shown across home screens](images/lifeup/wiki_screenshots_tiny2.png)

## Avatar

Avatars are customizable and level visibly with the player. Light cosmetic layer — present but not the focus; the economy carries the engagement.

![Avatar customization preview](images/lifeup/wiki_feature_192_image-20230716005706966.png)
![Avatar in status context](images/lifeup/wiki_feature_192_image-20230716010240621.png)

## Statistics / level dashboard

A character-sheet style dashboard surfaces total level, per-attribute progress bars, streaks, and historical charts. The visual vocabulary is RPG (radial level rings, segmented XP bars) rather than productivity-chart.

![Status/level dashboard with attribute bars](images/lifeup/lifeup_en_pic_05.jpg)
![Stats panel with charts](images/lifeup/wiki_feature_193_image-20231023213616938.png)
![Extended stats view](images/lifeup/wiki_feature_193_image-20231023213903322.png)

## Widgets

Home-screen widgets expose tasks, inventory, and balance — keeping the loop one tap away. Critical for ADHD: friction-free re-entry.

![Inventory widget on home screen](images/lifeup/wiki_widget_inventory.png)
![Widget configurations across sizes](images/lifeup/wiki_feature_194_image-20240422223851277.png)

## Pomodoro / focus

A built-in tomato timer ties focus sessions directly into the XP/coin economy — time-on-task becomes the offering.

![Pomodoro timer with reward hookup](images/lifeup/wiki_pomodoro.png)
![Tomato session UI](images/lifeup/wiki_tomato.png)

## Themes (light / dark / custom)

Light, dark, and user-themed palettes. Custom sounds extend the personalization to audio — the celebration noise itself is user-chosen.

![Light/dark theme variants in collage](images/lifeup/wiki_screenshots_tiny6.png)
![Custom sounds picker](images/lifeup/ulives_170_custom-sounds.png)
![Theme variants gallery](images/lifeup/wiki_screenshots_tiny8.png)

## Settings (offline-first, no-tracking, open-source)

LifeUp is open-source, local-first, and explicitly markets the absence of trackers and ads. Settings expose backup/restore, sync toggles, and granular notification control — the user owns the data and the economy.

![Settings/about with open-source and privacy notes](images/lifeup/lifeup_about2.webp)
![Backup and sync configuration](images/lifeup/ulives_blog_image-20250914172200079-en.png)
![Marketing CTA emphasizing free + open](images/lifeup/lifeup_cta2.webp)

## Design language & takeaways for Tend

- **User-authored economy beats fixed virtue ledger.** Let practitioners define their own offerings, their own deity-specific currencies, and their own blessings — meaning emerges from authorship, not from us prescribing what counts as devotion.
- **Per-offering "weight" is the killer mechanic.** LifeUp's user-set XP maps cleanly to Tend: a lit candle vs. a full ritual should be weighted by the practitioner, not us — they know what cost they paid.
- **Build a user-priced shop of self-chosen treats.** Real-world reciprocity (a deck, a bath, a rest hour) priced in earned devotion-tokens is more honest than abstract points and works with ADHD reward wiring.
- **Loot boxes as user-owned divination.** A "pull from the deity's bag" with user-defined drop tables (omens, tarot pulls, blessings) gives variable-ratio dopamine without predatory monetization because the user owns the table.
- **Crafting = staged ritual.** Composable offerings ("collect 7 herbs across the week, craft sabbat feast") create long-arc engagement that fixed daily streaks cannot — particularly suited to wheel-of-the-year pacing.
- **Open-source, offline-first, no tracking is a value-aligned moat.** Witchy/pagan users are privacy-skeptical and craft-ethic-driven; LifeUp's stance is part of why it earns trust, and Tend should mirror it explicitly in onboarding and settings copy.
