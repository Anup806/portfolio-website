const skillGroups = [
  {
    title: "ML & Computer Vision",
    skills: ["Python", "NumPy", "Pandas", "scikit-learn", "Hugging Face", "OpenCV", "MediaPipe", "YOLOv8"],
  },
  {
    title: "LLM & RAG",
    skills: ["LLM integration", "RAG", "LlamaIndex", "ChromaDB", "Qdrant", "Groq API", "Ollama", "Prompt engineering"],
  },
  {
    title: "Backend & Web",
    skills: ["FastAPI", "REST APIs", "Redis", "SQLAlchemy", "Node.js", "TypeScript", "React"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Jupyter", "Google Colab"],
  },
];

function Skills() {
  return (
    <div className="skills-inline" id="skills">
      <div className="skills-shell glass-card">
        <h2 className="section-title">Skills</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li className="skill-chip" key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
