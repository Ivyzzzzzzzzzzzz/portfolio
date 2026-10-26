import CaseStudy, { Block, RichText } from "./CaseStudy.jsx";
import OnThisPage from "./OnThisPage.jsx";
import "./editorial-case-study.css";

export const textOf = value => typeof value === "string" ? value : (value || []).map(run => run.text).join("");

export function Copy({ block, className = "" }) {
  return <p className={`ed-copy ${className}`} data-content-id={block.id}><RichText value={textOf(block.text)} /></p>;
}

export function Heading({ block, level = 3 }) {
  const Tag = `h${level}`;
  return <Tag className="ed-heading" id={block.id} data-content-id={block.id}><RichText value={textOf(block.text)} /></Tag>;
}

export function StepHeader({ block }) {
  const [number, title, ...copy] = block.items;
  return <header className="ed-step-heading" data-content-id={block.id}>
    <span className="ed-step-number" data-content-id={number.id}>{textOf(number.text).padStart(2, "0")}</span>
    <div>
      {title.text ? <Heading block={title} /> : <div className="ed-inline-heading"><Block block={title} /></div>}
      {copy.map(item => <Block block={item} key={item.id} />)}
    </div>
  </header>;
}

export function CopyList({ block }) {
  return <ul className="ed-copy-list" data-content-id={block.id}>
    {textOf(block.text).split(/\n+/).map(line => line.trim()).filter(Boolean).map((line, index) => <li key={index}><RichText value={line} /></li>)}
  </ul>;
}

export function NumberedPoints({ block }) {
  return <ul className="ed-numbered-points" data-content-id={block.id}>
    {block.items.map((item, index) => <li key={item.id}>
      <span className="ed-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <Copy block={item} />
    </li>)}
  </ul>;
}

export function Takeaway({ label = "Design response", emphasis = false, children }) {
  return <div className={`ed-takeaway${emphasis ? " ed-takeaway--emphasis" : ""}`}><p className="ed-eyebrow">{label}</p>{children}</div>;
}

export function FigureGallery({ block, className = "", label, scrollLabel }) {
  return <div className={`ed-figure-gallery ${className}`} data-content-id={block.id}
    tabIndex={scrollLabel ? 0 : undefined} role={scrollLabel ? "region" : undefined} aria-label={scrollLabel}>
    {block.items.map((item, index) => <figure key={item.id} data-content-id={item.media ? item.id : undefined}>
      <div className="ed-image-stage ed-media"><Block block={item.media || item} /></div>
      <figcaption>{item.caption ? <Copy block={item.caption} /> : label ? `${label} ${String(index + 1).padStart(2, "0")}` : null}</figcaption>
    </figure>)}
  </div>;
}

export default function EditorialCaseStudy({ content, layout, components }) {
  return <div className={`ed-case-study ed-case-study--${content.projectId}`}>
    <CaseStudy content={content} layout={layout} components={components}
      sidebar={<OnThisPage sections={content.sections} id={`${content.projectId}-chapter-links`} prefix="ed" />} />
  </div>;
}
