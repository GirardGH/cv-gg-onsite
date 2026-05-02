'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Realisation } from '@/data/cv'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'

const SECTION_LABELS = [
  { key: 'context',  labelKey: 'real_context',  color: '#00A9A5' },
  { key: 'problem',  labelKey: 'real_problem',  color: '#F97316' },
  { key: 'solution', labelKey: 'real_solution', color: '#62D84E' },
  { key: 'impact',   labelKey: 'real_impact',   color: '#3ABFB8' },
] as const

/* Highlight numbers, percentages and "×" multipliers in text */
function HighlightNumbers({ text, highlightColor }: { text: string; highlightColor: string }) {
  const parts = text.split(/(~?\d+[%×x]?(?:\s?fois)?|\d+\+)/g)
  return (
    <>
      {parts.map((part, i) =>
        /~?\d+[%×x]?(?:\s?fois)?|\d+\+/.test(part) ? (
          <strong key={i} style={{ color: highlightColor, fontWeight: 700 }}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

interface Props {
  item: Realisation
  index: number
}

export function RealisationCard({ item, index }: Props) {
  const [open, setOpen] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border overflow-hidden cursor-pointer"
      style={{
        background: 'var(--bg-card)',
        borderColor: open ? item.levelColor : 'var(--border)',
        boxShadow: open ? `0 0 0 1px ${item.levelColor}33, 0 4px 24px rgba(0,0,0,0.08)` : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onClick={() => setOpen((v) => !v)}
    >
      {/* ── Compact header ─────────────────────────────── */}
      <div className="p-5 flex items-start gap-3">
        {/* Colored left bar */}
        <div
          className="w-1 self-stretch rounded-full shrink-0"
          style={{ background: item.levelColor, minHeight: '44px' }}
        />

        <div className="flex-1 min-w-0">
          {/* Level badge + title row */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              className="text-sm font-bold leading-snug"
              style={{ color: 'var(--heading-text)' }}
            >
              {item.title}
            </h3>
            <span
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full shrink-0 mt-0.5 whitespace-nowrap"
              style={{ background: `${item.levelColor}1A`, color: item.levelColor }}
            >
              {item.level}
            </span>
          </div>

          {/* Hook — the punch line */}
          <p
            className="text-xs font-medium leading-snug mb-3"
            style={{ color: item.levelColor, opacity: 0.9 }}
          >
            {item.oneliner}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-0.5 rounded"
                style={{ background: 'var(--sn-mid)', color: 'var(--sn-accent)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 mt-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 6l4 4 4-4"
              stroke="var(--text-muted)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* ── Expanded detail ─────────────────────────────── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-5 pt-3 grid sm:grid-cols-2 gap-5 border-t"
              style={{ borderColor: 'var(--border)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {SECTION_LABELS.map(({ key, labelKey, color }) => {
                const val = item[key as keyof Realisation]
                if (!val) return null
                const isArray = Array.isArray(val)
                return (
                  <div key={key}>
                    {/* Section label */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.15em]"
                        style={{ color }}
                      >
                        {t[labelKey]}
                      </span>
                    </div>

                    {isArray ? (
                      <ul className="space-y-1.5">
                        {(val as string[]).map((line, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs leading-relaxed"
                            style={{ color: 'var(--text-mid)' }}
                          >
                            <span
                              className="mt-[5px] w-1 h-1 rounded-full shrink-0"
                              style={{ background: color }}
                            />
                            {/* Highlight numbers in impact items */}
                            <span className="min-w-0">
                            {key === 'impact' ? (
                              <HighlightNumbers text={line} highlightColor={color} />
                            ) : (
                              line
                            )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                        {key === 'problem' ? (
                          <HighlightNumbers text={val as string} highlightColor={color} />
                        ) : (
                          (val as string)
                        )}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
