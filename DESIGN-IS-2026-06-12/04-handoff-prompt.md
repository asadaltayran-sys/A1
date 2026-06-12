# Handoff to /make-plan

````
/make-plan Refine villa/DESIGN.md based on a Dieter Rams audit (total 27/30).

Verdict paragraph (quoted from 03-verdict.md):
> Villa Aralia's brief is a quiet, disciplined artifact whose bones are exceptional — every line earns its place, every claim is honest, and the verbatim-anchor strategy makes downstream consistency tractable. Two narrow gaps lower the score: a trend tether and one unresolved program/state detail. Both are direct edits to DESIGN.md; no structural redesign is warranted.

Keep (already strong, do NOT touch in this pass):
- Principle #2 (useful) scored 3 — Evidence: every line of DESIGN.md is consumed downstream by PROMPTS.md and Villa.tsx:27–32. Regression check: after edits, confirm every DESIGN.md material/program element still appears verbatim in PROMPTS.md MATERIAL ANCHORS (PROMPTS.md:13).
- Principle #3 (aesthetic) scored 3 — Evidence: single visible system across 38 lines, no orphan styles. Regression check: diff DESIGN.md before/after for any new heading levels, emoji, decorative ornament, or formatting drift.
- Principle #4 (understandable) scored 3 — Evidence: H2 sections Site/Massing/Materials/Program/Palette each map to one purpose. Regression check: section headings remain unchanged; new content lands inside existing sections.
- Principle #5 (unobtrusive) scored 3 — Evidence: no TOC, no exec summary, no decorative headers. Regression check: no new meta-sections added.
- Principle #6 (honest) scored 3 — Evidence: zero superlatives in DESIGN.md; all numerics falsifiable (420 m², 3.5 m cantilever, 25 m pool). Regression check: grep DESIGN.md for "luxury|exclusive|iconic|stunning|premium|world-class|breathtaking" — must return zero hits.
- Principle #9 (environmentally friendly / cognitive load) scored 3 — Evidence: 38 lines, ~250 words. Regression check: post-edit line count ≤ 45; post-edit word count ≤ 290.
- Principle #10 (as little design as possible) scored 3 — Evidence: every section earns its place. Regression check: no new H2 sections; only inline edits within existing sections.

Fix in priority order (top 3 moves from the audit, verbatim):
1. Principle #8 — Thorough: Resolve the upper-volume program inconsistency in DESIGN.md:13–15. The lower volume holds primary suite + living/kitchen/dining; the upper holds two guest suites + study + terrace. Four discrete programs in a single cantilevered rectangle in 420 m² is not dimensioned. Either drop the study, dimension the volumes (e.g. "Lower: ~280 m². Upper: ~140 m²."), or move the study into the lower volume. Evidence: DESIGN.md:13–15.
2. Principle #7 — Long-lasting: Remove the explicit trend tether in DESIGN.md:6 ("Joshua Tree / Palm Springs vernacular"). The materials and massing are already timeless; naming a current Instagram trend dates the brief. Replace with the geological description that's already implicit ("high desert hillside, granite mountain backdrop, agave and Joshua-tree landscape"). Keeps the location, drops the trend marker. Evidence: DESIGN.md:6.
3. Principle #8 — Thorough: Add a single line in DESIGN.md establishing the daylight state. The brief privileges dusk/night (line 17, and PROMPTS.md weights toward golden-hour); add one line on daytime material read so executors don't drift toward perma-dusk renders. E.g. "Daylight: travertine reads warm cream, walnut soffits read amber, board-formed concrete reads neutral grey. Dusk and night shift the palette warmer and add interior glow." Evidence: DESIGN.md (no daylight anchor line); compare PROMPTS.md shots 01/02/05/06 all dusk/night.

Out of scope for this refine pass:
- Massing decisions (two stacked volumes + 3.5 m cantilever)
- Materials palette (the six anchor materials)
- Section structure (Site/Massing/Materials/Program/Palette H2 set)
- The PROMPTS.md verbatim-anchor discipline
- Villa.tsx Remotion composition

Deliverables for the plan:
- Per-fix: exact DESIGN.md lines to change, the new text verbatim, and the verification grep/word-count.
- A single consolidated diff preview before any edit lands.
- Regression checklist for every "Keep" item above, executed post-edit.

Anti-patterns to guard against (specific to REFINE):
- Adding new H2 sections where a sentence edit suffices (would regress #10).
- Restyling Massing or Materials sections that already scored 3.
- Letting the daylight-state addition mushroom into a multi-line "lighting design" section (must remain one line).
- Replacing the "Joshua Tree / Palm Springs vernacular" tether with a different trend phrase ("Brutalist revival", "warm modernism") — the goal is to drop trend language, not swap it.
````
