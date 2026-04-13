import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "honors", label: "Honors" },
];

function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      const sectionOffsets = links
        .map((link) => {
          const el = document.getElementById(link.id);
          if (!el) return null;
          return { id: link.id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean);

      const current = sectionOffsets.find((section) => section.top > -160 && section.top < 260);
      if (current) {
        setActive(current.id);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="#hero" className="brand" onClick={() => handleClick("about")}>
          Anup Rai
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-controls">
          <button type="button" className="theme-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3c0 0 0 0 0 0A7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        <div className={`mobile-drawer ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
