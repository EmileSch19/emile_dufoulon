import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.logo}>emile.dev</span>
        <span className={styles.copy}>
          Développeur React & Fullstack · Fait avec React + Vite · Déployé sur Vercel
        </span>
        <div className={styles.links}>
          <a href="https://github.com/EmileSch19" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/emile-essomba-dufoulon/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
