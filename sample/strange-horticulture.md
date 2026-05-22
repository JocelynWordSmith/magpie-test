# Strange Horticulture — Visual Design Research

## Overview

**Strange Horticulture** (2022, Bad Viking / Iceberg Interactive) is an occult puzzle game in which the player runs a small Victorian plant shop in the fictional Lake District town of Undermere. The core loop — *receive a customer's cryptic request → consult an ornate, hand-illustrated botany book → match observable plant traits to book entries → label the plant and hand it over* — is a near-perfect mechanical analogue for what Tend wants to do with a witchy correspondence library: *consult the grimoire to identify which herb/crystal/offering corresponds to which deity/intention/ritual*. The "Strange Book of Plants" (authored, in a meta wink, by Wilfrid **Voynich**) is the most beautifully executed example of a hand-drawn reference catalogue in a recent game, and its UX vocabulary — pen-and-ink sketches on parchment, tagged labels, magnifying glass, "Closer Inspection / Rising Dread" sense filters — translates directly to a deity/correspondence library.

Beyond the catalogue, Strange Horticulture is a masterclass in **mood-as-mechanic**: muted greens, ochres, deep browns; rain on greenhouse glass; warm candle/lantern pools against blue-grey gloom; a black cat on the desk; vines creeping in from the frame edges. The whole interface is staged on a wooden desk surface — a single tactile diorama that the player rearranges. Tend's "altar" / "shrine" home screen, where habits-as-offerings are physically placed for patron deities, has a direct precedent in this desk-as-workspace metaphor.

Total images collected: **66** (10 Steam screenshots, 42 plant catalogue entries, official site assets, key art, character lineup, wiki cover).

---

## Key art & branding

The marketing key art leans hard on a **portrait-composite** style: the stoic grey-haired Horticulturist holds a pentagram-embossed red book, flanked by a hooded cloaked figure (the coven), a bearded man, a cat, the magnifying-glass-over-map motif, and a strip of cut botanical specimens along the bottom. The wordmark is a **gold-on-dark, blackletter-inflected serif** with hairline gold rules above and below — pure Victorian occult bookplate. The capsule art uses a tighter framing of the same elements over a muted forest-green ground.

![Full portrait composition: Horticulturist holding pentagram book, flanked by cloaked coven member, bearded townsman, magnifying-glass-over-map vignette, scattered cut specimens at bottom](images/strange-horticulture/badviking-sh-keyart.png)

![Steam header: wider lockup with gold title wordmark, two characters, magnifying glass and plants on shelf](images/strange-horticulture/steam-header.jpg)

![Steam capsule: square crop emphasising the Horticulturist holding the pentagram book against forest-green ground](images/strange-horticulture/steam-capsule.jpg)

![Wiki cover: alternate cover composition of the Horticulturist at smaller resolution](images/strange-horticulture/wiki-cover.jpg)

## Plant shop interior — the main "desk" interface

This is the canonical view of the game and the single most useful reference for Tend's home/altar screen. The screen is composed as a **physical workspace**:

- Top band: a rain-streaked greenhouse window with shelves of potted specimens (varied silhouettes, candles between them, atmospheric blue evening light bleeding through panes)
- Centre: a brown leather desk surface, the open Strange Book of Plants on the right, a circular wicker tray on the left displaying the currently-handled plant
- Left rail: three vertical tool icons — **The Will to Explore** (compass), **A Closer Inspection** (microscope), **A Rising Dread** (mushroom/triskele) — sense filters that gate which clue-text you can read
- Right rail: customer portrait + dialogue, day counter, hint button, bios; closed/open shop sign with a sleeping black cat under it
- Right tray (drawer cubby grid): six labelled storage slots — **Items, Clues, Labels, Letters, Archive, archive** — Tend's metaphor for "saved offerings / unlocked correspondences / journal entries"
- Frame: ivy vines hand-painted into all four corners; green leaf accents on every button

![Canonical desk view with customer at counter, wicker plant tray and open Strange Book of Plants](images/strange-horticulture/steam-ss-01.jpg)

