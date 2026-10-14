import { useLanguage } from '../context/LanguageContext'

export const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className="about-section">
      {/* Header */}
      <div className="about-header">
        <span>{t.about.about}</span>
        <span>{t.about.softwareDeveloper}</span>
      </div>

      {/* Main statement */}
      <div className="about-main">
        <h2>
          {t.about.title}
          <br />
          {t.about.titleLine2}
          <br />
          {t.about.titleLine3}
        </h2>
      </div>

      {/* Content */}
      <div className="about-content">
        <div className="about-intro">
          <span className="info-label">
            {t.about.background}
          </span>

          <p>{t.about.description}</p>

          <p>{t.about.description2}</p>
        </div>

        <div className="about-skills">
          <span className="info-label">
            {t.about.transferableSkills}
          </span>

          <div className="about-skills-list">
            <span>{t.about.problemSolving}</span>
            <span>{t.about.attentionToDetail}</span>
            <span>{t.about.adaptability}</span>
            <span>{t.about.teamwork}</span>
            <span>{t.about.communication}</span>
            <span>{t.about.responsibility}</span>
            <span>{t.about.criticalThinking}</span>
            <span>{t.about.continuousLearning}</span>
          </div>
        </div>
      </div>
    </section>
  )
}