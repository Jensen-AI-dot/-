# Pacôme Pertant GSAP clone

## Scope

- Source: `https://pacomepertant-clone-yw.zhouyiwei0001.chatgpt.site/`
- Mode: visual clone for local study
- Complexity: L4 (motion-first portfolio with persistent UI, loader, hover states and a WebGL-style background)
- Implementation: static HTML/CSS/JavaScript with local GSAP 3.13.0, a GSAP-ticker CSS 3D helix and ScrollTrigger for the list/about branch

## Evidence

- `RECON/original.html` and `RECON/original-entry.css` are read-only evidence downloaded from the public deployment.
- Original palette recovered from CSS: `#0a0a0a`, `#fafafa`, `#e6e6e6`, `#21ffc0`.
- Project titles, years, public Behance destinations and Sanity thumbnails were recovered from the deployed Nuxt payload.
- The deployed bundle exposed the original project-plane math and wheel inertia. The clone ports those source constants and formulas to a GSAP-driven CSS 3D helix; only the original shader-level mesh bending remains approximated.
- The target deployment's `window.__LOCAL_SANITY_ASSETS__` mapping was followed, so the spiral uses the same nine `Carousel N.png` images visible in the target.

## Reproduced interactions

- Animated loading counter and staged entrance timeline.
- Fixed logo, view switch, expanding menu, showreel card and sound visualizer.
- Infinite 18-card 3D spiral with inertial wheel motion, seamless wrapping and speed-based card bending.
- Tighter source-shaped spiral composition with reduced X/Z radii and vertical pitch for stronger card overlap.
- Horizontal touch dragging for the spiral.
- Full-screen project detail view for all nine cards, with hash routing, GSAP entrance/exit, Escape/close/back support and focus restoration.
- Spiral/list layout transition.
- Scroll-linked background and showreel movement using ScrollTrigger.
- Responsive mobile layout and `prefers-reduced-motion` handling.

## Run

From PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open `http://127.0.0.1:4173/`.

Detail routes use `#project/<slug>` so the static clone remains directly navigable without a server-side router.

## License and attribution

This is a local visual study. Original art direction and portfolio content belong to Pacôme Pertant and their respective creators. GSAP files are distributed under GSAP's standard license. Do not publicly deploy the clone or reuse the original assets without checking permission and licensing.
