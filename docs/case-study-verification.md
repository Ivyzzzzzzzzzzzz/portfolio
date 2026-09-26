# Case-study conversion verification

Verified locally on September 13, 2026. All four case studies now render from React components and their own `content.js` files. The landing page, asset files, hash routes, and GitHub Pages deployment workflow were preserved.

## Baseline and content preservation

Before replacing the exports, each page was recorded at a 1,512px viewport. The original HTML, computed layout, screenshots, and text/media inventories included the website's existing edits after its Figma export.

| Case study | Sections | Text blocks, including headings and labels | Image/video references |
| --- | ---: | ---: | ---: |
| JustEat | 10 | 161 | 100 |
| Apt Maintenance Redesign | 11 | 86 | 46 |
| Quiq | 12 | 165 | 56 |
| A Living Calendar | 17 | 155 | 95 |
| Total | 50 | 567 | 297 |

The historical inventories are in `tests/fixtures/`. `npm run verify:migration` passed all 12 tests after the temporary editing checks were restored. Text comparison normalizes whitespace; it preserves wording and counts repeated text and media references. Rich-text segments retain the existing emphasis and colors. Section order, related figures, and desktop arrangements were reviewed against the baseline.

The conversion intentionally lets section height follow its content. Responsive spacing replaces fixed export gaps and page heights. JustEat's brainstorming artwork uses a responsive gallery; Quiq's wordmark study and the calendar's annotated compositions retain local artwork geometry. These are visual comparisons, not a pixel-for-pixel screenshot equality test.

## Responsive and editing checks

All four production routes were checked at **390, 768, 1,024, and 1,512px**: 16 page/viewport combinations passed. Checks covered page and block overflow, visible text, preserved media counts, `/portfolio/` asset URLs, explanation-before-media ordering below 900px, and attached captions. No page-wide horizontal scrolling was found.

Each project also received temporary edits at 390px and 1,512px:

- Doubled a representative paragraph.
- Lengthened a section heading.
- Replaced an image with a different aspect ratio.
- Duplicated an image–explanation pair with new identifiers.

All eight combinations passed the overlap, overflow, and reading-order checks. Original content was then restored and the historical inventory rechecked. Images reserve proportional space before loading and remain uncropped; dense artwork opens at full size.

## Integration checks

- Back to projects, previous/next project navigation, and the project jump menu worked. The landing page retained its four project cards.
- Both JustEat prototype videos loaded and played with native controls.
- Image links retained the correct asset prefix; a full-size image was opened successfully in a separate browser tab.
- Existing external destinations and link labels were retained. Link checks cover wiring and destinations, not the continued availability of third-party services.
- Keyboard Tab reached the navigation with a visible focus outline. Images, links, menu controls, and videos retain native keyboard access.
- `npm test`: 8 passed; 4 historical inventory checks intentionally skipped.
- `npm run verify:migration`: 12 passed.
- `npm run build`: passed for the root deployment base.
- `VITE_BASE_PATH=/portfolio/ npm run build`: passed; the production preview was checked under `/portfolio/`.

Local screenshots and browser check reports are saved in `artifacts/case-study-rebuild/`, which is ignored by Git. Baseline source and layout recordings remain in `/tmp/portfolio-rebuild-baseline/` for this local review. The committed fixtures preserve the inventory independently of that temporary folder.

For ongoing edits, follow [Editing your case studies](editing-case-studies.md). Text embedded in artwork still requires replacing that artwork; surrounding explanations, headings, and captions are editable website content.

## JustEat visual revision after review

The first conversion passed its overflow checks but left weak visual grouping. The user's September 13 screenshots and original 1,512px Figma image were used for an additional visual review. JustEat now uses a narrower reading container, section dividers, active section navigation, consistent interview headers and padding, a compact sketch gallery with separate storyboards, aligned prototype captions, and a shared narrative/media alignment for design decisions. Nested comparisons reserve equal media stages and keep every individual caption attached.

At 1,512px, both prototype videos measured 256px wide and began on the same row. All three dish-selection media stages measured 300px high and shared the same top and bottom edges. Both profile image panels began at the same horizontal coordinate. The six interview cards shared a common height within each row, including when one quotation was temporarily tripled.

Additional temporary edits tripled the family-profile paragraph, an interview quotation, and a prototype caption; changed the profile image to a wide flow diagram; and added a duplicate pair. Desktop and phone checks found no overflow or failed reading order. The prototype videos retained their shared top alignment despite the longer caption. All temporary changes were restored. Screenshots and the revision checks are saved locally under `artifacts/case-study-rebuild/`.
