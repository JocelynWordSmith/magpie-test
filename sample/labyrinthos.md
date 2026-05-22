# Labyrinthos — Visual Design Research

## Overview

Labyrinthos is Tina Gong's gamified tarot academy — sharing Golden Thread Tarot's minimalist line-art DNA, but built around a structured learning curriculum rather than a reference/reading tool. Where Golden Thread is a polished daily companion, Labyrinthos is a *school*: bite-sized lessons, multiple-choice quizzes, XP, levels, achievement badges, and a unified profile that tracks mastery across the entire 78-card system plus spreads and esoteric correspondences. The same restrained palette (off-white, ink-black, muted ochre/teal accents) and elegant single-weight portrait illustrations carry over, but UI density is higher and progress feedback is constant. This is the model worth studying for Tend: how do you make memorizing *correspondences* (cards, herbs, planets — or for Tend, deities, offerings, festival days) feel like a game without cheapening the occult tone?

![Academy course map](images/labyrinthos/behance-labyrinthos-academy-1.webp)
*Behance hero — academy positioning, course-as-journey framing.*

![App icon](images/labyrinthos/labyrinthos-app-icon.jpg)
*Geometric line-art mark — visual continuity with Golden Thread.*

## Home Dashboard

The home screen leads with a "Continue Learning" card (current lesson + progress bar) rather than a card-of-the-day. Secondary tiles surface Daily Card, current XP/level, and shortcut to the next quiz. The hierarchy is pedagogical, not divinatory.

![iOS home dashboard](images/labyrinthos/labyrinthos-ios-1.jpg)
*Continue-learning card on top; deck/library/journal below.*

![iPad dashboard](images/labyrinthos/labyrinthos-ipad-1.jpg)
*Larger layout reveals dashboard grid: lessons, progress, decks.*

## Lessons — the Gamified Learning Flow

Lessons are organized into chaptered courses (Major Arcana, Minor suits, spreads, symbolism). Each lesson is a vertical scroll of short paragraphs paired with the line-art card portrait, broken by inline "checkpoint" prompts. A persistent progress bar pins to the top; a single primary "Continue" button anchors the bottom. The flow feels closer to Duolingo than to a reference app: one concept per screen, immediate reinforcement, no dead ends.

![Lesson screen with portrait + body text](images/labyrinthos/labyrinthos-ios-2.jpg)
*Single-card lesson — portrait, keywords, prose, progress bar.*

![Course chapter list](images/labyrinthos/behance-labyrinthos-academy-2.webp)
*Chapters as numbered modules; locked/unlocked state.*

![Lesson on iPad](images/labyrinthos/labyrinthos-ipad-2.jpg)
*Two-pane reading: art left, narrative right.*

![In-lesson keyword chips](images/labyrinthos/labyrinthos-ipad-3.jpg)
*Tappable keyword chips link to deeper correspondences.*

## Quizzes

Quizzes are multiple-choice with the card image as the prompt ("Which card is this?" / "What does this card mean?"). Answers are large tap targets, correct/incorrect uses a soft color flash (sage green / dusty red) rather than alarming reds. A streak counter and per-quiz XP reward appear at completion. Wrong answers route back into a mini-review.

![Quiz prompt](images/labyrinthos/labyrinthos-ios-3.jpg)
*Card portrait + four answer tiles, restrained feedback colors.*

![Quiz results / XP earned](images/labyrinthos/behance-labyrinthos-academy-3.webp)
*Score, XP gained, streak, retry CTA.*

![Quiz on iPad](images/labyrinthos/labyrinthos-ipad-4.jpg)
*Wider answer tiles; still single-question-per-screen.*

## Level / XP System

A persistent level meter (e.g., "Apprentice Lv 4") lives in the profile and home headers. XP comes from lessons completed, quizzes passed, daily readings logged, and journal entries. Levels gate cosmetic titles ("Initiate → Adept → Oracle") rather than functionality — important: the esoteric tone isn't broken by hard paywalls behind XP.

![Profile with level badge + XP bar](images/labyrinthos/labyrinthos-ios-4.jpg)
*Avatar, title, XP bar to next rank, lifetime stats.*

![Behance level/title progression](images/labyrinthos/behance-labyrinthos-academy-4.webp)
*Title ladder rendered as illuminated-manuscript ranks.*

## Achievement Gallery

Achievements are line-art medallions (moon phases, suits, milestones) arranged in a grid; locked ones are ghosted. Tapping reveals criteria and earned date. The art treats achievements as *talismans* — fitting the occult frame — rather than generic trophy iconography.

![Achievement grid](images/labyrinthos/labyrinthos-ios-5.jpg)
*Locked vs unlocked talisman medallions in a 3-column grid.*

![Achievement detail](images/labyrinthos/labyrinthos-ipad-5.jpg)
*Single medallion enlarged with unlock criteria and lore blurb.*

## Card Library

