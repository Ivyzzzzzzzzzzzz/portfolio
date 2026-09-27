# Editing your case studies

Each project has one `content.js` file for its words and images. Open that file in VS Code and search for the paragraph or heading you can see on the website.

| Case study | Content file |
| --- | --- |
| JustEat | `src/content/project-1/content.js` |
| Apt Maintenance Redesign | `src/content/project-2/content.js` |
| Quiq | `src/content/project-3/content.js` |
| A Living Calendar | `src/content/project-4/content.js` |

Run `npm run dev` and open the URL it prints. Saving your content file updates the preview.

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

Those dimensions reserve proportional space while the image loads. They do not fix the size of the page. A `maxWidth` in `layout.js` limits enlargement; the image still shrinks on a narrow screen. Clicking an instructional image opens the original at full size.

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

At desktop widths of 1,200px and above, section navigation stays in a left sidebar and highlights the current section. On smaller screens it becomes a collapsible “On this page” menu, which closes after a selection.

APT and Quiq use the same reading widths, section navigation, image-detail viewer, and evidence/takeaway grouping through `src/components/case-study/EditorialCaseStudy.jsx` and `editorial-case-study.css`. Their section-specific layouts live in `MaintenanceCaseStudy.jsx` / `maintenance.css` and `Project3CaseStudy.jsx` / `quiq.css`. Keep text and source artwork in their existing content files. APT's wireframe strips keep a shared screen height and scroll on smaller displays; Quiq's wordmark drafts also scroll on phones. “View label copy” expands Quiq's supporting packaging copy. Image frames contain the whole asset, and clicking opens a zoomable preview.

## Check an edit

- Run `npm test` to catch missing files or duplicate IDs, then `npm run build`.
- In the browser, check a phone width and a desktop width. Look at the edited paragraph, its image, and the section immediately afterward.
- `npm run verify:migration` is a historical check against the original export. It can fail after an intentional wording or image change; it is separate from the normal editing checks.

For future Figma changes, use the revised design as a reference and update the corresponding content or component. The website's React components and content files are now its editable source.
