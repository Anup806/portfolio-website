function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">About Me</h2>
          <p>
            Final-year Electronics &amp; Communication Engineering student specializing in applied machine learning and computer vision.
          </p>
          <p>
            Experience building real-time intelligent systems using probabilistic modeling and gesture-based interaction pipelines.
          </p>
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
