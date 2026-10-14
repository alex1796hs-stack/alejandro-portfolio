import { useLanguage } from '../context/LanguageContext'

export const Education = () => {
    const { t } = useLanguage()

    return (
        <section id="education" className="education-section">
            {/* Header */}
            <div className="education-header">
                <span>{t.education.education}</span>
                <span>{t.education.learning}</span>
            </div>

            {/* Statement */}
            <div className="education-main">
                <h2>
                    {t.education.title}
                    <br />
                    {t.education.titleLine2}
                    <br />
                    {t.education.titleLine3}
                </h2>
            </div>

            {/* Education */}
            <div className="education-block">
                <div className="education-block-header">
                    <span className="info-label">
                        {t.education.educationLabel}
                    </span>

                    <span className="education-year">
                        2024 — 2026
                    </span>
                </div>

                <div className="education-content">
                    <div>
                        <h3>
                            {t.education.educationTitle}
                            <br />
                            {t.education.educationTitleLine2}
                        </h3>

                        <span className="education-institution">
                            {t.education.educationInstitution}
                            <br />
                            {t.education.educationCity}
                        </span>
                    </div>

                    <span className="education-type">
                        {t.education.higherVocationalTraining}
                    </span>
                </div>
            </div>

            {/* Certifications */}
            <div className="certifications-block">
                <div className="certifications-header">
                    <span className="info-label">
                        {t.education.certificationsCourses}
                    </span>

                    <span className="education-year">
                        2025 — 2026
                    </span>
                </div>

                <div className="certification-list">

                    <div className="certification-item">
                        <span className="certification-year">
                            2026
                        </span>

                        <div className="certification-info">
                            <span>{t.education.generativeAi}</span>
                            <small>
                                MIT Professional Education · 8h
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2026
                        </span>

                        <div className="certification-info">
                            <span>{t.education.cybersecurity}</span>
                            <small>
                                BIG school · 6h
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2026
                        </span>

                        <div className="certification-info">
                            <span>{t.education.seoAiGoogle}</span>
                            <small>
                                BIGSEO / BIG school · 6h
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>{t.education.responsiblePrompting}</span>
                            <small>
                                Microsoft & Founderz · 8h
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>
                                Business English, Part 1
                            </span>
                            <small>
                                Santander Open Academy · 8h
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>
                                {t.education.googleAiProductivity}
                            </span>
                            <small>
                                Santander Open Academy · 2h
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>{t.education.copilot}</span>
                            <small>
                                Santander Open Academy
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>{t.education.python}</span>
                            <small>
                                Santander Open Academy
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>{t.education.seoContent}</span>
                            <small>
                                ISDI
                            </small>
                        </div>
                    </div>

                    <div className="certification-item">
                        <span className="certification-year">
                            2025
                        </span>

                        <div className="certification-info">
                            <span>{t.education.excel}</span>
                            <small>
                                Santander Open Academy
                            </small>
                        </div>
                    </div>

                </div>
            </div>

            {/* Currently learning */}
            <div className="learning-block">
                <div>
                    <span className="info-label">
                        {t.education.currentlyLearning}
                    </span>

                    <h3>
                        AWS Certified
                        <br />
                        Cloud Practitioner
                    </h3>
                </div>

                <span className="learning-status">
                    {t.education.inProgress}
                </span>
            </div>
        </section>
    )
}