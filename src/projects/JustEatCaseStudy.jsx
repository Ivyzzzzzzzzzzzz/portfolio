import justEatHtml from "../content/justeat.html?raw";

export default function JustEatCaseStudy() {
  return (
    <main className="case-study-page">
      <nav className="case-study-toolbar" aria-label="Case study navigation">
        <a className="case-study-back-link" href="#/">
          Back to projects
        </a>
      </nav>
      <div className="case-study-content" dangerouslySetInnerHTML={{ __html: justEatHtml }} />
    </main>
  );
}
