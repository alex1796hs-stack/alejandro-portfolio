import { useLanguage } from '../context/LanguageContext'

export const Contact = () => {
  const { t } = useLanguage()

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <span>{t.contact.contact}</span>
        <span>{t.contact.letsTalk}</span>
      </div>

      <div className="contact-main">
        <div className="contact-intro">
          <span className="contact-label">
            {t.contact.openToOpportunities}
          </span>

          <h2 className="contact-title">
            {t.contact.title}
            <br />
            {t.contact.titleLine2}
            <br />
            {t.contact.titleLine3}
          </h2>
        </div>

        <div className="contact-description">
          <p>{t.contact.description}</p>

          <p>{t.contact.description2}</p>
        </div>
      </div>

      <div className="contact-links">
        <a
          href="mailto:alex1796hs@gmail.com"
          className="contact-link"
        >
          <span className="contact-link-label">
            {t.contact.email}
          </span>

          <span className="contact-link-value">
            alex1796hs@gmail.com
          </span>

          <span className="contact-link-arrow">
            ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/alejandro-jes%C3%BAs-calvo-gonz%C3%A1lez-846544382/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">
            {t.contact.linkedin}
          </span>

          <span className="contact-link-value">
            Alejandro Calvo González
          </span>

          <span className="contact-link-arrow">
            ↗
          </span>
        </a>

        <a
          href="https://github.com/alex1796hs-stack"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-link-label">
            {t.contact.github}
          </span>

          <span className="contact-link-value">
            alex1796hs-stack
          </span>

          <span className="contact-link-arrow">
            ↗
          </span>
        </a>
      </div>

      <div className="contact-footer">
        <span>
          © {new Date().getFullYear()} ALEJANDRO CALVO
        </span>

        <span>{t.contact.madrid}</span>
      </div>
    </section>
  )
}