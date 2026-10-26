import { useEffect, useRef, useState } from "react";
import { Block, Media } from "../components/case-study/CaseStudy.jsx";
import EditorialCaseStudy, { Copy, CopyList, Heading, StepHeader, Takeaway, textOf } from "../components/case-study/EditorialCaseStudy.jsx";
import MaintenanceDecisions from "./MaintenanceDecisions.jsx";
import { content } from "../content/project-2/content.js";
import { layout } from "../content/project-2/layout.js";
import { assetPath } from "../lib/assets.js";
import "./maintenance.css";

function SecondaryResearch({ block }) {
  const { ranking, reviews } = block;
  return <div className="apt-context" data-content-id={block.id}>
    <div className="apt-context-grid">
      <figure className="apt-context-card" aria-labelledby={`${block.id}-ranking`}>
        <figcaption>
          <p className="apt-context-value"><span>#</span>{ranking.value}</p>
          <h4 id={`${block.id}-ranking`}>{ranking.label}</h4>
          <p className="apt-context-description">{ranking.description}</p>
        </figcaption>
        <div className="apt-context-chart">
          <ol className="apt-context-ranking" aria-label={ranking.chartLabel}>
            {ranking.priorities.map((priority, index) => <li key={priority.label}>
              <div className="apt-context-bar-label"><span>{priority.label}</span><strong>{priority.value}%</strong></div>
              <div className="apt-context-bar-track" aria-hidden="true">
                <span className={index === 0 ? "is-primary" : undefined} style={{ width: `${priority.value}%` }} />
              </div>
            </li>)}
          </ol>
          <p className="apt-context-chart-note">{ranking.chartNote}</p>
        </div>
      </figure>
      <figure className="apt-context-card" aria-labelledby={`${block.id}-reviews`}>
        <figcaption>
          <p className="apt-context-value">{reviews.value}<span>%</span></p>
          <h4 id={`${block.id}-reviews`}>{reviews.label}</h4>
          <p className="apt-context-description">{reviews.description}</p>
        </figcaption>
        <div className="apt-context-chart">
          <div className="apt-context-waffle" aria-hidden="true">
            {Array.from({ length: 100 }, (_, index) => <span key={index}>
              <span style={{ width: `${Math.min(1, Math.max(0, reviews.value - index)) * 100}%` }} />
            </span>)}
          </div>
          <ul className="apt-context-legend">
            <li><span><i aria-hidden="true" />{reviews.mentionedLabel}</span><strong>{reviews.value}%</strong></li>
            <li><span><i className="is-remaining" aria-hidden="true" />{reviews.remainingLabel}</span><strong>{(100 - reviews.value).toFixed(1)}%</strong></li>
          </ul>
          <p className="apt-context-chart-note">{reviews.chartNote}</p>
        </div>
      </figure>
    </div>
    <p className="apt-context-sources">Sources: {([ranking.source, reviews.source]).map((source, index) => <span key={source.href}>
      {index > 0 && "; "}<a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}<span aria-hidden="true"> ↗</span></a>
    </span>)}.</p>
  </div>;
}

function ResearchMethodTags({ block }) {
  return <ul className="apt-research-tags" data-content-id={block.id} aria-label="Research methods">
    {block.items.map(item => <li key={item.id} data-content-id={item.id}>{textOf(item.text)}</li>)}
  </ul>;
}

function DiaryDetails({ block }) {
  const fields = [...textOf(block.text).matchAll(/(?:^|\n)\s*(Goal|Participant|Maintenance Request):\s*([\s\S]*?)(?=\n\s*(?:Goal|Participant|Maintenance Request):|$)/g)];
  return <dl className="ed-facts" data-content-id={block.id}>{fields.map(([, label, value]) => <div key={label}><dt>{label}</dt><dd>{value.trim()}</dd></div>)}</dl>;
}

function ResearchStudy({ block }) {
  return <article className="apt-research-study" data-content-id={block.id}>
    <Block block={block.copy} />
    <div className="ed-media"><Block block={block.media} /></div>
  </article>;
}

function DiaryStudy({ block }) {
  return <article className="apt-research-study apt-diary-study" data-content-id={block.id}>
    <Block block={block.copy} />
    <Block block={block.media} />
  </article>;
}

function DiaryTimeline({ block }) {
  return <ol className="apt-diary-timeline" data-content-id={block.id} aria-label={block.label}>
    {block.days.map(day => <li className="apt-diary-day" key={day.day}>
      <header>
        <span className="apt-diary-day-label">Day {day.day}</span>
        <h4>{day.stage}</h4>
      </header>
      <dl className="apt-diary-fields">
        <div>
          <dt>Action</dt>
          <dd>{day.action}</dd>
        </div>
        <div className="apt-diary-emotion">
          <dt>Emotion</dt>
          <dd>{day.emotion}</dd>
        </div>
        <div className="apt-diary-finding">
          <dt>Pain point</dt>
          <dd>{day.painPoint}</dd>
          {day.ambiguity && <><dt>Ambiguity</dt><dd>{day.ambiguity}</dd></>}
        </div>
      </dl>
    </li>)}
  </ol>;
}

