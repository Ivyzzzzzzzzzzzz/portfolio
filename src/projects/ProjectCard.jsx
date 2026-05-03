export default function ProjectCard({ project }) {
  const isDraft = project.status === "draft";

  return (
    <article className={`portfolio-card ${isDraft ? "portfolio-card-draft" : ""}`}>
      <a href={`#/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
        <div className="portfolio-card-media">
          <img src={project.cover} alt="" />
        </div>
        <div className="portfolio-card-body">
          <div className="portfolio-card-meta">
            <h3>{project.title}</h3>
            <span>{project.period}</span>
          </div>
          <p className="portfolio-card-subtitle">{project.subtitle}</p>
          <p className="portfolio-card-summary">{project.summary}</p>
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
