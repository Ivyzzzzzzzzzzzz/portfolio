import CaseStudy, { Block, Media, ImageExplanation } from "../components/case-study/CaseStudy.jsx";
import OnThisPage from "../components/case-study/OnThisPage.jsx";
import { content } from "../content/project-1/content.js";
import { layout } from "../content/project-1/layout.js";
import "./justeat.css";

function Observations({ block }) {
  return <div className="je-observations"><ImageExplanation block={block} rule={{ ratio: "2fr 1fr" }} /></div>;
}

function InterviewGrid({ block }) {
  return <div className="je-interviews" data-content-id={block.id}>
    {block.items.map(card => <article className="je-interview" key={card.id} data-content-id={card.id}>
      <Block block={card.items[0]} />
      <div className="je-interview-allergens"><Block block={card.items[1]} /></div>
      <blockquote><Block block={card.items[2]} /></blockquote>
    </article>)}
  </div>;
}

function BrainstormingBoard({ block }) {
  return <div className="je-brainstorming-grid" data-content-id={block.id}>
    {block.items.map(figure => <figure key={figure.id} data-content-id={figure.id}
      className={`je-concept-card${figure.id === "qr-code-filter-2" ? " je-concept-featured" : ""}`}>
      <figcaption><Block block={figure.caption} /></figcaption>
      <div className="je-sketch-stage"><Media media={figure.media} /></div>
    </figure>)}
  </div>;
}

function BrainstormingExploration({ block }) {
  return <div className="je-exploration" data-content-id={block.id}>
    {block.items.map(item => <Block block={item} key={item.id} />)}
  </div>;
}

function Storyboards({ block }) {
  return <div className="je-storyboards" data-content-id={block.id}>
    {block.items.map(item => <figure className="je-storyboard" key={item.id} data-content-id={item.id}>
      <figcaption><Block block={item.copy || item.caption} /></figcaption>
      <div className="je-storyboard-image"><Media media={item.media} /></div>
    </figure>)}
  </div>;
}

function PrototypeGallery({ block }) {
  return <div className="je-prototypes" data-content-id={block.id}>
    {block.items.map(figure => <figure className="je-prototype" key={figure.id} data-content-id={figure.id}>
      <figcaption><Block block={figure.caption} /></figcaption>
      <div className="je-prototype-stage"><Media media={figure.media} /></div>
    </figure>)}
  </div>;
}

function DecisionRow({ block }) {
  return <div className="je-decision-row" data-content-id={block.id} data-image-explanation="true">
    <div className="study-pair-copy"><Block block={block.copy} /></div>
    <div className={`study-pair-media${block.media.type === "image" ? " je-single-screen" : ""}`}>
      <Block block={block.media} />
    </div>
  </div>;
}

function DecisionSequence({ block }) {
  return <div className="je-decisions" data-content-id={block.id}>
    {block.items.map(item => <Block block={item} key={item.id} />)}
  </div>;
}

function SeverityStudy({ block }) {
  const [screen, indicators] = block.media.items;
  const [legend, explanation] = block.copy.items;
  return <div className="je-severity" data-content-id={block.id}>
    <div className="je-severity-screen"><Media media={screen} /></div>
    <div className="je-severity-explanation">
      <div className="je-severity-key">
        <div className="je-severity-indicators"><Media media={indicators} /></div>
        <div className="je-severity-legend">{legend.items.map(row => <div className="je-severity-level" key={row.id}>
          <div><Block block={row.items[0].items[0]} /><Block block={row.items[0].items[1]} /></div>
          <Block block={row.items[1]} />
        </div>)}</div>
      </div>
      <Block block={explanation} />
    </div>
  </div>;
}

