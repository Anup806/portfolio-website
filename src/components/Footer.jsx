function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner reveal">
        <div className="footer-social">
          <a className="social-icon github" href="https://github.com/Anup806" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.24.79-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.35.95.1-.74.4-1.25.73-1.54-2.56-.3-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.98 10.98 0 0 1 5.76 0c2.2-1.5 3.16-1.19 3.16-1.19.63 1.6.24 2.76.12 3.05.74.82 1.19 1.85 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.35.79 1.05.79 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a className="social-icon linkedin" href="https://www.linkedin.com/in/anup-rai-095695343/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 .02 5 2.5 2.5 0 0 0-.02-5Zm.02 6.5H2.5V21H5V10Zm4 0H6.5V21H9v-5.5c0-3.06 4-3.31 4 0V21h2.5v-6.36c0-5.15-5.5-4.96-6.5-2.43V10Z" />
            </svg>
          </a>

          <a className="social-icon email" href="mailto:raianup806@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.25 5.25A2.25 2.25 0 0 1 4.5 3h15A2.25 2.25 0 0 1 21.75 5.25v13.5A2.25 2.25 0 0 1 19.5 21h-15a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.4-.75 7.35 6.15 7.35-6.15h-14.7Zm14.85 14.9V7.15l-7.5 6.27-7.5-6.27V19.4h15Z" />
            </svg>
          </a>
        </div>

        <div className="footer-divider" />
        <p>@ Anup Rai, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
