'use client'

import { useEffect, useState } from 'react'
import styles from './SiteHeader.module.css'

type Theme = 'light' | 'dark'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* navigation privée */ }
    setTheme(next)
  }

  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isDark ? (
          <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
        ) : (
          <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" />
        )}
      </svg>
      <span className={styles.toggleText}>{isDark ? 'Clair' : 'Sombre'}</span>
    </button>
  )
}
