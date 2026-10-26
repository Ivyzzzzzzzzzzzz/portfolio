import { useEffect, useRef, useState } from "react";
import { Block } from "./CaseStudy.jsx";
import { assetPath } from "../../lib/assets.js";
import "./research-artifact-gallery.css";

export default function ResearchArtifactGallery({ block }) {
  const artifacts = block.items.map(item => ({
    id: item.id,
    media: item.media || item,
    caption: item.copy || item.caption,
  }));
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dialogRef = useRef(null);
  const viewportRef = useRef(null);
  const isOpen = selectedIndex !== null;
  const selected = isOpen ? artifacts[selectedIndex].media : null;
  const multiple = artifacts.length > 1;
  const dialogId = `${block.id}-viewer`;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, left: 0 });
  }, [selectedIndex]);

  const selectArtifact = index => {
    setSelectedIndex(index);
  };
  const switchArtifact = direction => {
    selectArtifact((selectedIndex + direction + artifacts.length) % artifacts.length);
  };
  const handleArrowKeys = event => {
    // The scrollable document keeps its native arrow-key scrolling.
    if (!multiple || event.target === viewportRef.current || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      switchArtifact(event.key === "ArrowLeft" ? -1 : 1);
    }
  };
  const closeOnBackdrop = event => {
    if (event.target !== event.currentTarget) return;
    const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      event.currentTarget.close();
    }
  };

  return <div className={`study-artifacts${multiple ? " study-artifacts--multiple" : " study-artifacts--single"}`}
    data-content-id={block.id} style={{ "--artifact-columns": Math.min(3, artifacts.length) }}>
    {block.title && <h3 className="study-artifacts-title">{block.title}</h3>}
    {multiple && <p className="study-artifact-swipe-hint">Swipe to explore the research artifacts <span aria-hidden="true">→</span></p>}
    <div className="study-artifact-grid" role="region" aria-label={block.title || "Research artifact previews"}>
      {artifacts.map(({ id, media, caption }, index) => <figure className="study-artifact-card" key={id}
        data-content-id={id !== media.id ? id : undefined}>
        <button type="button" className="study-artifact-preview" aria-label={`Enlarge ${media.label}`}
          aria-haspopup="dialog" aria-controls={dialogId} onClick={() => selectArtifact(index)}>
          <span className="study-artifact-thumbnail" data-content-id={media.id}>
            <img src={assetPath(media.src)} alt={media.alt} width={media.width} height={media.height}
              loading="lazy" decoding="async" />
          </span>
        </button>
        <figcaption>{caption ? <Block block={caption} /> : media.label}</figcaption>
      </figure>)}
    </div>
    <dialog className="study-artifact-dialog" id={dialogId} ref={dialogRef}
      aria-labelledby={`${dialogId}-title`} onClick={closeOnBackdrop} onKeyDown={handleArrowKeys}
      onClose={event => { if (!event.currentTarget.open) setSelectedIndex(null); }}>
      {selected && <>
        <header className="study-artifact-toolbar">
          <div className="study-artifact-title-group" aria-live="polite" aria-atomic="true">
            {multiple && <p>{selectedIndex + 1} / {artifacts.length}</p>}
            <h3 id={`${dialogId}-title`}>{selected.label}</h3>
          </div>
          <button type="button" className="study-artifact-close" aria-label="Close artifact preview"
            autoFocus onClick={() => dialogRef.current.close()}><span aria-hidden="true">×</span></button>
        </header>
        <div className={`study-artifact-viewer${multiple ? " study-artifact-viewer--multiple" : ""}`}>
          {multiple && <button type="button" className="study-artifact-step study-artifact-step--previous"
            aria-controls={`${dialogId}-canvas`}
            aria-label={`Previous artifact: ${artifacts[(selectedIndex - 1 + artifacts.length) % artifacts.length].media.label}`}
            onClick={() => switchArtifact(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m15 6-6 6 6 6" /></svg>
          </button>}
          <div ref={viewportRef} id={`${dialogId}-canvas`}
            className="study-artifact-canvas"
            role="region" tabIndex={0} aria-label={`${selected.label} preview`}>
            <img src={assetPath(selected.src)} alt={selected.alt} width={selected.width} height={selected.height} />
          </div>
          {multiple && <button type="button" className="study-artifact-step study-artifact-step--next"
            aria-controls={`${dialogId}-canvas`}
            aria-label={`Next artifact: ${artifacts[(selectedIndex + 1) % artifacts.length].media.label}`}
            onClick={() => switchArtifact(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6" /></svg>
          </button>}
        </div>
      </>}
    </dialog>
  </div>;
}
