import { rewriteAssetPaths } from "../lib/assets.js";
import { projects } from "../data/projects.js";

const projectSlugById = {
  "project-1": "justeat",
  "project-2": "apt-maintenance-redesign",
  "project-3": "project-three",
  "project-4": "living-calendar",
};

export default function HtmlCaseStudy({ html, css, projectId }) {
  const resolvedHtml = rewriteAssetPaths(html);
  const resolvedCss = rewriteAssetPaths(css);
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
          Back to projects
        </a>
        {currentProject ? (
          <div className="case-study-project-nav">
            <div className="case-study-current" aria-label="Current project">
              <span className="case-study-current-kicker">Viewing</span>
              <span className="case-study-current-title">{currentProject.title}</span>
            </div>
            <div className="case-study-project-actions">
              {previousProject ? (
                <a
                  className="case-study-project-step"
                  href={`#/projects/${previousProject.slug}`}
                  aria-label={`Previous project: ${previousProject.title}`}
                >
                  Previous
                </a>
              ) : null}
              <details className="case-study-project-menu">
                <summary>Jump to project</summary>
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
                  Next
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </nav>
      <style data-case-study-style={projectId}>{resolvedCss}</style>
      <div
        className="case-study-content"
        data-case-study={projectId}
        dangerouslySetInnerHTML={{ __html: resolvedHtml }}
      />
    </main>
  );
}
