# OUT OF FRAME — Exhibition website v1.0

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

- `assets/images/royal-ring-v1.7-master.png` — frozen full-resolution artwork
- `assets/images/george-original.jpg` — source photograph
- `assets/js/royal-data.js` — historical annotation material
- `works/the-royal-ring.html`, `assets/js/royal-ring.js` — immersive interface

The master PNG is ~4344 × 1448 pixels; a future large-format print should be assessed separately for production resolution. This website package does not claim print-production approval.
