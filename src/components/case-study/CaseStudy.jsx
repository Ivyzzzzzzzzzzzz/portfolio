import { createContext, useContext } from "react";
import { assetPath } from "../../lib/assets.js";
import CaseStudyLayout from "./CaseStudyLayout.jsx";
import "./case-study.css";

const LayoutContext = createContext({});
const BlockComponentsContext = createContext({});

function preventWidow(text) {
  const words = text.trim().split(/\s+/u);
  if (words.length < 3) return text;
  const finalPair = words.slice(-2).join(" ");
  if (finalPair.length > 18 && !words.at(-2).includes("-")) return text;
  return text.replace(/[ \t]+(?=\S+[ \t]*$)/u, "\u00a0");
}

function widowSafeRuns(runs) {
  const fullText = runs.map((run) => run.text).join("");
  const words = fullText.trim().split(/\s+/u);
  if (words.length < 3) return runs;
  const finalPair = words.slice(-2).join(" ");
  if (finalPair.length > 18 && !words.at(-2).includes("-")) return runs;
  const finalGap = fullText.match(/[ \t]+(?=\S+[ \t]*$)/u);
  if (!finalGap) return runs;

  const gapStart = finalGap.index;
  const gapEnd = gapStart + finalGap[0].length;
  let cursor = 0;
  return runs.map((run) => {
    const runStart = cursor;
    const runEnd = runStart + run.text.length;
    cursor = runEnd;
    if (gapStart < runStart || gapEnd > runEnd) return run;

    const localStart = gapStart - runStart;
    const localEnd = gapEnd - runStart;
    return {
      ...run,
      text: `${run.text.slice(0, localStart)}\u00a0${run.text.slice(localEnd)}`,
    };
  });
}

/** Plain strings or structured runs: { text, strong?, emphasis?, tone? }. */
export function RichText({ value }) {
  if (typeof value === "string") return preventWidow(value);
  return widowSafeRuns(value || []).map((run, index) => {
    let text = run.text;
    if (run.strong) text = <strong>{text}</strong>;
    if (run.emphasis) text = <em>{text}</em>;
    return <span className={run.tone ? `study-tone-${run.tone}` : undefined} key={index}>{text}</span>;
  });
}

function presentation(rule) {
  return {
    "--study-columns": rule.columns,
    "--study-ratio": rule.ratio,
    "--study-measure": rule.measure ? `${rule.measure / 16}rem` : undefined,
    "--study-media-width": rule.maxWidth ? `${rule.maxWidth / 16}rem` : undefined,
    "--study-item-color": rule.color,
    "--study-surface": rule.surface,
    "--study-border": rule.border,
  };
}

function attributes(block, rule) {
  return {
    "data-content-id": block.id,
    className: [
      "study-block", `study-${block.type}`,
      rule.space && `study-space-${rule.space}`,
      rule.typography && `study-type-${rule.typography}`,
      rule.serif && "study-serif", rule.surface && "study-surface",
      rule.border && "study-bordered", rule.padded && "study-padded",
      rule.inline && "study-inline", rule.stacked && "study-stacked",
      rule.mediaFirst && "study-media-first",
      rule.mediaSide === "left" && "study-media-left",
      rule.captionFirst && "study-caption-first",
    ].filter(Boolean).join(" "),
    style: presentation(rule),
  };
}

/** Images retain their native aspect ratio, including before lazy loading. */
export function Media({ media, rule = {} }) {
  if (media.type === "video") {
    return (
      <video className="study-video-player" width={media.width || 844} height={media.height || 1674}
        controls autoPlay muted loop playsInline preload="metadata"
        poster={media.poster ? assetPath(media.poster) : undefined}
        aria-label={media.alt}>
        <source src={assetPath(media.src)} type="video/mp4" />
        <a href={assetPath(media.src)}>Open prototype video</a>
      </video>
    );
  }
  const image = <img src={assetPath(media.src)} alt={media.alt || ""}
    width={media.width} height={media.height} loading="lazy" decoding="async"
    style={presentation(rule)} />;
  if (media.decorative) return image;
  return <span className="study-image-frame"
    style={media.width && media.height ? { aspectRatio: `${media.width} / ${media.height}` } : undefined}>{image}</span>;
}

/** Copy comes first in the DOM; desktop placement is a presentation choice. */
export function ImageExplanation({ block, rule }) {
  return <div {...attributes(block, rule)} data-image-explanation="true">
    <div className="study-pair-copy"><Block block={block.copy} /></div>
    <div className="study-pair-media"><Block block={block.media} /></div>
  </div>;
}

export function Gallery({ block, rule }) {
  return <div {...attributes(block, rule)}>
    {block.items.map((item, index) => <Block block={item} key={item.id || index} />)}
  </div>;
}

export function Figure({ block, rule }) {
  return <figure {...attributes(block, rule)}>
    <figcaption><Block block={block.caption} /></figcaption>
    <div className="study-figure-media"><Block block={block.media} /></div>
  </figure>;
}