/** The bounded stage sizes artwork; captions and the surrounding page remain fluid. */
function ExplainedFigure({ block }) {
  const artwork = block.media.type === "image" ? [block.media] : block.media.items;
  const pointer = artwork.length > 1 ? artwork[0] : null;
  const screen = artwork.at(-1);
  return <figure className="je-explained-figure" data-content-id={block.id} data-image-explanation="true">
    <figcaption className="study-pair-copy"><Block block={block.caption} /></figcaption>
    <div className="study-pair-media je-explained-media">
      {pointer && <div className="je-annotation-pointer"><Media media={pointer} /></div>}
      <div className="je-image-stage"><Media media={screen} /></div>
    </div>
  </figure>;
}

function SelectionComparison({ block }) {
  const [single, multi] = block.items;
  return <div className="je-selection-comparison" data-content-id={block.id}>
    <div className="je-comparison-column">
      <Block block={single.items[0]} />
      <ExplainedFigure block={single.items[1]} />
    </div>
    <div className="je-comparison-column">
      <Block block={multi.items[0]} />
      <div className="je-multi-selection">{multi.items[1].items.map(figure => <ExplainedFigure key={figure.id} block={figure} />)}</div>
    </div>
  </div>;
}

function LayerComparison({ block }) {
  return <div className="je-layer-comparison" data-content-id={block.id}>
    {block.items.map(item => <div className="je-layer-panel" key={item.id}>
      <Block block={item.items[0]} />
      <ExplainedFigure block={item.items[1]} />
      <div className="je-size-sample"><Block block={item.items[2]} /></div>
    </div>)}
  </div>;
}

function GroupContext({ block }) {
  return <div className="je-group-context" data-content-id={block.id}>
    {block.items.map(item => <Block block={item} key={item.id} />)}
  </div>;
}

function WireframeStudy({ block }) {
  const [elements, studies] = block.items;
  const [sketches, flows] = studies.items;
  return <div className="je-wireframe-study" data-content-id={block.id}>
    <div className="je-wireframe-notes"><Block block={elements} /><Block block={sketches} /></div>
    <div className="je-wireframe-gallery">{flows.items.flatMap(row => row.items).map(figure => <figure className="je-wireframe-flow" key={figure.id}>
      <figcaption><Block block={figure.caption} /></figcaption>
      <div className="je-wireframe-screens">{figure.media.items.map(media => <Media media={media} key={media.id} />)}</div>
    </figure>)}</div>
  </div>;
}

function DesignSystem({ block }) {
  const [responsive, library] = block.items;
  const [foundations, components] = library.items;
  return <div className="je-system" data-content-id={block.id}>
    <div className="je-responsive-study"><Block block={responsive} /></div>
    <div className="je-system-panels">
      {[foundations, ...components.items].map(item => <div className="je-system-panel" key={item.id}><Block block={item} /></div>)}
    </div>
  </div>;
}

const components = {
  "constant-mental-reminders-you-cant-eat-that-4": Observations,
  "interview-grid": InterviewGrid,
  "brainstorming-board": BrainstormingBoard,
  "smart-glasses-4": BrainstormingExploration,
  "multiple-people-dine-in-1-input-table-3": Storyboards,
  "scan-qr-code-and-create-allergen-profile-3": PrototypeGallery,
  "three-levels-of-allergy-severity-4": DecisionSequence,
  "1-6": DecisionSequence,
  "three-levels-of-allergy-severity-3": DecisionRow,
  "family-profiles": DecisionRow,
  "shared-allergen-visibility-3": DecisionRow,
  "1-5": DecisionRow,
  "2-4": DecisionRow,
  "3-4": DecisionRow,
  "mild-6": SeverityStudy,
  "single-selection-3": SelectionComparison,
  "menu-view-4": LayerComparison,
  "i-designed-the-system-to-first-show-4": GroupContext,
  "main-elements-food-photo-dish-name-price-2": WireframeStudy,
  "responsive-layout-3": DesignSystem,
};

export default function JustEatCaseStudy() {
  return <CaseStudy content={content} layout={layout} components={components}
    sidebar={<OnThisPage sections={content.sections} id="justeat-chapter-links" prefix="je" />} />;
}
