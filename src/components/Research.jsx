function Research() {
  return (
    <section className="section" id="research">
      <div className="container reveal">
        <h2 className="section-title">RESEARCH</h2>

        <article className="glass-card research-card">
          <div className="research-head">
            <div>
              <h3>DKT-Based AR Framework for Predictive Learning Assessment</h3>
              <p className="research-meta">
                <em>IEEE ICTP 2026</em> | <strong>Best Paper Award — AI &amp; ML Track</strong>
              </p>
            </div>
            <span className="research-year">2025 – 2026</span>
          </div>

          <ul className="research-points">
            <li>Designed an adaptive Augmented Reality system using Deep Knowledge Tracing (DKT)</li>
            <li>Developed system architecture following Research-Through-Design (RTD) methodology</li>
            <li>Achieved Accuracy: 0.84 and PR-AUC: 0.82 in real-world classroom deployment</li>
          </ul>

          <div className="research-view">
            <span className="research-view-label"></span>
            <a
              className="btn-outline research-link"
              href="https://ieeexplore.ieee.org/document/11485369"
              target="_blank"
              rel="noreferrer"
              aria-label="View the research paper on IEEE Xplore"
            >
              IEEE Xplore
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Research;
