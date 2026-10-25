function MarketDonuts({ chart }) {
  return <div className="quiq-market-donuts">
    {chart.data.map(metric => <figure className="quiq-market-metric" key={metric.label}>
      <div className="quiq-market-ring">
        <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
          <circle className="quiq-market-ring-track" cx="60" cy="60" r="49" />
          <circle className="quiq-market-ring-fill" cx="60" cy="60" r="49"
            pathLength="100" strokeDasharray={`${metric.value} ${100 - metric.value}`}
            transform="rotate(-90 60 60)" />
        </svg>
        <strong className="quiq-market-value">
          {metric.qualifier === "over" && <span className="quiq-market-qualifier">&gt;</span>}
          {metric.value}<span className="quiq-market-percent">%</span>
        </strong>
      </div>
      <figcaption>
        <span className="quiq-market-label">{metric.label}</span>
        {metric.context && <span className="quiq-market-context">{metric.context}</span>}
      </figcaption>
    </figure>)}
  </div>;
}

function AnnualGrowthChart({ value }) {
  const baseline = 100;
  const afterOneYear = baseline + value;
  const baselineWidth = `${baseline / afterOneYear * 100}%`;

  return <div className="quiq-growth-chart">
    <p className="quiq-market-context">Growth index · starting value = 100</p>
    <dl className="quiq-growth-comparison">
      <div>
        <dt>Start</dt>
        <dd>
          <span className="quiq-growth-track" aria-hidden="true">
            <span className="quiq-growth-baseline" style={{ width: baselineWidth }} />
          </span>
          <strong>{baseline}</strong>
        </dd>
      </div>
      <div>
        <dt>After 1 year</dt>
        <dd>
          <span className="quiq-growth-track" aria-hidden="true">
            <span className="quiq-growth-baseline" style={{ width: baselineWidth }} />
            <span className="quiq-growth-increase" style={{ width: `${value / afterOneYear * 100}%` }} />
          </span>
          <strong>{afterOneYear}</strong>
        </dd>
      </div>
    </dl>
  </div>;
}

function OpportunityMetrics({ chart }) {
  return <div className="quiq-opportunity-metrics">
    {chart.data.map(metric => <figure className="quiq-opportunity-metric" key={metric.label}>
      <figcaption>
        <span className="quiq-opportunity-value">
          <strong className="quiq-market-value">{metric.value}<span className="quiq-market-percent">%</span></strong>
          {metric.measurement === "growth" && <span className="quiq-market-context">per year</span>}
        </span>
        <span className="quiq-opportunity-copy">
          <span className="quiq-market-label">{metric.label}</span>
          <span className="quiq-market-context">{metric.context}</span>
        </span>
      </figcaption>
      {metric.measurement === "growth" && <AnnualGrowthChart value={metric.value} />}
      {metric.measurement === "share" && <>
        <div className="quiq-opportunity-track" aria-hidden="true">
          <span className="quiq-opportunity-fill" style={{ width: `${metric.value}%` }} />
        </div>
        <div className="quiq-opportunity-scale" aria-hidden="true"><span>0</span><span>50</span><span>100% of OTC brands</span></div>
      </>}
    </figure>)}
  </div>;
}

export default function QuiqMarketChart({ block }) {
  return <div className="quiq-market-chart" data-content-id={block.id}>
    {block.variant === "donuts" ? <MarketDonuts chart={block} /> : <OpportunityMetrics chart={block} />}
  </div>;
}