function SurveyMetric({ block }) {
  return <figure className="apt-survey-metric" data-content-id={block.id} aria-labelledby={`${block.id}-label`}>
    <p className="apt-metric-value">{block.value}<span>%</span></p>
    <figcaption className="apt-metric-description" id={`${block.id}-label`}>{block.description}</figcaption>
  </figure>;
}

function SurveyResults({ block }) {
  return <div className="apt-survey-results" data-content-id={block.id}>
    <div className="apt-survey-grid">
      {block.items.map(item => <Block block={item} key={item.id} />)}
    </div>
    <p className="apt-survey-sample">{block.sample}</p>
  </div>;
}

function ResearchFindings({ block }) {
  return <ul className="ed-numbered-points apt-research-findings" data-content-id={block.id}>
    {block.items.map((item, index) => <li key={item.id}>
      <h3 className="ed-heading">{String(index + 1).padStart(2, "0")} · {item.heading}</h3>
      <Copy block={item} />
    </li>)}
  </ul>;
}

function ProblemQuestions({ block }) {
  return <div className="ed-response-grid" data-content-id={block.id}>
    {block.items.map(item => {
      const [problem, question] = item.items;
      return <article className="ed-response-card" key={item.id} data-content-id={item.id}>
        <header data-content-id={problem.id}><Heading block={problem.items[0]} /></header>
        <Takeaway label="Design question"><Copy block={question} /></Takeaway>
      </article>;
    })}
  </div>;
}

function WorkflowTests({ block }) {
  return <div className="apt-workflow-tests" data-content-id={block.id}>
    {[0, 4].map(index => <article key={block.items[index].id}>
      <Heading block={block.items[index]} />
      <CopyList block={block.items[index + 1]} />
      <div className="apt-workflow-evidence ed-media"><Block block={block.items[index + 2]} /></div>
      <Takeaway label="Finding"><Copy block={block.items[index + 3]} className="apt-workflow-finding" /></Takeaway>
    </article>)}
  </div>;
}

function CompetitorScreen({ screen }) {
  return <figure className="apt-competitor-screen">
    <svg viewBox={screen.viewBox} role="img" aria-labelledby={`${screen.id}-image-title`}>
      <title id={`${screen.id}-image-title`}>{`${screen.media.alt} Numbered outlines correspond to the findings below.`}</title>
      <image href={assetPath(screen.media.src)} width={screen.media.width} height={screen.media.height} />
      {screen.findings.filter(finding => finding.region).map(finding => {
        const [x, y, width, height] = finding.region;
        return <g key={finding.number} className={`apt-screen-mark apt-tone-${finding.tone}`} aria-hidden="true">
          <rect x={x} y={y} width={width} height={height} rx="2" />
          <circle cx={x + width} cy={y + 5} r="6" />
          <text x={x + width} y={y + 5} dy=".35em" textAnchor="middle">{finding.number}</text>
        </g>;
      })}
    </svg>
    <figcaption>{screen.caption}</figcaption>
  </figure>;
}

function CompetitorStudy({ block }) {
  return <div className="apt-competitor" data-content-id={block.id}>
    <div className="apt-competitor-heading">
      <p className="ed-eyebrow">Everly · Resident portal</p>
      <div className="apt-competitor-legend" aria-label="Annotation key">
        <span className="apt-tone-strength"><b aria-hidden="true">+</b> Strength</span>
        <span className="apt-tone-weakness"><b aria-hidden="true">−</b> Weakness</span>
      </div>
    </div>
    <div className="apt-competitor-grid">
      {block.screens.map(screen => <article className="apt-competitor-card" key={screen.id} data-content-id={screen.id}>
        <header><span className="ed-eyebrow">{screen.flow}</span><h3 className="ed-heading">{screen.title}</h3></header>
        <CompetitorScreen screen={screen} />
        <div className="apt-competitor-findings">
          {screen.findings.map(finding => <div className={`apt-competitor-finding apt-tone-${finding.tone}`} key={finding.number}>
            <span className="apt-finding-number" aria-hidden="true">{finding.number}</span>
            <div>
              <p className="apt-finding-label">{finding.tone === "strength" ? "Strength" : "Weakness"}{finding.source && ` · ${finding.source}`}</p>
              <h4>{finding.title}</h4>
              <p>{finding.text}</p>
              {finding.steps && <ol className="apt-competitor-flow" aria-label={finding.flowLabel}>
                {finding.steps.map(step => <li key={step}>{step}</li>)}
              </ol>}
            </div>
          </div>)}
        </div>
        <div className="apt-competitor-response"><p className="ed-eyebrow">For my redesign</p><p>{screen.takeaway}</p></div>
      </article>)}
    </div>
  </div>;
}

