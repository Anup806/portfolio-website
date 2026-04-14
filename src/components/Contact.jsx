import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = formData.subject.trim() || "Portfolio Contact";
    const body = [
      `Name: ${formData.name.trim() || "N/A"}`,
      `Email: ${formData.email.trim() || "N/A"}`,
      "",
      formData.message.trim() || "No message provided.",
    ].join("\n");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=raianup806@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section" id="contact">
      <div className="container reveal">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          <article className="glass-card contact-card contact-form-card">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-row">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </label>

              <label>
                Message
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                />
              </label>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </article>

          <article className="glass-card contact-card contact-info-card">
            <h3>Get in Touch</h3>

            <div className="contact-info-list">
              <div>
                <span>Email</span>
                <a href="mailto:raianup806@gmail.com">raianup806@gmail.com</a>
              </div>
              <div>
                <span>Location</span>
                <p>Bhaktapur, Nepal</p>
              </div>
              <div>
                <span>Phone</span>
                <p>+977 98XXXXXXXX</p>
              </div>
            </div>

            <div className="contact-social-row">
              <a href="https://www.linkedin.com/in/anup-rai-095695343/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5Zm.02 6.5H2.5V21H5V10Zm4 0H6.5V21H9v-5.5c0-3.06 4-3.31 4 0V21h2.5v-6.36c0-5.15-5.5-4.96-6.5-2.43V10Z" />
                </svg>
              </a>
              <a href="https://github.com/Anup806" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.24.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.6.24 2.76.12 3.05.74.82 1.19 1.85 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.35.79 1.05.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/anup.412.806" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 8.25V6.5c0-.66.54-1.2 1.2-1.2h1.8V2h-2.68A3.83 3.83 0 0 0 10 5.82v2.43H7.5v3.25H10V22h3.5V11.5h2.75L17 8.25h-3.5Z" />
                </svg>
              </a>
            </div>

            <div className="contact-availability">
              <strong>Availability</strong>
              <p>Available for internships, research collaborations, and freelance opportunities. I usually respond within 24 hours.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
