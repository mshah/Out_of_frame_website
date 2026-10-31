# OUT OF FRAME — Exhibition website v1.3

This version builds on v1.2 (which in turn builds on v1.1) and adopts **Contemporary Archive** styling from *Out of Frame — Visual Identity Proposal v1*. It adds a standalone curatorial essay section and installs the **Royal Ring v2.13 locked master** as the artwork used by the panorama viewer and page imagery.

## v1.3 alignment release (31 October 2026)

All nine Royal Ring research chapter hotspots were individually reviewed against the locked v2.13 master. Corrected navigation anchors: GV-04 (on-foot workers), GV-05 (above the named rider), GV-06 (left-side cargo elephant), GV-07 (dense brush as a thematic anchor) and GV-08 (camera position). GV-09's highlighted locator was tightened to the archival mount's handwritten-number corner. GV-04's close-up was re-cropped. GV-01–03 remained correctly matched. All nine locator WebPs were regenerated, and the source archival crops remain separate and unchanged. The optional 'T' (Duke of Teck) secondary hotspot now navigates to its **own left-side position** and displays the associated detail rather than panning to the main right-side GV-03 marker. This does not change the historical evidentiary status of that imagined placement.

A full per-chapter table is in `ROYAL_RING_ALIGNMENT_AUDIT_v1_3.md` and the optional master overlay is `previews/royal-ring-v1.3-alignment-audit.png`.

## Image-only patch, 31 October 2026 — Royal Ring v2.14

The active web panorama is now the artist-supplied **Royal Ring v2.14 Guest Seating Microedit**. The unchanged authored PNG is at `assets/images/royal-ring-v2.14-master.png` as received at **2048 × 682 pixels**; this is lower than the 4344 × 1448 dimension indicated in the upload's filename. The website's browser-optimised WebP, cover, six reconstructed chapter details, the Teck subdetail and nine locator thumbnails were regenerated from this exact supplied image. The historical original and the three archival closeups were not touched. All chapter and Teck coordinates remain those of v1.3; no remapping was necessary. The old v2.13 full-resolution PNG remains in place as the prior version and is no longer the current web display. See `ROYAL_RING_MASTER_UPDATE_v2_14.md`.

## Preview

Unzip the full package, then open `index.html`. This is an offline-capable static website; no build, account or installation is required. Newsreader and Source Sans 3 load when online, with usable system fallbacks offline. External archival source links need connectivity.

## New / updated routes

- `essays/index.html` — landing page for all four essays
- `essays/the-making-of-a-trophy.html` — principal curatorial essay
- `essays/the-performance-of-power.html` — authority, diplomacy, masculinity and status
- `essays/the-people-at-the-edge-of-history.html` — overlooked labour and image-making
- `essays/the-spectacle-of-killing.html` — the animal, death and commemoration

All six pre-existing routes, including `works/buffalo-corner.html`, remain intact.

## Royal Ring image provenance

The exact, byte-identical source is `assets/images/royal-ring-v2.13-locked-master.png` (4344 × 1448). The browser shows derived `royal-ring-view.webp` and `royal-ring-hero.webp`, rebuilt from it. `assets/images/details/gv-03...gv-08-detail.webp` and all nine locator images were regenerated against v2.13. Original photograph-derived closeups GV-01, GV-02 and GV-09 remain anchored to `george-original.jpg` as in v1.1; the archival original itself remains unmodified. The separately named v1.7 artwork is preserved as a legacy comparison asset, not the active default. Duke of Teck sub-detail was also regenerated from the v2.13 locked master using the verified source crop at (705, 200)–(1125, 640).

## Essay editorial status

Essay paragraphs and section headings are imported verbatim from `Out_of_Frame_Curatorial_Essays_Working_Drafts_v0_1.docx`, not rewritten. All four are clearly marked **working drafts**: historical fact checking, image-specific references and permissions still require editorial review before public launch. Pages provide individual section links, mobile-friendly reading layout, next/previous essays, artwork links, and thematic entry points.

## Publishing

Upload the entire extracted `Out_of_Frame_Site` folder to a static host with `index.html` at the web root. Keep the relative directory structure intact. Test the publication domain and historical image licences before making the site public.

## Website integrity

The existing Royal Ring hotspots, nine chapter narratives, source references, original-photo toggle, reset and zoom functions remain in place. The buffalo-corner placeholder is unchanged. No web tracker or external JavaScript library is included.

