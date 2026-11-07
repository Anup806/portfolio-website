import { useEffect, useState } from "react";

const titles = [
  "AI/ML engineer · RAG & LLM applications",
  "IEEE ICTP 2026 Best Paper Awardee",
  "Electronics & Communication Engineering graduate",
  "Deep Knowledge Tracing researcher",
];

function useTypewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(titles[0]);
  const [phase, setPhase] = useState("initial");
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event) => setReducedMotion(event.matches);

    setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!reducedMotion) return;

    setCurrentIndex(0);
    setCurrentText(titles[0]);
    setPhase("initial");
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return undefined;

    let timer;
    const currentTitle = titles[currentIndex];

    if (phase === "initial") {
      timer = window.setTimeout(() => setPhase("deleting"), 2500);
    } else if (phase === "deleting") {
      timer = window.setTimeout(() => {
        if (currentText.length <= 1) {
          setCurrentText("");
          setPhase("pause");
        } else {
          setCurrentText((text) => text.slice(0, -1));
        }
      }, 30);
    } else if (phase === "pause") {
      timer = window.setTimeout(() => {
        setCurrentIndex((index) => (index + 1) % titles.length);
        setPhase("typing");
      }, 400);
    } else if (phase === "typing") {
      timer = window.setTimeout(() => {
        const nextText = currentTitle.slice(0, currentText.length + 1);
        setCurrentText(nextText);
        if (nextText === currentTitle) setPhase("holding");
      }, 60);
    } else if (phase === "holding") {
      timer = window.setTimeout(() => setPhase("deleting"), 2000);
    }

    return () => window.clearTimeout(timer);
  }, [currentIndex, currentText, phase, reducedMotion]);

  return { currentText, reducedMotion };
}

export default useTypewriter;
