# Fingerprints

Every site you build with **scrollcraft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| fieldnote | Typographic poster | Folio-in-margin, no fixed bar | Pinned single word (`Blank.`) with kinetic chars, at ~14rem, on paper ground | 6 acts, ~11.2vh total, pin/flow/pin/flow/pin/flow alternation | Inverted close: smallest type on the page, plain underlined link `carry one`, no button island | Scroll-as-nib: an SVG stroke draws across the viewport driven by the peak act's `--sc-p`, a nib polygon rides the endpoint via `offset-path`, a flourish underline draws in the last quarter | Editorial paper, unbleached cream (#F1EBDD), one ink-blue accent (#1A3358), Fraunces + Inter | 4500 |

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Grammar taken:** Typographic poster. A second build in this grammar has to differ on nav, hero, act-shape, close, and signature — the poster's forbids (no photographic ground, no scrub, no cards) become a heavy narrowing on nav and hero especially.
- **Nav treatment taken:** folio-in-margin, wordmark left / place-marker right, no fixed bar. A second build using this same folio needs to shift the other five dimensions harder to compensate.
- **Close pattern taken:** inverted close (smallest type + plain underlined link, no button, no spotlight, no magnet). Poster grammar's own close pattern; noting it here so a second poster build has to close differently or move at least three of the other four dimensions.
- **Signature-move family taken:** scroll-as-drawing (SVG `stroke-dashoffset` driven from an act's `--sc-p`, with a glyph riding the endpoint via `offset-path`). A second build must pick a different family, not the same idea in different letters.
- **Act-count-and-length band taken:** 6 acts at ~11vh. Do not repeat 6 acts at 13.6-13.8vh — that is the filmic-default band uniqueness.md §1 flags — but 6 acts here is now a fingerprint too.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scrollcraft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
