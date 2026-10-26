# Editing your case studies

Each project has one `content.js` file for its words and images. Open that file in VS Code and search for the paragraph or heading you can see on the website.

| Case study | Content file |
| --- | --- |
| JustEat | `src/content/project-1/content.js` |
| Apt Maintenance Redesign | `src/content/project-2/content.js` |
| Quiq | `src/content/project-3/content.js` |
| A Living Calendar | `src/content/project-4/content.js` |

Run `npm run dev` and open the URL it prints. Saving your content file updates the preview.

## Edit a project opening

Each `hero` leads with a concrete design direction in `subtitle`, followed by `problem` (who faces what difficulty) and `description` (your design response, written in the first person). Keep each supporting field to one short sentence. Use one `tone: "highlight"` text run in `subtitle` for the phrase readers should remember. Describe implemented design choices without implying measured outcomes unless the case study has evidence. Keep project title, dates, disciplines, and the optional live-project link in the metadata column. All four openings share their layout in `case-study.css`.

## Change a paragraph or heading

Change the string following `text`, `title`, or the introductory `description`. Keep the surrounding quotes and commas. For a quote inside a double-quoted string, use `\"`.

```js
{ "type": "text", "id": "research-summary", "text": "Your revised paragraph goes here." }
```

The `id` is a stable name used by the layout. Keep it when editing existing text. Longer text makes its section taller automatically.

Some paragraphs contain several text segments to preserve emphasis:

```js
"text": [
  { "text": "The research showed " },
  { "text": "a clearer way forward", "strong": true },
  { "text": ".", "tone": "muted" }
]
```

Edit the individual strings, including the spaces between them. `strong` means bold and `emphasis` means italic. `tone` refers to an existing color in the case-study styles. A plain paragraph can also be a single string. `\n` creates a deliberate line break; ordinary text wraps automatically.

Living Calendar uses one main emphasis per section. If the `title` already communicates the point, use structured text runs with `tone: "highlight"` on its key phrase and omit `takeaway`. For narrative or process titles, add an optional `takeaway`: one short conclusion with `strong: true, tone: "highlight"` on one phrase. The design-opportunity question is itself the focal point and does not need another summary. Keep necessary audience, method, or context information in ordinary body text; remove introductions that simply repeat the heading or conclusion. Title highlights appear in the section, while the chapter menu keeps plain labels. The research-shift block has editable `assumptionTitle` and `findingTitle` fields for its two comparison headings.

The section with the stable ID `designing-a-seasonal-journey` is titled “Research artifacts gallery.” It opens with four image artifacts: the Chinese Cultural Background persona, the Global Audience persona, the journey map, and the prioritization matrix. Keep only each image’s `label` as the visible caption, with no duplicate gallery heading or explanatory paragraphs. The previews share one compact row at widths of 700px and above and scroll horizontally on phones; each opens in the shared artifact viewer. The sitemap, user flow, and storyboard follow the gallery.

“Bringing the Experience to Life” opens with `final-prototype-showcase`. Its `copy` holds the heading and prototype link; `media.items` holds four recordings in order: Landing, Intro, Term Details, and Calendar. Landing is the default preview. Each recording has a button `label`, video `src`, `poster`, accessible `alt`, and intrinsic `width` / `height`. The switcher mounts only the selected recording and pauses the previous one on replacement. The preview reuses the accessible video controls and reduced-motion behavior of the other interaction recordings. The MP4s in `videos/project-4/prototype-*.mp4` are web copies of the user's original Desktop MOV recordings. Their full duration is retained; the top 76 source pixels are cropped to remove the recorded black system bar and recording indicator, then the videos are scaled to 1920 × 1198. Posters use the same crop. The prototype link still opens the deployed interactive website.

The final “A Living Calendar” section uses static image layouts within each layer. The ecological studies appear together in their original composite image. `CulturalLayer` in `Project4CaseStudy.jsx` separates Rituals, 3 Phases, and Poems, with their images visible together. Personal reflection images use a responsive grid, and `NavigationScreens` labels the Dial and Calendar previews. Layout rules live in `living-calendar.css`.

## Replace an image

1. Put the replacement in that project's `img/project-*` folder.
2. Find the image's `src` in `content.js` and change its filename. Paths start with `/img/`, even when deployed under `/portfolio/`.
3. Update `alt` to describe the image's purpose. Set `width` and `height` to the new file's intrinsic dimensions (or its SVG viewBox dimensions).

```js
{
  "type": "image",
  "id": "profile-screen",
  "src": "/img/project-1/iphone-13-mini-43-1-1-1.svg",
  "alt": "Saved allergy profiles for an individual and their family",
  "width": 219,
  "height": 280
}
```

Those dimensions reserve proportional space while the image loads. They do not fix the size of the page. A `maxWidth` in `layout.js` limits enlargement; the image still shrinks on a narrow screen. Images normally display inline. APT’s Research Artifacts Gallery is the exception: its three previews open an enlarged reading view. The gallery section uses `collapsible: true` and starts collapsed; its heading toggles the gallery, and choosing it in the chapter menu opens it before scrolling.

