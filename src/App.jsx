import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footprint = document.querySelector(".cursor-footprint");
    const splashLayer = document.querySelector(".splash-layer");
    if (!footprint || !splashLayer) return;

    const onMove = (event) => {
      footprint.style.left = `${event.clientX}px`;
      footprint.style.top = `${event.clientY}px`;
      footprint.style.opacity = "1";
    };

    const onLeave = () => {
      footprint.style.opacity = "0";
    };

    const onClick = (event) => {
      const splash = document.createElement("span");
      splash.className = "click-splash";
      splash.style.left = `${event.clientX}px`;
      splash.style.top = `${event.clientY}px`;
      splashLayer.appendChild(splash);
      splash.addEventListener("animationend", () => splash.remove(), { once: true });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    window.addEventListener("click", onClick, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="cursor-footprint" aria-hidden="true" />
      <div className="splash-layer" aria-hidden="true" />

      <div className={`loading-screen ${loading ? "" : "hide"}`} aria-hidden={!loading}>
        <div className="loading-inner">
          <h1>AR</h1>
          <div className="loading-ring" />
        </div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
