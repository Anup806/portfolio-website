function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">About</h2>
          <p>
            Final-year Electronics &amp; Communication Engineering student specializing in applied machine learning and computer vision.
          </p>
          <p>
            Experience building real-time intelligent systems using probabilistic modeling and gesture-based interaction pipelines.
          </p>
        </div>

        <div className="stats-stack reveal">
          <article className="glass-card stat-card purple">
            <div className="stat-number">🚀 2</div>
            <p className="stat-label">Projects Built</p>
          </article>

          <article className="glass-card stat-card cyan">
            <div className="stat-number">📄 1</div>
            <p className="stat-label">IEEE Paper Published</p>
          </article>

          <article className="glass-card stat-card green">
            <div className="stat-number">🎯 0.84</div>
            <p className="stat-label">Best Model Accuracy</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
