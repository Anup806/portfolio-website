const githubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.24.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.6.24 2.76.12 3.05.74.82 1.19 1.85 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.35.79 1.05.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const youtubeIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.52 3.58 12 3.58 12 3.58s-7.52 0-9.39.5A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.87.5 9.39.5 9.39.5s7.52 0 9.39-.5a3 3 0 0 0 2.11-2.12A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.6 15.56V8.44L15.85 12 9.6 15.56Z" />
  </svg>
);

const demoIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const projects = [
  {
    title: "Document Query Engine",
    tech: ["Python", "FastAPI", "LlamaIndex", "Docker"],
    points: [
      "RAG-based document Q&A with voice chat support",
      "Groq LLM backend with Google GenAI embeddings",
      "Fully containerized with Docker, CLI + Web UI",
    ],
    links: [
      {
        className: "github-btn",
        href: "https://github.com/Anup806/Document-Query-Engine",
        label: "Open Document Query Engine repository",
        title: "GitHub repository",
        icon: githubIcon,
      },
    ],
  },
  {
    title: "Local Letter RAG",
    accent: "cyan",
    tech: ["Python", "FastAPI", "Ollama", "ChromaDB"],
    points: [
      "Fully offline PDF assistant - no cloud API needed",
      "Local LLM via Ollama + ChromaDB vector search",
      "Configurable chunking and semantic retrieval pipeline",
    ],
    links: [
      {
        className: "youtube-btn",
        href: "https://youtu.be/95QFCS6z438",
        label: "Watch Local Letter RAG demo video",
        title: "Watch demo video",
        icon: youtubeIcon,
      },
      {
        className: "github-btn",
        href: "https://github.com/Anup806/local-letter-RAG",
        label: "Open Local Letter RAG repository",
        title: "GitHub repository",
        icon: githubIcon,
      },
    ],
  },
  {
    title: "Padel Game Analytics",
    tech: ["Python", "YOLOv8", "OpenCV", "Pandas"],
    points: [
      "Shot classification system (forehand, backhand, serve, smash)",
      "YOLOv8-based player, ball & racket detection pipeline",
      "Exports annotated video + timestamped JSON/CSV output",
    ],
    links: [
      {
        className: "github-btn",
        href: "https://github.com/Anup806/padel-analytics",
        label: "Open Padel Game Analytics repository",
        title: "GitHub repository",
        icon: githubIcon,
      },
    ],
  },

    {
    title: "Outreach Assistance",
    tech: ["Python", "Streamlit", "Gemini API", "Gmail SMTP", "SQLite"],
    points: [
      "Parses PDF resumes and generates personalized cold emails using Gemini API",
      "Automates email scheduling via Gmail SMTP with delay control and duplicate prevention",
      "Runs a server-side daemon to send queued emails independent of browser session",
    ],
    links: [
      {
        className: "demo-btn",
        href: "https://ai-outreach-assistant--raianup806.replit.app/",
        label: "Open AI-Powered Job Outreach Automation Tool live demo",
        title: "Live demo",
        icon: demoIcon,
      },
      {
        className: "github-btn",
        href: "https://github.com/Anup806/AI-Outreach-Assistant",
        label: "Open AI-Outreach-Assistant repository",
        title: "GitHub repository",
        icon: githubIcon,
      },
    ],
  },


  {
    title: "Adaptive Mixed-Reality Math Tutor",
    badge: "Final Year Project",
    tech: ["Python", "OpenCV", "MediaPipe", "scikit-learn"],
    points: [
      "Real-time gesture-controlled tutoring system",
      "Bayesian Knowledge Tracing (BKT) for adaptive mastery modeling",
      "K-Means clustering for student personalization",
    ],
    links: [
      {
        className: "github-btn",
        href: "https://github.com/Anup806/Inclusive-Mixed-Reality-Math-Experience-design-Using-ML-Based-Models",
        label: "Open Adaptive Mixed-Reality Math Tutor repository",
        title: "GitHub repository",
        icon: githubIcon,
      },
    ],
  },
  {
    title: "Gesture-Controlled 3D Interaction Engine",
    accent: "cyan",
    tech: ["Unity", "C#", "MediaPipe"],
    points: [
      "Low-latency hand-tracking interface",
      "Modular gesture-state machine architecture",
    ],
    links: [
      {
        className: "github-btn",
        href: "https://github.com/Anup806/Mediapipe-Cube-Moving-using-Hand-Gesture",
        label: "Open Gesture-Controlled 3D Interaction Engine repository",
        title: "GitHub repository",
        icon: githubIcon,
      },
    ],
  },

];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container reveal">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`glass-card project-card ${project.accent || ""} has-corner-actions`}
              key={project.title}
            >
              {project.badge ? <span className="badge final-badge">{project.badge}</span> : null}
              <h3 className="project-title">{project.title}</h3>

              <div className="stack-row">
                {project.tech.map((item) => (
                  <span className="badge" key={`${project.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>

              <ul className="project-list">
                {project.points.map((point) => (
                  <li key={`${project.title}-${point}`}>{point}</li>
                ))}
              </ul>

              <div className="project-actions corner-actions">
                {project.links.map((link) => (
                  <a
                    className={link.className}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.title}
                    key={link.href}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
