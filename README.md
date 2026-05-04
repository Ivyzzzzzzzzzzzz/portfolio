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
- `src/projects/JustEatCaseStudy.jsx` wraps Project 1.
- `src/projects/MaintenanceCaseStudy.jsx` wraps Project 2.
- `src/content/project-1/` contains Project 1 exported markup and CSS.
- `src/content/project-2/` contains Project 2 exported markup and CSS.
- `src/content/project-3/` and `src/content/project-4/` are placeholders for future case-study files.
- `img/project-1/`, `img/project-2/`, `img/project-3/`, and `img/project-4/` contain project-specific visual assets.
- `videos/project-1/` contains Project 1 prototype videos.
- `src/styles/app.css` contains the React shell styles.

To add a new project, update the placeholder entry in `src/data/projects.js`, place assets in that project’s `img/project-*` folder, then add or connect its case-study component from `src/pages/ProjectPage.jsx`.
