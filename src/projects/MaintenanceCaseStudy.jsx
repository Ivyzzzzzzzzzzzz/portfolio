import maintenanceHtml from "../content/maintenance.html?raw";
import maintenanceCss from "../content/maintenance.css?raw";

export default function MaintenanceCaseStudy() {
  return (
    <main className="case-study-page">
      <nav className="case-study-toolbar" aria-label="Case study navigation">
        <a className="case-study-back-link" href="#/">
          Back to projects
        </a>
      </nav>
      <style>{maintenanceCss}</style>
      <div className="case-study-content" dangerouslySetInnerHTML={{ __html: maintenanceHtml }} />
    </main>
  );
}