The library mirrors Golden Thread's structure (Major/Minor grid) but each card tile shows a small mastery indicator — a filled arc indicating how well you've quizzed on it. This turns the library into a *mastery map*, not just a reference.

![Card library with mastery arcs](images/labyrinthos/labyrinthos-ios-6.jpg)
*Card grid; arc around each portrait shows quiz mastery.*

![iPad library](images/labyrinthos/labyrinthos-ipad-6.jpg)
*Denser grid; mastery arcs scale up cleanly.*

## Reading Flow — Differences from Golden Thread

Readings exist but are de-emphasized — accessible from a tab, not the home anchor. The reading interface itself is simpler (fewer spread options, fewer journaling hooks), because the app's center of gravity is learning, not divination. Post-reading prompts nudge users toward relevant lessons ("Want to learn more about The Tower?").

![Reading spread](images/labyrinthos/labyrinthos-ios-7.jpg)
*Three-card spread; cleaner, less ornamented than Golden Thread.*

![Reading detail with "learn more" CTA](images/labyrinthos/labyrinthos-ipad-7.jpg)
*Post-draw CTA routes into the matching lesson.*

## Journal

Journal is lighter than Golden Thread's — entries are tied to readings or lessons, with mood and prompt fields. Less of a standalone diary, more of a reflection log feeding back into mastery tracking.

![Journal entries list](images/labyrinthos/labyrinthos-ios-8.jpg)
*Chronological entries with card/lesson context tags.*

## Deck Selection

Users can switch between Gong's decks (Golden Thread, Luminous Spirits, Light Seer's-adjacent) — each rendered in the same UI shell. Deck selector is a horizontal carousel with cover art + short description.

![Deck picker carousel](images/labyrinthos/labyrinthos-ipad-8.jpg)
*Horizontal scroll of deck covers; tap to swap art system-wide.*

## Profile / Avatar

The profile screen is unusually rich for a tarot app: avatar (line-art portrait), chosen title, level, XP, achievement count, lesson completion %, quiz accuracy, current streak. It's a self-portrait of your practice.

![Profile dashboard](images/labyrinthos/labyrinthos-ios-9.jpg)
*Avatar + title + stats grid; mastery as identity.*

## The Mirror — Statistics

"The Mirror" (carried over from Golden Thread but expanded) here aggregates *learning* stats alongside reading stats: cards most-drawn, cards best-known, weakest correspondences, lessons remaining.

![Mirror stats](images/labyrinthos/behance-labyrinthos-academy-5.webp)
*Mixed reading + learning analytics in one view.*

![Mirror on iPad](images/labyrinthos/labyrinthos-ipad-9.jpg)
*Charts use the same muted palette; no dashboard-y bright colors.*

## Paywall

Free tier covers intro lessons + basic readings; premium unlocks full curriculum, advanced quizzes, and deck swaps. Paywall is a single scrollable page: hero illustration, three-bullet value prop, plan toggle (monthly/annual), restore link. No countdown timers, no scarcity copy — tone-appropriate.

![Paywall screen](images/labyrinthos/behance-labyrinthos-academy-6.png)
*Illustrated hero, restrained benefits list, two-plan toggle.*

## Premium

Premium state is signaled by a small sigil next to the avatar, not banners. Unlocked chapters lose their lock icon; nothing else changes visually — a quiet upgrade.

![Premium chapter list unlocked](images/labyrinthos/behance-labyrinthos-academy-7.png)
*Same chapter list, locks removed, sigil on profile.*

## Settings

Settings are minimal: notifications (daily lesson reminder, daily card), deck default, account, restore purchase, credits. No theme switcher — the design is opinionated.

![Settings list](images/labyrinthos/labyrinthos-ipad-10.jpg)
*Short, single-column list; no nested preferences.*

## Design language & takeaways for Tend

- **Lessons as the home anchor, not readings.** Tend should lead with "Continue learning: Hekate, lesson 3 of 7" above today's offerings — teaching the pantheon is the differentiator, daily habits are the loop.
- **Bite-sized lesson + immediate quiz + XP** is the pattern for esoteric memorization. One deity-attribute per screen, four-tile multiple choice, soft-color feedback, no harsh red — the occult tone survives gamification only if feedback stays gentle.
- **Line-art deity portraits with a single visual system across the pantheon.** Labyrinthos proves a 78-portrait set can hold visual unity; Tend can commission one illustrator for all patron deities and treat the portrait as the lesson's emotional center.
- **Mastery arcs on the library grid** translate directly: Tend's deity directory should show how well a user knows each deity (correspondences quizzed, offerings logged), turning the pantheon into a personal mastery map.
- **Achievements as talismans, titles as ranks** (Initiate → Adept → Oracle) — frame XP as initiation, not points. Tend equivalents: Seeker → Devotee → Hierophant, with sigil-style badges per deity studied.
- **Premium unlocks curriculum depth, not core ritual.** Free Tend should always let users make offerings; paid tier unlocks advanced lore, festival calendars, and rare-deity lessons — same restraint as Labyrinthos's paywall.