![Canonical desk view variant with different plant on tray and observation-card overlay visible](images/strange-horticulture/steam-ss-03.jpg)

![Desk view with the Farmer's Worry / Forest Camphry page open in the Strange Book of Plants](images/strange-horticulture/steam-ss-08.jpg)

![Desk variant: magnifying glass and Patterson's Guide to Fatal Fungi laid open, lab distillation flask visible at right, drawer rack labelled Items / Clues / Letters / Labels / Archive](images/strange-horticulture/steam-ss-04.jpg)

![Canonical desk view: plant identified state, closed shop sign and sleeping black cat at bottom right](images/strange-horticulture/steam-ss-10.jpg)

## The Strange Book of Plants — the spectacular plant identification UI

**This is the centrepiece reference for Tend's correspondence library.** The book is always open on the desk and serves as the single point of contact with the game's knowledge graph. Each two-page spread shows two plants:

- Plant name in a flowing **Victorian script display face** (e.g. *Gandyroot*, *Gilded Dendra*, *Farmer's Worry*, *Forest Camphry*, *Meakdew*, *Carnivorous Yarrow*, *Clarilium*, *Demmel*, *Brimlock*, *Botterdale*, *Hopheart*, *Lemon Dandy*, *Dranthum*, *Peverkis*, *Grey Sandfire*, *Evalum*)
- Latin binomial below in italic small caps (e.g. *Maurissa Obitus*, *Camimum Vulpes*, *Agricola Tlinor*, *Cammisus Silva*)
- Two paragraphs of body text in a brown ink-on-cream serif describing properties, dangers, lore
- A single **black-line pen sketch** of a diagnostic feature (leaf shape, seedpod, flower cluster) drawn in confident, slightly loose 19th-century herbarium style — never coloured, never photorealistic
- A small leaf bullet "fleuron" glyph separates name from binomial; subtle leaf vines border the spread

The interaction has three layers:
1. The currently-handled plant sits **on the wicker tray** at left as a full-colour painted illustration in its pot (silhouette is the primary identification cue)
2. Player applies sense filters (Will to Explore, Closer Inspection, Rising Dread) to surface short observation notes on a torn parchment scrap — *"The dark blue petals are soft and feathery to the touch. My fingers seem to be irritated by this plant."* / *"Small leaves, delicate flowers."* / *"It has a sweet scent. Like strawberry dipped in honey."* / *"Sharp thorns grow along the edges of the upper leaves."*
3. Player drags a yellow paper **luggage tag** label onto the plant once they're confident — explicit commit gesture

![Strange Book of Plants cover — brown leather with embossed gold sigil and "Wilfrid Voynich" calligraphic signature](images/strange-horticulture/plant-01.jpg)

![Plant entry: full tray + open book + observation card for a tall-stalk species](images/strange-horticulture/plant-04.jpg)

![Plant entry: full tray + book spread with pen-and-ink leaf diagnostic sketch](images/strange-horticulture/plant-05.jpg)

![Plant entry: bulb-and-leaves species on wicker tray with book entry open](images/strange-horticulture/plant-08.jpg)

![Plant entry: flower-cluster species with observation notes and book entry](images/strange-horticulture/plant-10.jpg)

![Plant entry: vine species with book spread showing Latin binomial and lore text](images/strange-horticulture/plant-13.jpg)

![Plant entry: mushroom-group species on tray with diagnostic sketch in book](images/strange-horticulture/plant-15.jpg)

![Plant entry: book spread for a small-flowered species with torn parchment observation card](images/strange-horticulture/plant-20.jpg)

![Plant entry: seedpod species with pen-and-ink cross-section sketch in book](images/strange-horticulture/plant-22.jpg)

![Plant entry: spiny-leafed species with observation notes and book lore paragraph](images/strange-horticulture/plant-25.jpg)

![Plant entry: dark-petalled species on wicker tray, book entry with Victorian script name](images/strange-horticulture/plant-28.jpg)

![Plant entry: pot-and-cluster species with full book spread visible](images/strange-horticulture/plant-30.jpg)

![Plant entry: terracotta-potted species with diagnostic leaf sketch](images/strange-horticulture/plant-33.jpg)

![Plant entry: speckled-ceramic-potted species with book name in copperplate script](images/strange-horticulture/plant-35.jpg)

![Plant entry: ochre-potted species, two-page spread with pen sketch and lore](images/strange-horticulture/plant-38.jpg)

![Plant entry: blue-ceramic-potted species, book spread with Latin binomial in italic small caps](images/strange-horticulture/plant-42.jpg)

![Patterson's Guide to Fatal Fungi and Their Antidotes — torn, redder paper stock insert with list of dangers and remedies; cross-reference insert pattern](images/strange-horticulture/plant-03.jpg)

## Town map (the puzzle of where customers come from)

A **single full-screen aged-paper map** of a fictional Lake District:

- Hand-drawn cartography — pictorial mountains with peak names + heights (Sealthia 957m, Scafell Pike, Crinkle Crags), village labels in italic script, hatched forest blobs, river snaking in fine ink
- **Coordinate grid** along the top (1–33) and side (a–q) — explicit Battleship-style addressing
- Compass rose card with cardinal text directions ("North of Hawkshead / East of Lowick / West of Rusland / South of Crinkle Crags") that the player must triangulate
- A **physical magnifying glass** prop with a green handle and wooden grip floats over the map; under the lens, the cartography snaps to a higher detail (place names like "Undermere" only legible through the lens)
- Right rail: yellow tag (current pin), Strange Book of Plants, compass dial, scribbled note, items
- Scale bar at bottom-left ("miles 0 1 2 3 4")

This map is a strong reference for any Tend "world" / "altar landscape" / "lunar calendar" view that needs to feel like a *thing you unfold*, not a screen you scroll.

![Full-screen aged-paper map of Undermere region: hand-drawn cartography with coordinate grid, compass rose card, and physical magnifying-glass prop floating over parchment](images/strange-horticulture/steam-ss-06.jpg)

## Customer dialogue / request UI

The right rail is where customer interaction happens:

- Character portrait (head-and-shoulders, painted, with a small status circle indicating mood/relation)
- Customer name in serif
- **Chat-bubble dialogue** stacked vertically — but styled as torn cream paper scraps, not modern chat bubbles. Text is short and atmospheric: *"Their leader… the Arda – or whatever they call her – she's dead."* / *"My instinct is they're hiding something."*
- Below, a yellow tag with the requested plant name and a leaf-icon button that *snaps* to the tag when you drag the correct plant onto it

![Customer dialogue: right-rail portrait with torn-parchment speech scraps and yellow luggage-tag request](images/strange-horticulture/steam-ss-03.jpg)

![Customer dialogue: alternate customer with Farmer's Worry / Forest Camphry page open](images/strange-horticulture/steam-ss-08.jpg)

## Letters, notes, clues, journal

The right-side drawer rack — labelled **Items / Clues / Labels / Letters / Archive** — holds stamps, a brass coin, a ledger book, a magnifying glass, paper slips, yellow tags, a scroll, and a key as tiny props. This is the canonical inventory pattern for a tactile correspondence library.

![Right-side drawer rack: deep mahogany cabinet labelled Items / Clues / Labels / Letters / Archive with miniature prop inventory visible](images/strange-horticulture/steam-ss-04.jpg)

![Torn letter "Warmest regards, Annie Duncan" on the desk beside a "New Plants Acquired" mossy-green parchment scroll banner with botanical illustration trio — model for Tend's "new offering unlocked" reward state](images/strange-horticulture/steam-ss-09.jpg)

![Observation-card overlay: small torn parchment chit with one line of sensory text and a green leaf "OK" button](images/strange-horticulture/steam-ss-01.jpg)

## Character cards (occult plot UI)

The **character roster** is a horizontal row of vertical tarot-card-shaped portraits along the bottom of the screen. Slots that aren't yet unlocked are dark with a "?" — a strong Tend pattern for "patron deities you haven't aligned with yet." When clicked, the card pops up enlarged with a thin gold halo of esoteric symbols (moon, eye, dotted circle) around the figure, plus a band naming their archetype (*The Psychic*, *The Coven*, *The Hunter*…) and body text with backstory and chat log.

The painted portrait style: flat, slightly cel-shaded, muted Victorian palette, every character with a different occult marker (psychic = candles + crescent moon + eye sigil; coven = green cloak; cultist = bone-mask).

![Character roster: horizontal row of tarot-card-shaped portraits with dark "?" slots for locked patrons, gold halo of esoteric symbols around selected figure](images/strange-horticulture/steam-ss-02.jpg)

![Official character lineup: full painted roster showing The Psychic, The Coven, The Hunter and other archetype portraits in Victorian occult style](images/strange-horticulture/site-characters1.png)

## Map / pin / coordinate interaction

The **magnifying-glass-as-cursor**: the lens itself is rendered as a physical prop on the desk; moving it over the parchment map reveals high-detail labelling otherwise hidden. The compass-rose card with the four cardinal directions is a separate paper scrap the player slides around. The pin (a green leaf marker) is the commit action.

![Magnifying-glass prop floating over the Undermere map, compass-rose card alongside, green leaf pin as commit marker](images/strange-horticulture/steam-ss-06.jpg)

## Opening / cinematic UI

![Cold-open vignette: two tarot-style cards floating in soft volumetric candle-light, teal-patterned card and grey narrative card reading "The eighth row. The third river." with white hand-script subtitle below](images/strange-horticulture/steam-ss-05.jpg)

![Inter-chapter beat: pen-sketch illustration of the shop exterior on aged orange parchment with body copy on the left and "Continue" centred below — reference for onboarding / chapter-break screens](images/strange-horticulture/steam-ss-07.jpg)

## Plant identified — reward state

When the player tags a plant correctly, a **mossy green leaf-shaped vignette** zooms in over the desk with the plant centred, a yellow tag reading the species name, and serif title text *"Plant Identified"* with twin curlicue flourishes. A "Book Entry" reward icon and a green "Collect" button complete it. The closed/open sign behind reads "Closed" with a sleeping black cat curled beneath. *This is the model for Tend's "offering accepted" / "correspondence learned" microcelebration.*

![Plant Identified reward state: mossy green leaf-shaped vignette zoomed over desk, plant centred, yellow species-name tag, "Plant Identified" in script with curlicue flourishes, green "Collect" button, sleeping cat beneath closed sign](images/strange-horticulture/steam-ss-10.jpg)

## Color palette

Sampled from the screenshots:
- **Desk woods**: warm sienna `#7B4A2A` / dark walnut `#3D2417` / aged saddle `#A8723E`
- **Parchment / book pages**: cream `#E8D5A8` / aged paper `#D4B98C` / torn note `#E6D4A6`
- **Greenhouse blue (night)**: slate `#2D4654` / dusk `#4A6478` / cool window `#6F8FA0`
- **Foliage greens**: deep ivy `#2E4A2E` / sage `#7A9560` / moss `#4F6B3A` / bright leaf accent `#8FB960`
- **Occult accents**: blood red `#7E2A2A` / candle gold `#D9B45A` / pentagram red on the book
- **Type**: ink brown `#3D2A1A` / cream `#F2E4C0` / muted teal-green sub-headers

Crucially the palette **never goes pure black or pure white** — every dark is browned, every light is creamed. This is the single most important takeaway for Tend's color system.

## Typography

- **Display / titles**: a flowing English Roundhand / Victorian copperplate script (italic, looped ascenders) — used for plant names, "Plant Identified", "New Plants Acquired", "Strange Horticulture" wordmark
- **Body**: a slab-ish humanist serif in warm brown ink — reads like a 19th-century almanac. Generous line height. Never sans-serif anywhere in the diegetic UI.
- **Latin binomials**: italic small caps in a slightly lighter weight, immediately below plant names
- **Chrome UI** (settings gear, hint, bios labels): the same serif but in a flat tonal grey-green, so it recedes from diegetic text
- **Hand-script**: subtitle / narration text uses a thin handwritten cursive in white

A Tend equivalent might pair a script display (think Lavanderia, Carolyna Pro Black, or Pinyon Script) with a workhorse old-style serif (Caslon, Sorts Mill Goudy, Cormorant) and a humble handwritten accent.

## Hand-drawn art samples

Every plant illustration is the work of one consistent illustrator hand. Two distinct treatments:
1. **Full-colour painted plant in pot** (on the wicker tray) — soft watercolour fills, dark ink outlines, ~3-5 plant silhouettes per "type" (single tall stalk, cluster of small flowers, bulb + leaves, mushroom group, vine). The pot is always rendered in glossy ceramic (mottled black/grey, terracotta, ochre, or speckled blue).
2. **Pen-and-ink diagnostic sketch** (in the book) — pure black line on cream, classical herbarium style: a single leaf, a seedpod, a stem cross-section. The drawing always *isolates the identifying feature* rather than showing the whole plant. This is exactly the reduction-to-essence Tend would want for crystal, herb, and deity correspondence-card thumbnails.

See `plant-04`, `plant-05`, `plant-10`, `plant-15`, `plant-20`, `plant-30`, `plant-35`, `plant-38`, `plant-42` above for the cleanest examples of the dual treatment.

## Atmospheric lighting / mood

- **Greenhouse window with rain** — slow vertical streaks of water, a small wash of fog at the top, the silhouettes of plants behind. Provides "the world outside is wet and cold; you are in here, in the warm."
- **Candle/lantern hot-spots** — small yellow halos punctuate the shelf line behind the desk, never strong enough to overpower the green/blue cool palette
- **Vignetting** — every screen has a soft dark frame on all four edges, plus literal ivy vines painted into the corners
- **A sleeping black cat** appears in the bottom-right of multiple screens as ambient life — a "companion presence" Tend could borrow as a familiar/totem near the altar

## The cult / occult plot UI elements

- The Strange Book of Plants cover is a **leather-bound dark brown tome** with a circular thin gold sigil (a stylised bell-flower inside a compass-circle with marker dots and triangular nodes — vaguely alchemical) and a calligraphic signature *Wilfrid Voynich* on the cover (see book cover image above)
- Character cards show occult halo motifs around portraits: crescent moon, eye, candle pair, hooded silhouettes, bone masks

![Character roster showing locked "?" slots alongside revealed patrons — dark tarot-card placeholders as model for Tend's un-unlocked deities](images/strange-horticulture/steam-ss-02.jpg)

- The pentagram red book held in the key art is the cultists' grimoire
- The two tarot-shaped clue-cards in the cold-open (`steam-ss-05.jpg`) are a model for Tend's "draw a daily intention card" or "deity-of-the-day reveal"

---

## Design language & takeaways for Tend

1. **The "consult-your-book-to-identify-something" UX pattern is the single best mechanical reference for Tend's correspondence library.** Strange Horticulture proves that flipping through a hand-illustrated reference book — name, scientific name, two paragraphs, a single diagnostic sketch — is *not boring* if the artwork is consistent and the lookup loop is short. Tend's deity / herb / crystal / oil correspondence pages should follow this exact spread template: title in a script display face, "trad" or "Latin" subtitle in small caps, 2-3 paragraphs of properties + correspondences + warnings, and one isolated pen-sketch of a diagnostic feature (sigil, plant cutting, crystal cross-section).

2. **Hand-drawn pen-and-ink line art on cream parchment is the right aesthetic for a witchy correspondence library** — not coloured grimoire illustrations, not photos, not flat icons. The reduction-to-essence of a single leaf or seedpod is what makes Strange Horticulture's catalogue feel like a *working* herbalist's reference rather than a coffee-table book. Tend's correspondence cards should commit fully to this monochrome-ink-on-cream treatment for the diagnostic sketch, even if cover/thumbnail art is painted in colour.

3. **Stage everything on a wooden desk / altar diorama, not a screen.** Strange Horticulture never breaks the "you are at a workspace, looking down at it" frame. Tend's home should feel like an altar viewed from above — habits-as-offerings *placed* on a surface, not items in a list. The drawer-rack with labelled tabs (Items / Clues / Labels / Letters / Archive) is a directly transferable IA for Tend's secondary navigation.

4. **Use sense-filter buttons (compass / microscope / triskele) as a way to surface different *kinds* of metadata on the same object.** When you click "A Closer Inspection" on a plant, you get a haptic/scent observation; "The Will to Explore" gives geographic provenance; "A Rising Dread" gives occult lore. Tend could give every offering three modes — *Material* (what it is, when to harvest), *Ritual* (how to offer it, when), *Lore* (which deity it serves, the myth behind it) — exposed through three small tool icons rather than as separate tabs.

5. **The yellow paper luggage-tag label is a perfect "commit" gesture.** Dragging a tag onto a plant is *physical, irreversible-feeling, and earned* — way more satisfying than a confirm button. Tend's "offer this habit to Hecate today" action should feel as tactile as tying a paper tag onto something.

6. **Victorian copperplate script for display + a warm humanist serif for body + nothing sans-serif in the diegetic UI.** The system gear and small buttons can be in a tonal sans-style sub-serif, but anywhere the user reads *content* it must be the warm-brown-ink serif on cream. Pure black on pure white is forbidden.

7. **Palette: brown the darks, cream the lights, green the accents.** Every neutral has warmth in it. Greens are mossy/sage, never bright spring green. The only saturated accent is candle gold or blood red for occult markers. This is more committed than most "witchy" apps go — they tend to muddy into purple-on-black, which is a much weaker pitch than Strange Horticulture's *warm-brown library* register.

8. **A reward microcelebration framed as a green leaf-shaped vignette** ("Plant Identified" with twin curlicue flourishes, the item centred, "Book Entry" reward icon, "Collect" CTA) is a model for Tend's "offering accepted" / "new correspondence unlocked" state. Don't use a modal — use a vignette that zooms onto the object on the altar.

9. **Locked content as silhouetted card slots with "?".** The character roster hides un-unlocked patrons as dark cards with a question mark. Tend can use exactly this for un-unlocked deities / correspondences — a row of dark tarot-shaped placeholders along the bottom of the altar, gradually filling in as the user builds their practice.

10. **Always include a familiar.** The sleeping black cat in the bottom-right corner of multiple screens is doing enormous work for atmosphere with zero gameplay weight. Tend should have an ambient companion (cat / crow / moth) somewhere on the altar that wakes/sleeps/idles based on time-of-day — pure mood, no interaction required.

11. **Ivy / vine border frames on every screen.** Hand-painted foliage creeping into the corners of every UI surface is what stops a digital app from feeling digital. Tend can use the same trick: SVG vine ornaments anchored to screen corners, optionally responding subtly to scroll/time.

12. **Rain + candle-glow + greenhouse glass.** The atmosphere is built from three layered elements: a cool wet exterior (rain-streaked window), warm interior light pools (candles, oil lamps), and the diegetic "inside" being lush and verdant. Tend can do a lot with very little here — a subtle rain SVG layer over a "window" element at the top of the altar, plus warm pools of light beneath each offering candle, plus mossy foliage at the bottom.

---

## Sources

- [Strange Horticulture on Steam](https://store.steampowered.com/app/1574580/Strange_Horticulture/)
- [Strange Horticulture official site (strangehorticulture.com)](https://www.strangehorticulture.com/)
- [Bad Viking developer site](https://www.badviking.com/)
- [Strange Horticulture on Wikipedia](https://en.wikipedia.org/wiki/Strange_Horticulture)
- [Strange Horticulture Wiki — The Strange Book of Plants](https://strange-horticulture.fandom.com/wiki/The_Strange_Book of_Plants)
- [Steam Community Guide — The Strange Book of Plants: A Visual Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=2728763749) (source for the 42 plant catalogue entries)
- [PC Gamer review](https://www.pcgamer.com/strange-horticulture-review/)
- [Iceberg Interactive — Strange Horticulture](https://www.iceberg-games.com/portfolio/strange-horticulture/)
- [App Store listing (iOS)](https://apps.apple.com/us/app/strange-horticulture/id6450008138)
