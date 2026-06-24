function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container reveal">
        <h2 className="section-title">EXPERIENCE</h2>

        <article className="glass-card research-card">
          <div className="research-head">
            <div>
              <h3>Research & Development Intern — AI/ML Research</h3>
              <p className="research-meta">
                Department of Electronics &amp; Communication Engineering, Pokhara University
              </p>
            </div>
            <span className="research-year">Dec 2025 – Feb 2026</span>
          </div>

          <p className="research-meta" style={{ marginTop: 8 }}></p>

          <ul className="research-points">
            <li>
              Completed a 3-month research internship supporting the Department Head's PhD research on technology-enhanced pedagogy, under direct faculty supervision
            </li>
            <li>Conducted literature analysis, model evaluation, and experimental validation for a Deep Knowledge Tracing-based learning assessment framework</li>
            <li>Co-authored the resulting study, published at IEEE ICTP 2026 and recognized with the Best Paper Award (AI & ML Track)</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Experience;
