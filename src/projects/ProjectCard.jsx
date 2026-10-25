import { assetPath } from "../lib/assets.js";

export default function ProjectCard({ project, index }) {
  const isDraft = project.status === "draft";
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article className={`work-entry${isDraft ? " work-entry-draft" : ""}`}>
      <a className="work-entry-link" href={`#/projects/${project.slug}`} aria-labelledby={`work-title-${project.slug}`}>
        <div className="work-entry-copy">
          <div className="work-entry-meta">
            <span>({projectNumber})</span>
            <span>{project.period}</span>
          </div>
          <div className="work-entry-heading">
            <h3 id={`work-title-${project.slug}`}>{project.title}</h3>
            {isDraft ? <span className="work-entry-status">In progress</span> : null}
          </div>
          <p className="work-entry-subtitle">{project.subtitle}</p>
          <p className="work-entry-description">{project.summary}</p>
          <ul className="work-entry-disciplines" aria-label="Disciplines">
            {project.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
          </ul>
          <span className="work-entry-cta">View project <span aria-hidden="true">↗</span></span>
        </div>
        <div className="work-entry-media">
          <img
            src={assetPath(project.cover)}
            alt=""
            width="4096"
            height="2697"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <span className="work-entry-image-arrow" aria-hidden="true">↗</span>
        </div>
      </a>
    </article>
  );
}
