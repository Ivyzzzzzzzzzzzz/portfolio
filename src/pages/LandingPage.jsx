import ProjectCard from "../projects/ProjectCard.jsx";
import "../styles/landing.css";

function scrollToSection(event, id) {
  event.preventDefault();
  const section = document.getElementById(id);
  if (!section) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.focus({ preventScroll: true });
  section.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
}

export default function LandingPage({ projects }) {
  return (
    <div className="portfolio-home" id="top" tabIndex={-1}>
      <a className="home-skip-link" href="#projects" onClick={(event) => scrollToSection(event, "projects")}>
        Skip to selected work
      </a>

      <header className="home-nav">
        <a className="home-wordmark" href="#/" onClick={(event) => scrollToSection(event, "top")}>
          Ivy (Mohan) Li
        </a>
        <span className="home-nav-note">Portfolio / 2025–2026</span>
        <nav aria-label="Main navigation">
          <a href="#projects" onClick={(event) => scrollToSection(event, "projects")}>
            Work <span aria-hidden="true">↘</span>
          </a>
          <a href="#about" onClick={(event) => scrollToSection(event, "about")}>
            About <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="home-hero" aria-labelledby="portfolio-title">
          <div className="home-masthead">
            <h1 id="portfolio-title">Ivy <em>Li</em><span className="home-period">.</span></h1>
            <div className="home-masthead-note">
              <span className="home-asterisk" aria-hidden="true">✳︎</span>
              <p>Product &<br />interaction design.</p>
            </div>
          </div>

          <div className="home-intro" id="about" tabIndex={-1}>
            <p className="home-label">A little introduction</p>
            <div className="home-intro-copy">
              <p>
                I’m Ivy, a designer working across <em>research, interfaces, and code.</em>{" "}
                I make everyday things a little easier to navigate.
              </p>
              <span className="home-intro-detail">UX research / UI design / Prototyping</span>
            </div>
          </div>
        </section>

        <section className="home-work" id="projects" aria-labelledby="projects-title" tabIndex={-1}>
          <div className="home-section-heading">
            <h2 id="projects-title"><span aria-hidden="true">↓</span> Selected work</h2>
            <p>{String(projects.length).padStart(2, "0")} projects / 2025–2026</p>
          </div>
          <div className="home-project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div>
          <p className="home-footer-name">Ivy (Mohan) Li</p>
          <p>Thanks for taking a look.</p>
        </div>
        <span>© {new Date().getFullYear()}</span>
        <a href="#top" onClick={(event) => scrollToSection(event, "top")}>
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
