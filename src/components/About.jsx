import Skills from "./Skills";

function About() {
  const profileImageUrl = `${import.meta.env.BASE_URL}ProfilePic.png`;

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">About Me</h2>
          <p>
            Electronics and Communication Engineering graduate transitioning into AI/ML through self-directed learning and applied projects.
          </p>
          <p>
            Recipient of the IEEE Best Paper Award (ICTP 2026, AI & ML Track) for research in Deep Knowledge Tracing.
          </p>
          <p>
            Proficient in Python, NumPy, Pandas, and Scikit-learn, with hands-on experience in LLM integration and Retrieval-Augmented Generation (RAG) pipelines.
          </p>

          <Skills />
        </div>

        <div className="about-photo-frame reveal">
          <img
            className="about-photo"
            src={profileImageUrl}
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
