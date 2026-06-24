import { useEffect, useState } from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "honors", label: "Honors" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

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
        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${active === link.id ? "active" : ""} ${
                link.id === "hero" ? "home-link" : ""
              }`.trim()}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-controls">
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
              className={`${active === link.id ? "active" : ""} ${
                link.id === "hero" ? "home-link" : ""
              }`.trim()}
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
