import maintenanceHtml from "../content/project-2/index.html?raw";
import maintenanceCss from "../content/project-2/style.css?raw";
import HtmlCaseStudy from "./HtmlCaseStudy.jsx";

export default function MaintenanceCaseStudy() {
  return <HtmlCaseStudy html={maintenanceHtml} css={maintenanceCss} projectId="project-2" />;
}
