import { Block } from "../components/case-study/CaseStudy.jsx";
import EditorialCaseStudy, { Copy, CopyList, FigureGallery, Heading, NumberedPoints, StepHeader, Takeaway, textOf } from "../components/case-study/EditorialCaseStudy.jsx";
import { content } from "../content/project-2/content.js";
import { layout } from "../content/project-2/layout.js";
import "./maintenance.css";

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
  const isRating = Boolean(block.scale);
  return <figure className="apt-survey-metric" data-content-id={block.id} aria-labelledby={`${block.id}-label`}>
    <div className={`apt-metric-visual${isRating ? " apt-metric-rating" : ""}`}>
      {!isRating && <svg viewBox="0 0 144 144" aria-hidden="true" focusable="false">
        <circle className="apt-metric-track" cx="72" cy="72" r="62" />
        <circle className="apt-metric-fill" cx="72" cy="72" r="62" pathLength="100"
          strokeDasharray={`${block.value} ${100 - block.value}`} transform="rotate(-90 72 72)" />
      </svg>}
      <div className="apt-metric-value">
        <strong>{block.value}<span>{isRating ? `/${block.scale}` : "%"}</span></strong>
        <span>{isRating ? "importance rating" : "of residents"}</span>
      </div>
      {isRating && <div className="apt-rating-scale" aria-hidden="true">
        <div className="apt-rating-segments">
          {Array.from({ length: block.scale }, (_, index) => <span key={index}>
            <span style={{ width: `${Math.min(1, Math.max(0, block.value - index)) * 100}%` }} />
          </span>)}
        </div>
        <div className="apt-rating-endpoints"><span>0</span><span>{block.scale}</span></div>
      </div>}
    </div>
    <figcaption>
      <p className="ed-eyebrow" id={`${block.id}-label`}>{block.label}</p>
      <p className="apt-metric-description">{block.description}</p>
    </figcaption>
  </figure>;
}

function SurveyOpportunities({ block }) {
  return <div className="apt-survey-opportunities" data-content-id={block.id}>
    {block.items.map(item => <article key={item.id} data-content-id={item.id}>
      <div className="apt-survey-chart"><Block block={item.media} /></div>
      <Takeaway label="Design opportunity"><Copy block={item.copy || item.caption} /></Takeaway>
    </article>)}
  </div>;
}

function ProblemQuestions({ block }) {
  return <div className="ed-response-grid" data-content-id={block.id}>
    {block.items.map(item => {
      const [problem, question] = item.items;
      return <article className="ed-response-card" key={item.id} data-content-id={item.id}>
        <header data-content-id={problem.id}><Heading block={problem.items[0]} /></header>
        <div className="ed-observation"><p className="ed-eyebrow">Resident experience</p><Copy block={problem.items[1]} /></div>
        <Takeaway label="Design question"><Copy block={question} /></Takeaway>
      </article>;
    })}
  </div>;
}

function WorkflowTests({ block }) {
  return <div className="apt-workflow-tests" data-content-id={block.id}>
    {[0, 3].map(index => <article key={block.items[index].id}>
      <Heading block={block.items[index]} />
      <CopyList block={block.items[index + 1]} />
      <div className="apt-workflow-evidence ed-media"><Block block={block.items[index + 2]} /></div>
    </article>)}
  </div>;
}

function CompetitorStudy({ block }) {
  const [notes, workflow, screens] = block.items;
  return <div className="apt-competitor" data-content-id={block.id}>
    <div className="ed-response-grid" data-content-id={notes.id}>
      {[0, 2].map(index => <article className="ed-note-panel" key={notes.items[index].id}>
        <Heading block={notes.items[index]} /><CopyList block={notes.items[index + 1]} />
      </article>)}
    </div>
    <div className="apt-competitor-images ed-media"><Block block={workflow} /><Block block={screens} /></div>
  </div>;
}

