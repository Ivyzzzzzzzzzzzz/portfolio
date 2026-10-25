import { Block, FigureComposition, RichText } from "../components/case-study/CaseStudy.jsx";
import EditorialCaseStudy, { Copy, FigureGallery, Heading, StepHeader, Takeaway, textOf } from "../components/case-study/EditorialCaseStudy.jsx";
import { content } from "../content/project-3/content.js";
import { layout } from "../content/project-3/layout.js";
import QuiqMarketChart from "./QuiqMarketCharts.jsx";
import "./quiq.css";

// These coordinates describe one illustration, not the surrounding page layout.
function WordmarkScaleStudy({ block }) {
  return <FigureComposition block={block} width={281} height={356} outline layers={[
    { x: 4, y: 219, width: 272, height: 131 },
    { x: 50, y: 78, width: 179, height: 87 },
    { x: 116, y: 5, width: 47, height: 19 },
  ]} />;
}

function BrandPalette({ block }) {
  return <div className="quiq-palette" data-content-id={block.id}>
    {block.items.map(color => <div className="quiq-palette-color" key={color.color}>
      <span className="quiq-palette-swatch" style={{ background: color.color }} aria-hidden="true" />
      <dl>{color.specifications.map(({ label, value }) => <div key={label.id}>
        <dt data-content-id={label.id}><RichText value={label.text} /></dt>
        <dd data-content-id={value.id}><RichText value={value.text} /></dd>
      </div>)}</dl>
    </div>)}
  </div>;
}

function ContextJourney({ block }) {
  return <div className="quiq-context-journey" data-content-id={block.id}>
    {block.items.filter(item => item.type === "pair").map((item, index) => <article key={item.id} data-content-id={item.id}>
      <span className="ed-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <Copy block={item.copy} />
      <div className="ed-image-stage ed-media"><Block block={item.media} /></div>
    </article>)}
  </div>;
}

function MarketData({ block }) {
  return <div className="quiq-market-data" data-content-id={block.id}>
    {block.items.map((item, index) => <article className="ed-note-panel" key={item.id} data-content-id={item.id}>
      <h3 className="ed-heading">{index === 0 ? "The current OTC landscape" : "The opportunity: efficacy + emotion"}</h3>
      <p className="ed-copy quiq-market-summary" data-content-id={item.items[0].id}><RichText value={item.items[0].text} /></p>
      <Block block={item.items[1]} />
    </article>)}
  </div>;
}

function TargetAudiences({ block }) {
  const [demographics, lifestyle, valuesAndOpportunity] = block.items;
  const [values, opportunity] = valuesAndOpportunity.items;
  return <div className="quiq-audiences" data-content-id={block.id}>
    <div className="quiq-audience-grid">
      <article data-content-id={demographics.id}><StepHeader block={demographics.items[0]} /><Block block={demographics.items[1]} /></article>
      <article><StepHeader block={lifestyle} /></article>
      <article><StepHeader block={values} /></article>
    </div>
    <article className="quiq-audience-opportunity" data-content-id={opportunity.id}>
      <StepHeader block={opportunity.items[0]} />
      <div className="quiq-audience-opportunity-grid" data-content-id={opportunity.items[1].id}>
        {opportunity.items[1].items.map(audience => {
          const [heading, needs, direction] = audience.items;
          return <section key={audience.id} data-content-id={audience.id} aria-labelledby={heading.id}>
            <Heading block={heading} level={4} />
            <Copy block={needs} />
            <p className="quiq-audience-direction" data-content-id={direction.id}><RichText value={direction.text} /></p>
          </section>;
        })}
      </div>
    </article>
  </div>;
}

function UserNeeds({ block }) {
  return <div className="ed-response-grid quiq-needs" data-content-id={block.id}>
    {block.items.map(item => {
      const [need, label, response] = item.items;
      return <article className="ed-response-card" key={item.id} data-content-id={item.id}>
        <StepHeader block={{ ...need, items: need.items.slice(0, 2) }} />
        <div className="ed-observation"><p className="ed-eyebrow">User need</p><Copy block={need.items[2]} /></div>
        <Takeaway label={<span data-content-id={label.id}>{textOf(label.text)}</span>}><Copy block={response} /></Takeaway>
      </article>;
    })}
  </div>;
}

function BrandExamples({ block }) {
  return <figure className="quiq-brand-examples" data-content-id={block.id}>
    <figcaption><Heading block={block.caption} level={4} /></figcaption>
    <div className="quiq-product-examples ed-media" data-content-id={block.media.id}>
      {block.media.items.map(item => <div className="ed-image-stage" key={item.id}><Block block={item} /></div>)}
    </div>
  </figure>;
}

function MarketInsights({ block }) {
  const [studies, label, conclusion] = block.items;
  const [traditional, wellness] = studies.items;
  const traditionalBody = traditional.items[1];
  const wellnessBody = wellness.items[1];
  return <div className="quiq-market-insights" data-content-id={block.id}>
    <div className="quiq-market-studies" data-content-id={studies.id}>
      <article data-content-id={traditional.id}>
        <StepHeader block={{ id: traditionalBody.items[0].id, items: [traditional.items[0], ...traditionalBody.items[0].items] }} />
        <Block block={traditionalBody.items[1]} />
      </article>
      <article data-content-id={wellness.id}>
        <StepHeader block={{ id: wellnessBody.copy.id, items: [wellness.items[0], ...wellnessBody.copy.items] }} />
        <div className="quiq-wellness-examples ed-media"><Block block={wellnessBody.media} /></div>
      </article>
    </div>
    <Takeaway label={<span data-content-id={label.id}>{textOf(label.text)}</span>}><Copy block={conclusion} /></Takeaway>
  </div>;
}

