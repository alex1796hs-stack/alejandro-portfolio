import { useLanguage } from '../context/LanguageContext'

export const Navbar = () => {
    const { language, setLanguage, t } = useLanguage()

    const navItems = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.work, href: '#projects' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.contact, href: '#contact' },
    ]

    const handleNavClick = (href: string) => {
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const handleCvClick = () => {
        const cvFiles = {
            es: '/cv/Alejandro-Calvo-CV-ES-ATS-V3.pdf',
            en: '/cv/Alejandro-Calvo-CV-EN-ATS-V3.pdf',
            nl: '/cv/Alejandro-Calvo-CV-NL-ATS-V3.pdf',
        }

        const link = document.createElement('a')

        link.href = cvFiles[language]
        link.download = cvFiles[language].split('/').pop() ?? 'CV.pdf'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <nav id="home" className="site-nav">
            <button
                onClick={() => handleNavClick('#home')}
                className="site-logo"
                aria-label="Go to home"
            >
                AC
            </button>

            <div className="site-navigation">
                {navItems.map((item) => (
                    <button
                        key={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="nav-link"
                    >
                        {item.label}
                    </button>
                ))}

                <span className="nav-divider" />

                <div className="nav-language">
                    <button
                        onClick={() => setLanguage('es')}
                        className={language === 'es' ? 'active' : ''}
                    >
                        ES
                    </button>

                    <span>/</span>

                    <button
                        onClick={() => setLanguage('en')}
                        className={language === 'en' ? 'active' : ''}
                    >
                        EN
                    </button>

                    <span>/</span>

                    <button
                        onClick={() => setLanguage('nl')}
                        className={language === 'nl' ? 'active' : ''}
                    >
                        NL
                    </button>
                </div>

                <button
                    onClick={handleCvClick}
                    className="nav-cv"
                >
                    {t.nav.cv}
                    <span className="nav-cv-arrow">↓</span>
                </button>
            </div>
        </nav>
    )
}