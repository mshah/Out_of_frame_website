# QA notes — v1.3

- Image basis: exact locked v2.13 master 4344x1448; original sepia photograph remains unchanged.
- All nine chapter IDs present exactly once; each hotspot center lies within its freshly-rendered highlighted locator rectangle.
- Chapter anchors, subchapter Teck, reconstructed detail crops and historical-original source crops individually examined.
- GV-04 and GV-06 previous mismatches corrected; see `ROYAL_RING_ALIGNMENT_AUDIT_v1_3.md`.
- T / Duke of Teck uses its own marker coordinate and focus detail; this extra marker is *not* a tenth chapter.
- All four curatorial essays, site-wide styling, navigation, and collection routes preserved from v1.2.
- Completed: JS syntax and nine-chapter interactive smoke tests in isolated desktop (1440px) and mobile (390px) browser contexts; detail/evidence/source tabs, Teck focus, zoom, original toggle, reset, all passed without page errors. Completed relative-link, image-asset and ZIP checks.
- Live-site navigation and genuine mobile touch gestures could not be tested: the environment blocks file:// and localhost browser navigation. The isolated tests verify application logic, not deployment networking or physical touch behaviour.
- Historical/rights/source editorial checks are still pending from the earlier v1.2 release.
