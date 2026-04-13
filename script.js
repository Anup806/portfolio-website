document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const body = document.body;
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("scrollProgress");
  const typewriterText = document.getElementById("typewriterText");
  const themeToggle = document.getElementById("themeToggle");
  const themeLabel = themeToggle ? themeToggle.querySelector(".toggle-label") : null;
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  const typewriterPhrases = ["ML Engineer", "Data Scientist", "AI Enthusiast", "ECE Graduate"];

  function initLoader() {
    setTimeout(() => {
      if (loader) {
        loader.classList.add("hide");
      }
    }, 2000);
  }

  function applyTheme(theme) {
    body.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(theme === "light"));
    }
    if (themeLabel) {
      themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
    }
    localStorage.setItem("portfolio-theme", theme);
  }

  function initThemeToggle() {
    const storedTheme = localStorage.getItem("portfolio-theme");
    applyTheme(storedTheme || "dark");

    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const currentTheme = body.getAttribute("data-theme");
        applyTheme(currentTheme === "dark" ? "light" : "dark");
      });
    }
  }

  function initParticles() {
    if (!window.tsParticles) {
      return;
    }

    window.tsParticles.load({
      id: "particleCanvas",
      options: {
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          number: {
            value: 36,
            density: {
              enable: true,
              area: 900,
            },
          },
          color: {
            value: ["#6c63ff", "#00d4ff"],
          },
          links: {
            enable: true,
            distance: 150,
            color: "#7e79ff",
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      },
    });
  }

  function initTypewriter() {
    if (!typewriterText) {
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const current = typewriterPhrases[phraseIndex];

      if (deleting) {
        charIndex -= 1;
      } else {
        charIndex += 1;
      }

      typewriterText.textContent = current.slice(0, charIndex);

      let delay = deleting ? 52 : 92;

      if (!deleting && charIndex === current.length) {
        deleting = true;
        delay = 1100;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        delay = 260;
      }

      window.setTimeout(tick, delay);
    }

    tick();
  }

  function initRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  function initSkillBars() {
    const skillFills = document.querySelectorAll(".skill-fill");

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const fill = entry.target;
          const progress = fill.getAttribute("data-progress") || "0";
          fill.style.width = `${progress}%`;
          skillObserver.unobserve(fill);
        });
      },
      {
        threshold: 0.35,
      }
    );

    skillFills.forEach((fill) => skillObserver.observe(fill));
  }

  function initTiltCards() {
    const tiltCards = document.querySelectorAll(".tilt-card");

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = ((event.clientY - centerY) / rect.height) * -10;
        const rotateY = ((event.clientX - centerX) / rect.width) * 10;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
      });
    });
  }

  function setScrollUI() {
    const scrolled = window.scrollY > 80;
    header.classList.toggle("scrolled", scrolled);

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }

  function initScrollUI() {
    window.addEventListener("scroll", setScrollUI, { passive: true });
    setScrollUI();
  }

  function closeMenu() {
    if (!navMenu || !menuToggle) {
      return;
    }
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function initMobileMenu() {
    if (!navMenu || !menuToggle) {
      return;
    }

    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        if (!targetId || targetId === "#") {
          return;
        }

        const target = document.querySelector(targetId);
        if (!target) {
          return;
        }

        event.preventDefault();
        const offset = header ? header.offsetHeight + 8 : 84;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  initLoader();
  initThemeToggle();
  initParticles();
  initTypewriter();
  initRevealAnimations();
  initSkillBars();
  initTiltCards();
  initScrollUI();
  initMobileMenu();
  initSmoothScroll();
});