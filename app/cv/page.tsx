'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { Sidebar } from '@/components/Sidebar'
import { ExperienceGroup } from '@/components/ExperienceGroup'
import { TagFilter } from '@/components/TagFilter'
import { Timeline } from '@/components/Timeline'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'
import { getCv } from '@/data/cv'

export default function CVPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const { lang } = useLanguage()
  const t = translations[lang]
  const cv = useMemo(() => getCv(lang), [lang])

  /* Collect all unique tags in display order */
  const allTags = useMemo(() => {
    const seen = new Set<string>()
    cv.experiences.forEach((g) =>
      g.missions.forEach((m) => m.tags.forEach((t) => seen.add(t)))
    )
    return Array.from(seen)
  }, [cv.experiences])

  function handleTagClick(tag: string) {
    setActiveTag((prev) => (prev === tag ? null : tag))
  }

  function handleReset() {
    setActiveTag(null)
  }

  function handleTimelineClick(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* ── Sticky Header ─────────────────────────────────── */}
      <header
        className="no-print sticky top-0 z-20 flex items-center justify-between px-4 md:px-6 py-3 border-b backdrop-blur-md"
        style={{
          background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-3">
          <Link href="/">
            <motion.span
              whileHover={{ x: -2 }}
              className="flex items-center gap-1.5 text-sm font-medium cursor-pointer"
              style={{ color: 'var(--text-muted)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              {t.nav_home}
            </motion.span>
          </Link>

          <span style={{ color: 'var(--border)' }}>·</span>

          <span className="text-sm font-semibold" style={{ color: 'var(--text-mid)' }}>
            Ghislain <span style={{ color: 'var(--sn-green)' }}>GIRARD</span>
            <span className="hidden sm:inline text-xs font-normal ml-2" style={{ color: 'var(--text-muted)' }}>
              - {t.cv_section_label}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/cv-ghislain-girard.pdf"
            download
            className="no-print"
          >
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, var(--sn-green), var(--sn-teal))',
                color: '#fff',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.nav_download}
            </motion.span>
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* ── Body (sidebar + main) ─────────────────────────── */}
      <div className="flex flex-col md:flex-row flex-1 min-h-0">
        {/* Sidebar – sticky on desktop */}
        <div className="hidden md:block shrink-0 sticky top-[57px] self-start h-[calc(100vh-57px)] overflow-y-auto">
          <Sidebar cv={cv} />
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-6 md:py-8">
          {/* Mobile sidebar at top */}
          <div className="md:hidden mb-6">
            <Sidebar cv={cv} />
          </div>
          {/* Header + bio */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <p
              className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] mb-1"
              style={{ color: 'var(--sn-teal)' }}
            >
              {t.cv_section_label}
            </p>
            <h1 className="hidden md:block text-3xl md:text-4xl font-extrabold leading-tight mb-3">
              <span style={{ color: 'var(--heading-text)' }}>Ghislain </span>
              <span style={{ color: 'var(--sn-green)' }}>GIRARD</span>
            </h1>
            <p
              className="text-sm leading-relaxed max-w-2xl"
              style={{ color: 'var(--text-mid)' }}
            >
              {cv.bio}
            </p>
          </motion.div>

          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-5"
          >
            <h2 className="text-lg font-extrabold" style={{ color: 'var(--heading-sub)' }}>
              {t.cv_experiences_title}
            </h2>
          </motion.div>

          {/* Timeline */}
          <Timeline onSegmentClick={handleTimelineClick} />

          {/* Tag filter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <TagFilter
              allTags={allTags}
              activeTag={activeTag}
              onTagClick={handleTagClick}
              onReset={handleReset}
            />
          </motion.div>

          {/* Experience groups */}
          {cv.experiences.map((group, i) => (
            <ExperienceGroup
              key={group.id}
              group={group}
              activeTag={activeTag}
              onTagClick={handleTagClick}
              index={i}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
