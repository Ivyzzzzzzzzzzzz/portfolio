import { projects } from "../../data/projects.js";

const projectSlugById = {
  "project-1": "justeat",
  "project-2": "apt-maintenance-redesign",
  "project-3": "project-three",
  "project-4": "living-calendar",
};

export default function CaseStudyLayout({ projectId, children }) {
  const caseStudyProjects = projects.filter((project) => project.status === "case-study");
  const currentProject = caseStudyProjects.find(
    (project) => project.slug === projectSlugById[projectId],
  );
  const currentIndex = currentProject ? caseStudyProjects.indexOf(currentProject) : -1;
  const previousProject =
    currentIndex >= 0
      ? caseStudyProjects[(currentIndex - 1 + caseStudyProjects.length) % caseStudyProjects.length]
      : null;
  const nextProject =
    currentIndex >= 0 ? caseStudyProjects[(currentIndex + 1) % caseStudyProjects.length] : null;
  const themeStyle = currentProject?.accent
    ? { "--project-accent": currentProject.accent }
    : undefined;

  return (
    <main className={`case-study-page case-study-page--${projectId}`} style={themeStyle}>
      <nav className="case-study-toolbar" aria-label="Case study navigation">
        <a className="case-study-back-link" href="#/">
          <span aria-hidden="true">↖</span> Back to work
        </a>
        {currentProject ? (
          <div className="case-study-project-nav">
            <div className="case-study-current" aria-label="Current project">
              <span className="case-study-current-kicker" aria-label={`Project ${currentIndex + 1} of ${caseStudyProjects.length}`}>
                ({String(currentIndex + 1).padStart(2, "0")} / {String(caseStudyProjects.length).padStart(2, "0")})
              </span>
              <span className="case-study-current-title">{currentProject.title}</span>
            </div>
            <div className="case-study-project-actions">
              {previousProject ? (
                <a
                  className="case-study-project-step"
                  href={`#/projects/${previousProject.slug}`}
                  aria-label={`Previous project: ${previousProject.title}`}
                >
                  <span aria-hidden="true">←</span> Previous
                </a>
              ) : null}
              <details className="case-study-project-menu">
                <summary>All projects <span className="case-study-menu-chevron" aria-hidden="true">⌄</span></summary>
                <div className="case-study-project-list">
                  {caseStudyProjects.map((project, index) => {
                    const isCurrentProject = project.slug === currentProject.slug;

                    return (
                      <a
                        className="case-study-project-option"
                        href={`#/projects/${project.slug}`}
                        key={project.slug}
                        aria-current={isCurrentProject ? "page" : undefined}
                        style={{ "--project-accent": project.accent }}
                      >
                        <span className="case-study-project-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="case-study-project-name">{project.title}</span>
                      </a>
                    );
                  })}
                </div>
              </details>
              {nextProject ? (
                <a
                  className="case-study-project-step"
                  href={`#/projects/${nextProject.slug}`}
                  aria-label={`Next project: ${nextProject.title}`}
                >
                  Next <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </nav>
      {children}
    </main>
  );
}