Text drawn inside an illustration remains part of the image. To change that text, update the artwork and replace its asset. The surrounding explanation remains editable in the content file.

## Keep an explanation with its image

A `pair` owns both its `copy` and its `media`. Keep them in the same object. For example, JustEat's existing `family-profiles` pair contains the “Profile Log & Family Profiles” explanation and its screen image.

This complete example can be added to a section's `blocks` array:

```js
{
  "type": "pair",
  "id": "new-profile-explanation",
  "copy": {
    "type": "group",
    "id": "new-profile-copy",
    "items": [
      { "type": "heading", "id": "new-profile-title", "text": "Family profiles" },
      { "type": "text", "id": "new-profile-description", "text": "Explain what this screen demonstrates." }
    ]
  },
  "media": {
    "type": "image",
    "id": "new-profile-image",
    "src": "/img/project-1/iphone-13-mini-43-1-1-1.svg",
    "alt": "Saved allergy profiles for an individual and their family",
    "width": 219,
    "height": 280
  }
}
```

Desktop pairs use two columns. Below 900px, the explanation appears first, followed immediately by its media. To duplicate a pair, copy the whole object, give every copied `id` a new unique name, and edit its content. New pairs work with the default layout without adding CSS.

## Add a caption

Wrap an image in a `figure`. Its caption travels with it when columns stack:

```js
{
  "type": "figure",
  "id": "profile-figure",
  "caption": { "type": "text", "id": "profile-caption", "text": "Profiles can be reused for future orders." },
  "media": {
    "type": "image",
    "id": "profile-figure-image",
    "src": "/img/project-1/iphone-13-mini-43-1-1-1.svg",
    "alt": "Saved family allergy profiles",
    "width": 219,
    "height": 280
  }
}
```

An image group can occupy `media` too. Put multiple image blocks in a `columns` block's `items` array. Each comparison can contain its own figures so “Before” and “After” labels remain attached to the right screen.

## Layout controls

You normally only need `content.js`. Its neighboring `layout.js` has optional rules keyed by content ID:

```js
"new-profile-explanation": { "columns": 2, "ratio": "1fr 2fr", "mediaSide": "left", "space": "wide" }
```

Common choices are `columns`, `ratio`, `mediaSide`, `space` (`tight` or `wide`), and `maxWidth` for media. These rules affect desktop presentation; phone reading order stays explanation first. `stacked: true` keeps a pair vertical at every width.

`composition` blocks are artwork with several aligned layers, such as Quiq's wordmark sizes and the calendar's highlighted screenshots. Their geometry lives in the corresponding React project component. Replacing a layer preserves its allotted region; adding layers requires updating that component. Use ordinary pairs and galleries for new explanatory sections.

JustEat also has section-specific presentation in `src/projects/JustEatCaseStudy.jsx` and `src/projects/justeat.css`. Its research cards, sketch gallery, prototype videos, and nested comparisons use deliberate shared alignments. Their text and media still come from `content.js`. The image stages constrain how large an illustration appears, while captions and paragraphs grow normally. These stages contain the entire image without cropping. The section navigation derives its labels directly from the content file.

JustEat's Design System keeps Responsive Layout and Cards prominent, with three card examples aligned in their own row. Typography, colors, and illustrations share a compact Visual Foundations module. Buttons and icons sit in a native, initially collapsed Component Library disclosure. All original assets and captions remain available, and the grids stack on phones. Module titles live on the corresponding groups in `content.js`; the final What I Learned section and its reflection also live there.

JustEat uses the orange marker selectively for findings and design intent: the Gap, UX Research, and Design Concept takeaways, the Design Goal question, observation implications, and decision headlines. A `takeaway` is optional; add one only when it communicates a conclusion that the nearby title, caption, or artwork does not already convey. Design Decision uses its original topic labels, highlighted headlines from `decision-headlines.js`, explanatory paragraphs, and screen comparisons. Design Decision has four peer subsections with matching h3 headings: Context-Aware Allergen Warning Systems, Three Levels of Allergy Severity, Reusable Allergy Profiles, and Shared Allergen Visibility. The three contextual-warning comparisons stay inside the first subsection; highlighted decision headlines use h4 beneath those subsection headings. Prototype precedes Design Decision. Wireframe, prototype, and design-system figures retain their purpose captions. Interview quotations preserve their wording.

At desktop widths of 1,200px and above, section navigation stays in a left sidebar and highlights the current section. On smaller screens it becomes a collapsible “On this page” menu, which closes after a selection.

APT and Quiq use the same reading widths, section navigation, and evidence/takeaway grouping through `src/components/case-study/EditorialCaseStudy.jsx` and `editorial-case-study.css`. Their section-specific layouts live in `MaintenanceCaseStudy.jsx` / `maintenance.css` and `Project3CaseStudy.jsx` / `quiq.css`. Keep text and source artwork in their existing content files. APT's wireframe strips keep a shared screen height and scroll on smaller displays; Quiq's wordmark drafts also scroll on phones. “View original label draft” expands Quiq's early packaging copy. Image frames contain the whole asset and display it inline.

