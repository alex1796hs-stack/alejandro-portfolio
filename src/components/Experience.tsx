import { useLanguage } from '../context/LanguageContext'

export const Experience = () => {
    const { t } = useLanguage()

    return (
        <section id="experience" className="experience-section">
            {/* Header */}
            <div className="experience-header">
                <span>{t.experience.experience}</span>
                <span>{t.experience.professional}</span>
            </div>

            {/* Main experience */}
            <div className="experience-item">
                <div className="experience-meta">
                    <span>{t.experience.date}</span>
                    <span>{t.experience.location}</span>
                </div>

                <div className="experience-main">
                    <div className="experience-title">
                        <h2>
                            {t.experience.title}
                            <br />
                            {t.experience.titleLine2}
                        </h2>

                        <span className="experience-company">
                            Motoreto
                        </span>
                    </div>

                    <div className="experience-description">
                        <span className="info-label">
                            {t.experience.role}
                        </span>

                        <p>{t.experience.description}</p>

                        <div className="experience-responsibilities">
                            <span>Vue.js</span>
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>PHP</span>
                            <span>HTML / CSS</span>
                            <span>{t.experience.responsiveUi}</span>
                            <span>Git</span>
                            <span>{t.experience.codeReviews}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Previous professional background */}
            <div className="experience-background">
                <div>
                    <span className="info-label">
                        {t.experience.previousBackground}
                    </span>

                    <span className="experience-background-title">
                        10+ YEARS
                    </span>
                </div>

                <p>{t.experience.backgroundDescription}</p>
            </div>
        </section>
    )
}