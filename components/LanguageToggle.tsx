'use client'

import { motion } from 'framer-motion'
import { useLanguage, type Lang } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const t = translations[lang]

  return (
    <div
      className="flex items-center rounded-full border p-0.5 gap-0.5"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      {(['fr', 'en'] as Lang[]).map((l) => (
        <motion.button
          key={l}
          onClick={() => setLang(l)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold cursor-pointer transition-colors duration-200"
          style={{
            background: lang === l ? 'var(--sn-green)' : 'transparent',
            color: lang === l ? '#fff' : 'var(--text-muted)',
          }}
          aria-label={l === 'fr' ? t.lang_french : t.lang_english}
        >
          <div className="flex items-center gap-1">
            <span className={`fi ${l === 'fr' ? 'fi-fr' : 'fi-gb'}`} />
            {/* <span className="text-[10px] opacity-70 uppercase">{l}</span> */}
          </div>
          {/* <span className="uppercase tracking-wide">{l}</span> */}
        </motion.button>
      ))}
    </div>
  )
}
