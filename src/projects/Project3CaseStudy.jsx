import project3Html from "../content/project-3/index.html?raw";
import project3StyleGuide from "../content/project-3/styleguide.css?raw";
import project3Css from "../content/project-3/style.css?raw";
import HtmlCaseStudy from "./HtmlCaseStudy.jsx";

export default function Project3CaseStudy() {
  return (
    <HtmlCaseStudy
      html={project3Html}
      css={`${project3StyleGuide}\n${project3Css}`}
      projectId="project-3"
    />
  );
}
