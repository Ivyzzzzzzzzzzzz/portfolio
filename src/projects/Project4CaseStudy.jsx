import { useEffect, useRef, useState } from "react";
import CaseStudy, { Block, FigureComposition, RichText } from "../components/case-study/CaseStudy.jsx";
import OnThisPage from "../components/case-study/OnThisPage.jsx";
import { assetPath } from "../lib/assets.js";
import { content } from "../content/project-4/content.js";
import { layout } from "../content/project-4/layout.js";
import "./living-calendar.css";
import { researchComponents } from "./LivingCalendarResearch.jsx";
import AnnotatedTestingScreens from "./LivingCalendarAnnotations.jsx";
import { NativeDiagram, NavigationDiagrams } from "./LivingCalendarDiagrams.jsx";

function SeasonalObservationCollage({ block }) {
  return <FigureComposition block={block} width={309} height={216} layers={[
    { x: 166, y: 0, width: 143, height: 100 },
    { x: 0, y: 104, width: 160, height: 112 },
    { x: 0, y: 0, width: 160, height: 100 },
    { x: 167, y: 105, width: 142, height: 111 },
  ]} />;
}

function InteractionRecording({ block }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const updatePlayback = () => {
      if (visible && !reducedMotion.matches) video.play().catch(() => {});
      else if (!visible) video.pause();
    };
    const updateMotionPreference = () => {
      if (reducedMotion.matches) video.pause();
      else updatePlayback();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.25 });
    observer.observe(video);
    reducedMotion.addEventListener("change", updateMotionPreference);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", updateMotionPreference);
      video.pause();
    };
  }, [block.src]);

  return <div className="lc-recording" data-content-id={block.id}>
    <video ref={videoRef} key={block.src} width={block.width} height={block.height} controls muted loop playsInline
      preload="metadata" poster={assetPath(block.poster)} aria-label={block.alt}>
      <source src={assetPath(block.src)} type="video/mp4" />
      <a href={assetPath(block.src)}>Open interaction recording</a>
    </video>
  </div>;
}

function PrototypeShowcase({ block }) {
  const [heading, link] = block.copy.items;
  const [selectedRecording, setSelectedRecording] = useState(0);
  const recording = block.media.items[selectedRecording];
  const playerId = `${block.id}-player`;
  return <section className="lc-prototype-showcase" data-content-id={block.id} aria-labelledby={heading.id}>
    <header className="lc-prototype-header" data-content-id={block.copy.id}>
      <h3 id={heading.id} data-content-id={heading.id}><RichText value={heading.text} /></h3>
      <Block block={link} />
    </header>
    <div className="lc-prototype-player" data-content-id={block.media.id}>
      <div className="lc-prototype-switcher" role="group" aria-label="Prototype recordings">
        {block.media.items.map((clip, index) => <button type="button" key={clip.id}
          aria-pressed={selectedRecording === index} aria-controls={playerId}
          onClick={() => setSelectedRecording(index)}>
          {clip.label}
        </button>)}
      </div>
      <div className="lc-prototype-preview" id={playerId} role="region" aria-label={`${recording.label} prototype video`}
        style={{ "--lc-prototype-ratio": `${recording.width} / ${recording.height}` }}>
        <InteractionRecording key={recording.id} block={recording} />
      </div>
    </div>
  </section>;
}

function TechnicalStudies({ block }) {
  return <div className="lc-technical-studies" data-content-id={block.id}>
    {block.items.map(study => {
      const [eyebrow, title, description] = study.copy.items;
      const [intro, ...features] = description.text.filter(run => run.text.trim());
      return <article className="lc-technical-study" key={study.id} data-content-id={study.id}
        aria-labelledby={title.id}>
        <header className="lc-technical-heading" data-content-id={study.copy.id}>
          <Block block={eyebrow} />
          <h3 id={title.id} data-content-id={title.id}><RichText value={title.text} /></h3>
        </header>
        <p className="lc-technical-intro" data-content-id={description.id}><RichText value={intro.text} /></p>
        <div className="lc-technical-screen"><Block block={study.media} /></div>
        <ul className="lc-technical-features">
          {features.map((feature, index) => <li key={index}><RichText value={feature.text.trim()} /></li>)}
        </ul>
      </article>;
    })}
  </div>;
}

function ImplementationDemo({ block }) {
  const [recording, code] = block.media.items;
  const [selectedCode, setSelectedCode] = useState(0);
  return <article className="lc-implementation-demo" data-content-id={block.id} aria-labelledby={block.caption.id}>
    <h3 id={block.caption.id} data-content-id={block.caption.id}
      style={{ color: layout[block.caption.id]?.color }}><RichText value={block.caption.text} /></h3>
    <div className="lc-demonstration-pair" data-content-id={block.media.id}>
      <div className="lc-demo-output">
        <p className="lc-demo-label">Interaction</p>
        <Block block={recording} />
      </div>
      <div className="lc-demo-code" data-content-id={code.id}>
        <div className="lc-code-heading">
          <p className="lc-demo-label">Implementation</p>
          {code.items.length > 1 && <div className="lc-code-switcher" role="group" aria-label="Grass implementation screenshots">
            {code.items.map((image, index) => <button type="button" key={image.id}
              aria-pressed={selectedCode === index} onClick={() => setSelectedCode(index)}>
              {image.label}
            </button>)}
          </div>}
        </div>
        <div className="lc-code-screen"><Block block={code.items[selectedCode]} /></div>
      </div>
    </div>
  </article>;
}

