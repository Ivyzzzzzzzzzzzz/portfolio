import JustEatCaseStudy from "../projects/JustEatCaseStudy.jsx";
import MaintenanceCaseStudy from "../projects/MaintenanceCaseStudy.jsx";
import Project3CaseStudy from "../projects/Project3CaseStudy.jsx";
import Project4CaseStudy from "../projects/Project4CaseStudy.jsx";

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

  if (project.slug === "apt-maintenance-redesign") {
    return <MaintenanceCaseStudy />;
  }

  if (project.slug === "project-three") {
    return <Project3CaseStudy />;
  }

  if (project.slug === "living-calendar") {
    return <Project4CaseStudy />;
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