---

# OUT OF FRAME — Exhibition website v1.1

A complete static exhibition site, prepared for offline preview or hosting on any ordinary static web server.

## Open it

1. Extract the ZIP in full. Do **not** open individual HTML files from inside the archive.
2. Open `index.html` in a browser to enter the series homepage.
3. Choose **The collection** or enter **The Royal Ring**. The full experience works without accounts, installations or external JavaScript dependencies. External historical source links require an internet connection.
4. To publish, upload the entire extracted site folder to a static host (e.g. GitHub Pages or Netlify). Use the folder root as the website root. It contains `index.html`; no build process is required.

## Current pages

| Path | Role |
| --- | --- |
| `index.html` | Immersive series homepage and collection cards |
| `works/index.html` | Artwork gallery |
| `works/the-royal-ring.html` | Royal Ring landing + interactive panorama + nine documented stories |
| `works/buffalo-corner.html` | Designed placeholder for the companion study |
| `method.html` | A/B/C/D evidence key and reconstruction approach |
| `about.html` | Series background and artistic argument |

## Historical and artistic integrity

- The Royal Ring's **frozen v1.7** reconstruction is included at `assets/images/royal-ring-v1.7-master.png` with its pixels unaltered.
- The original 737 × 569 photograph is separately included, unchanged, at `assets/images/george-original.jpg`.
- `royal-ring-view.webp` and `royal-ring-hero.webp` are **browser-optimised display derivatives** of the approved work. The untouched archival print is shown as a separate image when selecting **Original photograph**.
- Nine research stories and source references come from Master Annotation Packet v0.5. `GV-03` also includes the Duke of Teck as a sub-story; Ernest Brooks remains an **artistic** identification for the camera operator rather than a verified attribution of GV-01.
- The series introduction and method pages are editorial presentation copy, not new archival research.

## Replacing the Buffalo Corner placeholder

The link and path are already established. To publish Buffalo Corner, **do not rename or delete the route**:

1. Put the approved artwork and original historical photograph inside `assets/images/`, with distinct filenames.
2. Replace the content of `works/buffalo-corner.html` with the final immersive landing and annotation explorer (the Royal Ring page provides a tested interaction pattern).
3. Add that artwork's annotation data as a separate JS file under `assets/js/`, with explicit evidence grades and sources.
4. Edit **one manifest file**, `assets/js/collection-manifest.js`: change `buffalo-corner.status` to `'live'`, `label` to `'Explore the study'`, and `cta` to `'Enter the artwork ↗'`. The existing homepage and collection cards then display the live state automatically.
5. Test the landing page, annotations, original-photo toggle and mobile layout. Preserve the archival original exactly.

If desired, adapt `assets/js/royal-ring.js` as the starting point for Buffalo Corner's new explorer. **Do not** reuse Royal Ring's historical text, figure locations or source attribution in the Buffalo study.

## Credits, rights and public release

The working site is a local prototype / publishable static build, not a live deployed domain. Historical source images have their own source and rights records; review those before public distribution. Any public exhibition should distinguish original archival photography from contemporary artistic reconstruction, as the site currently does.

## Files to preserve

- `assets/images/royal-ring-v1.7-master.png` — legacy comparison artwork (not the active explorer master)
- `assets/images/george-original.jpg` — source photograph
- `assets/js/royal-data.js` — historical annotation material
- `works/the-royal-ring.html`, `assets/js/royal-ring.js` — immersive interface

The master PNG is ~4344 × 1448 pixels; a future large-format print should be assessed separately for production resolution. This website package does not claim print-production approval.

## v1.1 — Visual chapter details

The Royal Ring's nine research chapters now begin with curated, enlarged crops of the frozen artwork or original 1911 photograph. Every chapter includes an accompanying locator thumbnail that highlights its actual crop region in the full panorama, plus buttons to enlarge the detail and navigate back to the corresponding area in the zoomable panorama. The Duke of Teck's sub-story has a separate close-up.

The active detail crops are **display derivatives** of the locked v2.13 master or the unmodified original `george-original.jpg`; the older v1.7 assets are archived for comparison. They do not change either master asset. Locator overlays are navigation guides, not additional photographic evidence. The provenance grades remain as documented in v0.5.

Assets live under `assets/images/details/`; the chapter-to-image associations are stored on each card's `visual` object in `assets/js/royal-data.js`. Buffalo Corner remains a placeholder and has not been modified.