Quiq opens with packaging, symptom patterns, and the visual identity before its research and development. The four packaging mockups in `packaging-design-visuals` are figures with editable titles and captions, shown in two columns on desktop and one on phones. They show the back-pain application; the three pattern studies cover allergy, cold, and muscle pain. Keep that distinction from the early sore-throat, body-ache, and back-pain label drafts. Original market figures remain in a disclosure within Packaging References, alongside their source-limitations note. All reference boards, seven wordmark drafts, three identity directions, and original artwork remain in the content file. The selected Q-inspired direction uses `selected: true` for its visual emphasis. Keep explanations tied to visible choices in color, shape, lettering, copy, and packaging panels.

APT’s “Research Artifacts Gallery” retains the `persona-storyboard-user-journey` section anchor and the original three SVG assets. Their `label`, `alt`, `src`, and dimensions remain in `src/content/project-2/content.js`. `ResearchArtifactsGallery` in `MaintenanceCaseStudy.jsx` displays three full-image thumbnails with captions; on phones, the row scrolls horizontally. The gallery opens directly with the three previews, without introductory copy or “View full size” labels. Selecting a preview opens a native modal dialog with the artifact title and an accessible × close button. Simple previous/next chevrons sit midway down the left and right edges of the image area, in reserved gutters so they do not cover the artwork. There is no toolbar navigation or position counter. Navigation loops through Persona, Storyboard, and User Journey without closing the dialog or moving focus. Left/right arrow keys also navigate from the viewer controls; the focused image canvas keeps native scrolling keys. Each artifact change resets the image scroll position. The modal lifecycle depends on whether it is open, so switching artifacts does not unlock background scrolling or reopen the dialog. Images are centered with responsive edge spacing; Storyboard fits fully inside the available space without cropping, while Persona and User Journey retain a readable width with scrolling where needed. The × button, Escape, or clicking the backdrop dismisses the dialog and returns focus to its trigger. The dialog locks background scrolling and restores it on close or unmount. Gallery and dialog styling live in `maintenance.css`; this does not change image behavior elsewhere.

APT's complete “Design Decisions From Research to Redesign” section follows Research Artifacts Gallery and precedes Redesign Workflow. There is no separate “Key Design Decisions” preview. The four equally prominent decisions appear in this order: remove resident-set priority, simplify categories and input, offer preferred visit windows, and turn history into a status timeline. The section retains the stable `design-decisions-based-on-user-testing` ID; the workflow diagrams remain together in `redesign-workflow` immediately afterward. Each decision in `src/content/project-2/content.js` has a short `heading`, a source-specific `finding` shown as “Observed,” a `rationale` shown as “My decision” that connects the response to its intended benefit, and visual `before` / `after` panels. Keep all four comparisons visible and numbered; none uses `supporting: true`. Before is the original portal and After is the proposed design, not evidence of a measured improvement. Findings use structured `text` runs with `strong: true, tone: "highlight"` on the key observation. These runs render directly through `RichText` in this component so emphasis is preserved. Arrival planning has a separate `constraint` field that identifies scheduling feasibility as an assumption needing validation. Its rationale explains the proposed 2–3-hour windows, subject to team confirmation, and the annotation identifies the selected 3-hour window. `MaintenanceDecisions.jsx` renders these layouts. Screenshot panels use `crop: [x, y, width, height]` in the original asset's coordinates; `notes` contain a short label, numbered `region`, and vertical `position` for the connecting line. These are focused views of existing images, not modified image files. Below 950px of section width, notes move beneath the image; below 620px the comparison stacks in reading order. The priority comparison uses a two-role diagram instead of another screenshot. The Broader Context block uses native charts instead of the three original background graphics. Its `secondaryResearch` data lives under `background-visuals` in `src/content/project-2/content.js`; `SecondaryResearch` in `MaintenanceCaseStudy.jsx` renders it with styles in `maintenance.css`. The Zego panel shows the #1 rank and the three leading priorities on a shared 0–100% bar scale (47%, 46%, 34%); the percentages combine renters’ top-two choices, not mutually exclusive categories. The Marks Out Of Tenancy panel uses 100 squares, each representing one percentage point; the 87th square is 90% filled to preserve 86.9% exactly. Keep the 2,299-review UK sample context and both linked primary sources visible. These are secondary findings, separate from the Expo survey and other primary research. Cards stack below 700px; all labels remain selectable text.

## Check an edit

- Run `npm test` to catch missing files or duplicate IDs, then `npm run build`.
- In the browser, check a phone width and a desktop width. Look at the edited paragraph, its image, and the section immediately afterward.
- `npm run verify:migration` is a historical check against the original export. It can fail after an intentional wording or image change; it is separate from the normal editing checks.

For future Figma changes, use the revised design as a reference and update the corresponding content or component. The website's React components and content files are now its editable source.
