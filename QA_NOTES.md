# Out of Frame site v1.0 — Quality assurance

- Six pages implemented as linked, standalone HTML files.
- The site's own CSS and JavaScript are local. No third-party script libraries are required.
- Desktop and mobile layouts were rendered with in-memory Chromium HTML, CSS and JavaScript and visually reviewed.
- Automated checks exercised the Royal Ring controls: reveal ten navigation points (nine studies + Duke sub-story), choose a chapter, switch story/evidence/sources, view the original, zoom the panorama and reset.
- Mobile navigation open/close was exercised.
- Link paths, image files and JS syntax were checked. No JS page errors, missing images or document-level horizontal overflow were reported by those tests.
- The test environment blocked direct `file://` and local HTTP navigation inside its own Chromium sandbox. In-memory page rendering was used for visual and interaction checks; the real multi-page website has **not** been tested through a deployed public URL.
- The approved v1.7 image and the original historical photograph were copied into the site without modification. Browser display copies were compressed separately.
- Historical permissions and reproduction licensing have not been resolved by this site build; verify for public release.


## v1.2 editorial add-on
- Four provisional essays and landing page added.
- Main navigation includes Essays on all six existing pages.
- No changed files in `assets/images`, `assets/js/royal-ring.js`, or `assets/js/royal-data.js`.
- Source essays available as Markdown for future editorial revision.

### v1.2 verification details
- Relative internal page, stylesheet, script and image links checked against the packaged file tree: no missing paths.
- Desktop 1440 px and mobile 390 px screenshots rendered from in-memory HTML/CSS using Chromium: no horizontal overflow in the essay index, article layouts or home.
- Direct local HTTP browser navigation was restricted in the test environment, so the rendered screenshot pass uses in-memory content. Hosting-platform verification is still required when deployed.
- SHA-256 of the frozen Royal Ring PNG, original George V JPEG, and its core interactive scripts matched website v1.1.
