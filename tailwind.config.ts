import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  safelist: [
    'fi',
    'fi-fr',
    'fi-gb',
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'sn-green': 'var(--sn-green)',
        'sn-dark': 'var(--sn-dark)',
        'sn-mid': 'var(--sn-mid)',
        'sn-teal': 'var(--sn-teal)',
        'sn-accent': 'var(--sn-accent)',
        'sn-navy': 'var(--sn-navy)',
        'bg-base': 'var(--bg)',
        'bg-card': 'var(--bg-card)',
        'text-mid-custom': 'var(--text-mid)',
        'text-muted-custom': 'var(--text-muted)',
        'sn-green-light': 'var(--sn-green-light)',
        'sn-teal-light': 'var(--sn-teal-light)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'sn': '0 0 0 3px var(--sn-green)',
        'sn-card': '0 4px 24px 0 rgba(0,0,0,0.12)',
        'sn-card-hover': '0 8px 32px 0 rgba(0,0,0,0.18)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
export default config
