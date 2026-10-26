import { useEffect, useState } from "react";
import { RichText } from "./CaseStudy.jsx";

export default function OnThisPage({ sections, id, prefix }) {
  const [active, setActive] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let pending;
    const update = () => {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame(() => {
        const current = sections
          .filter((section) => document.getElementById(section.id)?.getBoundingClientRect().top <= 180)
          .at(-1);
        setActive(current?.id || "");
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(pending);
    };
  }, [sections]);

  const jumpTo = (sectionId) => {
    setExpanded(false);
    const section = document.getElementById(sectionId);
    const disclosure = section?.querySelector(":scope > .study-section-disclosure");
    if (disclosure) disclosure.open = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
    (disclosure?.querySelector("summary") || section?.querySelector("h2"))?.focus({ preventScroll: true });
  };

  return <nav className={`${prefix}-chapters`} aria-label="On this page">
    <p className={`${prefix}-chapter-label`}>On this page</p>
    <button className={`${prefix}-chapter-toggle`} type="button" aria-expanded={expanded}
      aria-controls={id} onClick={() => setExpanded(!expanded)}>
      On this page <span aria-hidden="true">{expanded ? "−" : "+"}</span>
    </button>
    <div id={id} className={`${prefix}-chapter-links${expanded ? " is-expanded" : ""}`}>
      {sections.map((section) => <button type="button" key={section.id}
        aria-current={active === section.id ? "location" : undefined}
        onClick={() => jumpTo(section.id)}><RichText value={section.title} /></button>)}
    </div>
  </nav>;
}
