import { useState } from "react";

// Same skills list you already had — order matches your screenshot's grid.
const skills = [
  { key: "python", label: "Python" },
  { key: "numpy", label: "NumPy" },
  { key: "pandas", label: "pandas" },
  { key: "scikitlearn", label: "scikit-learn" },
  { key: "git", label: "Git" },
  { key: "c", label: "C" },
  { key: "cpp", label: "C++" },
  { key: "matlab", label: "MATLAB" },
  { key: "langchain", label: "LangChain" },
  { key: "docker", label: "Docker" },
  { key: "unity", label: "Unity" },
  { key: "huggingface", label: "Hugging Face" },
];

const ICON_SRC = {
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  scikitlearn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  matlab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  langchain: "https://cdn.simpleicons.org/langchain/FFFFFF",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  unity: "https://cdn.simpleicons.org/unity/FFFFFF",
  huggingface: "https://cdn.simpleicons.org/huggingface/FFD21E",
};

// Used only if a CDN icon ever fails to load (e.g. a slug changes upstream).
const FALLBACK_COLOR = {
  python: "#3776AB",
  numpy: "#4DABCF",
  pandas: "#ffffff11",
  scikitlearn: "#F7931E",
  git: "#F05032",
  c: "#283593",
  cpp: "#00599C",
  matlab: "#E16737",
  langchain: "#1C3C3C",
  docker: "#2496ED",
  unity: "#3a3a3a",
  huggingface: "#FFD21E",
};

const LABELS = Object.fromEntries(skills.map((s) => [s.key, s.label]));

function SkillLogo({ type }) {
  const [failed, setFailed] = useState(false);
  const src = ICON_SRC[type];
  const label = LABELS[type] || type;

  if (!src || failed) {
    // Clean text fallback so nothing ever renders as a broken image icon.
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          background: FALLBACK_COLOR[type] || "#444",
          color: "#fff",
          fontWeight: 700,
          fontSize: "0.85rem",
        }}
      >
        {label.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={label}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "contain" }}
    />
  );
}

export { skills, SkillLogo };

function Skills() {
  return (
    <div className="skills-inline" id="skills">
      <div className="skills-shell glass-card">
        <h2 className="section-title">Tech Stack</h2>
        <div className="skills-icon-grid">
          {skills.map((skill) => (
            <article className="skill-icon-card" key={skill.key} title={skill.label}>
              <span className={`skill-logo ${skill.key}`}>
                <SkillLogo type={skill.key} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
