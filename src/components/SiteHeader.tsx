import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { alternance, profile } from '@/content/profile'
import styles from './SiteHeader.module.css'

export default function SiteHeader() {
  return (
    <div className={styles.sticky}>
      {alternance.open && (
        <div className={styles.banner}>
          <div className={`container ${styles.bannerInner}`}>
            <span className={styles.bannerStatus}>
              <span className="dot pulse" aria-hidden="true" />
              <strong>{alternance.title}</strong>
            </span>
            <span className={styles.bannerDetails}>
              {profile.role} · {alternance.rhythm} · {alternance.availability}
            </span>
            <Link href="/#contact" className={styles.bannerCta}>Me contacter →</Link>
          </div>
        </div>
      )}

      <header className={styles.header}>
        <div className={`container grid12 ${styles.inner}`}>
          <Link href="/" className={styles.name}>{profile.name}</Link>
          <span className={`${styles.meta} muted`}>{profile.role}<br />{profile.city}</span>
          <span className={`${styles.meta} muted`}>{profile.school}<br />{alternance.mobility}</span>
          <nav className={styles.nav} aria-label="Navigation principale">
            <Link href="/projets/">Projets</Link>
            <Link href="/#parcours">Parcours</Link>
            <a href={profile.cv} className="red">CV</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>
    </div>
  )
}
