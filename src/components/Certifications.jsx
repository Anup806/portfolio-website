const items = [
  { 
    icon: "📘", 
    text: "Data Science with Python — Code IT (2026)", 
    tone: "purple",
    link: "https://drive.google.com/file/d/1sZkxWFAnLaYBWH4MO3H27zNCFKurRTtW/view?usp=drive_link"
  },
  { 
    icon: "🏆", 
    text: "Best Paper Award — IEEE ICTP 2026", 
    tone: "yellow",
    link: "https://drive.google.com/file/d/1IfugQGkN1Jc2avpj4rm0clKhLQ8YzgdV/view?usp=drive_link"
  },
  { 
    icon: "⚡", 
    text: "IEEE Volunteer", 
    tone: "cyan",
    link: "https://drive.google.com/file/d/1i1TyHFsf2w7jr3ApeY2XBv6OWF9qOX-U/view?usp=drive_link"
  },
  { 
    icon: "🎓", 
    text: "IEEE Participation", 
    tone: "green",
    link: "https://drive.google.com/file/d/182UsEjxCEmGnKO9WWMaB_xTKpaBnt-dS/view?usp=drive_link"
  },
];

function Certifications() {
  return (
    <section className="section" id="honors">
      <div className="container reveal">
        <h2 className="section-title">Certifications &amp; Honors</h2>

        <div className="cert-row">
          {items.map((item) => (
            <a
              key={item.text}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`cert-chip ${item.tone} cert-link`}
              aria-label={`Link to ${item.text}`}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
