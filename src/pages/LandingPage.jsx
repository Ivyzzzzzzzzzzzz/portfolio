import ProjectCard from "../projects/ProjectCard.jsx";
import { assetPath } from "../lib/assets.js";

export default function LandingPage({ projects }) {
  const scrollToProjects = (event) => {
    event.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="portfolio-shell">
      <header className="portfolio-nav" aria-label="Portfolio navigation">
        <a className="portfolio-wordmark" href="#/">
          Ivy (Mohan) Li
        </a>
        <a className="portfolio-nav-link" href="#projects" onClick={scrollToProjects}>
          Projects
        </a>
      </header>

      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="portfolio-hero-copy">
          <p className="portfolio-kicker">UX Research / UI Design / Prototyping</p>
          <h1 id="portfolio-title">Clearer services, calmer decisions.</h1>
          <p className="portfolio-hero-note">Selected product and service design work by Ivy Li.</p>
        </div>
        <div className="portfolio-hero-media" aria-hidden="true">
          <img src={assetPath("/img/project-1/iPhone 13 mini - 28 1.svg")} alt="" />
          <img src={assetPath("/img/project-1/iPhone 13 mini - 8.svg")} alt="" />
        </div>
      </section>

      <section className="portfolio-projects" id="projects" aria-labelledby="projects-title">
        <div className="portfolio-section-heading">
          <h2 id="projects-title">Selected Projects</h2>
          <p>01-04</p>
        </div>
        <div className="portfolio-project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
