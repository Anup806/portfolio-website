const certificates = [
  {
    title: "Best Paper Award",
    issuer: "IEEE ICTP 2026",
    src: "/Certifications/Best Paper Award-IEEE 2026.png",
    alt: "Best Paper Award certificate from IEEE ICTP 2026",
  },
  {
    title: "Certificate of Participation",
    issuer: "IEEE ICTP 2026",
    src: "/Certifications/Participation Certificate-IEEE 2026.png",
    alt: "Participation certificate from IEEE ICTP 2026",
  },
  {
    title: "Volunteer Appreciation",
    issuer: "IEEE ICTP 2026",
    src: "/Certifications/Volunteering-IEEE 2026.png",
    alt: "Volunteer appreciation certificate from IEEE ICTP 2026",
  },
  {
    title: "Data Science with Python",
    issuer: "Code IT, 2026",
    src: "/Certifications/Data Science With Python Certificate.png",
    alt: "Data Science with Python completion certificate from Code IT",
  },
];

function CertificateCard({ certificate, duplicate = false }) {
  return (
    <figure className="cert-card" aria-hidden={duplicate || undefined}>
      <img
        src={certificate.src}
        alt={duplicate ? "" : certificate.alt}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
      <figcaption>
        <span className="cert-card-title">{certificate.title}</span>
        <span className="cert-card-meta">{certificate.issuer}</span>
      </figcaption>
    </figure>
  );
}

function Certifications() {
  return (
    <section className="section" id="honors">
      <div className="container reveal">
        <h2 className="section-title">Certifications &amp; Honors</h2>
        <p className="cert-intro">Selected recognitions from IEEE ICTP 2026 and Code IT.</p>

        <div className="cert-marquee" aria-label="Certification and honors gallery">
          <div className="cert-marquee-track">
            <div className="cert-marquee-group">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.title} certificate={certificate} />
              ))}
            </div>
            <div className="cert-marquee-group" aria-hidden="true">
              {certificates.map((certificate) => (
                <CertificateCard
                  key={`${certificate.title}-duplicate`}
                  certificate={certificate}
                  duplicate
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
