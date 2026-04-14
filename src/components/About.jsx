import Skills from "./Skills";

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">About Me</h2>
          <p>
            Final-year Electronics &amp; Communication Engineering student specializing in applied machine learning and data analytics.
          </p>
          <p>
            Experienced in building real-time intelligent systems using probabilistic modeling, gesture-based interaction, and
            LLM-powered applications.
          </p>
          <p>
            IEEE Best Paper Award recipient (AI &amp; ML Track, 2026)
          </p>

          <Skills />
        </div>

        <div className="about-photo-frame reveal">
          <img
            className="about-photo"
            src="/ProfilePic.png"
            alt="Anup Rai profile photo"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
