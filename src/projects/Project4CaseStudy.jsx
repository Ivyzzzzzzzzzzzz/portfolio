import CaseStudy, { FigureComposition } from "../components/case-study/CaseStudy.jsx";
import { content } from "../content/project-4/content.js";
import { layout } from "../content/project-4/layout.js";

function SeasonalObservationCollage({ block }) {
  return <FigureComposition block={block} width={309} height={216} layers={[
    { x: 166, y: 0, width: 143, height: 100 },
    { x: 0, y: 104, width: 160, height: 112 },
    { x: 0, y: 0, width: 160, height: 100 },
    { x: 167, y: 105, width: 142, height: 111 },
  ]} />;
}

// The final layer is the existing annotation artwork, anchored to its screenshots.
const prototypeCompositions = {
  "grass-prototype-comparison": { width: 578, height: 134, layers: [
    { x: 0, y: 0, width: 193, height: 134 },
    { x: 203, y: 1, width: 182, height: 132 },
    { x: 396, y: 1, width: 182, height: 132 },
    { x: 198, y: 0, width: 375, height: 133 },
  ] },
  "dial-prototype-comparison": { width: 322, height: 134, layers: [
    { x: 0, y: 0, width: 131, height: 133 },
    { x: 141, y: 1, width: 181, height: 131 },
    { x: 136, y: 1, width: 184, height: 133 },
  ] },
  "calendar-prototype-comparison": { width: 361, height: 134, layers: [
    { x: 0, y: 0, width: 170, height: 133 },
    { x: 180, y: 1, width: 180, height: 130 },
    { x: 176, y: 1, width: 184, height: 133 },
  ] },
};

function PrototypeComparison({ block }) {
  return <FigureComposition block={block} {...prototypeCompositions[block.id]} />;
}

const components = {
  "seasonal-observation-collage": SeasonalObservationCollage,
  "grass-prototype-comparison": PrototypeComparison,
  "dial-prototype-comparison": PrototypeComparison,
  "calendar-prototype-comparison": PrototypeComparison,
};

export default function Project4CaseStudy() {
  return <CaseStudy content={content} layout={layout} components={components} />;
}
