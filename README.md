# Ivy Li Portfolio

React/Vite portfolio site with a landing page, project grid, and routed case-study pages.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

- `src/data/projects.js` controls the landing-page project cards.
- `src/pages/LandingPage.jsx` renders the portfolio landing page.
- `src/pages/ProjectPage.jsx` chooses which case-study page to show.
- `src/projects/JustEatCaseStudy.jsx` wraps the existing JustEat case study.
- `src/content/justeat.html` preserves the current exported JustEat markup.
- `src/styles/app.css` contains the React shell styles.

To add a new project, update the placeholder entry in `src/data/projects.js`, then add or connect its case-study component from `src/pages/ProjectPage.jsx`.
