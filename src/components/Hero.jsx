import { useEffect, useState } from "react";

const heroTaglines = [
  "ML Engineer in the Making",
  "IEEE Best Paper Awardee",
  "Electronics and Communication Engineering Graduate",
  "AI Enthusiast",
];

function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}AnupRai_Resume.pdf`;
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = heroTaglines[taglineIndex];
    const typingDelay = isDeleting ? 45 : 85;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentTagline.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === currentTagline) {
          window.setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        const nextText = currentTagline.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
        }
      }
    }, typingDelay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, taglineIndex, typedText]);

  return (
    <section className="hero" id="hero">
      <div className="hero-orb one" />
      <div className="hero-orb two" />
      <div className="hero-orb three" />

      <div className="hero-content reveal">
        <h1>ANUP RAI</h1>

        <p className="typewriter">
          {typedText}
          <span className="cursor">|</span>
        </p>
        <a className="download-cv" href={resumeUrl} download="AnupRai_Resume.pdf">
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
