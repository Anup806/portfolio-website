import Skills from "./Skills";

function About() {
  const profileImageUrl = `${import.meta.env.BASE_URL}ProfilePic.png`;

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            I’m an Electronics and Communication Engineering graduate focused on building practical AI/ML systems through research and hands-on projects.
          </p>
          <p>
            My research in Deep Knowledge Tracing received the IEEE ICTP 2026 Best Paper Award in the AI &amp; ML Track.
          </p>
          <p>
            I work with Python, data science tools, LLM integrations, and Retrieval-Augmented Generation (RAG) pipelines.
          </p>

          <Skills />
        </div>

        <div className="about-photo-frame">
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
