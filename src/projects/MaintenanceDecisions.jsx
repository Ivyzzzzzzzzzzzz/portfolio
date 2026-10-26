import { Copy, Heading } from "../components/case-study/EditorialCaseStudy.jsx";
import { RichText } from "../components/case-study/CaseStudy.jsx";
import { assetPath } from "../lib/assets.js";

// Crops and marks use the source image's coordinates, keeping every annotation
// attached to its control as the comparison changes size.
function outline([x, y, width, height]) {
  return `M ${x + 6} ${y} Q ${x + width / 2} ${y - 2} ${x + width - 5} ${y + 1}
    Q ${x + width + 1} ${y + 1} ${x + width} ${y + 7}
    L ${x + width - 1} ${y + height - 5} Q ${x + width} ${y + height + 1} ${x + width - 6} ${y + height}
    Q ${x + width / 2} ${y + height + 2} ${x + 5} ${y + height - 1}
    Q ${x - 1} ${y + height} ${x} ${y + height - 6}
    L ${x + 1} ${y + 6} Q ${x} ${y} ${x + 6} ${y} Z`;
}

function ScreenDetail({ panel }) {
  const { media, crop, notes = [] } = panel;
  const [left, top, width, height] = crop;
  return <div className={`apt-detail-board${notes.length ? " apt-detail-board--annotated" : ""}`}>
    <div className="apt-detail-stage" data-content-id={media.id}>
      <svg className="apt-detail-image" viewBox={crop.join(" ")} role="img" aria-labelledby={`${media.id}-title`}>
        <title id={`${media.id}-title`}>{media.alt}</title>
        <image href={assetPath(media.src)} width={media.width} height={media.height} />
      </svg>
      {notes.length > 0 && <svg className="apt-detail-marks" viewBox={crop.join(" ")} aria-hidden="true" focusable="false">
        {notes.map(note => {
          const [x, y, w, h] = note.region;
          const endX = left + width * 1.055;
          const endY = top + height * note.position / 100;
          return <g key={note.number}>
            <path className="apt-detail-outline" d={outline(note.region)} />
            <path className="apt-detail-leader" d={`M ${x + w} ${y + h / 2} C ${left + width} ${y + h / 2}, ${left + width} ${endY}, ${endX} ${endY}`} />
            <circle className="apt-detail-endpoint" cx={endX} cy={endY} r={width * .006} />
          </g>;
        })}
      </svg>}
      {notes.map(note => <span className="apt-detail-pin" key={note.number} aria-hidden="true"
        style={{ left: `${(note.region[0] - left) / width * 100}%`, top: `${(note.region[1] - top) / height * 100}%` }}>{note.number}</span>)}
    </div>
    {notes.length > 0 && <ol className="apt-detail-notes" aria-label="Marked design details">
      {notes.map(note => <li key={note.number} style={{ "--note-position": `${note.position}%` }}>
        <span aria-hidden="true">{note.number}</span><p>{note.text}</p>
      </li>)}
    </ol>}
  </div>;
}

function ResponsibilityDiagram({ steps }) {
  return <ol className="apt-responsibility" aria-label="Who sets request priority">
    {steps.map((step, index) => <li key={step.role}>
      <div className="apt-responsibility-icon" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {index === 0 ? <><circle cx="20" cy="13" r="5" /><path d="M10 32v-4a10 10 0 0 1 20 0v4M15 32v-6m10 6v-6" /></> :
            <><path d="m25 8-3 6 4 4 6-3a9 9 0 0 1-12 11l-8 8-6-6 8-8A9 9 0 0 1 25 8Z" /><circle cx="10" cy="30" r="1" /></>}
        </svg>
      </div>
      <p>{step.role}</p><strong>{step.action}</strong>
    </li>)}
  </ol>;
}

function DecisionPanel({ panel, after }) {
  return <figure className={`apt-decision-panel apt-decision-panel--${after ? "after" : "before"}`} data-content-id={panel.id}>
    <figcaption><span>{after ? "After" : "Before"}</span><p>{panel.label}</p></figcaption>
    <div className="apt-decision-evidence">
      {panel.steps ? <ResponsibilityDiagram steps={panel.steps} /> : <ScreenDetail panel={panel} />}
    </div>
  </figure>;
}

function DecisionReasoning({ item }) {
  return <dl className="apt-decision-reasoning">
    <div><dt>Observed</dt><dd><p className="ed-copy apt-decision-finding" data-content-id={item.finding.id}>
      <RichText value={item.finding.text} />
    </p></dd></div>
    {item.constraint && <div><dt>Constraint</dt><dd><p className="ed-copy apt-decision-finding" data-content-id={item.constraint.id}>
      <RichText value={item.constraint.text} />
    </p></dd></div>}
    <div><dt>My decision</dt><dd><Copy block={item.rationale} /></dd></div>
  </dl>;
}

function DecisionComparison({ item }) {
  return <div className="apt-decision-panels">
    <DecisionPanel panel={item.before} />
    <span className="apt-decision-arrow" aria-hidden="true">→</span>
    <DecisionPanel panel={item.after} after />
  </div>;
}

export default function MaintenanceDecisions({ block }) {
  return <div className="apt-decisions" data-content-id={block.id}>
    {block.items.map((item, index) =>
      <article className="apt-decision" key={item.id} data-content-id={item.id} aria-labelledby={item.heading.id}>
        <header className={`apt-decision-heading${item.supporting ? " apt-decision-heading--supporting" : ""}`}>
          {!item.supporting && <span className="ed-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>}
          <div>
            {item.supporting && <p className="ed-eyebrow">Supporting refinement</p>}
            <Heading block={item.heading} />
            <DecisionReasoning item={item} />
          </div>
        </header>
        <DecisionComparison item={item} />
      </article>)}
  </div>;
}
