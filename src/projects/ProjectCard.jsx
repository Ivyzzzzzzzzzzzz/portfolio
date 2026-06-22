export default function ProjectCard({ project, index }) {
  const isDraft = project.status === "draft";
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`portfolio-card ${isDraft ? "portfolio-card-draft" : ""}`}
      style={{ "--project-accent": project.accent }}
    >
      <a href={`#/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
        <div className="portfolio-card-media">
          <img src={project.cover} alt="" />
        </div>
        <div className="portfolio-card-body">
          <div className="portfolio-card-eyebrow">
            <span>{projectNumber}</span>
            <span>{project.period}</span>
          </div>
          <div className="portfolio-card-title-row">
            <h3>{project.title}</h3>
            {isDraft ? <span className="portfolio-card-status">Draft</span> : null}
          </div>
          <p className="portfolio-card-subtitle">{project.subtitle}</p>
          <div className="portfolio-pill-row">
            {project.disciplines.map((discipline) => (
              <span className="portfolio-pill" key={discipline}>
                {discipline}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
