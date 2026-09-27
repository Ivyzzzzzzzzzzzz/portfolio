import { useEffect, useRef, useState } from "react";
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

export function Takeaway({ label = "Design response", children }) {
  return <div className="ed-takeaway"><p className="ed-eyebrow">{label}</p>{children}</div>;
}

export function MediaHelp() {
  return <p className="ed-media-help">Select an image to explore the details.</p>;
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

function ImageDetail({ image, onClose }) {
  const dialogRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      image.trigger?.focus({ preventScroll: true });
    };
  }, [image]);
  return <dialog ref={dialogRef} className="ed-image-detail" aria-labelledby="ed-image-detail-title"
    onClose={event => { if (!event.currentTarget.open) onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="ed-image-detail-toolbar">
      <h2 id="ed-image-detail-title">Image detail</h2>
      <div>
        <button type="button" onClick={() => setZoomed(value => !value)} aria-pressed={zoomed}>{zoomed ? "Fit image" : "Zoom in"}</button>
        <button type="button" onClick={onClose} autoFocus>Close <span aria-hidden="true">×</span></button>
      </div>
    </div>
    <div className={`ed-image-detail-canvas${zoomed ? " is-zoomed" : ""}`} tabIndex={0} role="region" aria-label="Image preview; scroll to explore when zoomed">
      <img src={image.src} alt={image.alt} />
    </div>
  </dialog>;
}

export default function EditorialCaseStudy({ content, layout, components }) {
  const [selectedImage, setSelectedImage] = useState(null);
  function openImage(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest(".study-image-link");
    if (!link) return;
    event.preventDefault();
    setSelectedImage({ src: link.href, alt: link.querySelector("img")?.alt || "Project image", trigger: link });
  }
  return <div className={`ed-case-study ed-case-study--${content.projectId}`}>
    <div onClick={openImage}>
      <CaseStudy content={content} layout={layout} components={components}
        sidebar={<OnThisPage sections={content.sections} id={`${content.projectId}-chapter-links`} prefix="ed" />} />
    </div>
    {selectedImage && <ImageDetail image={selectedImage} onClose={() => setSelectedImage(null)} />}
  </div>;
}
