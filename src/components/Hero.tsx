import { useLanguage } from '../context/LanguageContext'

export const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero-section">
      <div className="hero-meta">
        <span>{t.hero.introduction}</span>

        <span className="hero-location">
          {t.hero.location}
        </span>

        <span>{t.hero.year}</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          {t.hero.title}
        </h1>

        <h2 className="hero-subtitle">
          {t.hero.subtitle}
        </h2>

        <p className="hero-stack">
          {t.hero.stack}
        </p>
      </div>

      <div className="hero-bottom">
        <span>{t.hero.selectedWork}</span>

        <span>{t.hero.scroll}</span>
      </div>
    </section>
  )
}