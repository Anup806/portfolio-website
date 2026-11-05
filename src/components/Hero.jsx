function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">AI/ML engineer · LLM applications · Research</p>
          <h1 id="hero-title">Building practical <span>AI systems.</span></h1>
          <p className="hero-summary">
            I’m Anup Rai, an Electronics and Communication Engineering graduate focused on applied machine learning, retrieval-augmented generation, and adaptive learning experiences.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
            <a className="btn-outline" href="#contact">Get in touch</a>
          </div>
          <div className="hero-meta" aria-label="Location and background">
            <span>Bhaktapur, Nepal</span>
            <span>Electronics &amp; Communication Engineering</span>
          </div>
        </div>

        <aside className="hero-highlight" aria-label="Featured recognition">
          <div className="highlight-topline">
            <span>Featured recognition</span>
            <span className="award-mark" aria-hidden="true">✦</span>
          </div>
          <h2>Best Paper Award</h2>
          <p>AI &amp; ML Track · IEEE ICTP 2026</p>
          <div className="highlight-divider" />
          <a href="https://ieeexplore.ieee.org/document/11485369" target="_blank" rel="noreferrer">
            Read the published research <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
