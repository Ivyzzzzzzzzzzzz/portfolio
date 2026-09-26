import CaseStudy from "../components/case-study/CaseStudy.jsx";
import { content } from "../content/project-2/content.js";
import { layout } from "../content/project-2/layout.js";

export default function MaintenanceCaseStudy() {
  return <CaseStudy content={content} layout={layout} />;
}
