"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (translations: { fr: string; en: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("en")) {
      setLanguage("en")
    } else {
      setLanguage("fr")
    }
    
    // Check localStorage for saved preference
    const saved = localStorage.getItem("portfolio-language") as Language | null
    if (saved && (saved === "fr" || saved === "en")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  const t = (translations: { fr: string; en: string }) => {
    return translations[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
