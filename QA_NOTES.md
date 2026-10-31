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
