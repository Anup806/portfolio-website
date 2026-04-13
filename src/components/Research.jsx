function Research() {
  return (
    <section className="section" id="research">
      <div className="container reveal">
        <h2 className="section-title">Research</h2>

        <article className="glass-card research-card">
          <div className="research-head">
            <h3>DKT-Based AR Framework for Predictive Learning Assessment</h3>
            <span className="badge award-badge">🏆 Best Paper Award — AI &amp; ML Track</span>
          </div>

          <p className="venue">IEEE ICTP 2026 (DOI Pending)</p>

          <div className="metric-row">
            <div className="metric-card">
              <span className="metric-value green">0.84</span>
              <span className="metric-label">Accuracy</span>
            </div>
            <div className="metric-card">
              <span className="metric-value cyan">0.82</span>
              <span className="metric-label">PR-AUC</span>
            </div>
          </div>

          <ul className="project-list">
            <li>Adaptive AR system using Deep Knowledge Tracing (DKT)</li>
            <li>Research-Through-Design (RTD) methodology</li>
            <li>Field deployed with real students</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Research;
