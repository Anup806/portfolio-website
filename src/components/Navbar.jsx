import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "honors", label: "Honors" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

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

      const current = sectionOffsets.filter((section) => section.top <= 180).at(-1);
      if (current) {
        setActive(current.id);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const handleClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <a className="brand" href="#hero" aria-label="Anup Rai, home">
          <span className="brand-mark" aria-hidden="true">AR</span>
          <span>Anup Rai</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              aria-current={active === link.id ? "location" : undefined}
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
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>

        <nav
          className={`mobile-drawer ${open ? "open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
