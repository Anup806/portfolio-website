import useTypewriter from "../hooks/useTypewriter";

function Hero() {
  const { currentText, reducedMotion } = useTypewriter();

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="visually-hidden">
              AI/ML engineer, IEEE ICTP 2026 Best Paper Awardee, Electronics and Communication Engineering graduate, Deep Knowledge Tracing researcher
            </span>
            <span className="hero-eyebrow-visual" aria-hidden="true">
              {currentText}
              {!reducedMotion ? <span className="hero-caret">|</span> : null}
            </span>
          </p>
          <h1 id="hero-title">Building practical <span>AI systems.</span></h1>
          <p className="hero-summary">
            I’m Anup Rai, an Electronics and Communication Engineering graduate focused on applied machine learning, retrieval-augmented generation, and adaptive learning experiences.
          </p>
          <div className="hero-ctas">
            <a className="btn-primary" href="#projects">Explore projects <span aria-hidden="true">↗</span></a>
            <a className="btn-outline" href="#contact">Get in touch</a>
          </div>
          <div className="hero-meta" aria-label="Location and background">
            <span>Kathmandu, Nepal</span>
            <span>Electronics &amp; Communication Engineer</span>
          </div>
        </div>

        <aside className="hero-highlight" aria-label="Featured recognition">
          <div className="highlight-topline">
            <span>Featured recognition</span>
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
