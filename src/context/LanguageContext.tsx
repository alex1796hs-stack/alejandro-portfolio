import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from 'react'

import {
    translations,
    type Language,
} from '../translations/translation'

type Translation = (typeof translations)['es']

type LanguageContextType = {
    language: Language
    setLanguage: (language: Language) => void
    t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

export const LanguageProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [language, setLanguage] = useState<Language>('es')

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language] as Translation,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error(
            'useLanguage must be used inside LanguageProvider'
        )
    }

    return context
}