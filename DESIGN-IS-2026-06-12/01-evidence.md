# Evidence — Villa Aralia Brief

## Structural facts (DESIGN.md)

- 38 lines total, 5 H2 sections (Site, Massing, Materials, Program, Palette) + 1 H1
- 6 named materials (DESIGN.md:19–24)
- 6 program elements (DESIGN.md:27–32)
- 3 palette categories: neutrals, accents, greenery (DESIGN.md:35–37)
- Committed numerics: ~420 m² / 4500 sq ft (line 8), 3.5 m cantilever (line 15), 25 m pool (line 29)
- Zero dead bullets — every line carries a decision

## Visual / aesthetic discipline (the document itself)

- Single spacing scale (markdown), single type scale (markdown headings + bullets)
- No emoji, no decorative ornament, no executive-summary boilerplate
- Anchor reuse is enforced upstream: PROMPTS.md:9 — *"Paste the STYLE BLOCK into every prompt. Don't paraphrase — the consistency comes from repeating the same phrasing verbatim."*
- Same six materials in DESIGN.md:19–24 reappear verbatim in PROMPTS.md:13 MATERIAL ANCHORS

## Copy & honesty

- Strongest claim is "dramatic 3.5-meter cantilever" — only in PROMPTS.md:24 (prompt directive, not document claim)
- DESIGN.md uses no marketing superlatives (no "luxury", "exclusive", "iconic", "stunning")
- Every numeric is falsifiable (420 m², 3.5 m, 25 m)
- Villa.tsx:178 end-card reads "An exercise in restraint" — congruent with the brief's tone, not inflating it

## States / thoroughness

- Lighting states: dusk and night are explicit (lines 17, 23 implied via PROMPTS.md shots 01/02/05/06)
- Daytime state: NOT directly addressed in DESIGN.md; only "east-facing main view for sunrise" (line 9)
- Internal inconsistency: line 14 specifies the upper volume contains "two guest suites, study, terrace" — four discrete program elements packed into one rectangular cantilevered volume, with no dimensional check
- Room count drift: "primary suite" (line 13) + "two guest suites" + study (line 14) = 4 rooms in 420 m² unverified against site numbers

## Weight & friction (cognitive load)

- 38 lines, ~250 words — readable in <2 minutes
- Zero glossary / TOC / disclaimer / persona prose
- Reader must hold ~6 materials + 6 program items + 7 palette terms — comfortably within working memory

## Trend-anchor risk

- DESIGN.md:6 — "Joshua Tree / Palm Springs vernacular" — names a current (2020s) design-Instagram trend explicitly
- The materials chosen (travertine, board-formed concrete, walnut, blackened steel) have 60+ year lineage and are not themselves trend markers
- The villa.tsx brass accent `#b8956a` (Villa.tsx:151, 176) is a quiet, classic accent — not a trend color

## Downstream coherence

- Six render filenames in Villa.tsx:27–32 map 1:1 to the six prompts in PROMPTS.md
- Mixed extensions (`.webp` for 01/02, `.svg` for 03–06) — placeholders awaiting real renders, documented in remotion/README.md:36–43
