# Grimoire Apps — Visual Design Research

## Overview

Digital grimoire / Book of Shadows (BoS) apps are **the closest existing app genre to Tend**. They share Tend's core territory — witchy/pagan daily practice, lunar cycle awareness, deity work, ritual logging, herb/crystal/correspondence references — and they collectively define the visual vocabulary users in this niche already expect: midnight blue + gold, blackletter or engraved-serif headers, moon iconography, antique-paper or starfield backdrops. Tend's "offerings to patron deities" framing is essentially a habit-tracker layered onto the same spiritual substrate these apps already address (just from the journaling/reference side rather than the routine side).

The genre's design ceiling, however, is **surprisingly low**. With the exception of one recent App Store release (Digital Book of Shadows), the category is dominated by stock-asset Material Design Android apps, paper-texture skeuomorphism from the early 2010s, or generic dark-mode journal templates with a gold accent bolted on. Tend can dominate this visual space simply by holding to a higher craft bar — there is no Things 3 / Linear / Arc-tier polish in the grimoire category yet.

This report covers four apps spanning the visual spectrum from the genre's best (Digital Book of Shadows) to its current floor (Black Grimoire, BoS Ultimate).

---

## Digital Book of Shadows — by Pinch of Magic Studio

The current visual benchmark of the genre. iOS-native, dark mode by default, midnight-blue palette with antique-gold accents, Cinzel-style engraved serif headers, hand-drawn celestial illustration as a faint background motif. Each screen feels like it was actually designed rather than templated. This is the only grimoire app in the survey with a coherent, considered visual system.

### Home / "Book of Shadows" index
![Digital BoS — home with moon phase header and recent entries](images/grimoire/dbos-ios-01.png)

The home screen is the genre's clearest expression: a top "Full Moon / Scorpio Waxes" status block, then a chronological list of recent spell/ritual entries grouped by date (Today, Earlier). Section labels use small-caps tracking; entries are tappable cards with gold-on-navy iconography. Note the floating gold "+" FAB — the only saturated color on the screen, making logging the obvious primary action. Tend should steal this exact composition for "Today" (deity status header + offerings list + single-saturated CTA).

### Spell entry detail
![Digital BoS — spell detail with intent, ingredients, ritual steps](images/grimoire/dbos-ios-06.png)

A spell page is structured as: title, date, lunar context badge ("Full Moon / Manifestation, charging, divination"), Purpose & Intent (paragraph), Ingredients (pill tags), Preparation & Ritual (long-form). Pill tags use translucent gold borders on dark fill. Long-form fields preserve narrative voice — this isn't a form, it's a journal page. **Key lesson for Tend**: ritual/offering entries can carry real narrative weight without becoming text-heavy by chunking with small-caps section labels and ingredient pills.

### Logging flow
![Digital BoS — "Log a Spell" with intention field and intent picker](images/grimoire/dbos-ios-03.png)

The composition flow leads with "SET YOUR INTENTION" as the first field. Intent is selected from a colored token list ("Abundance" with a gold dot, etc.). The CTA button is a full-width gold pill labeled "GATHER" — not "Save" or "Submit", but a ritual verb. This kind of language transformation is exactly what Tend's "offering" framing aspires to and the genre validates that users respond to it.

### Tarot / divination
![Digital BoS — three-card tarot reading with card art and interpretations](images/grimoire/dbos-ios-02.png)

Tarot tools render full Rider-Waite-style card art on dark velvet backgrounds, then provide structured interpretation slots below (The Star, Knight of Wands, Temperance). The "Add Interpretation" CTA invites the user's own voice. Tend doesn't need divination, but the visual treatment — large illustrative artwork as the emotional centerpiece, structured commentary below — is a strong template for the **deity profile page** Tend could build (large patron illustration up top, structured offering history below).

### Lunar / astrological context
![Digital BoS — Lunar Observatory with moon illustration, illumination %, astro snapshot](images/grimoire/dbos-ios-09.png)

A dedicated "Lunar Observatory" screen with a photographic moon illustration, illumination percentage, sign position ("Scorpio 23.6°"), and energetic guidance ("Manifestation, charging, divination"). Background uses a constellation/star-chart pattern at low opacity. This is Tend's strongest reference for any future moon/astrology surface — a single hero illustration plus structured data plus a brief energetic prescription is the entire pattern.

### Herb & plant database
![Digital BoS — "Herbs & Plants" library with botanical illustrations](images/grimoire/dbos-ios-07.png)

