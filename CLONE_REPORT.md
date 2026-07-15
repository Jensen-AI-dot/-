# Clone report

## Result

The local clone now reproduces the source site's fixed-camera 3D project spiral, inertial wheel navigation, staged loader, fixed corner controls, expandable menu and alternate list view.

## Comparison

| Dimension | Result | Evidence |
|---|---|---|
| Structure | High | Loader, fixed controls, project index, menu, showreel and about section are present. |
| Visual language | High | Source CSS palette, pill controls, rounded cards, oversized type and public portfolio imagery are retained. |
| Motion | High | The deployed duplication, radius, gap, angle and inertial wheel formulas are ported to GSAP ticker updates. |
| WebGL fidelity | Source-backed CSS 3D substitute | Plane placement matches recovered source math; shader vertex bending is approximated by speed-based CSS transforms. |
| Responsive behavior | Verified | Browser-tested at the default desktop viewport and at 390 × 844. |
| Runtime health | Verified | No browser console errors or warnings after entry, menu expansion and layout switching. |

## Screenshots

- `RECON/clone-desktop.png`
- `RECON/clone-mobile.png`
- `RECON/target-spiral-reference.png`
- `RECON/clone-spiral-initial.png`
- `RECON/clone-spiral-after-scroll.png`

## Known gaps

- The source site's exact GLSL plane deformation, sound playback and Mux video playback are not duplicated.
- Several source project links were not exposed as public destinations in the deployed payload and remain local `#` placeholders.
- The Typekit font is approximated with a system Helvetica stack to keep the deliverable local and dependency-free.
