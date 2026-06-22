import { rewriteAssetPaths } from "../lib/assets.js";

export default function HtmlCaseStudy({ html, css, projectId }) {
  const resolvedHtml = rewriteAssetPaths(html);
  const resolvedCss = rewriteAssetPaths(css);

  return (
    <main className={`case-study-page case-study-page--${projectId}`}>
      <nav className="case-study-toolbar" aria-label="Case study navigation">
        <a className="case-study-back-link" href="#/">
          Back to projects
        </a>
      </nav>
      <style data-case-study-style={projectId}>{resolvedCss}</style>
      <div
        className="case-study-content"
        data-case-study={projectId}
        dangerouslySetInnerHTML={{ __html: resolvedHtml }}
      />
    </main>
  );
}
