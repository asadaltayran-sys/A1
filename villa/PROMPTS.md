# Villa Aralia — Render Prompt Pack

Six prompts engineered for **visual consistency across shots** — same villa, same materials, same time-of-day language. Use these in Sora / DALL·E 3 / Midjourney / Stable Diffusion. Each prompt is grouped into the eventual Remotion shot sequence.

---

## Universal Style Anchors

Paste the **STYLE BLOCK** into every prompt. Don't paraphrase — the consistency comes from repeating the same phrasing verbatim.

> **STYLE BLOCK:** architectural photography in the style of Iwan Baan and Fernando Guerra, shot on Hasselblad H6D, 35mm equivalent, f/8, golden hour, raking warm light, deep shadows, ultra-photorealistic, 8K, no people, no cars, color-graded with warm highlights and cool teal shadows, magazine-quality, restrained composition

> **MATERIAL ANCHORS:** honed cream travertine cladding, board-formed charcoal concrete walls, blackened-steel window mullions, walnut soffits, vertical thermally-modified oak screen, dark-plaster infinity pool, bronze-tinted floor-to-ceiling glass

> **SETTING ANCHORS:** high desert hillside, Joshua Tree mountain backdrop, mature olive trees, agave and ornamental grasses, gravel and travertine paving, clear sky deepening to dusk

Aspect ratio: **16:9** for all shots (matches the 1920×1080 Remotion canvas).

---

## The Six Prompts

**Shot 01 — Hero Approach (0–4s)**
> A contemporary desert-modern villa, two stacked rectangular volumes with a dramatic 3.5-meter cantilever on the western edge, approached along a low travertine path between agave plantings. The lower volume reads as a long horizontal bar of honed cream travertine; the upper volume floats above in board-formed charcoal concrete. Blackened-steel-framed full-height bronze glass reveals warm interior light beginning to glow against the dusk. Long shadows rake across the gravel forecourt. [STYLE BLOCK] [MATERIAL ANCHORS] [SETTING ANCHORS] --ar 16:9 --style raw

**Shot 02 — Pool & Cantilever (4–9s)**
> Wide-angle exterior of a 25-meter linear infinity pool with dark-plaster finish reflecting the cantilevered upper volume of a modern villa. The pool's far edge dissolves into the desert horizon. Vertical thermally-modified oak screens cast striped shadows on the travertine deck. An outdoor fire pit glows in the foreground; the western mountains catch the last warm sun. The cantilever throws a deep shadow line across the pool deck. [STYLE BLOCK] [MATERIAL ANCHORS] [SETTING ANCHORS] --ar 16:9 --style raw

**Shot 03 — Interior Living + Sunken Pit (9–14s)**
> Interior of an open-plan living space inside the same modern villa. A circular sunken conversation pit clad in cream linen, centered on a board-formed concrete fireplace with blackened-steel surround. Walnut ceiling soffits run continuously from interior to exterior soffit, visible through floor-to-ceiling bronze-tinted glass that has fully retracted. A travertine waterfall kitchen island sits in the background. Warm pendant lighting, brass fixtures, terracotta and deep-teal accent textiles. Dusk light pours in from the west. [STYLE BLOCK] [MATERIAL ANCHORS] --ar 16:9 --style raw

**Shot 04 — Courtyard with Olive Tree (14–18s)**
> Internal courtyard of the same villa, open to the sky, with a single mature olive tree at center casting dappled shadow. Travertine paving in a large-format grid, with a narrow linear water channel. Board-formed charcoal concrete walls on three sides; floor-to-ceiling bronze glass on the fourth reveals the warmly-lit living space beyond. A single travertine bench. Late-afternoon sun catches the olive leaves; sky is deepening cobalt overhead. [STYLE BLOCK] [MATERIAL ANCHORS] --ar 16:9 --style raw

**Shot 05 — Aerial Dusk (18–23s)**
> Drone aerial shot of the same modern villa from 40 meters above, looking down at a 30-degree angle. The two stacked rectangular volumes are visible in plan: lower travertine bar, upper charcoal-concrete bar cantilevered west over the dark linear infinity pool. The internal courtyard with its single olive tree reads as a green square cut into the roof plan. The villa is set into a rocky desert hillside; landscape lighting is just beginning to glow. Mountains in the distance, sky transitioning from peach to deep blue. [STYLE BLOCK] [SETTING ANCHORS] --ar 16:9 --style raw

**Shot 06 — Night Reveal (23–28s)**
> The same modern villa at full night. Interior warm light pours through full-height bronze-tinted glass, washing the travertine deck. The infinity pool is lit from beneath, glowing teal. The cantilevered upper volume reads as a dark floating mass against a star-filled high-desert sky with Milky Way faintly visible. Landscape uplighting catches the olive trees and agaves. Vertical oak screens are backlit, casting long striped shadows. Subtle linear lighting at the recessed plinth makes the lower volume appear to float. [STYLE BLOCK] [MATERIAL ANCHORS] [SETTING ANCHORS] --ar 16:9 --style raw

---

## Naming Convention for Renders

When you bring the images back, drop them into `villa/renders/` as:

```
01-hero-approach.jpg
02-pool-cantilever.jpg
03-interior-pit.jpg
04-courtyard-olive.jpg
05-aerial-dusk.jpg
06-night-reveal.jpg
```

The Remotion composition will pick them up automatically by filename order.

## Consistency Tips

- **Run Shot 01 first** in your generator of choice. Pick the best result; in subsequent shots paste a description of the chosen villa's specific proportions back into the prompt ("a long horizontal travertine bar approximately 4x the height of the cantilevered upper volume").
- If your generator supports **image-to-image** or **style reference** (Midjourney `--sref`, DALL·E reference images), seed Shots 02–06 with Shot 01 as reference. This is the single biggest lever for consistency.
- Keep the **STYLE BLOCK verbatim** every time — paraphrasing drifts the look.
- Shoot at dusk/golden hour throughout except Shot 06 (night). Mixing daytime shots with dusk shots will look incoherent in the video edit.

## Next step (after you bring images back)

Restart this Claude Code session so the Remotion MCP server loads, then:

> "Build a 28-second Remotion video from the six renders in `villa/renders/`, with the shot timing in PROMPTS.md."

I'll write a Remotion composition with Ken-Burns slow zooms on each shot, dissolves between cuts, and a kinetic title sequence (`VILLA ARALIA — High Desert, 2026`).
