import { useEffect, useState } from "react";

const roleLines = [
  "AI Engineer",
  "Electronics and Communication Engineer",
  "Machine Learning",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  useEffect(() => {
    let fadeTimer;
    const cycle = setInterval(() => {
      setRoleVisible(false);
      fadeTimer = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roleLines.length);
        setRoleVisible(true);
      }, 260);
    }, 2600);

    return () => {
      clearInterval(cycle);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-orb one" />
      <div className="hero-orb two" />
      <div className="hero-orb three" />

      <div className="hero-content reveal">
        <h1>ANUP RAI</h1>

        <p className={`hero-role ${roleVisible ? "show" : "hide"}`}>{roleLines[roleIndex]}</p>
        <a className="download-cv" href="mailto:raianup806@gmail.com?subject=CV%20Request">
          Download CV
        </a>

        <a className="scroll-indicator" href="#about" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
