import project4Html from "../content/project-4/index.html?raw";
import project4StyleGuide from "../content/project-4/styleguide.css?raw";
import project4Css from "../content/project-4/style.css?raw";
import HtmlCaseStudy from "./HtmlCaseStudy.jsx";

export default function Project4CaseStudy() {
  return (
    <HtmlCaseStudy
      html={project4Html}
      css={`${project4StyleGuide}\n${project4Css}`}
      projectId="project-4"
    />
  );
}
