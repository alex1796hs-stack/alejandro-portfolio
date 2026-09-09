export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <span>08 — Contact</span>
        <span>Let&apos;s Talk</span>
      </div>

      <div className="contact-main">
        <div className="contact-intro">
          <span className="contact-label">Open to opportunities</span>

          <h2 className="contact-title">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            USEFUL.
          </h2>
        </div>

        <div className="contact-description">
          <p>
            I&apos;m open to frontend, full-stack and software development
            opportunities.
          </p>

          <p>
            If you have an interesting project or opportunity, feel free to
            get in touch.
          </p>
        </div>
      </div>

      <div className="contact-links">
        <a
          href="mailto:alex1796hs@gmail.com"
          className="contact-link"
        >
          <span className="contact-link-label">Email</span>
          <span className="contact-link-value">
            alex1796hs@gmail.com
          </span>
          <span className="contact-link-arrow">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/alejandro-jes%C3%BAs-calvo-gonz%C3%A1lez-846544382/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">LinkedIn</span>
          <span className="contact-link-value">
            Alejandro Jesús Calvo González
          </span>
          <span className="contact-link-arrow">↗</span>
        </a>

        <a
          href="https://github.com/alex1796hs-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">GitHub</span>
          <span className="contact-link-value">
            alex1796hs-stack
          </span>
          <span className="contact-link-arrow">↗</span>
        </a>
      </div>

      <div className="contact-footer">
        <span>© {new Date().getFullYear()} ALEJANDRO CALVO</span>
        <span>MADRID · SPAIN</span>
      </div>
    </section>
  )
}