function ResearchArtifactsGallery({ block }) {
  const [persona, storyboard] = block.items[0].items;
  const journey = block.items[1];
  const artifacts = [persona, storyboard, journey];
  const [selected, setSelected] = useState(null);
  const isOpen = selected !== null;
  const selectedIndex = artifacts.indexOf(selected);
  const dialogRef = useRef(null);
  const viewportRef = useRef(null);
  const dialogId = `${block.id}-viewer`;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, left: 0 });
  }, [selected]);

  const switchArtifact = direction => {
    setSelected(current => current
      ? artifacts[(artifacts.indexOf(current) + direction + artifacts.length) % artifacts.length]
      : null);
  };

  const handleArrowKeys = event => {
    // Keep native scrolling keys available when the image canvas is focused.
    if (event.target === viewportRef.current || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      switchArtifact(event.key === "ArrowLeft" ? -1 : 1);
    }
  };

  const closeOnBackdrop = event => {
    if (event.target !== event.currentTarget) return;
    const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      event.currentTarget.close();
    }
  };

  return <div className="apt-artifacts" data-content-id={block.id}>
    <p className="apt-artifact-swipe-hint">Swipe to explore all three artifacts <span aria-hidden="true">→</span></p>
    <div className="apt-artifact-grid" role="region" aria-label="Research artifact previews">
      {artifacts.map(media => <figure className="apt-artifact-card" key={media.id}>
        <button type="button" className="apt-artifact-preview" aria-label={`Enlarge ${media.label}`}
          aria-haspopup="dialog" aria-controls={dialogId} onClick={() => setSelected(media)}>
          <span className="apt-artifact-thumbnail" data-content-id={media.id}>
            <img src={assetPath(media.src)} alt={media.alt} width={media.width} height={media.height}
              loading="lazy" decoding="async" />
          </span>
        </button>
        <figcaption>{media.label}</figcaption>
      </figure>)}
    </div>
    <dialog className="apt-artifact-dialog" id={dialogId} ref={dialogRef}
      aria-labelledby={`${dialogId}-title`}
      onClick={closeOnBackdrop} onKeyDown={handleArrowKeys} onClose={event => {
        if (!event.currentTarget.open) setSelected(null);
      }}>
      {selected && <>
        <header className="apt-artifact-toolbar">
          <h3 id={`${dialogId}-title`} aria-live="polite" aria-atomic="true">{selected.label}</h3>
          <button type="button" className="apt-artifact-close" aria-label={`Close ${selected.label} preview`}
            autoFocus onClick={() => dialogRef.current.close()}><span aria-hidden="true">×</span></button>
        </header>
        <div className="apt-artifact-viewer">
          <button type="button" className="apt-artifact-step apt-artifact-step--previous" aria-controls={`${dialogId}-canvas`}
            aria-label={`Previous artifact: ${artifacts[(selectedIndex - 1 + artifacts.length) % artifacts.length].label}`}
            onClick={() => switchArtifact(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6" /></svg>
          </button>
          <div ref={viewportRef} id={`${dialogId}-canvas`} className={`apt-artifact-canvas${selected === storyboard ? " apt-artifact-canvas--contained" : ""}`}
            role="region" tabIndex={0} aria-label={`${selected.label}, scroll to explore`}
            style={{ "--apt-artifact-reading-width": `${Math.max(1000, selected.width * 1.75)}px` }}>
            <img src={assetPath(selected.src)} alt={selected.alt} width={selected.width} height={selected.height} />
          </div>
          <button type="button" className="apt-artifact-step apt-artifact-step--next" aria-controls={`${dialogId}-canvas`}
            aria-label={`Next artifact: ${artifacts[(selectedIndex + 1) % artifacts.length].label}`}
            onClick={() => switchArtifact(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
      </>}
    </dialog>
  </div>;
}

function Wireframes({ block }) {
  return <div className="apt-wireframes" data-content-id={block.id}>
    {block.items.map(item => <figure key={item.id} data-content-id={item.id}>
      <figcaption><Heading block={item.caption} /></figcaption>
      <div className="apt-wireframe-scroll" tabIndex={0} role="region" aria-label={`${textOf(item.caption.text)}; scroll to compare the screens`}>
        <div className="apt-wireframe-strip ed-media" style={{ width: item.media.width / item.media.height * 260 }}><Block block={item.media} /></div>
      </div>
    </figure>)}
  </div>;
}

function PrototypeFlows({ block }) {
  return <div className="apt-prototype-flows" data-content-id={block.id}>
    {block.flows.map((flow, flowIndex) => <article className="apt-prototype-flow" key={flow.id}
      data-content-id={flow.id} aria-labelledby={flow.heading.id}>
      <header className="apt-prototype-heading">
        <div>
          <p className="ed-eyebrow">Flow {String(flowIndex + 1).padStart(2, "0")}</p>
          <Heading block={flow.heading} />
          <Copy block={flow.description} />
        </div>
        {flow.legend && <ul className="apt-prototype-legend" aria-label="Annotation key">
          {flow.legend.map(item => <li key={item.kind} className={`apt-prototype-${item.kind}`}>
            <span aria-hidden="true" />{item.label}
          </li>)}
        </ul>}
      </header>
      <p className="apt-prototype-scroll-hint" id={`${flow.id}-scroll-hint`}>Scroll to follow the flow <span aria-hidden="true">→</span></p>
      <div className="apt-prototype-scroll" tabIndex={0} role="region"
        aria-label={`${textOf(flow.heading.text)} — four screens in order`}
        aria-describedby={`${flow.id}-scroll-hint`}>
        <ol className="apt-prototype-strip">
          {flow.items.map((item, index) => <li key={item.id}>
            <figure data-content-id={item.id}>
              <div className="apt-prototype-screen" data-content-id={item.media.id}>
                <Media media={item.media} />
                {item.regions && <svg className="apt-prototype-annotations" viewBox={`0 0 ${item.media.width} ${item.media.height}`}
                  aria-hidden="true" focusable="false">
                  {item.regions.map(region => <rect key={region.kind} className={`apt-prototype-${region.kind}`}
                    x={region.x} y={region.y} width={region.width} height={region.height} rx="10" />)}
                </svg>}
                {index < flow.items.length - 1 && (item.connectors || [{ kind: "next", y: 340 }]).map(connector =>
                  <span key={connector.kind} className={`apt-prototype-connector apt-prototype-${connector.kind}`}
                    style={{ top: `${connector.y / item.media.height * 100}%` }} aria-hidden="true" />)}
              </div>
              <figcaption>
                <span className="apt-prototype-step" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <Copy block={item.caption} />
              </figcaption>
            </figure>
          </li>)}
        </ol>
      </div>
    </article>)}
  </div>;
}

function ReflectionLesson({ block }) {
  const [heading, insight, copy] = block.items;
  return <article className="apt-reflection-lesson" data-content-id={block.id} aria-labelledby={heading.id}>
    <Heading block={heading} />
    <Copy block={insight} className="apt-reflection-insight" />
    <Copy block={copy} />
  </article>;
}

function ReflectionNextSteps({ block }) {
  const [heading, steps] = block.items;
  return <article className="apt-reflection-next" data-content-id={block.id} aria-labelledby={heading.id}>
    <Heading block={heading} />
    <ol className="apt-reflection-steps" data-content-id={steps.id}>
      {textOf(steps.text).split(/\n+/).filter(Boolean).map((text, index) => <li key={text}>
        <span className="apt-reflection-step" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <Copy block={{ text }} />
      </li>)}
    </ol>
  </article>;
}

const components = {
  "background-visuals": SecondaryResearch,
  "research-methods": ResearchMethodTags,
  "maintenance-staff-and-contractors-frequently-entered-units-2": ResearchFindings,
  "1-2": StepHeader,
  "2-2": StepHeader,
  "3-2": StepHeader,
  "goal-to-capture-the-real-time-emotional-and": DiaryDetails,
  "1-3": ResearchStudy,
  "2-3": DiaryStudy,
  "research-within-expo-section-1": DiaryTimeline,
  "introduce-step-by-step-tracking-request-submitted-reviewed-3": SurveyResults,
  "research-within-expo-frame-1437254199-1": SurveyMetric,
  "research-within-expo-frame-1437254201-1": SurveyMetric,
  "research-within-expo-frame-1437254202-1": SurveyMetric,
  "research-within-expo-frame-1437254203-1": SurveyMetric,
  "submit-request-4": ProblemQuestions,
  "flow-a-submit-a-maintenance-request-3": WorkflowTests,
  "strength-4": CompetitorStudy,
  "persona-storyboard-user-journey-visuals-2": ResearchArtifactsGallery,
  "submit-requests-3": Wireframes,
  "high-fi-prototype-visuals": PrototypeFlows,
  "based-on-usability-testing-i-identified-several-3": MaintenanceDecisions,
  "reflection-learned": ReflectionLesson,
  "reflection-validation": ReflectionNextSteps,
};

export default function MaintenanceCaseStudy() {
  return <EditorialCaseStudy content={content} layout={layout} components={components} />;
}
