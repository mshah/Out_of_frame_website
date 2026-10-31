# OUT OF FRAME — Exhibition website v1.4

**Complete static website** for **Out of Frame: The Making of a Trophy**. Buffalo Corner is now Study 01 and The Royal Ring is Study 02.

## Opening the site

1. Extract the ZIP while preserving its `Out_of_Frame_Site` directory structure.
2. Open `Out_of_Frame_Site/index.html` in a browser. The site is plain HTML/CSS/JavaScript and has no backend or build step.
3. For deployment, upload all contents of `Out_of_Frame_Site/` as a replacement for the previous static site, retaining relative paths.

## Main pages

- `index.html` — series entrance, Buffalo Corner first, both artworks, essays and method links.
- `works/index.html` — collection, Buffalo Corner then The Royal Ring.
- `works/buffalo-corner.html` — full **13-scene** interactive experience. Image, zoom/pan, hide/reveal markers, original photograph, research and evidence layers, individual source references, thematic paths, related scenes, details and source locators, hash deep links.
- `works/the-royal-ring.html` — original nine-chapter interactive Royal Ring experience, retaining its **v2.14** image and v1.3 alignment fixes.
- `essays/` — four working-draft curatorial essays.
- `method.html` and `about.html` — interpretive and project background.

## Buffalo Corner assets / source integrity

- `assets/images/buffalo-corner-v2.1-master.png` — **exact supplied** 2172 × 724 working panorama; no markers baked into it.
- `assets/images/buffalo-corner-view.webp`, `buffalo-corner-hero.webp` — browser derivative images, not enlarged master exports.
- `assets/images/buffalo-corner-archival-original.tiff` — **byte-for-byte** copy of supplied archival source TIFF, 2448 × 2188; print border and handwritten marks retained. The JPEG beside it is a browser-view copy, not an archival replacement.
- `assets/images/buffalo-details/` — all 13 art detail crops and reference locators **derived from the accepted panorama**. No unverified historical comparator image is published.
- `assets/js/buffalo-data.js` — 13 scene annotations, evidence and limits, 29 source entries, native and normalized bounds and five thematic paths, transcribed from the v4.0 packet.
- `assets/js/buffalo-corner.js` — accessible scene navigation and explorer behaviour.

**Research limits:** The sepia rectangle contains the historical photograph; the colour field is contemporary artistic reconstruction. It combines different moments. Scene coordinates are navigational working bounds, not historic measurements. Ali operating a camera is an explicitly counterfactual intervention. Source endpoints and rights claims in the packet have not all been independently rechecked. The v2.1 working PNG is not a final exhibition-resolution print proof.

See `RELEASE_v1_4.md`, `QA_NOTES.md` and `ROYAL_RING_ALIGNMENT_AUDIT_v1_3.md` for changes and technical checks.