function BrandApproach({ block }) {
  return <div className="quiq-brand-approach" data-content-id={block.id}>
    {block.items.map((item, index) => <article className="ed-note-panel" key={item.id} data-content-id={item.id}>
      <span className="ed-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <Heading block={item.items[0]} /><Copy block={item.items[1]} />
    </article>)}
  </div>;
}

function ToneOfVoice({ block }) {
  const [heading, ...items] = block.items;
  return <section className="quiq-tone" data-content-id={block.id}>
    <Heading block={heading} />
    <dl className="ed-facts">{items.map(item => {
      const [label, ...body] = textOf(item.text).split(":");
      return <div key={item.id} data-content-id={item.id}><dt>{label.trim()}</dt><dd>{body.join(":").trim()}</dd></div>;
    })}</dl>
  </section>;
}

function BrandBrief({ block }) {
  const [name, guidelines] = block.items;
  return <div className="quiq-brand-brief" data-content-id={block.id}>
    <header data-content-id={name.id}><Heading block={name.items[0]} /><Copy block={name.items[1]} /></header>
    <div className="quiq-brief-guidelines" data-content-id={guidelines.id}>
      {guidelines.items.map(item => <Block block={item} key={item.id} />)}
    </div>
  </div>;
}

function Brainstorming({ block }) {
  const [research, audit, drafts, development] = block.items;
  return <div className="quiq-brainstorming" data-content-id={block.id}>
    <div className="quiq-reference-studies">
      {[research, audit].map(item => <article key={item.id} data-content-id={item.id}>
        <StepHeader block={item.copy} /><div className="ed-image-stage ed-media"><Block block={item.media} /></div>
      </article>)}
    </div>
    <section className="quiq-draft-study" data-content-id={drafts.id}>
      <StepHeader block={drafts.items[0]} /><FigureGallery block={drafts.items[1]} className="quiq-drafts" scrollLabel="Wordmark drafts; scroll to compare on smaller displays" />
    </section>
    <Block block={development} />
  </div>;
}

function LabeledParagraph({ block }) {
  const text = textOf(block.text);
  const split = text.indexOf(":");
  return <div className="quiq-copy-field" data-content-id={block.id}>
    <p className="ed-eyebrow">{text.slice(0, split).trim()}</p>
    <p>{text.slice(split + 1).trim()}</p>
  </div>;
}

function PackagingCopy({ block }) {
  return <div className="quiq-packaging-copy" data-content-id={block.id}>
    {block.items.map(item => {
      const [title, ingredients, help, ...details] = item.items;
      return <article key={item.id} data-content-id={item.id}>
        <Heading block={title} /><LabeledParagraph block={help} />
        <details>
          <summary>View label copy</summary>
          <div className="quiq-label-details">
            <div><p className="ed-eyebrow">Ingredients</p><Copy block={ingredients} /></div>
            {details.map(detail => <LabeledParagraph block={detail} key={detail.id} />)}
          </div>
        </details>
      </article>;
    })}
  </div>;
}

function PackagingExploration({ block }) {
  const [number, pair] = block.items;
  return <article className="quiq-packaging-exploration" data-content-id={block.id}>
    <StepHeader block={{ id: pair.copy.id, items: [number, ...pair.copy.items] }} />
    <div className="ed-media"><Block block={pair.media} /></div>
  </article>;
}

function DesignConcepts({ block }) {
  return <div className="quiq-concepts" data-content-id={block.id}>
    {block.items.map(item => {
      const copy = item.copy || item.items[0];
      const media = item.media ? [item.media] : item.items.slice(1);
      return <article key={item.id} data-content-id={item.id}>
        <div className="quiq-concept-copy" data-content-id={copy.id}>
          <p className="ed-eyebrow" data-content-id={copy.items[0].id}>{textOf(copy.items[0].text).replace(/:$/, "")}</p>
          <Heading block={copy.items[1]} /><Copy block={copy.items[2]} />
        </div>
        <div className="quiq-concept-images ed-media">{media.map(image => <div className="ed-image-stage" key={image.id}><Block block={image} /></div>)}</div>
      </article>;
    })}
  </div>;
}

function SymptomIndicators({ block }) {
  return <div className="quiq-symptoms" data-content-id={block.id}>
    {block.items.map(item => <article key={item.id} data-content-id={item.id}>
      <Heading block={item.items[0]} />
      <div className="quiq-pattern-samples"><Block block={item.items[1].media} /></div>
      <Copy block={item.items[1].copy} />
    </article>)}
  </div>;
}

const components = {
  "wordmark-scale-study": WordmarkScaleStudy,
  "brand-palette": BrandPalette,
  "i-often-had-headaches-and-fevers-back-3": ContextJourney,
  "top-brands-like-tylenol-and-advil-hold-3": MarketData,
  "top-brands-3": QuiqMarketChart,
  "health-sector-grow-4": QuiqMarketChart,
  "1-4": TargetAudiences,
  "1-8": UserNeeds,
  "1-12": MarketInsights,
  "tylenol-2": BrandExamples,
  "advil-2": BrandExamples,
  "design-approach-3": BrandApproach,
  "quiq-7": BrandBrief,
  "tone-of-messaging-2": ToneOfVoice,
  "1-16": Brainstorming,
  "4-5": StepHeader,
  "ive-got-a-sore-throat-3": PackagingCopy,
  "5-2": PackagingExploration,
  "concept-1-4": DesignConcepts,
  "allergy-4": SymptomIndicators,
};

export default function Project3CaseStudy() {
  return <EditorialCaseStudy content={content} layout={layout} components={components} />;
}
