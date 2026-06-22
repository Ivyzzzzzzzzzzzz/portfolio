import { useEffect, useRef, useState } from "react";
import ProjectCard from "../projects/ProjectCard.jsx";

const heroWordPairs = [
  { messy: "allergies", calm: "research", left: "4%", top: "10px", x: -16, y: 18, rotate: -4 },
  { messy: "maintenance requests", calm: "flows", left: "34%", top: "2px", x: 12, y: 8, rotate: 3 },
  { messy: "seasonal time", calm: "systems", left: "68%", top: "16px", x: 18, y: -10, rotate: -2 },
  { messy: "tiny panic", calm: "prototypes", left: "14%", top: "66px", x: -12, y: -4, rotate: 2 },
  { messy: "too many choices", calm: "clarity", left: "44%", top: "72px", x: 8, y: 14, rotate: -3 },
  { messy: "wait, what?", calm: "oh, okay", left: "74%", top: "62px", x: 16, y: 8, rotate: 4 },
];

const heroLabItems = [
  {
    messy: "unclear ask",
    calm: "research",
    rest: { x: 23, y: 30, rotate: -7 },
    calmPosition: { x: 24, y: 24, rotate: -1 },
    pull: 8,
    tone: "teal",
  },
  {
    messy: "edge case",
    calm: "flow",
    rest: { x: 70, y: 20, rotate: 5 },
    calmPosition: { x: 75, y: 30, rotate: 1 },
    pull: -6,
    tone: "warm",
  },
  {
    messy: "too many steps",
    calm: "system",
    rest: { x: 34, y: 58, rotate: 4 },
    calmPosition: { x: 32, y: 62, rotate: 0 },
    pull: 7,
    tone: "green",
  },
  {
    messy: "hmm?",
    calm: "prototype",
    rest: { x: 76, y: 62, rotate: -5 },
    calmPosition: { x: 72, y: 62, rotate: 0 },
    pull: -8,
    tone: "teal",
  },
  {
    messy: "tiny spiral",
    calm: "clarity",
    rest: { x: 55, y: 82, rotate: 3 },
    calmPosition: { x: 50, y: 82, rotate: 0 },
    pull: 5,
    tone: "warm",
  },
];

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeProgress(value) {
  return value * value * (3 - 2 * value);
}

export default function LandingPage({ projects }) {
  const heroRef = useRef(null);
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const [heroLab, setHeroLab] = useState({ active: false, x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;

      const hero = heroRef.current;
      const projectsSection = document.getElementById("projects");

      if (!hero || !projectsSection) {
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const start = hero.offsetTop + 24;
      const end = projectsSection.offsetTop - viewportHeight * 0.45;
      const distance = Math.max(1, end - start);
      const nextProgress = clamp((window.scrollY - start) / distance);

      setHeroScrollProgress((currentProgress) =>
        Math.abs(currentProgress - nextProgress) > 0.005 ? nextProgress : currentProgress,
      );
    };

    const requestUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  const scrollToProjects = (event) => {
    event.preventDefault();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const easedHeroProgress = easeProgress(heroScrollProgress);
  const messyWordOpacity = clamp(1 - easedHeroProgress * 1.8);
  const calmWordOpacity = clamp((easedHeroProgress - 0.18) / 0.82);
  const heroLabLabelProgress = heroLab.active ? 1 : 0;
  const heroLabMotionProgress = prefersReducedMotion ? 0 : heroLabLabelProgress;

  const activateHeroLab = () => {
    setHeroLab((currentLab) => ({ ...currentLab, active: true }));
  };

  const settleHeroLab = () => {
    setHeroLab({ active: false, x: 0, y: 0 });
  };

  const updateHeroLabPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = clamp((event.clientX - bounds.left) / bounds.width, 0, 1) * 2 - 1;
    const nextY = clamp((event.clientY - bounds.top) / bounds.height, 0, 1) * 2 - 1;

    setHeroLab({ active: true, x: nextX, y: nextY });
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

      <section
        className="portfolio-hero"
        ref={heroRef}
        style={{
          "--hero-scroll": easedHeroProgress.toFixed(3),
          "--hero-messy-opacity": messyWordOpacity.toFixed(3),
          "--hero-calm-opacity": calmWordOpacity.toFixed(3),
        }}
        aria-labelledby="portfolio-title"
      >
        <div className="portfolio-hero-copy">
          <p className="portfolio-kicker">UX Research / UI Design / Prototyping</p>
          <h1 id="portfolio-title">Designing calm little systems for chaotic little humans.</h1>
          <div className="portfolio-hero-word-cluster" aria-hidden="true">
            {heroWordPairs.map((word) => {
              const drift = 1 - easedHeroProgress;

              return (
                <span
                  className="portfolio-hero-word"
                  key={word.messy}
                  style={{
                    left: word.left,
                    top: word.top,
                    transform: `translate3d(${word.x * drift}px, ${word.y * drift}px, 0) rotate(${
                      word.rotate * drift
                    }deg)`,
                  }}
                >
                  <span className="portfolio-hero-word-messy">{word.messy}</span>
                  <span className="portfolio-hero-word-calm">{word.calm}</span>
                </span>
              );
            })}
          </div>
          <p className="portfolio-hero-note">
            Selected product and service design work by Ivy{"\u00a0"}Li.
          </p>
        </div>
        <button
          className="portfolio-hero-media portfolio-hero-lab"
          type="button"
          style={{
            "--lab-active": heroLabLabelProgress,
            "--lab-cursor-x": `${heroLab.x * 8}px`,
            "--lab-cursor-y": `${heroLab.y * 8}px`,
          }}
          aria-label="Interactive sketch of messy inputs becoming calmer design systems"
          onBlur={settleHeroLab}
          onFocus={activateHeroLab}
          onPointerDown={activateHeroLab}
          onPointerEnter={activateHeroLab}
          onPointerLeave={settleHeroLab}
          onPointerMove={updateHeroLabPointer}
        >
          <span className="portfolio-hero-lab-path portfolio-hero-lab-path--arc" />
          <span className="portfolio-hero-lab-hub" />
          {heroLabItems.map((item) => {
            const x =
              item.rest.x + (item.calmPosition.x - item.rest.x) * heroLabMotionProgress;
            const y =
              item.rest.y + (item.calmPosition.y - item.rest.y) * heroLabMotionProgress;
            const rotate =
              item.rest.rotate +
              (item.calmPosition.rotate - item.rest.rotate) * heroLabMotionProgress;

            return (
              <span
                className={`portfolio-hero-lab-chip portfolio-hero-lab-chip--${item.tone}`}
                key={item.messy}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  "--chip-shift-x": `${heroLab.x * item.pull * heroLabMotionProgress}px`,
                  "--chip-shift-y": `${heroLab.y * item.pull * -0.7 * heroLabMotionProgress}px`,
                  "--chip-rotate": `${rotate}deg`,
                }}
              >
                <span className="portfolio-hero-lab-chip-messy">{item.messy}</span>
                <span className="portfolio-hero-lab-chip-calm">{item.calm}</span>
              </span>
            );
          })}
        </button>
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
