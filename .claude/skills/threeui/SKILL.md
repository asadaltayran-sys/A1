---
name: threeui
description: "Reference for the ThreeUI (@designcodeio/threeui) React + Three.js component library from https://github.com/MengTo/threeui. Use when the user asks to add, port, or adapt a ThreeUI shader/component/landing page — the Community catalog covers 43 named effects (buttons, heroes, landing pages, backgrounds, orbs, shaders, etc.). Each effect has its own add-<name> sibling skill with the verified source list, asset handling, and implementation steps; route to that per-effect skill once the target effect is identified."
---

# ThreeUI

ThreeUI Community is an MIT-licensed open-source library of React + Three.js UI components and interactive landing pages, published as `@designcodeio/threeui` (repo: https://github.com/MengTo/threeui). Browse at https://threeui.com.

## Install

```bash
npm install @designcodeio/threeui
```

```tsx
import { AtTheHorizon } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
```

For the smallest import graph, use a subpath:

```tsx
import { AtTheHorizon } from "@designcodeio/threeui/components/AtTheHorizon";
```

Components that render full HTML documents expect their runtime files at the same root-relative URLs used by the ThreeUI preview. Copy the needed files from `node_modules/@designcodeio/threeui/lib-dist/assets/` into your app's public directory, or override the component's `sourceUrl` or `assetBaseUrl` prop where available.

Peer deps: `react >=18 <20`, `react-dom >=18 <20`, `three >=0.149 <1`.

## Per-effect skills

Each ThreeUI Community effect ships as its own sibling skill under `.claude/skills/add-*/SKILL.md`. When the user names an effect, route to the matching skill for verified source paths, asset lists, and step-by-step instructions:

- `add-kage-landing-page`, `add-complete-shelf-landing-page`, `add-bestsellers-book-showcase`, `add-sylva-hero`, `add-meng-to-sketchbook-landing-page`, `add-sylva-living-world`, `add-temple-night`, `add-japanese-tower`, `add-landscape`, `add-bookshelf`, `add-gallery`, `add-sketchbook`
- `add-predictive-arc`, `add-liquid-form`, `add-crt`, `add-energy-orb`, `add-spark-badge`, `add-elements`, `add-typography-vortex`, `add-semantic-bloom`, `add-globe-study`, `add-gallery-heading`, `add-star-portal`, `add-character-carousel`, `add-structure-flow`, `add-warp-field`, `add-engraved-certificate`, `add-woven-cloth`, `add-koi-studies`, `add-article-headings`, `add-constellation-field`, `add-portal-field`, `add-matrix-field`, `add-wireframe-forms`, `add-brand-orbs`
- `add-rectangle-buttons`, `add-circle-buttons`, `add-liquid-metal-button`, `add-animated-top-dock`, `add-performance-gauges`, `add-uplink-loader`, `add-diagnostics-panel`, `add-skeuomorphic-toggle`

If none of the above matches the requested effect, it's not part of the Community catalog — direct the user to Pro (`https://threeui.com/pricing`), which is fetched via OAuth CLI (`npx @designcodeio/threeui-cli add <name>`) and is not in this skill set.

## License

MIT for application/component code and ThreeUI-authored imagery. Bundled fonts are SIL OFL 1.1; bundled Three.js runtime is MIT. Remote thumbnails at `https://threeui.com` are not redistributed by the package.
