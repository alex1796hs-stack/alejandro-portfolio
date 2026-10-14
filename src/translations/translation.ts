export type Language = 'es' | 'en' | 'nl'

type Translation = {
    nav: {
        about: string
        work: string
        experience: string
        contact: string
        cv: string
    }

    hero: {
        introduction: string
        location: string
        year: string
        title: string
        subtitle: string
        stack: string
        selectedWork: string
        scroll: string
    }

    about: {
        about: string
        softwareDeveloper: string
        title: string
        titleLine2: string
        titleLine3: string
        background: string
        description: string
        description2: string
        transferableSkills: string
        problemSolving: string
        attentionToDetail: string
        adaptability: string
        teamwork: string
        communication: string
        responsibility: string
        criticalThinking: string
        continuousLearning: string
    }
    experience: {
        experience: string
        professional: string
        date: string
        location: string
        title: string
        titleLine2: string
        role: string
        description: string
        responsiveUi: string
        codeReviews: string
        previousBackground: string
        backgroundDescription: string
    }
    education: {
        education: string
        learning: string
        title: string
        titleLine2: string
        titleLine3: string
        educationLabel: string
        higherVocationalTraining: string
        certificationsCourses: string
        generativeAi: string
        cybersecurity: string
        seoAiGoogle: string
        responsiblePrompting: string
        googleAiProductivity: string
        copilot: string
        python: string
        seoContent: string
        excel: string
        currentlyLearning: string
        inProgress: string
        educationTitle: string
        educationTitleLine2: string
        educationInstitution: string
        educationCity: string
    }

    projects: {
        selectedWork: string
        projectCount: string
        title: string
        titleLine2: string
        titleLine3: string

        featuredProject: string
        featuredProjectCount: string

        aboutProject: string
        easylearnDescription: string
        technologies: string
        explore: string
        aiEnglishLearningPlatform: string

        placementTest: string
        placementResult: string
        lessonInterface: string
        profileProgress: string

        selectedProject: string
        sharenergyDescription: string
        landingQr: string
        powerbankSelection: string
        rentalTimer: string
        paymentSummary: string
        powerbankRentalWebConcept: string
    }

    stack: {
        technicalStack: string
        currentToolset: string
        title: string
        titleLine2: string
        titleLine3: string
        frontend: string
        backend: string
        data: string
        tools: string
        ai: string
    }

    contact: {
        contact: string
        letsTalk: string
        openToOpportunities: string
        title: string
        titleLine2: string
        titleLine3: string
        description: string
        description2: string
        email: string
        linkedin: string
        github: string
        madrid: string
    }
}

