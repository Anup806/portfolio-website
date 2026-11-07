import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollProgressRef = useRef(null);
  const backToTopVisibleRef = useRef(false);

  useEffect(() => {
    let frameId = 0;

    const onScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        if (scrollProgressRef.current) {
          scrollProgressRef.current.style.transform = `scaleX(${progress})`;
        }

        const shouldShowBackToTop = scrollTop > 300;
        if (backToTopVisibleRef.current !== shouldShowBackToTop) {
          backToTopVisibleRef.current = shouldShowBackToTop;
          setShowBackToTop(shouldShowBackToTop);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div ref={scrollProgressRef} className="scroll-progress" aria-hidden="true" />

      <Navbar />

      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Projects />
        <Research />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default App;
