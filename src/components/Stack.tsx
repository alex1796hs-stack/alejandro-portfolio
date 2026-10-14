import { useLanguage } from '../context/LanguageContext'

const stackGroups = [
    {
        key: 'frontend' as const,
        technologies: [
            'React',
            'TypeScript',
            'JavaScript',
            'Vue.js',
            'HTML5',
            'CSS3',
            'Tailwind CSS',
        ],
    },
    {
        key: 'backend' as const,
        technologies: [
            'Python',
            'FastAPI',
            'Java',
            'Javalin',
            'PHP',
            'REST APIs',
        ],
    },
    {
        key: 'data' as const,
        technologies: [
            'PostgreSQL',
            'MySQL',
            'SQLite',
            'SQLAlchemy',
        ],
    },
    {
        key: 'tools' as const,
        technologies: [
            'Docker',
            'Git',
            'GitHub',
            'Vite',
        ],
    },
    {
        key: 'ai' as const,
        technologies: [
            'Generative AI',
            'AI-assisted Development',
            'SEO',
            'Automation',
        ],
    },
]

export const Stack = () => {
    const { t } = useLanguage()

    return (
        <section id="stack" className="stack-section">
            <div className="stack-header">
                <span>{t.stack.technicalStack}</span>
                <span>{t.stack.currentToolset}</span>
            </div>

            <div className="stack-intro">
                <h2>
                    {t.stack.title}
                    <br />
                    {t.stack.titleLine2}
                    <br />
                    {t.stack.titleLine3}
                </h2>
            </div>

            <div className="stack-grid">
                {stackGroups.map((group) => (
                    <div className="stack-group" key={group.key}>
                        <div className="stack-group-header">
                            <span>{t.stack[group.key]}</span>
                        </div>

                        <div className="stack-technologies">
                            {group.technologies.map((technology) => (
                                <span
                                    className="stack-technology"
                                    key={technology}
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}