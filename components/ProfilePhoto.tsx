'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/data/i18n'

const PHOTO_URL =
  'https://res.cloudinary.com/db2sa2bxv/image/upload/v1777537222/1763042387590_al6cgq.jpg'

interface ProfilePhotoProps {
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
}

export function ProfilePhoto({ width, height, priority, className, sizes }: ProfilePhotoProps) {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <Image
      src={PHOTO_URL}
      alt={t.profile_photo_alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  )
}
