# Clone audit

## Passed

- No Google Analytics, Tag Manager, Meta Pixel, Hotjar or other tracking code.
- GSAP and ScrollTrigger are vendored locally.
- All visual assets used by the page are local.
- Desktop and mobile entry flows are browser verified.
- Menu expansion, menu closing and list-view switching are browser verified.
- Spiral mode creates 18 cards and browser wheel input changes each card's X/Y/Z position and Y rotation.
- At 1920×920, the calibrated spiral has a 352px maximum foreground card and an x=524–1393 strong-card envelope, matching the reference's approximately 340–370px cards and x=550–1400 envelope.
- Clicking a spiral card opens the matching full-screen detail, updates the hash, pauses the spiral and closes back to an empty hash.
- Pointer-up activation is tolerant of up to 5px of hand movement; a browser-level 2px micro-drag opens the card, while a 42px drag moves the spiral without opening a detail.
- The `lastfinal` card opens `carousel-2.png` with the verified “Robot file output” caption.
- The same nine target-deployment `Carousel N.png` assets are served locally.
- Console errors: 0.
- Console warnings: 0.
- `prefers-reduced-motion` is respected for the loader and pointer-driven animation.

## Intentional external destinations

- Behance project pages and showreel.
- Instagram and LinkedIn profile links.
- A mail link inherited from the source deployment.

Project-list clicks are handled locally by the detail view; they no longer leave the clone for Behance.

## Publication warning

This clone is intended for local study. Original portfolio text, imagery, identity and art direction remain the property of their creators. Confirm permission and licensing before any public deployment.