Reference content (herbs, crystals, etc.) uses a list-of-cards layout with a small botanical illustration on the left, name + tags below. Tags are tiny capsule chips ("calming", "protection"). Note the visual restraint: one illustration per card, no thumbnail grid, no overwhelming Pinterest energy. Reads as a curated bestiary rather than a search result.

### Insights / analytics
![Digital BoS — Insights with moon-cycle ring chart and practice analytics](images/grimoire/dbos-ios-05.png)

Donut charts in gold-on-navy track moon-cycle frequency and practice categories ("creating elixirs", "shopping"). Even the analytics view stays inside the grimoire-aesthetic — no Material chart components leaking through. Tend's habit streaks and offering analytics should look like this, not like a generic productivity dashboard.

### Calendar
![Digital BoS — month calendar with moon phase glyphs per date](images/grimoire/dbos-ios-04.png)

Each calendar cell carries a tiny moon-phase glyph indicating where the date sits in the lunar cycle. A great pattern: secondary contextual information (moon phase) layered onto a primary affordance (date selection) without crowding it. Tend could do the same with sabbat icons, deity feast days, or planetary days.

### iPad layouts
![Digital BoS — iPad home with two-column card grid](images/grimoire/dbos-ipad-01.png)
![Digital BoS — iPad insights with moon-cycle and wheel-of-the-year](images/grimoire/dbos-ipad-02.png)

Tablet layouts reflow to two-column card grids with consistent gold rule dividers and tighter section headers. The "Wheel of the Year" radial chart on the insights screen is rendered as an ornate illustrated wheel rather than a generic pie chart — exactly the kind of detail that elevates this app above its peers.

---

## The Grimoire — independent dev

A reference-only app (not a journal/tracker). Marketed as a "pocket grimoire of everything you want to know about witchcraft." Visually distinct from Digital BoS — uses **textured papers** (parchment, mottled green, scratched chalkboard) and varies palette per section. Reads more like an illustrated zine than an app.

### Hub / table of contents
![The Grimoire — section list with one color per topic](images/grimoire/thegrimoire-01.png)

The hub is a vertical stack of full-width color blocks: "Overview & Myths" (black), "Types of Witchcraft" (forest green), "Grounding/Cleansing/Protection" (mustard gold), "Shadow Work" (cream), "Spellwork" (deep red), "Deities" (navy), "Tools" (umber), "Witch's Shelf" (slate), "What now?" (terracotta). Each label uses Cormorant-style high-contrast serif. The chromatic taxonomy is **the strong idea here** — Tend could give each patron deity (or each element) its own color block on the home/library screen with similar effect.

### Section landing pages
![The Grimoire — chalkboard contents with engraved illustrations](images/grimoire/thegrimoire-02.png)
![The Grimoire — herb encyclopedia thumbnail grid on parchment](images/grimoire/thegrimoire-04.png)
![The Grimoire — Major Arcana tarot reference with engraved cards](images/grimoire/thegrimoire-06.png)

Section pages adopt textured backgrounds (scratched chalk, sage parchment, antique paper) with monochrome ink illustrations for each entry (herbs as engraved botanicals, tarot cards as line drawings). The aesthetic is consistent and atmospheric but the typography density is heavy — every page is a wall of small serif text. Tend can do this better by giving content room to breathe.

### Long-form reference pages
![The Grimoire — "Myths" essay on antique paper background](images/grimoire/thegrimoire-03.png)
![The Grimoire — "Types of Witchcraft" essay on dark velvet](images/grimoire/thegrimoire-05.png)
![The Grimoire — moon-meaning reference with hierarchical text](images/grimoire/thegrimoire-07.png)
![The Grimoire — "Energy Grids" lesson page with bullets](images/grimoire/thegrimoire-08.png)

Long-form pages are essentially Medium articles in old-book costume — high-contrast serif body type, italicized pull-callouts, no whitespace economy. This is the genre's recurring failure: it treats "atmosphere" as a substitute for typographic hierarchy. A reader needs ~10 seconds of scanning before they can find the actionable bit.

---

## Neumoire (Modern Grimoire) — by CuteMagick

iOS journal-style BoS with a softer, more "young witch" aesthetic — cherry-blossom photography backgrounds, customizable theme colors, gradient borders. Less ceremonial, more diary-app-coded.

