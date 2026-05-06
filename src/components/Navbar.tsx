import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Skills',     href: '#skills' },
  { label: 'Projets',    href: '#projets' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          emile.dev<span className={styles.cursor} />
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
          <a
            href="/cv-emile-dufoulon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${styles.cvBtn}`}
          >
            CV ↗
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={menuOpen ? styles.open : ''} />
          <span className={menuOpen ? styles.open : ''} />
          <span className={menuOpen ? styles.open : ''} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv-emile-dufoulon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.mobileCv}`}
            onClick={() => setMenuOpen(false)}
          >
            Télécharger CV ↗
          </a>
        </div>
      )}
    </header>
  )
}
