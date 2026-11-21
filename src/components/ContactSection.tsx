import { alternance, profile } from '@/content/profile'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <section id="contact" className={`container ${styles.section}`}>
      <div className="grid12">
        <span className={styles.label}>Contact</span>
        <div className={styles.body}>
          {alternance.open && (
            <p className={styles.kicker}>
              <span className="dot pulse red" aria-hidden="true" /> {alternance.title} · {alternance.availability}
            </p>
          )}
          <h2 className={styles.title}>
            {alternance.open ? 'Recrutez-moi en alternance' : 'Travaillons ensemble'}<span className="red">.</span>
          </h2>
          <a href={`mailto:${profile.email}`} className={styles.email}>{profile.email}</a>
          <div className={styles.links}>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profile.cv} className="red">CV détaillé (PDF) ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