export const translations: Record<Language, Translation> = {
    // ─────────────────────────────────────────
    // ESPAÑOL
    // ─────────────────────────────────────────

    es: {
        nav: {
            about: 'SOBRE MÍ',
            work: 'PROYECTOS',
            experience: 'EXPERIENCIA',
            contact: 'CONTACTO',
            cv: 'CV',
        },

        hero: {
            introduction: '01 — Introducción',
            location: 'Madrid, España',
            year: '2026',
            title: 'ALEJANDRO',
            subtitle: 'SOFTWARE DEVELOPER',
            stack: 'FRONTEND · FULL STACK · CLOUD',
            selectedWork: 'Proyectos seleccionados ↓',
            scroll: 'Desplázate para explorar',
        },

        about: {
            about: '03 — Sobre mí',
            softwareDeveloper: 'Desarrollador de software',

            title: 'DESARROLLADOR DE SOFTWARE',
            titleLine2: 'CON EXPERIENCIA',
            titleLine3: 'EN EL ÁMBITO SANITARIO.',

            background: 'Trayectoria',

            description:
                'Soy desarrollador de software con experiencia previa en el ámbito sanitario y más de 10 años trabajando en entornos hospitalarios.',

            description2:
                'Esa experiencia me enseñó a trabajar bajo presión, adaptarme rápidamente, comunicarme de forma eficaz y prestar atención a los detalles.',

            transferableSkills: 'Habilidades transferibles',

            problemSolving: 'Resolución de problemas',
            attentionToDetail: 'Atención al detalle',
            adaptability: 'Adaptabilidad',
            teamwork: 'Trabajo en equipo',
            communication: 'Comunicación',
            responsibility: 'Responsabilidad',
            criticalThinking: 'Pensamiento crítico',
            continuousLearning: 'Aprendizaje continuo',
        },
        experience: {
            experience: '04 — Experiencia',
            professional: 'Profesional',

            date: '2025 — Actualidad',
            location: 'Madrid, España',

            title: 'FRONTEND',
            titleLine2: 'DEVELOPER',

            role: 'Puesto',

            description:
                'Desarrollo y mantenimiento frontend de aplicaciones web, trabajando con diferentes tecnologías y colaborando dentro de un equipo de desarrollo.',

            responsiveUi: 'Interfaces responsive',
            codeReviews: 'Revisiones de código',

            previousBackground: 'Experiencia anterior',

            backgroundDescription:
                'Antes de incorporarme al desarrollo de software, trabajé durante más de una década en entornos hospitalarios. Esta experiencia me permitió desarrollar sólidas habilidades de responsabilidad, adaptabilidad, comunicación, trabajo en equipo y resolución de problemas.',
        },
        education: {
            education: '05 — Educación y certificaciones',
            learning: 'Aprendizaje',

            title: 'EL DESARROLLO',
            titleLine2: 'ES UN PROCESO',
            titleLine3: 'CONTINUO.',

            educationLabel: 'Educación',
            higherVocationalTraining: 'Formación Profesional de Grado Superior',

            certificationsCourses: 'Certificaciones y cursos',

            generativeAi: 'Introducción a la IA Generativa',
            cybersecurity: 'Ciberseguridad y Hacking Ético',
            seoAiGoogle: 'SEO para IA y Google',
            responsiblePrompting: 'Prompting responsable: maximiza la IA en tu negocio',
            googleAiProductivity: 'Google: Inteligencia Artificial y productividad',
            copilot: 'Copilot: Fundamentos de IA de Microsoft',
            python: 'Introducción a la programación con Python',
            seoContent: 'SEO y Content Marketing',
            excel: 'Excel — de básico a intermedio',

            currentlyLearning: 'Actualmente aprendiendo',
            inProgress: 'EN PROGRESO',
            educationTitle: 'Técnico Superior en Desarrollo',
            educationTitleLine2: 'de Aplicaciones Multiplataforma',
            educationInstitution: 'CCC · Centro Oficial de Formación Profesional',
            educationCity: 'Madrid, España',
        },

        projects: {
            selectedWork: '02 — Proyectos seleccionados',
            projectCount: '02 Proyectos',
            title: 'CONSTRUYENDO PRODUCTOS',
            titleLine2: 'DIGITALES CON',
            titleLine3: 'CÓDIGO Y PROPÓSITO.',

            featuredProject: '01 — Proyecto destacado',
            featuredProjectCount: '01 / 02',

            aboutProject: 'Sobre el proyecto',

            easylearnDescription:
                'Una plataforma de aprendizaje de inglés impulsada por IA, diseñada en torno a una progresión estructurada, evaluación y aprendizaje diario.',

            technologies: 'Tecnologías',
            explore: 'Explorar',

            aiEnglishLearningPlatform:
                'PLATAFORMA DE APRENDIZAJE DE INGLÉS CON IA',

            placementTest: 'Prueba de nivel de EasyLearn',
            placementResult: 'Resultado de la prueba de nivel',
            lessonInterface: 'Interfaz de lecciones de EasyLearn',
            profileProgress:
                'Perfil y progreso de aprendizaje de EasyLearn',

            selectedProject: '02 / 02 — Proyecto seleccionado',

            sharenergyDescription:
                'Un prototipo web full-stack para el alquiler de powerbanks mediante estaciones con acceso por QR, gestión de disponibilidad, seguimiento de alquileres y lógica de facturación automatizada.',

            landingQr: 'Landing y acceso QR de Sharenergy',
            powerbankSelection: 'Selección de powerbank de Sharenergy',
            rentalTimer: 'Temporizador de alquiler de Sharenergy',
            paymentSummary: 'Resumen de pago de Sharenergy',

            powerbankRentalWebConcept:
                'CONCEPTO WEB DE ALQUILER DE POWERBANKS',
        },

        stack: {
            technicalStack: '07 — Stack técnico',
            currentToolset: 'Tecnologías actuales',

            title: 'HERRAMIENTAS QUE USO',
            titleLine2: 'PARA CONSTRUIR',
            titleLine3: 'PRODUCTOS DIGITALES.',

            frontend: 'Frontend',
            backend: 'Backend',
            data: 'Datos',
            tools: 'Herramientas',
            ai: 'IA & Otros',
        },

        contact: {
            contact: '07 — Contacto',
            letsTalk: 'Hablemos',
            openToOpportunities: 'Abierto a oportunidades',

            title: 'CONSTRUYAMOS',
            titleLine2: 'ALGO',
            titleLine3: 'ÚTIL.',

            description:
                'Estoy abierto a oportunidades en desarrollo frontend, full-stack y desarrollo de software.',

            description2:
                'Si tienes un proyecto interesante o una oportunidad profesional, no dudes en ponerte en contacto.',

            email: 'Email',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            madrid: 'MADRID · ESPAÑA',
        },
    },

    // ─────────────────────────────────────────
    // ENGLISH
    // ─────────────────────────────────────────

    en: {
        nav: {
            about: 'ABOUT',
            work: 'WORK',
            experience: 'EXPERIENCE',
            contact: 'CONTACT',
            cv: 'CV',
        },

        hero: {
            introduction: '01 — Introduction',
            location: 'Madrid, Spain',
            year: '2026',
            title: 'ALEJANDRO',
            subtitle: 'SOFTWARE DEVELOPER',
            stack: 'FRONTEND · FULL STACK · CLOUD',
            selectedWork: 'Selected work ↓',
            scroll: 'Scroll to explore',
        },

        about: {
            about: '03 — About',
            softwareDeveloper: 'Software Developer',

            title: 'SOFTWARE DEVELOPER',
            titleLine2: 'WITH A BACKGROUND',
            titleLine3: 'IN HEALTHCARE.',

            background: 'Background',

            description:
                "I'm a software developer with a background in healthcare and more than 10 years of experience working in hospital environments.",

            description2:
                'That experience taught me how to work under pressure, adapt quickly, communicate effectively and pay attention to detail.',

            transferableSkills: 'Transferable skills',

            problemSolving: 'Problem Solving',
            attentionToDetail: 'Attention to Detail',
            adaptability: 'Adaptability',
            teamwork: 'Teamwork',
            communication: 'Communication',
            responsibility: 'Responsibility',
            criticalThinking: 'Critical Thinking',
            continuousLearning: 'Continuous Learning',
        },
        experience: {
            experience: '04 — Experience',
            professional: 'Professional',

            date: '2025 — Now',
            location: 'Madrid, Spain',

            title: 'FRONTEND',
            titleLine2: 'DEVELOPER',

            role: 'Role',

            description:
                'Frontend development and maintenance of web applications, working across different technologies and collaborating within a development team.',

            responsiveUi: 'Responsive UI',
            codeReviews: 'Code Reviews',

            previousBackground: 'Previous background',

            backgroundDescription:
                'Before moving into software development, I worked for more than a decade in hospital environments. That experience developed strong skills in responsibility, adaptability, communication, teamwork and problem solving.',
        },
        education: {
            education: '05 — Education & Certifications',
            learning: 'Learning',

            title: 'DEVELOPMENT',
            titleLine2: 'IS A CONTINUOUS',
            titleLine3: 'PROCESS.',

            educationLabel: 'Education',
            higherVocationalTraining: 'Higher Vocational Training',

            certificationsCourses: 'Certifications & Courses',

            generativeAi: 'Introduction to Generative AI',
            cybersecurity: 'Cybersecurity and Ethical Hacking',
            seoAiGoogle: 'SEO for AI and Google',
            responsiblePrompting: 'Responsible Prompting: Maximize AI in Your Business',
            googleAiProductivity: 'Google: Artificial Intelligence and Productivity',
            copilot: 'Copilot: Microsoft AI Fundamentals',
            python: 'Introduction to Python Programming',
            seoContent: 'SEO and Content Marketing',
            excel: 'Excel — Basic to Intermediate',

            currentlyLearning: 'Currently Learning',
            inProgress: 'IN PROGRESS',
            educationTitle: 'HIGHER VOCATIONAL TRAINING IN',
            educationTitleLine2: 'MULTIPLATFORM APPLICATION DEVELOPMENT',
            educationInstitution: 'CCC · Official Vocational Training Centre',
            educationCity: 'Madrid, Spain',
        },

        projects: {
            selectedWork: '02 — Selected Work',
            projectCount: '02 Projects',
            title: 'BUILDING DIGITAL',
            titleLine2: 'PRODUCTS WITH',
            titleLine3: 'CODE & PURPOSE.',

            featuredProject: '01 — Featured Project',
            featuredProjectCount: '01 / 02',

            aboutProject: 'About the project',

            easylearnDescription:
                'An AI-powered English learning platform designed around structured progression, assessment and daily learning.',

            technologies: 'Technologies',
            explore: 'Explore',

            aiEnglishLearningPlatform:
                'AI ENGLISH LEARNING PLATFORM',

            placementTest: 'EasyLearn placement test',
            placementResult: 'EasyLearn placement test result',
            lessonInterface: 'EasyLearn lesson interface',
            profileProgress:
                'EasyLearn profile and learning progress',

            selectedProject: '02 / 02 — Selected Project',

            sharenergyDescription:
                'A full-stack web prototype for renting portable powerbanks through QR-based stations, with availability management, rental tracking and automated billing logic.',

            landingQr: 'Sharenergy landing and QR access',
            powerbankSelection: 'Sharenergy powerbank selection',
            rentalTimer: 'Sharenergy rental timer',
            paymentSummary: 'Sharenergy payment summary',

            powerbankRentalWebConcept:
                'POWERBANK RENTAL WEB CONCEPT',
        },

        stack: {
            technicalStack: '07 — Technical Stack',
            currentToolset: 'Current Toolset',

            title: 'TOOLS I USE',
            titleLine2: 'TO BUILD',
            titleLine3: 'DIGITAL PRODUCTS.',

            frontend: 'Frontend',
            backend: 'Backend',
            data: 'Data',
            tools: 'Tools',
            ai: 'AI & Other',
        },

        contact: {
            contact: '07 — Contact',
            letsTalk: "Let's Talk",
            openToOpportunities: 'Open to opportunities',

            title: "LET'S BUILD",
            titleLine2: 'SOMETHING',
            titleLine3: 'USEFUL.',

            description:
                "I'm open to frontend, full-stack and software development opportunities.",

            description2:
                'If you have an interesting project or professional opportunity, feel free to get in touch.',

            email: 'Email',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            madrid: 'MADRID · SPAIN',
        },
    },

    // ─────────────────────────────────────────
    // NEDERLANDS
    // ─────────────────────────────────────────

    nl: {
        nav: {
            about: 'OVER MIJ',
            work: 'WERK',
            experience: 'ERVARING',
            contact: 'CONTACT',
            cv: 'CV',
        },

        hero: {
            introduction: '01 — Introductie',
            location: 'Madrid, Spanje',
            year: '2026',
            title: 'ALEJANDRO',
            subtitle: 'SOFTWARE DEVELOPER',
            stack: 'FRONTEND · FULL STACK · CLOUD',
            selectedWork: 'Geselecteerd werk ↓',
            scroll: 'Scroll om te ontdekken',
        },

        about: {
            about: '03 — Over mij',
            softwareDeveloper: 'Software Developer',

            title: 'SOFTWARE DEVELOPER',
            titleLine2: 'MET EEN ACHTERGROND',
            titleLine3: 'IN DE ZORG.',

            background: 'Achtergrond',

            description:
                'Ik ben software developer met een achtergrond in de zorg en meer dan 10 jaar ervaring in ziekenhuisomgevingen.',

            description2:
                'Die ervaring heeft me geleerd om onder druk te werken, me snel aan te passen, effectief te communiceren en oog voor detail te hebben.',

            transferableSkills: 'Overdraagbare vaardigheden',

            problemSolving: 'Probleemoplossend vermogen',
            attentionToDetail: 'Oog voor detail',
            adaptability: 'Aanpassingsvermogen',
            teamwork: 'Teamwerk',
            communication: 'Communicatie',
            responsibility: 'Verantwoordelijkheid',
            criticalThinking: 'Kritisch denken',
            continuousLearning: 'Continu leren',
        },
        experience: {
            experience: '04 — Ervaring',
            professional: 'Professioneel',

            date: '2025 — Heden',
            location: 'Madrid, Spanje',

            title: 'FRONTEND',
            titleLine2: 'DEVELOPER',

            role: 'Functie',

            description:
                'Frontendontwikkeling en onderhoud van webapplicaties, waarbij ik met verschillende technologieën werk en samenwerk binnen een ontwikkelingsteam.',

            responsiveUi: 'Responsive UI',
            codeReviews: 'Codebeoordelingen',

            previousBackground: 'Eerdere ervaring',

            backgroundDescription:
                'Voordat ik overstapte naar softwareontwikkeling, werkte ik meer dan tien jaar in ziekenhuisomgevingen. Die ervaring heeft sterke vaardigheden ontwikkeld op het gebied van verantwoordelijkheid, aanpassingsvermogen, communicatie, teamwork en probleemoplossing.',
        },
        education: {
            education: '05 — Opleiding & Certificeringen',
            learning: 'Ontwikkeling',

            title: 'ONTWIKKELING',
            titleLine2: 'IS EEN CONTINU',
            titleLine3: 'PROCES.',

            educationLabel: 'Opleiding',
            higherVocationalTraining: 'Hoger beroepsonderwijs',

            certificationsCourses: 'Certificeringen & cursussen',

            generativeAi: 'Introductie tot Generatieve AI',
            cybersecurity: 'Cybersecurity en Ethisch Hacken',
            seoAiGoogle: 'SEO voor AI en Google',
            responsiblePrompting: 'Verantwoord Prompten: Maximaliseer AI in je bedrijf',
            googleAiProductivity: 'Google: Kunstmatige Intelligentie en Productiviteit',
            copilot: 'Copilot: Microsoft AI-basisprincipes',
            python: 'Introductie tot programmeren met Python',
            seoContent: 'SEO en Contentmarketing',
            excel: 'Excel — Basis tot Intermediair',

            currentlyLearning: 'Momenteel aan het leren',
            inProgress: 'IN UITVOERING',
            educationTitle: 'HOGER BEROEPSONDERWIJS',
            educationTitleLine2: 'MULTIPLATFORM APPLICATIEONTWIKKELING',
            educationInstitution: 'CCC · Officieel centrum voor beroepsonderwijs',
            educationCity: 'Madrid, Spanje',
        },

        projects: {
            selectedWork: '02 — Geselecteerd werk',
            projectCount: '02 Projecten',
            title: 'DIGITALE PRODUCTEN',
            titleLine2: 'BOUWEN MET',
            titleLine3: 'CODE EN DOEL.',

            featuredProject: '01 — Uitgelicht project',
            featuredProjectCount: '01 / 02',

            aboutProject: 'Over het project',

            easylearnDescription:
                'Een door AI ondersteund platform voor het leren van Engels, ontwikkeld rond gestructureerde voortgang, toetsing en dagelijks leren.',

            technologies: 'Technologieën',
            explore: 'Bekijken',

            aiEnglishLearningPlatform:
                'AI-PLATFORM VOOR ENGELS LEREN',

            placementTest: 'EasyLearn-niveautest',
            placementResult:
                'Resultaat van de EasyLearn-niveautest',
            lessonInterface: 'EasyLearn-lesinterface',
            profileProgress:
                'EasyLearn-profiel en leerprogressie',

            selectedProject: '02 / 02 — Geselecteerd project',

            sharenergyDescription:
                'Een full-stack webprototype voor het huren van draagbare powerbanks via QR-gebaseerde stations, met beschikbaarheidsbeheer, verhuurtracking en geautomatiseerde factureringslogica.',

            landingQr:
                'Sharenergy-landingpagina en QR-toegang',
            powerbankSelection:
                'Selectie van een Sharenergy-powerbank',
            rentalTimer: 'Sharenergy-verhuurklok',
            paymentSummary: 'Sharenergy-betalingsoverzicht',

            powerbankRentalWebConcept:
                'WEBCONCEPT VOOR POWERBANKVERHUUR',
        },

        stack: {
            technicalStack: '07 — Technische Stack',
            currentToolset: 'Huidige technologieën',

            title: 'TOOLS DIE IK GEBRUIK',
            titleLine2: 'OM DIGITALE',
            titleLine3: 'PRODUCTEN TE BOUWEN.',

            frontend: 'Frontend',
            backend: 'Backend',
            data: 'Data',
            tools: 'Tools',
            ai: 'AI & Overig',
        },

        contact: {
            contact: '07 — Contact',
            letsTalk: 'Laten we praten',
            openToOpportunities: 'Open voor nieuwe kansen',

            title: 'LATEN WE',
            titleLine2: 'IETS',
            titleLine3: 'NUTTIGS BOUWEN.',

            description:
                'Ik sta open voor mogelijkheden binnen frontend, full-stack en softwareontwikkeling.',

            description2:
                'Heb je een interessant project of een professionele kans? Neem gerust contact met me op.',

            email: 'E-mail',
            linkedin: 'LinkedIn',
            github: 'GitHub',
            madrid: 'MADRID · SPANJE',
        },
    },
}