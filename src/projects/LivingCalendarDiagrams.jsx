import { useId } from "react";
import { Block } from "../components/case-study/CaseStudy.jsx";
import "./living-calendar-diagrams.css";

// Both layouts share the same content and connections; only their geometry changes.
const layouts = {
  sitemap: {
    wide: {
      viewBox: "0 0 560 204",
      nodes: {
        home: [257, 4, 56, 28],
        wheel: [134, 60, 92, 28],
        intro: [357, 60, 196, 46],
        terms: [151, 112, 58, 28],
        rituals: [20, 160, 60, 28],
        ecology: [92, 160, 128, 28],
        calendar: [232, 160, 76, 28],
        reflection: [320, 160, 142, 28],
      },
      edges: {
        "home-wheel": "M285 32 V46 H180 V60",
        "home-intro": "M285 46 H455 V60",
        "wheel-terms": "M180 88 V112",
      },
    },
    narrow: {
      viewBox: "0 0 360 264",
      nodes: {
        home: [150, 6, 60, 30],
        wheel: [37, 74, 106, 30],
        intro: [207, 64, 126, 64],
        terms: [58, 128, 64, 30],
        rituals: [16, 180, 68, 30],
        ecology: [96, 180, 148, 30],
        calendar: [16, 222, 86, 30],
        reflection: [114, 222, 162, 30],
      },
      edges: {
        "home-wheel": "M180 36 V52 H90 V74",
        "home-intro": "M180 52 H270 V64",
        "wheel-terms": "M90 104 V128",
      },
    },
  },
  userFlow: {
    wide: {
      viewBox: "0 0 560 204",
      nodes: {
        start: [20, 14, 50, 28],
        current: [94, 14, 176, 28],
        choice: [298, 4, 150, 48],
        list: [92, 104, 108, 28],
        details: [369, 104, 132, 28],
        another: [335, 164, 200, 28],
      },
      edges: {
        "start-current": "M70 28 H94",
        "current-choice": "M270 28 H298",
        "choice-list": "M373 52 V72 H146 V104",
        "choice-details": "M373 72 H435 V104",
        "details-list": "M369 118 H200",
        "details-another": "M435 132 V164",
      },
      labels: {
        "choice-list": [146, 92],
        "choice-details": [435, 92],
        "details-list": [284, 106],
      },
    },
    narrow: {
      viewBox: "0 0 360 362",
      nodes: {
        start: [154, 6, 52, 30],
        current: [81, 58, 198, 30],
        choice: [98, 110, 164, 54],
        list: [30, 214, 122, 30],
        details: [199, 214, 150, 30],
        another: [124, 320, 228, 30],
      },
      edges: {
        "start-current": "M180 36 V58",
        "current-choice": "M180 88 V110",
        "choice-list": "M98 137 H91 V214",
        "choice-details": "M262 137 H274 V214",
        "details-list": "M274 244 V262 Q274 274 262 274 H103 Q91 274 91 262 V244",
        "details-another": "M274 262 V292 H238 V320",
      },
      labels: {
        "choice-list": [91, 196],
        "choice-details": [274, 196],
        "details-list": [156, 296],
      },
    },
  },
};

function DiagramNode({ node, position, orientation }) {
  const [x, y, width, height] = position;
  const cx = x + width / 2;
  const cy = y + height / 2;
  const lines = orientation === "narrow" && node.narrowLines ? node.narrowLines : node.lines;
  const lineHeight = 18;
  return <g className={`lc-diagram-node lc-diagram-node--${node.kind || "page"}`}>
    {node.kind === "decision"
      ? <path d={`M${cx} ${y} L${x + width} ${cy} L${cx} ${y + height} L${x} ${cy} Z`} />
      : <rect x={x} y={y} width={width} height={height} rx={node.kind === "start" ? height / 2 : 5} />}
    <text x={cx} y={cy - (lines.length - 1) * lineHeight / 2} dominantBaseline="middle" textAnchor="middle">
      {lines.map((line, index) => <tspan key={index} x={cx} dy={index ? lineHeight : 0}>{line}</tspan>)}
    </text>
  </g>;
}

function DiagramCanvas({ block, orientation, id }) {
  const geometry = layouts[block.variant][orientation];
  const canvasId = `${id}-${orientation}`;
  const showArrows = block.variant === "userFlow";
  return <svg className={`lc-diagram-canvas lc-diagram-canvas--${orientation}`}
    viewBox={geometry.viewBox} role="img" aria-labelledby={`${canvasId}-title ${canvasId}-description`}>
    <title id={`${canvasId}-title`}>{block.label}</title>
    <desc id={`${canvasId}-description`}>{block.description}</desc>
    {showArrows && <defs>
      <marker id={`${canvasId}-arrow`} viewBox="0 0 10 10" refX="9" refY="5"
        markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M1 1 L9 5 L1 9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </marker>
    </defs>}
    <g className="lc-diagram-connections">
      {block.edges.map(edge => <path key={edge.key} d={geometry.edges[edge.key]}
        markerEnd={showArrows ? `url(#${canvasId}-arrow)` : undefined} />)}
    </g>
    {block.nodes.map(node => <DiagramNode key={node.key} node={node} position={geometry.nodes[node.key]} orientation={orientation} />)}
    {block.edges.filter(edge => edge.label).map(edge => {
      const [x, y] = geometry.labels[edge.key];
      return <text key={edge.key} className="lc-diagram-edge-label" x={x} y={y} textAnchor="middle">{edge.label}</text>;
    })}
  </svg>;
}

export function NativeDiagram({ block }) {
  const id = useId();
  return <div className={`lc-native-diagram lc-native-diagram--${block.variant}`} data-content-id={block.id}>
    <DiagramCanvas block={block} orientation="wide" id={id} />
    <DiagramCanvas block={block} orientation="narrow" id={id} />
  </div>;
}

export function NavigationDiagrams({ block }) {
  const [sitemap, flowTitle, flowDescription, flow] = block.items;
  return <div className="lc-navigation-diagrams" data-content-id={block.id}>
    <figure className="lc-diagram-panel" data-content-id={sitemap.id}>
      <figcaption className="lc-diagram-heading"><Block block={sitemap.caption} /></figcaption>
      <Block block={sitemap.media} />
    </figure>
    <figure className="lc-diagram-panel">
      <figcaption className="lc-diagram-heading">
        <Block block={flowTitle} />
        <Block block={flowDescription} />
      </figcaption>
      <Block block={flow} />
    </figure>
  </div>;
}