export function Block({ block }) {
  const layout = useContext(LayoutContext);
  const components = useContext(BlockComponentsContext);
  if (!block) return null;
  const CustomBlock = components[block.id];
  if (CustomBlock) return <CustomBlock block={block} />;
  const rule = layout[block.id] || {};
  const props = attributes(block, rule);
  switch (block.type) {
    case "text": case "label":
      return <p {...props}><RichText value={block.text} /></p>;
    case "heading":
      return <h3 {...props}><RichText value={block.text} /></h3>;
    case "link":
      return <a {...props} href={assetPath(block.href)} target="_blank" rel="noopener noreferrer"><RichText value={block.text} /></a>;
    case "image": case "video":
      return <figure {...props}><Media media={block} rule={rule} /></figure>;
    case "swatch":
      return <span className={`study-swatch study-swatch-${block.shape}`} style={{ backgroundColor: block.color }} aria-hidden="true" />;
    case "iconLabel":
      return <div {...props}><Block block={block.icon} /><Block block={block.copy} /></div>;
    case "pair":
      return <ImageExplanation block={block} rule={rule} />;
    case "figure":
      return <Figure block={block} rule={rule} />;
    case "columns":
      return <Gallery block={block} rule={rule} />;
    case "card":
      return <article {...props}>{block.items.map((item, index) => <Block block={item} key={item.id || index} />)}</article>;
    case "group":
      return <div {...props}>{block.items.map((item, index) => <Block block={item} key={item.id || index} />)}</div>;
    default:
      throw new Error(`Unknown case-study block type: ${block.type}`);
  }
}

export function CaseStudySection({ section, children }) {
  const layout = useContext(LayoutContext);
  const rule = layout[section.id] || {};
  return <section className="study-section" id={section.id} aria-labelledby={`${section.id}-title`}>
    <h2 id={`${section.id}-title`} tabIndex={-1} style={{ color: rule.color,
      fontSize: rule.headingSize ? `${rule.headingSize / 16}rem` : undefined,
      fontWeight: rule.headingWeight,
      fontFamily: rule.headingFont === "body" ? "var(--study-body-font)" : undefined,
    }}><RichText value={section.title} /></h2>
    {section.takeaway && <p className="study-section-takeaway"><RichText value={section.takeaway} /></p>}
    <div className="study-section-body">
      {children || section.blocks.map((block, index) => <Block block={block} key={block.id || index} />)}
    </div>
  </section>;
}

function CaseStudyHero({ hero }) {
  return <header className="study-hero">
    <div className="study-project-meta">
      <div className="study-project-title">
        {hero.logo && <Media media={hero.logo} rule={{ maxWidth: 28 }} />}
        <h1><RichText value={hero.title} /></h1>
      </div>
      <p className="study-period"><RichText value={hero.period} /></p>
      <ul className="study-disciplines">{hero.disciplines.map((tag, index) => <li key={index}><RichText value={tag} /></li>)}</ul>
      {hero.link && <a className="study-project-link" href={assetPath(hero.link.href)} target="_blank" rel="noopener noreferrer"><RichText value={hero.link.text} /></a>}
    </div>
    <div className="study-hero-copy">
      <p className="study-subtitle"><RichText value={hero.subtitle} /></p>
      <dl className="study-hero-brief">
        <div className="study-hero-problem">
          <dt>The problem</dt>
          <dd><RichText value={hero.problem} /></dd>
        </div>
        <div className="study-hero-response">
          <dt>My response</dt>
          <dd><RichText value={hero.description} /></dd>
        </div>
      </dl>
    </div>
  </header>;
}

/** A figure-local canvas for artwork layers. Website text never uses coordinates. */
export function FigureComposition({ block, width, height, layers, outline = false }) {
  return <figure className="study-composition" data-content-id={block.id}
    style={{ aspectRatio: `${width} / ${height}`, maxWidth: `${width / 16}rem` }}>
    {outline && <span className="study-composition-outline" aria-hidden="true" />}
    {block.items.map((media, index) => {
      const layer = layers[index];
      return <div className={`study-composition-layer${media.decorative ? " study-decoration" : ""}`} key={media.id}
        style={{ left: `${layer.x / width * 100}%`, top: `${layer.y / height * 100}%`,
          width: `${layer.width / width * 100}%`, height: `${layer.height / height * 100}%` }}>
        <Media media={media} />
      </div>;
    })}
  </figure>;
}

export default function CaseStudy({ content, layout, renderSection, components = {}, sidebar }) {
  const pageContent = <>
    <CaseStudyHero hero={content.hero} />
    {content.sections.map(section => renderSection?.(section) || <CaseStudySection key={section.id} section={section} />)}
  </>;
  return <LayoutContext.Provider value={layout}>
    <BlockComponentsContext.Provider value={components}>
    <CaseStudyLayout projectId={content.projectId}>
      <article className={`study study--${content.projectId}${sidebar ? " study-has-sidebar" : ""}`}>
        {sidebar ? <>
          <aside className="study-sidebar">{sidebar}</aside>
          <div className="study-main">{pageContent}</div>
        </> : pageContent}
      </article>
    </CaseStudyLayout>
    </BlockComponentsContext.Provider>
  </LayoutContext.Provider>;
}
