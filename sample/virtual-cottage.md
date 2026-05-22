# Virtual Cottage — Visual Design Research

## Overview

Virtual Cottage (VC1) and Virtual Cottage 2 (VC2) are cozy pixel-art "ambient productivity environments" on Steam. The pitch is radical in its simplicity: you sit inside a single illustrated cottage room, a focus timer runs, lo-fi music and rain loop, and a fireplace crackles while the light slowly shifts from afternoon gold to deep night blue. There is no gamification of tasks, no streak meter, no XP — the environment **is** the engagement mechanic, not a frame around one.

This matters enormously for Tend. A witchy/pagan daily routine app sells the same fundamental promise: *show up to the space, and the space rewards you for being there.* VC proves that a tightly-art-directed, time-reactive, audio-integrated single scene can hold attention for hours with almost no UI. VC2 extends the formula with light personalization (decoration items) and soft social presence (a multiplayer "study cafe") — both directly translatable to a deity-altar metaphor.

![capsule](images/virtual-cottage/vc1-capsule.jpg) ![vc2 capsule](images/virtual-cottage/vc2-capsule.jpg) ![header](images/virtual-cottage/vc1-header.jpg) ![vc2 header](images/virtual-cottage/vc2-header.jpg)

## Cottage interior — day state

Warm afternoon light pours through mullioned windows onto wood floors. The palette is honey, cream, terracotta, sage. Plants on the sill, a kettle, a stack of books — every prop reads as a "lived-in" cue rather than decoration. The composition is fixed isometric/3-quarter, framing the hearth as the anchor.

![daytime cottage](images/virtual-cottage/vc1-hpp-day.jpg) ![itch day](images/virtual-cottage/vc1-itch-01.png) ![steam day](images/virtual-cottage/vc1-ss-183725ed.jpg) ![snap day](images/virtual-cottage/vc1-snap-01.png)

## Cottage interior — night state

The same room re-skinned in cobalt, indigo, and ember-orange. The fireplace and candles become the dominant light sources; windows go from sun-yellow to moon-blue. Nothing in the layout moves — only color, light pools, and shadow length change. This restraint is what makes the transition feel *real* rather than themed.

![night cottage](images/virtual-cottage/vc1-hpp-night.jpg) ![night ss](images/virtual-cottage/vc1-ss-7fa40d2a.jpg) ![night itch](images/virtual-cottage/vc1-itch-03.png) ![night snap](images/virtual-cottage/vc1-snap-02.png)

## Real-time lighting transitions (the key feature)

VC's signature trick: the scene tracks **your system clock**. Sit down at 4pm and the sun is low; sit down at 11pm and the room is moonlit. The transition itself is animated — a slow LUT/tint shift across all sprites with the fire and candle glows fading up as ambient light fades down. This is the single most compelling "atmosphere as motivation" lesson for Tend: the app should look *materially different* when opened at dawn vs. dusk vs. midnight, without the user toggling anything.

![mentalnerd lighting study](images/virtual-cottage/vc1-mentalnerd-light.png) ![featured lighting](images/virtual-cottage/vc1-mentalnerd-featured.png) ![dusk transition](images/virtual-cottage/vc1-ss-454ef12f.jpg) ![rain page bg](images/virtual-cottage/vc1-page-bg.jpg)

## Rain effects

Rain is a toggleable weather layer: animated streaks on the window glass, a darker overall LUT, and a synced audio bed. Crucially the rain is *seen* on the window before it is *heard* — the visual sells the audio. Drops collect and run; the panes fog slightly.

![rain state](images/virtual-cottage/vc1-hpp-rain.jpg) ![rainy lofi](images/virtual-cottage/vc1-yt-rainlofi.jpg) ![rain snap](images/virtual-cottage/vc1-snap-03.png) ![rain ss](images/virtual-cottage/vc1-ss-bc76c713.jpg)

## Animated details (steam, candle, fireplace)

Every focal prop has a 2-6 frame loop: kettle steam curling, candle flame guttering, fireplace logs popping with sparks, cat tail twitching. These micro-animations are the "heartbeat" of the scene — they make a still room feel inhabited. None of them demand attention; they reward looking.

![kettle steam](images/virtual-cottage/vc1-ss-5ac3f50d.jpg) ![fireplace](images/virtual-cottage/vc1-itch-02.png) ![candles](images/virtual-cottage/vc1-itch-04.png) ![details](images/virtual-cottage/vc1-ss-183725ed.jpg)

## Ambient sound UI

The audio mixer is the only persistent UI surface. Discrete sliders per layer (lo-fi music, rain, fire, thunder, birds) with tiny pixel icons. The control panel sits in a corner, low-contrast, and disappears into the wood-paneled UI chrome. Users build their own ambience like a tiny mixing desk.

![sound panel](images/virtual-cottage/vc1-mentalnerd-task.png) ![ui chrome](images/virtual-cottage/vc1-itch-05.png) ![mixer](images/virtual-cottage/vc1-ss-bc76c713.jpg) ![guide](images/virtual-cottage/vc1-guide-ugc.png)

## Focus timer

A pixel-LCD numeric timer pinned to a corner, styled to look like an in-world clock or hearth label rather than an app element. Minimal — no progress ring, no celebratory FX on completion. The reward for finishing is just continuing to be in the room.

![timer corner](images/virtual-cottage/vc1-youtube-thumb1.jpg) ![longplay](images/virtual-cottage/vc1-yt-longplay.jpg) ![ss timer](images/virtual-cottage/vc1-ss-454ef12f.jpg) ![thumb2](images/virtual-cottage/vc1-youtube-thumb2.jpg)

