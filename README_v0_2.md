# Out of Frame — The Royal Ring: Immersive Prototype v0.2

## What changed

- New **full-screen cinematic artwork landing**, showing a crop of the frozen v1.7 panorama with the artwork title and a short interpretive hook.
- Clear first action **Enter the artwork** to reach the clean, unlabelled panorama.
- Secondary entrance **Look at the original photograph** to inspect the authentic 737 × 569-pixel source.
- The existing **Explore nine stories** interaction, hotspot navigation, thematic filters, source references, evidence grades and original-photo toggle are unchanged in function.
- The mobile landing shifts its background crop to keep the archival frame visible and supports reduced-motion preferences.

## Visitor sequence

**Encounter** — An atmospheric, full-viewport study landing; no hotspots or historical essay.

**Observe** — Clean, navigable panorama; no markers until visitors request them.

**Discover** — Reveal nine hotspots, explore story/evidence/sources, inspect original photograph; the Duke is a sub-story of the elephant-ring chapter.

This three-stage approach can be reused as the entrance for *Buffalo Corner* or later works in the series: each artwork swaps its hero visual, title, date, location and short hook, while keeping a common exploration pattern.

## Contents

- `The_Royal_Ring_Immersive_Prototype_v0_2.html` — standalone HTML (images and annotation data embedded; no network required for core interaction)
- `Royal_Ring_v1_7_Mechanical_Corrections.png` — frozen full-resolution artwork; **not edited** for this prototype
- `george.jpg` — the original archival reproduction; **not edited**
- `desktop_landing.png` / `mobile_landing.png` — interface review screenshots
- `annotation_data.json` — v0.5 annotation data used by the original prototype

## Historical separation

The wider scene is an artistic reconstruction, not an actual wider photographic negative. Chandra Shumsher and Duke of Teck are documented participants but their precise placement is interpretive. Ernest Brooks's placement as the camera operator is an artistic choice; attribution of the original GV-01 exposure remains unverified.

## Technical QA

Desktop 1440 × 900 and mobile 390 × 844 checked in a headless Chromium session. The landing photo loads, the Enter action scrolls to the exploration area, chapter markers display, an annotation can be opened, and original-photo mode uses a 737-pixel source. No JavaScript page errors were recorded. The artwork bytes are unchanged.
