const stackGroups = [
    {
        title: 'Frontend',
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
        title: 'Backend',
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
        title: 'Data',
        technologies: [
            'PostgreSQL',
            'MySQL',
            'SQLite',
            'SQLAlchemy',
        ],
    },
    {
        title: 'Tools',
        technologies: [
            'Docker',
            'Git',
            'GitHub',
            'Vite',
        ],
    },
    {
        title: 'AI & Other',
        technologies: [
            'Generative AI',
            'AI-assisted Development',
            'SEO',
            'Automation',
        ],
    },
]

export const Stack = () => {
    return (
        <section id="stack" className="stack-section">
            <div className="stack-header">
                <span>07 — Technical Stack</span>
                <span>Current Toolset</span>
            </div>

            <div className="stack-intro">
                <h2>
                    TOOLS I USE
                    <br />
                    TO BUILD
                    <br />
                    DIGITAL PRODUCTS.
                </h2>
            </div>

            <div className="stack-grid">
                {stackGroups.map((group) => (
                    <div className="stack-group" key={group.title}>
                        <div className="stack-group-header">
                            <span>{group.title}</span>
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