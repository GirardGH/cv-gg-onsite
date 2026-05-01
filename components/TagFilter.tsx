'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'

interface TagFilterProps {
  allTags: string[]
  activeTag: string | null
  onTagClick: (tag: string) => void
  onReset: () => void
}

export function TagFilter({ allTags, activeTag, onTagClick, onReset }: TagFilterProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2">
        {activeTag && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onReset}
            className="flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full cursor-pointer transition-all duration-150 border"
            style={{
              background: 'var(--sn-green)',
              color: '#fff',
              borderColor: 'var(--sn-green)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {t.filter_reset}
          </motion.button>
        )}
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => activeTag === tag ? onReset() : onTagClick(tag)}
            className={`tag ${activeTag === tag ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>
      {activeTag && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          {t.filter_active}{' '}
          <span className="font-mono font-medium" style={{ color: 'var(--sn-green)' }}>
            {activeTag}
          </span>
          {' '}- {t.filter_info}
        </motion.p>
      )}
    </div>
  )
}
