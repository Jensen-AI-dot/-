# Design QA

Status: passed

## Sources

- List reference: `qa/reference-list.png`
- Spiral reference: `qa/reference-spiral.png`
- Side-by-side spiral comparison: `qa/spiral-comparison.jpg`
- Desktop implementation: `qa/list-desktop-1860x887.png`, `qa/spiral-desktop.png`
- Mobile implementation: `qa/list-mobile-390x844.png`, `qa/spiral-mobile-390x844.png`

## Comparison history

1. Baseline: list was a conventional bordered project index and Spiral used a softer, less visible grid.
2. Iteration one: centered the list typography, matched the 64px grid, added cursor-following image previews, and removed desktop overflow.
3. Iteration two: applied the same grid to Spiral, enlarged the project planes, tightened helix spacing, strengthened 3D tilt, and added speed-reactive sliced image echoes.
4. Responsive pass: disabled hover-only previews on touch layouts, reduced the number of visible mobile planes, and verified 390 × 844 layouts without horizontal overflow.

## Intentional differences

- Portfolio product names, imagery, mascot, and Jensen branding remain project-specific.
- The spiral preserves the existing green focus outline and sound controls while adopting the reference density, perspective, blur, and grid language.

## Verification

- 222 raster assets total 29.51 MB after optimization; the optimizer is idempotent.
- 212 page-referenced media assets exist, and the browser reports no broken loaded images.
- Desktop (1440px), tablet (768px), and mobile (375px) layouts pass the final visual and interaction smoke test.
- Product details and Advanced A+ modules use the requested per-product image ordering.
- Desktop, tablet, and mobile layouts report no unexpected horizontal overflow.
- The final browser console contains no warnings or errors.
- List preview is hidden on mobile and available to mouse/focus users on desktop.
- Reduced-motion users do not receive mosaic echo motion.

## July 15 W5 and navigation refinement

### Sources

- W5 list reference: `C:/Users/angel/AppData/Local/Temp/codex-clipboard-cb4e873d-b776-4e62-bdc7-b2b2018be219.png`
- Spiral spacing reference: `C:/Users/angel/AppData/Local/Temp/codex-clipboard-cb078650-c51b-449f-8e7c-ce2f34d190a2.png`
- Complete J logo reference: `C:/Users/angel/AppData/Local/Temp/codex-clipboard-d06cd277-1f12-426a-9024-275271606124.png`
- Final implementation: `qa/loader-j-logo-final.png`, `qa/spiral-spacing-final.png`, `qa/list-w5-final.png`, `qa/list-w5-preview-final.png`, `qa/w5-detail-final.png`

### Findings and fixes

1. P1 — the opening mark used a cropped upper fragment. Replaced it with the full supplied J artwork and luminance-masked the original black field so the ball, stem, and complete lower arc remain visible without a rectangular edge.
2. P1 — the helix was dense enough to cover the view switch. Reduced simultaneous card density, added a menu-safe fade, and retained the reference tilt, depth blur, and center focus.
3. P2 — the list preview followed the pointer instead of the title. Anchored it to the active title's right edge with viewport clamping; verified the W5 preview at `x=898.8`, to the right of the title, within a 1280px viewport.
4. P2 — list headings were static. Added a 0.8–2.5px staggered sine float with reduced-motion protection.
5. P1 — replaced the third project with `W5 5000Mah磁吸充电宝` and added the seven supplied 1200 × 1500 detail images in the requested order.

### Verification

- W5 detail dialog exposes exactly seven non-clone slides and all imported images decode at 1200 × 1500.
- List title movement was measured across frames (`0.84px` delta in 900ms), confirming the subtle floating loop.
- Spiral/List controls remain unobstructed in the final 1280 × 720 spiral capture.
- Browser console contains no errors or warnings.
