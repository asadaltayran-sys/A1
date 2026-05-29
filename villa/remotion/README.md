# Villa Aralia — Remotion Composition

## Files

- `Villa.tsx` — the composition (28s, 1920×1080, 30fps)
- `../renders/0X-*.svg` — six placeholder slates (swap with photoreal JPGs when ready)

## Structure

- **Title card** (0–4s): "VILLA ARALIA · HIGH DESERT · 2026" with brass underline reveal
- **Six shots** (~28s total) with Ken-Burns zoom/pan and 0.6s crossfades
- **End card** (last ~2.5s): "ARALIA" + tagline

## Shot timing

| # | Shot | Duration | Motion |
|---|------|----------|--------|
| 01 | Hero Approach | 4s | zoom in + pan left |
| 02 | Pool & Cantilever | 5s | zoom out + pan right |
| 03 | Living · Sunken Pit | 5s | zoom in + tilt down |
| 04 | Courtyard · Olive | 4s | zoom out + tilt up |
| 05 | Aerial · Dusk | 5s | zoom in + pan right |
| 06 | Night Reveal | 5s | zoom out + tilt down |

## How to compile (after session restart)

The Remotion MCP server's `create_video` tool accepts a JSON map of file paths to code. Once the MCP is loaded, ask:

> "Compile the villa composition via create_video"

I'll send `Villa.tsx` as the entry file along with the six SVGs and the server will return a video URL rendered inline in chat.

## Swapping placeholders for real renders

When you bring back the photoreal JPGs, drop them into `villa/renders/` with the same base names:

```
01-hero-approach.jpg     ← replaces 01-hero-approach.svg
02-pool-cantilever.jpg
03-interior-pit.jpg
04-courtyard-olive.jpg
05-aerial-dusk.jpg
06-night-reveal.jpg
```

Then update the `SHOTS` array in `Villa.tsx` to use `.jpg` extensions (or I can switch it to glob the renders directory).

## Tuning knobs in Villa.tsx

- `CROSSFADE_FRAMES` (default 18 = 0.6s) — dissolve length between shots
- Per-shot `zoomFrom` / `zoomTo` / `panX` / `panY` — adjust Ken-Burns motion
- `TitleCard` / `EndCard` typography — swap fonts, colors, taglines
- Brass accent color `#b8956a` — used in both cards' divider lines
