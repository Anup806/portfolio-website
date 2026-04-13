const items = [
  { icon: "📘", text: "Data Science with Python — Code IT (2026)", tone: "purple" },
  { icon: "🏆", text: "Best Paper Award — IEEE ICTP 2026", tone: "yellow" },
  { icon: "⚡", text: "IEEE Volunteer", tone: "cyan" },
];

function Certifications() {
  return (
    <section className="section" id="honors">
      <div className="container reveal">
        <h2 className="section-title">Certifications &amp; Honors</h2>

        <div className="cert-row">
          {items.map((item) => (
            <div key={item.text} className={`cert-chip ${item.tone}`}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
