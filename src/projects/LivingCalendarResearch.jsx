import { Block, RichText } from "../components/case-study/CaseStudy.jsx";
import { ExistingConnections, SurveyChart, percent } from "./LivingCalendarCharts.jsx";

const plainText = value => typeof value === "string" ? value : value.map(run => run.text).join("");
const authoredLines = value => plainText(value).split(/\n+/).map(line => line.trim()).filter(Boolean);
const labelText = value => plainText(value).replace(/:\s*$/, "");

function ResearchSubsection({ block }) {
  return <section className="lc-research-subsection" id={block.id} data-content-id={block.id}
    aria-labelledby={`${block.id}-title`}>
    <header className="lc-research-subsection-heading">
      <span className="lc-research-step" aria-hidden="true">{block.step}</span>
      <h3 className="study-label" id={`${block.id}-title`}><RichText value={block.title} /></h3>
    </header>
    <div className="lc-research-subsection-body">
      {block.takeaway && <p className="lc-story-takeaway"><RichText value={block.takeaway} /></p>}
      {block.items.map(item => <Block key={item.id} block={item} />)}
    </div>
  </section>;
}

function ResearchFindings({ block }) {
  const [heading, comparison, conclusion] = block.items;
  return <section className="lc-research-findings" data-content-id={block.id} aria-labelledby={heading.id}>
    <h4 id={heading.id} data-content-id={heading.id}>{labelText(heading.text)}</h4>
    <dl className="lc-finding-comparison" data-content-id={comparison.id}>
      {comparison.items.map(item => {
        const [level, subject] = item.items;
        return <div key={item.id} data-content-id={item.id}>
          <dt data-content-id={subject.id}><RichText value={subject.text} /></dt>
          <dd className={`lc-finding-level lc-finding-level--${level.id}`} data-content-id={level.id}>
            <span aria-hidden="true">{level.id === "high" ? "↑" : "↓"}</span> {level.text}
          </dd>
        </div>;
      })}
    </dl>
    <div className="lc-research-takeaway">
      <p className="lc-research-label">What this reveals</p>
      <p data-content-id={conclusion.id}><RichText value={conclusion.text} /></p>
    </div>
  </section>;
}

function AudienceEvidence({ block }) {
  return <div className="lc-audience-evidence" data-content-id={block.id}>
    {block.items.map(item => {
      const isFigure = item.type === "figure";
      const heading = isFigure ? item.caption : item.items[0];
      const summary = isFigure ? null : item.items[1];
      const media = isFigure ? item.media : item.items[2];
      return <article className="lc-evidence-panel" key={item.id} data-content-id={item.id} aria-labelledby={heading.id}>
        <h4 id={heading.id} data-content-id={heading.id}><RichText value={heading.text} /></h4>
        <dl className="lc-evidence-numbers" data-content-id={summary?.id} aria-label={summary?.text}>
          {item.highlights.map(stat => <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{percent(media.data.find(row => row.label === stat.dataLabel).value)}</dd>
          </div>)}
        </dl>
        <div className="lc-evidence-chart"><Block block={media} /></div>
      </article>;
    })}
  </div>;
}

function LiteratureReview({ block }) {
  const [heading, introduction, sources] = block.items;
  return <section className="lc-literature-review" data-content-id={block.id} aria-labelledby={heading.id}>
    <header className="lc-research-intro">
      <h4 id={heading.id} data-content-id={heading.id}>{heading.text}</h4>
      <p data-content-id={introduction.id}><RichText value={introduction.text} /></p>
    </header>
    <div className="lc-literature-sources" data-content-id={sources.id}>
      {sources.items.map(source => {
        const [heading, body] = source.items;
        const [title, ...citation] = heading.text;
        // The authored line breaks separate the finding and its design takeaway.
        const [findingLabel, finding, takeawayLabel, takeaway] = authoredLines(body.text);
        return <article className="lc-literature-source" key={source.id} data-content-id={source.id} aria-labelledby={heading.id}>
          <header data-content-id={heading.id}>
            <h5 id={heading.id}>{title.text.trim()}</h5>
            <p className="lc-research-citation">{plainText(citation).trim()}</p>
          </header>
          <div className="lc-literature-body" data-content-id={body.id}>
            <div className="lc-core-finding">
              <p className="lc-research-label">{labelText(findingLabel)}</p>
              <p><RichText value={finding} /></p>
            </div>
            <div className="lc-research-takeaway">
              <p className="lc-research-label">{labelText(takeawayLabel)}</p>
              <p><RichText value={takeaway} /></p>
            </div>
          </div>
        </article>;
      })}
    </div>
  </section>;
}

function ResearchShift({ block }) {
  const [assumption, finding] = authoredLines(block.text);
  return <div className="lc-research-shift" data-content-id={block.id}>
    <div>
      <p className="lc-research-label"><RichText value={block.assumptionLabel} /></p>
      <h4><RichText value={block.assumptionTitle} /></h4>
      <p><RichText value={assumption} /></p>
    </div>
    <div>
      <p className="lc-research-label"><RichText value={block.findingLabel} /></p>
      <h4><RichText value={block.findingTitle} /></h4>
      <p><RichText value={finding} /></p>
    </div>
  </div>;
}

function JourneyHeading({ block }) {
  const [title, question] = block.text;
  return <header className="lc-journey-heading" data-content-id={block.id}>
    <h3>{title.text.trim()}</h3>
    <p>{question.text.replace(/[()]/g, "").trim()}</p>
  </header>;
}

export const researchComponents = {
  "understanding-existing-connections": ResearchSubsection,
  "a-different-problem-emerged": ResearchSubsection,
  "expanding-the-audience": ResearchSubsection,
  "how-do-people-experience-seasons-today-3": ExistingConnections,
  "seasonal-connection-chart": SurveyChart,
  "solar-term-familiarity-chart": SurveyChart,
  "modern-life-awareness-chart": SurveyChart,
  "seasonal-cues-chart": SurveyChart,
  "meaningful-interactions-chart": SurveyChart,
  "key-findings-2": ResearchFindings,
  "how-do-people-notice-seasonal-change-3": AudienceEvidence,
  "literature-review-3": LiteratureReview,
  "i-initially-assumed-this-was-a-cultural": ResearchShift,
  "sitemap-how-should-information-be-organized": JourneyHeading,
  "storyboard-what-should-the-experience-feel-like": JourneyHeading,
};
