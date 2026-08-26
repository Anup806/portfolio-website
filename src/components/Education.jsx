function Education() {
  return (
    <section className="section" id="education">
      <div className="container reveal">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          <article className="glass-card timeline-item">
            <span className="timeline-dot" />
            <h3>B.E. Electronics &amp; Communication Engineering</h3>
            <p>Nepal Engineering College</p>
            <p>Pokhara University</p>
            <span className="badge year-badge">Feb 2022 – Mar 2026</span>
          </article>

          <article className="glass-card timeline-item">
            <span className="timeline-dot" />
            <h3>Science</h3>
            <p>Pokhara Aadarsha Secondary School</p>
            <span className="badge year-badge">May 2019 - Nov 2021</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;