function VisualReferences({ block }) {
  const images = block.items.flatMap(item => item.items || [item]);
  return <div className="lc-moodboard" data-content-id={block.id}>
    {images.map(item => <Block key={item.id} block={item} />)}
  </div>;
}

function ConceptStudy({ block }) {
  const [concept] = block.items;
  return <article className="lc-concept" data-content-id={block.id}>
    <div className="lc-concept-intro">
      <Block block={concept.copy} />
    </div>
    <Block block={concept.media} />
  </article>;
}

function ConceptComparison({ block }) {
  return <section className="lc-concept-comparison" data-content-id={block.id} aria-labelledby={block.heading.id}>
    <h3 id={block.heading.id} data-content-id={block.heading.id}><RichText value={block.heading.text} /></h3>
    <table aria-labelledby={block.heading.id}>
      <thead><tr>{block.columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
      <tbody>{block.rows.map(row => <tr key={row.criterion}>
        <th scope="row">{row.criterion}</th>
        {row.cells.map(cell => <td key={cell.id}><Block block={cell} /></td>)}
      </tr>)}</tbody>
    </table>
    <div className="lc-concept-decision"><Block block={block.decision} /></div>
  </section>;
}

function Storyboard({ block }) {
  return <div className="lc-storyboard" data-content-id={block.id} tabIndex={0}
    role="region" aria-label="Storyboard sequence; scroll to see all five panels on smaller screens">
    {block.items.map(item => <figure className="lc-storyboard-panel" key={item.id} data-content-id={item.id}>
      <div className="lc-storyboard-image"><Block block={item.media} /></div>
      <figcaption><Block block={item.caption || item.copy} /></figcaption>
    </figure>)}
  </div>;
}

function InteractionProgression({ block }) {
  return <div className="lc-progressions" data-content-id={block.id}>
    {block.items.map(group => <div className="lc-progression" key={group.id} data-content-id={group.id}>
      <Block block={group.items[0]} />
      <div className="lc-progression-images" tabIndex={0} role="region"
        aria-label={`${group.items[0].text} iterations; scroll to compare on smaller screens`}>
        {group.items.slice(1).map((item, index) => <figure key={item.id}>
          <figcaption className="lc-iteration-label">Iteration {String(index + 1).padStart(2, "0")}</figcaption>
          <div className="lc-iteration-frame"><Block block={item} /></div>
        </figure>)}
      </div>
    </div>)}
  </div>;
}

function TestingFindings({ block }) {
  return <div className="lc-testing" data-content-id={block.id}>
    {block.items.map(item => {
      return <article className="lc-testing-row" key={item.id} data-content-id={item.id}>
        <div className="lc-testing-copy">
          <Block block={item.copy} />
          {item.findings.slice(0, -1).map(finding => <Block key={finding.id} block={finding} />)}
        </div>
        <div className="lc-testing-images"><Block block={item.media} /></div>
        <div className="lc-testing-refinement"><Block block={item.findings.at(-1)} /></div>
      </article>;
    })}
  </div>;
}

function CulturalLayer({ block }) {
  const [rituals, stories] = block.items;
  return <div className="lc-cultural-layer" data-content-id={block.id}>
    <Block block={rituals} />
    {stories.items.map(item => <Block block={item} key={item.id} />)}
  </div>;
}

function NavigationScreens({ block }) {
  return <div className="lc-navigation-screens" data-content-id={block.id}>
    {block.items.map((item, index) => <figure key={item.id}>
      <figcaption>{index === 0 ? "Dial" : "Calendar"}</figcaption>
      <Block block={item} />
    </figure>)}
  </div>;
}

const components = {
  ...researchComponents,
  "final-prototype-showcase": PrototypeShowcase,
  "sitemap-and-user-flow": NavigationDiagrams,
  "designing-a-seasonal-journey-group-23984-1": NativeDiagram,
  "designing-a-seasonal-journey-user-map-1-1": NativeDiagram,
  "seasonal-observation-collage": SeasonalObservationCollage,
  "grass-interaction-recording": InteractionRecording,
  "dial-interaction-recording": InteractionRecording,
  "calendar-interaction-recording": InteractionRecording,
  "technical-prototyping-studies": TechnicalStudies,
  "grass-vibe-coding-2": ImplementationDemo,
  "dial-navigation-vibe-coding-2": ImplementationDemo,
  "year-calendar-aura-effects-2": ImplementationDemo,
  "exploring-ways-to-experience-time-visuals-3": VisualReferences,
  "concept-sketches-1-calendar-inspired-interface-4": ConceptStudy,
  "concept-sketches-2-time-as-a-cycle-4": ConceptStudy,
  "concept-comparison": ConceptComparison,
  "maya-feels-overwhelmed-by-numbered-calendars-days-3": Storyboard,
  "dial-navigation-3": InteractionProgression,
  "landing-page-users-understood-the-wheels-cyclical-3": TestingFindings,
  "testing-refinement-visuals": AnnotatedTestingScreens,
  "testing-refinement-31-1": AnnotatedTestingScreens,
  "testing-refinement-visuals-2": AnnotatedTestingScreens,
  "rituals-3": CulturalLayer,
  "a-living-calendar-visuals-4": NavigationScreens,
  "dial-calendar": () => null,
};

export default function Project4CaseStudy() {
  return <CaseStudy content={content} layout={layout} components={components}
    sidebar={<OnThisPage sections={content.sections} id="living-calendar-chapter-links" prefix="lc" />} />;
}
