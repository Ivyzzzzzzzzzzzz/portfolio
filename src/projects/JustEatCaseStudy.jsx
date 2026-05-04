import justEatHtml from "../content/project-1/index.html?raw";
import justEatCss from "../content/project-1/style.css?raw";
import HtmlCaseStudy from "./HtmlCaseStudy.jsx";

export default function JustEatCaseStudy() {
  return <HtmlCaseStudy html={justEatHtml} css={justEatCss} projectId="project-1" />;
}
