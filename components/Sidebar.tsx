'use client'

import { motion } from 'framer-motion'
import { CertBadge } from './CertBadge'
import { SkillBar } from './SkillBar'
import { ProfilePhoto } from './ProfilePhoto'
import type { CVData } from '@/data/cv'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'

interface SidebarProps {
  cv: CVData
}

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
}

function SidebarSection({
  title,
  children,
  index,
}: {
  title: string
  children: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="mb-6"
    >
      <h2
        className="text-[10px] font-bold uppercase tracking-[0.18em] mb-3 pb-1.5 border-b"
        style={{ color: 'var(--sn-green)', borderColor: 'rgba(98,216,78,0.2)' }}
      >
        {title}
      </h2>
      {children}
    </motion.div>
  )
}

export function Sidebar({ cv }: SidebarProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <aside
      className="sidebar w-full md:w-64 xl:w-72 shrink-0 flex flex-col overflow-y-auto"
      style={{ minHeight: 'auto' }}
    >
      <div className="p-5 flex flex-col gap-0">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-5 mt-2"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 0 3px var(--sn-green), 0 0 20px rgba(98,216,78,0.25)' }}
            />
            <div className="relative w-24 h-24 rounded-full overflow-hidden"
              style={{ outline: '2px solid var(--sn-green)', outlineOffset: '2px' }}
            >
              <ProfilePhoto
                width={96}
                height={96}
                className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
                sizes="96px"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name in sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="text-center mb-5"
        >
          <h1
            className="text-lg font-extrabold leading-tight"
            style={{ color: 'var(--sidebar-text)' }}
          >
            {cv.firstName} <span style={{ color: 'var(--sn-green)' }}>{cv.lastName}</span>
          </h1>
          <p className="text-xs mt-1 leading-snug" style={{ color: 'var(--sidebar-muted)' }}>
            {cv.title}
          </p>
        </motion.div>

        {/* Contact */}
        <SidebarSection title={t.sidebar_contact} index={0}>
          <ul className="space-y-2">
            <ContactItem
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.37a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.75-1.75a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              }
              label={cv.contact.phone}
              href={`tel:${cv.contact.phone.replace(/\s/g, '')}`}
            />
            <ContactItem
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              }
              label={cv.contact.email}
              href={`mailto:${cv.contact.email}`}
            />
            <ContactItem
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              }
              label={cv.contact.location}
            />
            <ContactItem
              icon={
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              }
              label={cv.contact.experience}
            />
          </ul>
        </SidebarSection>

        {/* Certifications */}
        <SidebarSection title={t.sidebar_certs} index={1}>
          <div>
            {cv.certifications.map((cert, i) => (
              <CertBadge key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </SidebarSection>

        {/* Skills */}
        <SidebarSection title={t.sidebar_skills} index={2}>
          <div>
            {cv.skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </SidebarSection>

        {/* Soft skills */}
        <SidebarSection title={t.sidebar_soft} index={3}>
          <div className="flex flex-wrap gap-1.5">
            {cv.softSkills.map((skill) => (
              <span key={skill} className="soft-pill" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)', color: 'var(--sidebar-text)' }}>
                {skill}
              </span>
            ))}
          </div>
        </SidebarSection>

        {/* Education */}
        <SidebarSection title={t.sidebar_education} index={4}>
          {cv.education.map((edu) => (
            <div key={edu.degree} className="mb-1">
              <div className="flex items-baseline gap-2">
                <p className="text-xs font-mono font-semibold" style={{ color: 'var(--sn-green)' }}>
                  {edu.year}
                </p>
                <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--sidebar-text)' }}>
                  {edu.degree}
                </p>
              </div>
              {edu.specialty && (
                <p className="text-xs mt-0.5 ml-0" style={{ color: 'var(--sidebar-muted)' }}>
                  {edu.specialty}
                </p>
              )}
            </div>
          ))}
        </SidebarSection>

        {/* Languages */}
        <SidebarSection title={t.sidebar_languages} index={5}>
          <ul className="space-y-1.5">
            {cv.languages.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between">
                <span className="text-xs font-medium" style={{ color: 'var(--sidebar-text)' }}>
                  {lang.name}
                </span>
                <span
                  className="text-[11px] font-mono px-2 py-0.5 rounded"
                  style={{ background: 'rgba(98,216,78,0.12)', color: 'var(--sn-green)' }}
                >
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </SidebarSection>
      </div>
    </aside>
  )
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--sidebar-muted)' }}>
      <span style={{ color: 'var(--sn-green)', flexShrink: 0 }}>{icon}</span>
      <span className="truncate">{label}</span>
    </div>
  )

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="hover:opacity-80 transition-opacity duration-150 cursor-pointer"
        >
          {content}
        </a>
      </li>
    )
  }

  return <li>{content}</li>
}
