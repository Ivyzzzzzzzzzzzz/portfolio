import CaseStudy, { FigureComposition, RichText } from "../components/case-study/CaseStudy.jsx";
import { content } from "../content/project-3/content.js";
import { layout } from "../content/project-3/layout.js";

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

const components = { "wordmark-scale-study": WordmarkScaleStudy, "brand-palette": BrandPalette };

export default function Project3CaseStudy() {
  return <CaseStudy content={content} layout={layout} components={components} />;
}
