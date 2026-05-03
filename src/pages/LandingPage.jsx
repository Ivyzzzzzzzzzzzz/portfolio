import ProjectCard from "../projects/ProjectCard.jsx";

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
          <p className="portfolio-kicker">UX Research | UX/UI Design | Prototyping</p>
          <h1 id="portfolio-title">Designing clearer decisions for complex services.</h1>
        </div>
        <div className="portfolio-hero-media" aria-hidden="true">
          <img src="/img/iPhone 13 mini - 28 1.svg" alt="" />
          <img src="/img/iPhone 13 mini - 8.svg" alt="" />
        </div>
      </section>

      <section className="portfolio-projects" id="projects" aria-labelledby="projects-title">
        <div className="portfolio-section-heading">
          <h2 id="projects-title">Projects</h2>
          <p>Four case-study slots are ready. JustEat is live; the remaining three can be filled from project data.</p>
        </div>
        <div className="portfolio-project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
