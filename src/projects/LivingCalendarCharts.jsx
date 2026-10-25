import { useState } from "react";
import { Block, RichText } from "../components/case-study/CaseStudy.jsx";

export const percent = value => `${Number(value.toFixed(2))}%`;

function ConnectionDonut({ chart }) {
  const [selected, setSelected] = useState(chart.data[0].label);
  const active = chart.data.find(item => item.label === selected);
  let offset = 0;

  return <div className="lc-connection-donut">
    <div className="lc-donut-visual" aria-hidden="true">
      <svg viewBox="0 0 200 200">
        {chart.data.map(item => {
          const start = offset;
          offset += item.value;
          if (item.value === 0) return null;
          return <circle key={item.label} cx="100" cy="100" r="80" fill="none"
            stroke={item.color} strokeWidth="22" pathLength="100"
            strokeDasharray={`${item.value} ${100 - item.value}`} strokeDashoffset={-start}
            transform="rotate(-90 100 100)" opacity={item.label === selected ? 1 : 0.45} />;
        })}
      </svg>
      <div className="lc-donut-value">
        <strong>{percent(active.value)}</strong>
        <span>{active.label}</span>
      </div>
    </div>
    <ul className="lc-chart-legend" aria-label="Select a response to highlight">
      {chart.data.map(item => <li key={item.label}>
        <button type="button" onClick={() => setSelected(item.label)} aria-pressed={item.label === selected}>
          <span className="lc-chart-swatch" style={{ background: item.color }} aria-hidden="true" />
          <span>{item.label}</span>
          <strong>{percent(item.value)}</strong>
        </button>
      </li>)}
    </ul>
  </div>;
}

function ResponseBars({ chart }) {
  const note = chart.selectionMode === "multiple"
    ? (chart.sampleSize == null ? null : `${chart.sampleSize} ${chart.sampleSize === 1 ? "response" : "responses"}`)
    : chart.note || `${chart.highlight.join(" + ")} make up the highlighted total.`;
  return <div className="lc-response-bars">
    <p className="lc-chart-scale"><span>{chart.scaleLabel || "Share of responses"}</span><span>0–100%</span></p>
    <dl>
      {chart.data.map(item => <div className="lc-response-row" key={item.label}
        data-highlighted={chart.highlight.includes(item.label) || undefined}>
        <dt>{item.label}</dt>
        <dd>
          <span className="lc-response-value">
            {item.count !== undefined && <span className="lc-response-count">{item.count} {item.count === 1 ? "person" : "people"}</span>}
            {percent(item.value)}
          </span>
          <span className="lc-response-track" aria-hidden="true">
            <span style={{ width: `${item.value}%` }} />
          </span>
        </dd>
      </div>)}
    </dl>
    {note && <p className="lc-chart-note">
      {chart.selectionMode !== "multiple" && <span className="lc-chart-swatch" aria-hidden="true" />}
      <span>{note}</span>
    </p>}
  </div>;
}

export function SurveyChart({ block }) {
  return <figure className="lc-survey-chart" data-content-id={block.id} aria-label={block.label}>
    {block.variant === "donut" ? <ConnectionDonut chart={block} /> : <ResponseBars chart={block} />}
  </figure>;
}

export function ExistingConnections({ block }) {
  return <div className="lc-connection-evidence" data-content-id={block.id}>
    {block.items.map(item => {
      const [heading, summary, chart] = item.items;
      const total = chart.data.filter(row => chart.highlight.includes(row.label))
        .reduce((sum, row) => sum + row.value, 0);
      return <article className="lc-connection-panel" key={item.id} data-content-id={item.id}
        aria-labelledby={heading.id}>
        <h3 id={heading.id} data-content-id={heading.id}><RichText value={heading.text} /></h3>
        <p className="lc-connection-stat" data-content-id={summary.id}>
          <strong>{percent(total)}</strong>
          <span><RichText value={summary.text} /></span>
        </p>
        <Block block={chart} />
      </article>;
    })}
  </div>;
}