function PersonaJourney({ block }) {
  const [persona, storyboard] = block.items[0].items;
  const journey = block.items[1];
  return <div className="apt-persona-journey ed-media" data-content-id={block.id}>
    <figure className="apt-persona"><figcaption>Persona</figcaption><Block block={persona} /></figure>
    <div className="apt-journey-pair">
      <figure><figcaption>Storyboard</figcaption><Block block={storyboard} /></figure>
      <figure><figcaption>User journey</figcaption><Block block={journey} /></figure>
    </div>
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

function InputComparison({ block }) {
  const [details, comparison] = block.items;
  return <div className="apt-input-comparison" data-content-id={block.id}>
    <FigureGallery block={comparison} className="apt-before-after" />
    <div className="apt-input-details">
      <p className="ed-eyebrow">Input field details</p>
      <div className="ed-media" data-content-id={details.id}>{details.items.map(image => <Block block={image} key={image.id} />)}</div>
    </div>
  </div>;
}

function HistoryComparison({ block }) {
  const [timeline, updates, before] = block.items;
  return <div className="apt-history-comparison" data-content-id={block.id} tabIndex={0} role="region" aria-label="Request history comparison; scroll to compare all three screens on smaller displays">
    {[before, timeline, updates].map((item, index) => <figure key={item.id} data-content-id={item.id}>
      <p className="ed-eyebrow">{index === 0 ? "Before" : index === 1 ? "After · Request history" : "After · Request details"}</p>
      <div className="ed-image-stage ed-media"><Block block={item.media} /></div>
      {item.copy && <figcaption><Copy block={item.copy} /></figcaption>}
    </figure>)}
  </div>;
}

function DesignDecisions({ block }) {
  const [first, ...rest] = block.items;
  const [intro, firstDecision] = first.items;
  const [firstCopy, firstResponse] = firstDecision.items;
  const decisions = [
    { id: firstDecision.id, number: firstCopy.items[0], title: firstCopy.items[1], observation: firstCopy.items[2], response: firstResponse },
    ...rest.map(item => {
      const [number, title, body] = item.items;
      const [copy, media] = body.type === "pair" ? [body.copy, body.media] : body.items;
      return { id: item.id, number, title, observation: copy.items[0], response: copy.items[1], media };
    }),
  ];
  return <div className="apt-decisions" data-content-id={block.id}>
    <Copy block={intro} />
    {decisions.map(item => <article className="apt-decision" key={item.id} data-content-id={item.id}>
      <header className="ed-step-heading">
        <span className="ed-step-number" data-content-id={item.number.id}>{textOf(item.number.text).padStart(2, "0")}</span>
        <Heading block={item.title} />
      </header>
      <div className={item.media?.type === "image" ? "apt-decision-single" : "apt-decision-body"}>
        <div className="ed-response-grid">
          <div className="ed-observation"><p className="ed-eyebrow">What testing revealed</p><Copy block={item.observation} /></div>
          <Takeaway><Copy block={item.response} /></Takeaway>
        </div>
        {item.media && <div className="apt-decision-media ed-media"><Block block={item.media} /></div>}
      </div>
    </article>)}
  </div>;
}

const components = {
  "maintenance-staff-and-contractors-frequently-entered-units-2": NumberedPoints,
  "current-maintenance-systems-fail-to-address-users-2": ({ block }) => <Takeaway label="Key findings"><div className="ed-response-grid" data-content-id={block.id}>{block.items.map(item => <Copy block={item} key={item.id} />)}</div></Takeaway>,
  "1-2": StepHeader,
  "2-2": StepHeader,
  "3-2": StepHeader,
  "goal-to-capture-the-real-time-emotional-and": DiaryDetails,
  "1-3": ResearchStudy,
  "2-3": DiaryStudy,
  "research-within-expo-section-1": DiaryTimeline,
  "introduce-step-by-step-tracking-request-submitted-reviewed-3": SurveyOpportunities,
  "research-within-expo-frame-1437254199-1": SurveyMetric,
  "research-within-expo-frame-1437254200-1": SurveyMetric,
  "research-within-expo-frame-1437254201-1": SurveyMetric,
  "research-within-expo-frame-1437254202-1": SurveyMetric,
  "research-within-expo-frame-1437254203-1": SurveyMetric,
  "submit-request-4": ProblemQuestions,
  "flow-a-submit-a-maintenance-request-3": WorkflowTests,
  "strength-4": CompetitorStudy,
  "persona-storyboard-user-journey-visuals-2": PersonaJourney,
  "submit-requests-3": Wireframes,
  "high-fi-prototype-visuals": ({ block }) => <div><FigureGallery block={block} className="apt-phone-gallery" label="Screen" /></div>,
  "based-on-usability-testing-i-identified-several-3": DesignDecisions,
  "before-4": InputComparison,
  "redesigned-request-history-as-a-clear-status-based-3": HistoryComparison,
};

export default function MaintenanceCaseStudy() {
  return <EditorialCaseStudy content={content} layout={layout} components={components} />;
}
