import JustEatCaseStudy from "../projects/JustEatCaseStudy.jsx";

export default function ProjectPage({ project }) {
  if (!project) {
    return (
      <main className="portfolio-shell portfolio-message">
        <a className="portfolio-back-link" href="#/">
          Back to projects
        </a>
        <h1>Project not found</h1>
        <p>This route does not match a project in src/data/projects.js.</p>
      </main>
    );
  }

  if (project.slug === "justeat") {
    return <JustEatCaseStudy />;
  }

  return (
    <main className="portfolio-shell portfolio-message">
      <a className="portfolio-back-link" href="#/">
        Back to projects
      </a>
      <p className="portfolio-kicker">{project.period}</p>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
      <div className="portfolio-pill-row">
        {project.disciplines.map((discipline) => (
          <span className="portfolio-pill" key={discipline}>
            {discipline}
          </span>
        ))}
      </div>
    </main>
  );
}