## VC2 Pomodoro

VC2 formalizes the timer into a Pomodoro with work/break cycles. The UI gains a small task-list-adjacent card but stays in the world's wood-and-parchment style — never iOS-grey rectangles. Break states swap music and may dim lights.

![vc2 pomodoro](images/virtual-cottage/vc2-ss-006be9c3.jpg) ![vc2 timer](images/virtual-cottage/vc2-ss-0910e38f.jpg) ![vc2 cycle](images/virtual-cottage/vc2-ss-11568ada.jpg) ![vc2 gameplay](images/virtual-cottage/vc2-yt-gameplay.jpg)

## VC2 to-do

A parchment/notepad to-do panel slides out from a desk prop. Tasks are handwritten-pixel-font checkboxes. Critically the to-do is *diegetic* — it sits on the desk in the scene, not floating over it. Strong precedent for Tend's "offerings" reading as physical things on an altar.

![vc2 todo](images/virtual-cottage/vc2-ss-18f591f3.jpg) ![vc2 list](images/virtual-cottage/vc2-ss-1c3561ee.jpg) ![vc2 notepad](images/virtual-cottage/vc2-ss-2e86b624.jpg) ![vc2 desk](images/virtual-cottage/vc2-ss-82d9f29a.jpg)

## VC2 furniture / decoration variety

VC2 adds a catalog of swappable furniture: different rugs, plants, wall art, lamp styles, seasonal items, pets. Decoration is *the* progression system — earned/unlocked items reshape your room over weeks. No stats, just personalization as long-term retention.

![decoration ui](images/virtual-cottage/vc2-ss-b75b094d.jpg) ![furniture variety](images/virtual-cottage/vc2-ss-b8ae72ee.jpg) ![keyart variants](images/virtual-cottage/vc2-gaming-keyart.jpg) ![vc2 comm](images/virtual-cottage/vc2-comm-3b887f2d.jpg)

## VC2 multiplayer "study cafe"

Shared room with other players' avatars working silently at tables. No chat by default — just co-presence. The cafe is a different art set (bigger, more public, warmer wood tones) so private cottage and public cafe stay visually distinct.

![study cafe](images/virtual-cottage/vc2-comm-65e74fdb.jpg) ![cafe avatars](images/virtual-cottage/vc2-comm-9c6a29e3.jpg) ![cafe interior](images/virtual-cottage/vc2-comm-cff9a31b.jpg) ![cafe wide](images/virtual-cottage/vc2-ss-006be9c3.jpg)

## Color palette

VC1 day: honey #d9a86c, cream #f1e1bf, sage #8aa68a, terracotta #b9603f, wood #6b4632. VC1 night: indigo #2a3358, cobalt #1a2440, ember #e08a3c, candle-gold #f4c66a, shadow #0e1428. VC2 broadens with cafe browns and decorative accent colors (rose, teal) but holds the same low-saturation, high-warmth core.

![day palette source](images/virtual-cottage/vc1-hpp-day.jpg) ![night palette source](images/virtual-cottage/vc1-hpp-night.jpg) ![vc2 palette](images/virtual-cottage/vc2-ss-b8ae72ee.jpg) ![rain palette](images/virtual-cottage/vc1-hpp-rain.jpg)

## Pixel art style samples

Crisp 2-3px outlines on key silhouettes, soft 4-color dithered gradients for light pools, hand-placed highlights on metal and glass. No "modern flat pixel" — closer to late-90s SNES JRPG interiors with a contemporary lighting pass on top. Type is a chunky pixel serif for headings, clean 5x7 pixel sans for UI.

![pixel sample 1](images/virtual-cottage/vc1-ss-bc76c713.jpg) ![pixel sample 2](images/virtual-cottage/vc1-comm-169555ad.jpg) ![pixel sample 3](images/virtual-cottage/vc1-comm-34049912.jpg) ![pixel sample 4](images/virtual-cottage/vc1-comm-42bae26d.jpg)

## Design language & takeaways for Tend

- **Time-of-day is the headline feature.** Tend's altar/cottage view should re-light itself from the system clock — dawn, midday, dusk, midnight, witching hour — with the same prop layout. The visible shift is the daily reward; opening at 3am should feel categorically different from 3pm.
- **Atmosphere is the engagement, not the wrapper.** Resist adding streak meters, XP, or celebratory modals on top of the scene. VC retains users by being a place worth returning to, not a task that nags. Tend's deities/offerings should live *inside* the scene as objects, not as cards over it.
- **Diegetic UI everywhere.** To-do lists are parchment on a desk; timers are clocks on a mantle; audio mixers are wood-panel knobs. For Tend this means offerings sit on the altar, the daily check-in is lighting a candle, and the streak is "how full the altar looks" — never a number floating in the corner.
- **Micro-animation is the heartbeat.** A 4-frame candle flicker, smoke curl, or familiar's tail twitch on every focal prop makes a still scene feel alive without demanding attention. Budget for these from day one — they are not polish, they are the product.
- **Decoration as the only progression.** VC2 proves users will return for weeks just to unlock a new rug. Tend can mirror this: completed offerings unlock altar items (crystals, statues, herbs, sigils) tied to each patron deity — personalization is retention.
- **Ambient audio with per-layer sliders.** Independent volume controls for music, rain, fire, wind, chant/bells. Users mixing their own ambience is itself a ritual, and the audio sells the visual atmosphere as much as the art does.
