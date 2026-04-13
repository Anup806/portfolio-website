const phrases = [
  "AI Engineer",
  "Electronics and Communication Engineer",
  "Machine Learning",
];

const rotatingText = document.getElementById("rotatingText");
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("portfolio-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const initialTheme = storedTheme || preferredTheme;

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem("portfolio-theme", theme);
}

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    charIndex += 1;
    rotatingText.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex -= 1;
    rotatingText.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 55 : 85;
  setTimeout(typeLoop, speed);
}

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => observer.observe(element));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

applyTheme(initialTheme);
typeLoop();