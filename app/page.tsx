'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { ProfilePhoto } from '@/components/ProfilePhoto'
import { RealisationCard } from '@/components/RealisationCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'
import { getCv } from '@/data/cv'

/* ── Letter-by-letter animation ─────────────────────────────── */
function AnimatedName({ name }: { name: string }) {
  const chars = name.split('')
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
  }
  const char = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none"
      aria-label={name}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={char}
          className="inline-block"
          style={{
            color: c === c.toUpperCase() && c !== ' ' ? 'var(--sn-green)' : 'var(--heading-text)',
            textShadow: c === c.toUpperCase() && c !== ' '
              ? '0 0 40px rgba(98,216,78,0.4)'
              : 'none',
          }}
        >
          {c === ' ' ? ' ' : c}
        </motion.span>
      ))}
    </motion.h1>
  )
}

/* ── Animated stat counter ───────────────────────────────────── */
function AnimatedCounter({
  value,
  label,
  delay,
  prefix,
}: {
  value: number
  label: string
  delay: number
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1200
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center px-6 py-4"
    >
      <div
        className="text-4xl md:text-5xl font-extrabold font-mono tabular-nums"
        style={{ color: 'var(--sn-green)' }}
      >
        {prefix ? prefix : count}
      </div>
      <div className="text-sm mt-1 font-medium" style={{ color: 'var(--text-muted)' }}>
        {label}
      </div>
    </motion.div>
  )
}

/* ── Landing Page ────────────────────────────────────────────── */
export default function LandingPage() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const cv = useMemo(() => getCv(lang), [lang])

  return (
    <main
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Ambient background blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--sn-teal) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--sn-green) 0%, transparent 70%)' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="text-sm font-mono font-medium px-3 py-1 rounded-full border"
            style={{
              color: 'var(--sn-green)',
              borderColor: 'var(--sn-green)',
              background: 'rgba(98,216,78,0.08)',
            }}
          >
            {t.landing_badge}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <LanguageToggle />
          <ThemeToggle />
        </motion.div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: '0 0 0 4px var(--sn-green), 0 0 40px rgba(98,216,78,0.3)',
              borderRadius: '50%',
            }}
          />
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden">
            <ProfilePhoto
              width={144}
              height={144}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 112px, 144px"
              priority
            />
          </div>
        </motion.div>

        {/* Animated name */}
        <div className="mb-4">
          <AnimatedName name="Ghislain GIRARD" />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-lg md:text-2xl font-semibold mb-2"
          style={{ color: 'var(--sn-accent)' }}
        >
          {t.landing_subtitle_title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="text-sm md:text-base max-w-md"
          style={{ color: 'var(--text-muted)' }}
        >
          {t.landing_tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x rounded-2xl overflow-hidden"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          {cv.stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={1.9 + i * 0.15}
              prefix={stat.prefix}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center"
        >
          <Link href="/cv">
            <motion.span
              whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(98,216,78,0.35)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm cursor-pointer shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--sn-green), var(--sn-teal))',
                color: '#fff',
              }}
            >
              {t.landing_cta_view}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.span>
          </Link>

          <a href="/cv-ghislain-girard.pdf" download>
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm cursor-pointer border"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-mid)',
                background: 'var(--bg-card)',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.landing_cta_download}
            </motion.span>
          </a>
        </motion.div>

        {/* Scroll indicator → réalisations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="mt-16"
        >
          <motion.button
            onClick={() => {
              const el = document.getElementById('realisations')
              if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1, opacity: 1 }}
            className="flex flex-col items-center gap-1 cursor-pointer border-none bg-transparent"
            style={{ color: 'var(--text-muted)', opacity: 0.7 }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">{t.landing_scroll_label}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.button>
        </motion.div>
      </section>

      {/* ── Réalisations clés ──────────────────────────────────── */}
      <section
        id="realisations"
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 py-20"
        style={{ background: 'var(--bg)' }}
      >
        {/* Subtle bg accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--sn-green) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-[10%] left-[-5%] w-[35vw] h-[35vw] rounded-full opacity-8 blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--sn-teal) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
              style={{ color: 'var(--sn-teal)' }}
            >
              {t.real_section_label}
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: 'var(--heading-text)' }}
            >
              {t.real_title}{' '}
              <span style={{ color: 'var(--sn-green)' }}>{t.real_highlight}</span>{' '}
              {t.real_title2}
            </h2>
            <p className="text-sm mt-2 max-w-xl" style={{ color: 'var(--text-muted)' }}>
              {t.real_desc}
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cv.realisations.map((item, i) => (
              <RealisationCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <Link href="/cv">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(98,216,78,0.3)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, var(--sn-green), var(--sn-teal))',
                  color: '#fff',
                }}
              >
                {t.real_cta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
