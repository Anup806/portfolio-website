import Skills from "./Skills";

function About() {
  const profileImageUrl = `${import.meta.env.BASE_URL}ProfilePic.png`;

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            I’m an Electronics and Communication Engineering graduate (B.E., Pokhara University, 2026) building practical AI systems: retrieval-augmented generation pipelines, LLM-powered tools, and computer vision projects.
          </p>
          <p>
            I co-authored research on Deep Knowledge Tracing for an adaptive augmented reality learning system for autistic children. We deployed it in real classrooms with Autism Care Nepal Society, reaching 0.84 accuracy and 0.82 PR-AUC, and the paper received the Best Paper Award in the AI &amp; ML Track at IEEE ICTP 2026.
          </p>
          <p>
            On the engineering side, I build RAG systems end to end: FastAPI backends, vector search with Qdrant and ChromaDB, source citations on grounded answers, and deployments that run on cloud APIs (Groq) or fully offline (Ollama). I try to measure what I build, for example 5.55 s average end-to-end latency and 87% keyword-match accuracy on a 15-query test set for my voice-enabled RAG variant, and I fix failure modes such as multi-turn hallucination at the root instead of patching around them.
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
