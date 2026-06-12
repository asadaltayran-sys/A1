# Scope — Villa Aralia Design Audit

**Audit target:** `villa/DESIGN.md` (38 lines) — design brief for "Villa Aralia," a contemporary desert-modern villa.

**Supporting artifacts inspected for context:**
- `villa/PROMPTS.md` — render prompt pack with universal STYLE/MATERIAL/SETTING anchors
- `villa/remotion/Villa.tsx` — 28s Remotion composition that consumes the renders
- `villa/remotion/README.md` — composition documentation
- `villa/renders/` — 4 SVG placeholders + 2 WebP renders

**Primary user:** the downstream operator — image-generation prompter (Sora/MJ/DALL·E) and Remotion compositor — who must execute a coherent villa across six shots.

**Primary task of the brief:** commit enough material, massing, program, and palette decisions that downstream renders look like the *same* villa across every shot.

**Constraints:**
- Markdown-only artifact (no images, no Figma)
- Must travel as plain text into generative-image prompts and Remotion code
- Repo is small, single-purpose, no shipped UI — the brief itself *is* the product

**Adaptation note:** Rams' principles were written for industrial design. Here the "product" is a written architectural brief whose shipping form is a 28s reel. The visual / accessibility / weight-friction lenses are adapted to: visual discipline of the document, ambiguity of the brief, and cognitive load on the executor. No subagent fan-out — the audited surface is 38 lines.
