# Ivy Li Portfolio

React/Vite portfolio with a landing page, project grid, and four responsive case studies.
Case-study copy and media are editable separately from their layouts.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm test
```

## Project Structure

- `src/data/projects.js` controls the landing-page project cards.
- `src/pages/LandingPage.jsx` renders the portfolio landing page.
- `src/pages/ProjectPage.jsx` chooses which case-study page to show.
- `src/content/project-1/content.js` contains JustEat's copy and media.
- `src/content/project-2/content.js` contains Apt Maintenance Redesign's copy and media.
- `src/content/project-3/content.js` contains Quiq's copy and media.
- `src/content/project-4/content.js` contains A Living Calendar's copy and media.
- Each content folder's `layout.js` holds presentation choices, independently of the copy.
- `src/components/case-study/` contains shared React sections, figures, galleries, navigation, and responsive CSS.
- `src/projects/` connects each page and contains its distinctive artwork compositions.
- `img/project-1/`, `img/project-2/`, `img/project-3/`, and `img/project-4/` contain project-specific visual assets.
- `videos/project-1/` contains Project 1 prototype videos.
- `src/styles/app.css` contains the React shell styles.

Read the [case-study editing guide](docs/editing-case-studies.md) for text, image, caption, and section examples.

`npm test` checks asset availability, image dimensions, and content identifiers.
`npm run verify:migration` additionally compares the conversion with the original text/media inventory; those historical checks intentionally differ after future copy edits.

For GitHub Pages, build with `VITE_BASE_PATH=/portfolio/ npm run build`.
The existing deployment workflow is unchanged. See the [conversion verification record](docs/case-study-verification.md).
