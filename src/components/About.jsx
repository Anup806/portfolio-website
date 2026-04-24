import Skills from "./Skills";

function About() {
  const profileImageUrl = `${import.meta.env.BASE_URL}ProfilePic.png`;

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text reveal">
          <h2 className="section-title">About Me</h2>
          <p>
            Machine learning enthusiast and ECE student building practical AI systems, including RAG-based applications, local LLM pipelines, and real-time computer vision solutions.
          </p>
          <p>
            Strong in Python, data analysis, and applied ML, with a focus on solving real-world problems through deployable AI systems.
          </p>
          <p>
            IEEE Best Paper Award recipient (AI & ML Track, 2026).
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