### Onboarding & home
![Neumoire — onboarding showing magazine-style category log](images/grimoire/neumoire-01-onboarding.png)
![Neumoire — entry form with category dropdown over floral photo](images/grimoire/neumoire-02-home.png)

The home log is a chronological list (date prefix on the left in big amber numerals, time + first words next to it, category icon as a rounded amber tile on the right). Photo background visible at low contrast behind. The pattern is clean and readable; the photo backdrop is the design risk — it locks readability dependent on whatever wallpaper the user picks.

### Entry creation & theming
![Neumoire — new entry form with astrology category](images/grimoire/neumoire-03-entry.png)
![Neumoire — theme picker with color dots and photo backgrounds](images/grimoire/neumoire-04-ipad-home.jpg)
![Neumoire — iPad theme picker showing wallpaper grid](images/grimoire/neumoire-06-ipad-bos.jpg)

The theme system is core to the product — users pick an accent color (six pastel dots) and a background photo from a curated grid (candles, witchy portraits, succulents). This is genre-appropriate personalization but visually fragile; the more user choice you give, the harder it is to keep the overall app coherent. Tend's "offerings to patron deities" can use deity selection itself as the personalization vector (the deity *is* the theme), which is more elegant.

### Reference & marketing
![Neumoire — iPad BoS reading view on cherry-blossom background](images/grimoire/neumoire-05-ipad-entry.jpg)
![Neumoire — marketing shot with sun/moon sign card and tag cloud](images/grimoire/neumoire-07-marketing.png)

The "Currently" card (Sun Sign, Moon Sign, Moon Phase, Ascendant, Numerology, Weather, Tarot card-of-the-day) is the best single feature in the app — a glanceable astrological snapshot. Tend could absolutely lift this pattern for a "Today's Patron / Today's Energy" header card.

---

## Book of Shadows Ultimate / Black Grimoire — the genre floor

These are the cheap-asset, Material-Design-on-Android baseline of the category. Worth documenting because they show the bar Tend leaps over on day one.

### Book of Shadows Ultimate (3D skeuomorphic)
![BoS Ultimate — 3D altar splash with crystal ball and candles](images/grimoire/bos-ultimate-01-altar.png)
![BoS Ultimate — 3D desk view with framed grimoire portal](images/grimoire/bos-ultimate-02-book.png)
![BoS Ultimate — sticker control panel for customizing pages](images/grimoire/bos-ultimate-04-page.png)
![BoS Ultimate — parchment book reference page with chamomile](images/grimoire/bos-ultimate-03-realm.png)
![BoS Ultimate — Android two-page book spread with empty entries](images/grimoire/bos-ultimate-05-android.jpg)

3D-rendered altar room as the home metaphor — a desk with a glowing crystal ball, candles, a closed grimoire. Tapping the book opens a faux page-turning view. The skeuomorphism is dated (Lorem-ipsum "scribble" placeholder text instead of real type, low-poly candles, Comic-Sans-adjacent serif). This is the "Garage Band 2007" school of grimoire design — atmospheric in screenshots, frustrating in actual use because the metaphor fights every interaction.

### Black Grimoire (Material Design with stock photography)
![Black Grimoire — home with stock-photo ritual cards](images/grimoire/blackgrimoire-01.png)
![Black Grimoire — spell list with prayer entries](images/grimoire/blackgrimoire-02.png)
![Black Grimoire — Full Moon Prayer entry with stock photo header](images/grimoire/blackgrimoire-03.png)
![Black Grimoire — Category grid with stock-photo tiles](images/grimoire/blackgrimoire-04.png)
![Black Grimoire — generic Android Material settings/profile screen](images/grimoire/blackgrimoire-05.png)

A pure Material Design 2 shell with stock-photo ritual imagery slotted into card headers. Categories include "Old Magic", "Witches Dictionary", "D3ATH SPELLS" (sic), "FANTASY SPELLS" — content is heavily SEO-driven and the visual treatment is interchangeable with any generic recipe or article app. The settings screen (last shot) is *literally* the default Material profile template with no theming applied. This is the most-downloaded grimoire app on Play Store (per search ranking) and it has zero design intentionality.

---

## Cross-app patterns

Conventions shared by 3+ of the apps reviewed:

