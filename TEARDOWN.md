# Spiral interaction teardown

## Evidence level

`SOURCE` — recovered from the deployed Nuxt bundle at `/_nuxt/rgzkqdZW-hit.js?v=20260711-20`.

The original scene is not page scrolling. A fixed Three.js canvas receives wheel input and advances an inertial `scrollOffset`. Its project mesh setup and placement rules are:

- Nine projects are duplicated: `[...projects, ...projects]`, producing 18 reusable planes.
- `verticalGap = 0.5`
- `angleGap = 0.85`
- `baseRadius = 2`
- `centerIndex = floor(projectsCount / 2)`
- `relative = modulo(index - scrollOffset, projectsCount) - centerIndex`
- `y = relative × verticalGap - 0.8`
- `angle = relative × angleGap`
- `x = cos(angle) × radius`
- `z = sin(angle) × radius`
- `rotationY = -angle + π / 2`

Wheel inertia in the deployed source uses:

- `targetWheelDeltaY += event.deltaY × 0.00015`
- clamp to `[-2, 2]`
- `wheelDeltaY += (targetWheelDeltaY - wheelDeltaY) × 0.1`
- `scrollOffset += wheelDeltaY`
- `targetWheelDeltaY *= 0.9`

The original vertex shader bends each plane with `sin(uv.x × π)` and adds an X displacement based on `uScrollSpeed`.

## Local implementation

The clone keeps those source constants, duplication and inertia rules. GSAP's ticker performs the continuous update and GSAP writes compositor-only `translate3d`, `rotateX`, `rotateY`, `rotateZ` and opacity values to 18 CSS 3D cards. A speed-dependent skew/rotation approximates the shader bend without claiming shader-level equivalence.

For the denser reference composition, the CSS projection uses maximum radii of 395px (X) and 260px (Z), a 66–90px responsive vertical pitch, a 2200px perspective distance and a 300px base card width. This preserves the source helix formula while avoiding the exaggerated near-plane scaling produced by the earlier 1100px/340px projection.

The deployed bundle exposes a `/:slug` project route. The static clone implements the equivalent state as `#project/<slug>`: one reusable dialog is populated from the clicked card, the spiral is frozen, and a GSAP timeline animates the stage, caption and close button. Close, Escape and browser history all restore the spiral; no SPA framework or server fallback is required.

The scene captures the pointer for horizontal dragging. Relying only on the browser's native `click` lost taps when a hand moved a few pixels between pointer-down and pointer-up. The fixed event path records the pressed card and activates it on pointer-up when movement stays below the existing 5px drag threshold; movement above that threshold remains a spiral drag.

The public deployment also replaces the Sanity thumbnails through `window.__LOCAL_SANITY_ASSETS__`. The clone now uses the same nine `/assets/sanity/Carousel N.png` images rather than the underlying Pacôme thumbnails.

## Verification

Browser wheel input changed card 0 from:

```text
translate3d(-281.307px, 348.503px, -198.604px) rotateY(-134.851deg)
```

to:

```text
translate3d(-379.912px, 239.171px, 81.2799px) rotateY(-73.224deg)
```

Screenshots:

- `RECON/target-spiral-reference.png`
- `RECON/clone-spiral-initial.png`
- `RECON/clone-spiral-after-scroll.png`
- `RECON/clone-spiral-compact.png`
- `RECON/target-spacing-reference.png`
- `RECON/clone-spacing-calibrated.png`
- `RECON/clone-project-detail.png`
