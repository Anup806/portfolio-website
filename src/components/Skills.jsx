import { useEffect, useRef } from "react";

const categories = [
  {
    name: "Languages",
    tone: "purple",
    skills: [
      { label: "Python", value: 75 },
      { label: "C/C++", value: 65 },
    ],
  },
  {
    name: "ML & Data",
    tone: "cyan",
    skills: [
      { label: "Supervised Learning", value: 65 },
      { label: "Unsupervised / K-Means", value: 60 },
      { label: "Scikit-learn", value: 65 },
      { label: "BKT / DKT", value: 65 },
      { label: "NumPy", value: 70 },
      { label: "Pandas", value: 70 },
    ],
  },
  {
    name: "Computer Vision",
    tone: "pink",
    skills: [
      { label: "OpenCV", value: 70 },
      { label: "MediaPipe", value: 70 },
    ],
  },
  {
    name: "Tools",
    tone: "green",
    skills: [
      { label: "Git", value: 70 },
      { label: "Jupyter / Colab", value: 75 },
    ],
  },
];

function Skills() {
  const scopeRef = useRef(null);

  useEffect(() => {
    if (!scopeRef.current) return;

    const fills = scopeRef.current.querySelectorAll(".skill-fill");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetValue = entry.target.getAttribute("data-value") || "0";
            entry.target.style.width = `${targetValue}%`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    fills.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills" ref={scopeRef}>
      <div className="container reveal">
        <h2 className="section-title">Skills</h2>
        <div className="skills-wrapper">
          {categories.map((category) => (
            <article key={category.name} className={`glass-card skill-category ${category.tone}`}>
              <h3>{category.name}</h3>

              {category.skills.map((skill) => (
                <div className="skill-row" key={skill.label}>
                  <span className="skill-name">{skill.label}</span>
                  <div className="skill-track">
                    <div className="skill-fill" data-value={skill.value} />
                  </div>
                  <span className="skill-percent">{skill.value}%</span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
