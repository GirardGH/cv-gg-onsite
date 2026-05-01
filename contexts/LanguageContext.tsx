'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'fr' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('lang')
    if (stored === 'fr' || stored === 'en') {
      setLang(stored)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    if (hydrated) {
      window.localStorage.setItem('lang', lang)
    }
  }, [hydrated, lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