- **Midnight blue + gold** is the dominant palette. Even Black Grimoire and Neumoire default to dark mode with a gold/amber accent.
- **Engraved serif headers**: Cinzel, Cormorant Garamond, IM Fell, or generic blackletter for titles; system sans for body text. Nobody uses a tech-y geometric sans for headers in this category.
- **Moon-phase indicators** appear everywhere — calendar dots, header status, dedicated observatory screens. Lunar context is the universal "ambient state" of the genre.
- **Category-as-icon-tile**: every app uses big rounded square category tiles (spells, rituals, herbs, crystals, tarot, deities) as a primary navigation paradigm — either as a grid (Black Grimoire, The Grimoire) or as a list with leading icon (Digital BoS, Neumoire).
- **"Wheel of the Year" / sabbat references** show up in Digital BoS, The Grimoire, and Black Grimoire. The 8-sabbat radial wheel is iconic enough to be a recurring graphic device.
- **Photographic or illustrated backgrounds at low opacity** — cherry blossoms (Neumoire), starfields (Digital BoS), parchment (BoS Ultimate, The Grimoire), velvet (multiple). Nobody runs flat backgrounds; the texture *is* the atmosphere.
- **Ritual verb language** in CTAs: "Gather", "Cast", "Inscribe", "Consecrate" instead of "Save", "Submit", "Add". Tend's "offering" framing is already aligned with this pattern.
- **Pill-shaped ingredient/correspondence tags** — gold-bordered translucent capsules — appear in every entry detail view across all four apps.
- **Reference encyclopedia surface** (herbs, crystals, deities, tarot) as a distinct top-level destination. Users in this genre expect a built-in library, not just a journal.

---

## Design language & takeaways for Tend

What the genre teaches, and where Tend can clearly outclass it:

1. **Ritual verbs in CTAs are validated.** "Make an offering" / "Tend the altar" / "Light the candle" — these will land with users the genre has already trained. Don't dilute back to "Mark complete" or "Done."
2. **Midnight blue + gold is the safe default but increasingly generic.** Every grimoire app has it. Tend can differentiate by giving **each patron deity** a distinct color signature (Hekate = silver/black, Brigid = copper/flame, Aphrodite = rose-gold) and letting the user's chosen patron(s) tint the UI. This is the move The Grimoire's chromatic taxonomy hints at but doesn't execute.
3. **Lunar context as ambient header is table stakes.** A persistent top-of-Today moon phase + sign + brief energetic prescription is genre-standard and Tend should ship it. Digital BoS's "Lunar Observatory" is the reference pattern.
4. **Calendar with moon-phase glyphs per date** is a 5-minute design move that adds enormous perceived depth. Apply the same pattern with sabbat icons and feast days.
5. **Engraved serif headers (Cinzel/Cormorant) + clean system sans body** is the genre-correct type pairing. Don't try to use serif for body — every grimoire app that does suffers readability problems (The Grimoire, BoS Ultimate).
6. **Pill-shaped correspondence tags** (gold border, translucent fill) are the universal language for ingredients/herbs/crystals/intents in this genre. Tend's offering metadata (what was offered, to whom, intent) should use them.
7. **Where every grimoire app fails: information density and typographic hierarchy.** They confuse "atmosphere" with "design." Tend wins instantly by treating these as separate axes — keep the atmosphere via texture/color/type, but enforce real whitespace, real hierarchy, real scanability.
8. **Skeuomorphism is dead in this category** — BoS Ultimate's 3D altar is unintentionally comedic. Tend's "altar" metaphor should be evoked through type, color, and language, not 3D candles. The altar is a *vibe*, not a render.
9. **Personalization via deity selection beats personalization via theme picker.** Neumoire's color/wallpaper picker fragments its visual identity; Tend's patron deity selection can do all the personalization work while keeping the app coherent.
10. **The reference encyclopedia (herbs/crystals/deities) is expected** — users will be surprised if Tend doesn't have at least a deity reference surface. This is a content investment, not a design one, but it's table stakes.
11. **Analytics inside the aesthetic.** Digital BoS proves you can do donut charts and streak counters without breaking the grimoire-aesthetic. Tend's habit tracking visualizations should never look like a Fitbit graph; they should look like astrological wheels and lunar cycles.
12. **There is no design ceiling here yet.** The single best-designed app in the category (Digital Book of Shadows) is brand-new (2025), barely-known, and still inferior in craft to a mid-tier consumer productivity app like Things or Bear. Tend has a wide-open opportunity to be the first grimoire-adjacent app with Linear/Arc-tier visual polish, and the user base will recognize the difference immediately.
