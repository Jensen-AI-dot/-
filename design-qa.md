# Design QA

- Source visuals: the user-provided homepage spiral, left-side Showreel, P5 detail, and Advanced A+ screenshots from 2026-07-15.
- Implementation: `http://127.0.0.1:4173/`
- Intended viewports: desktop plus the existing `max-width: 760px` mobile treatment.

## Evidence captured

- JavaScript syntax check passed and all 15 Advanced A+ assets report the requested `1464 × 600` dimensions.
- In-app browser verification confirmed the P5 route opens its detail dialog, exposes the Advanced A+ down-scroll control, and renders exactly seven A+ modules.
- Verified A+ slide counts are `1, 1, 1, 4, 3, 3, 2`, with module image order matching the supplied mapping.
- Verified the background audio element uses `虚实之间_no-watermark.mp3` and has native looping enabled.
- Verified the generated green mascot asset loads and all 18 spiral project cards render.

## Findings addressed

- P5 detail now scrolls into a separate Advanced A+ section; its 1464:600 modules stack without vertical gaps and multi-image modules have independent GSAP carousels.
- The spiral uses tighter vertical spacing, an elevated visual center, depth-aware scale, motion/depth blur, and stronger X/Z tilt.
- The homepage left treatment uses a glossy green mascot and a larger bottom-peeking Showreel with curved type.
- Background synthesis was replaced with the supplied MP3; playback starts from the entry interaction and the sound button pauses/resumes it.

final result: pass
