import styles from './Experience.module.css'

const bullets = [
  'Gain de +30% sur le temps de chargement grâce à l\'optimisation des performances web.',
  'Développement de composants UI réactifs en HTML, CSS, JavaScript et React.',
  'Collaboration avec l\'équipe design pour améliorer l\'UX et l\'ergonomie.',
  'Tests multi-navigateurs et correction de bugs pour garantir stabilité et compatibilité.',
]

const formations = [
  {
    title: 'Master 1 Développement Web & Mobile',
    school: 'ESTIAM — Lyon, France',
    period: 'En cours',
  },
  {
    title: 'Bachelor Concepteur Développeur FullStack',
    school: 'ESTIAM — Lyon, France',
    period: 'Oct 2024 – Sept 2025',
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">// 04 — EXPÉRIENCE</p>
        <h2 className="section-title">Expérience & Formations</h2>

        <div className={styles.grid}>
          {/* Stage */}
          <div className={`card ${styles.stageCard}`}>
            <div className={styles.greenBar} />
            <div className={styles.stageContent}>
              <div className={styles.stageHeader}>
                <div>
                  <h3 className={styles.stageTitle}>Développeur Front-End</h3>
                  <p className={styles.stageCompany}>Unidrine · Stage · Lyon</p>
                </div>
                <span className={styles.stagePeriod}>Juin – Août 2023</span>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.bullets}>
                {bullets.map((b, i) => (
                  <li key={i} className={styles.bullet}>
                    <span className={styles.bulletDot} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formations */}
          <div className={styles.formationsCol}>
            {formations.map((f) => (
              <div key={f.title} className={`card ${styles.formationCard}`}>
                <div className={styles.formationGreenBar} />
                <div className={styles.formationInner}>
                  <div>
                    <h3 className={styles.formationTitle}>{f.title}</h3>
                    <p className={styles.formationSchool}>{f.school}</p>
                  </div>
                  <span className={styles.formationPeriod}>{f.period}</span>
                </div>
              </div>
            ))}

            {/* Infos */}
            <div className={`card ${styles.infoCard}`}>
              <p className="section-label" style={{ marginBottom: '16px' }}>// INFOS COMPLÉMENTAIRES</p>
              <div className={styles.infoList}>
                <span className={styles.infoItem}>⚽ Ailier d'une équipe de football</span>
                <span className={styles.infoItem}>🎵 Rap, Rock, Métal, Indée</span>
                <span className={styles.infoItem}>🌍 Anglais A2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
