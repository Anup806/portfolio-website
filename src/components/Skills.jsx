const skills = [
  { key: "python", label: "Python" },
  { key: "cpp", label: "C/C++" },
  { key: "ml", label: "ML/Data" },
  { key: "git", label: "Git" },
];

function SkillLogo({ type }) {
  if (type === "python") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2c4 0 4 1.7 4 4v2H9c-2.2 0-4 1.8-4 4v2H3c-2.3 0-1.7-12 9-12Z" fill="#3776AB" />
        <circle cx="13.7" cy="4.8" r="0.9" fill="#fff" />
        <path d="M12 22c-4 0-4-1.7-4-4v-2h7c2.2 0 4-1.8 4-4v-2h2c2.3 0 1.7 12-9 12Z" fill="#FFD43B" />
        <circle cx="10.3" cy="19.2" r="0.9" fill="#fff" />
      </svg>
    );
  }

  if (type === "cpp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2.5" y="3" width="19" height="18" rx="5" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M9.3 8.5c-2.2 0-3.6 1.4-3.6 3.5s1.4 3.5 3.6 3.5c1 0 1.8-.3 2.6-1" stroke="#60A5FA" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14.2 10.2v3.6m-1.8-1.8H16m2.2-1.8v3.6m-1.8-1.8H20" stroke="#60A5FA" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "ml") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7.8 7.8a3.3 3.3 0 1 1 6 1.6 3.3 3.3 0 1 1 2.8 5.5 3.6 3.6 0 1 1-6.2 2.4 3.4 3.4 0 1 1-2.6-5.4 3.1 3.1 0 0 1 0-4.1Z" fill="#FB7185" />
        <path d="M9.6 10.3c1.1.8 3.2.8 4.5 0M9.4 13.2c1 .7 4 .7 5 0" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.24.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.6.24 2.76.12 3.05.74.82 1.19 1.85 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.35.79 1.05.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Skills() {
  return (
    <div className="skills-inline" id="skills">
      <div className="skills-shell glass-card">
        <h2 className="section-title">Skills</h2>
        <div className="skills-icon-grid">
          {skills.map((skill) => (
            <article className="glass-card skill-icon-card" key={skill.key}>
              <span className={`skill-logo ${skill.key}`}>
                <SkillLogo type={skill.key} />
              </span>
              <h3>{skill.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
