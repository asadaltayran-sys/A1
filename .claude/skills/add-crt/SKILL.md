---
name: add-crt
description: "Build CRT from its verified authored source using Raw WebGL + Canvas 2D, including the complete renderer, interactions, and required assets. Use when Codex needs to implement, port, or adapt this effect without requiring the ThreeUI package or reconstructing the visual from an approximation."
---

# Build CRT

## Description

A complete Matrix-era boot terminal rendered to an offscreen text texture and passed through the exact authored curved CRT shader.

Recreate the authored behavior from the verified source, not from screenshots or the abbreviated orchestration sample in this skill. The implementation may live directly in the target project and does not require `@designcodeio/threeui`.

## Technologies

- React lifecycle host
- Raw WebGL CRT composite
- Offscreen Canvas 2D boot-text texture
- Visibility-aware animation and adaptive backing resolution

## Verified source material

- `ZION-Construct-Initialization (1).html — complete CRT background`
- `src/shaders/crt/crtRenderer.ts`
- `src/shaders/crt/crtShaders.ts`
- `src/shaders/crt/CrtBackground.tsx`

Source revision: `SHA-256 860a1eb1d4c9`

## Implementation steps

1. Open every verified source file listed above and identify the renderer, host lifecycle, styles, and assets before editing.
2. Keep the complete 19-row terminal log, colors, layout math, cursor, reveal cadence, and blink state.
3. Upload the offscreen Canvas texture only when the boot text changes.
4. Compile the exact authored curvature, chromatic offset, scanline, grille, rolling bar, vignette, flicker, and grain GLSL.
5. Apply brightness, opacity, and a hue/saturation grade to the completed host rather than editing the texture or GLSL.
6. Own texture, buffer, shader, observer, resize, frame, and disposal lifecycle.
7. Give the local component a sized, overflow-controlled parent and verify desktop, mobile, reduced-motion, and context-loss behavior.

Asset handling: This effect has no required external assets.

## Local component example

Import the copied local component rather than a package entrypoint:

```tsx
import { CrtBackground } from "./effects/crt/CrtBackground";
import "./effects/crt/styles.css";

export function Scene() {
  return <div className="effect-frame"><CrtBackground /></div>;
}
```

## Core renderer pattern

This excerpt documents orchestration only. Copy the exact shader, geometry, pass, and interaction code from the verified source files.

```tsx
drawScreen(reveal);
if (cursorVisible) drawCursor();
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

## Behavior contract

- Runtime: Raw WebGL + Canvas 2D
- Passes: 2 — Canvas 2D boot texture + raw WebGL CRT composite
- Interaction: Customizable boot speed, CRT motion, hue, brightness, and opacity
- Assets: No external assets
- **renderer** (host): Raw WebGL + Canvas 2D
- **boot** (fixed): 19 authored terminal rows
- **assets** (fixed): None

## Verification

1. Compare the rendered composition, animation timing, pointer behavior, and state transitions with the source implementation.
2. Exercise resize, high-DPI, mobile/coarse-pointer, reduced-motion, tab visibility, and WebGL context-loss paths where applicable.
3. Confirm every animation frame, observer, listener, geometry, buffer, texture, framebuffer, material, and renderer is released on teardown.
4. Check the browser console and confirm the effect renders at native-or-better backing resolution.

## Guardrails

- Do not substitute a visually similar package, demo, shader, or runtime.
- Do not approximate, reconstruct, or simplify the authored GLSL, render passes, geometry, interaction state, or assets.
- Keep exact source and asset hashes under regression tests when the source project provides them.
- Adapt only the surrounding host boundary needed by the target project; keep renderer behavior intact.
