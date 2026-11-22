import Link from 'next/link'
import ProjectIndex from '@/components/ProjectIndex'
import ProjectVisual from '@/components/ProjectVisual'
import ContactSection from '@/components/ContactSection'
import { projects, type Project } from '@/content/projects'
import { alternance, profile, stack, timeline } from '@/content/profile'
import styles from './page.module.css'

function ProjectTile({ project, n }: { project: Project; n: number }) {
  const size = project.bento ?? 'small'
  const num = String(n).padStart(2, '0')

  if (size === 'small') {
    return (
      <Link href={`/projets/${project.slug}/`} className={`${styles.tile} ${styles.small} ${styles.imageTile}`}>
        <ProjectVisual project={project} />
        <span className={styles.caption}><span className="red">{num}</span> {project.title}</span>
      </Link>
    )
  }

  return (
    <Link href={`/projets/${project.slug}/`} className={`${styles.tile} ${styles[size]}`}>
      <div className={styles.visual}><ProjectVisual project={project} /></div>
      <div className={styles.tileBody}>
        <span className={`red ${styles.num}`}>{num}</span>
        <span className={styles.tileTitle}>{project.title}</span>
        <span className={`muted ${styles.tileSummary}`}>{project.summary}</span>
        <span className={styles.tileYear}>{project.year}</span>
      </div>
    </Link>
  )
}

export default function Home() {
  const bentoProjects = projects.filter((p) => p.bento)
  const large = bentoProjects.filter((p) => p.bento === 'large')
  const others = bentoProjects.filter((p) => p.bento !== 'large')

  return (
    <>
      {/* ── Hero ── */}
      <section className="container">
        <h1 className={styles.name}>Emile<br />Dufoulon<span className="red">.</span></h1>

        <div className={`grid12 ${styles.intro}`}>
          {alternance.open && (
            <div className={styles.alternance}>
              <p className={styles.altStatus}>
                <span className="dot pulse" aria-hidden="true" />
                {alternance.title}
              </p>
              <ul className={styles.altList}>
                <li><span className="muted">Poste</span>{alternance.target}</li>
                <li><span className="muted">Rythme</span>3 sem. entreprise / 1 sem. école</li>
                <li><span className="muted">Début</span>{alternance.availability}</li>
                <li><span className="muted">Lieu</span>{alternance.mobility}</li>
              </ul>
              <div className={styles.altActions}>
                <a href="#contact" className="btn btn-red">Me contacter</a>
                <a href={profile.cv} className="btn">Télécharger le CV</a>
              </div>
            </div>
          )}
          <div className={styles.pitch}>
            <p className={styles.pitchText}>{profile.pitch}</p>
            <p className="mono muted" style={{ fontSize: 13 }}>React · Next.js · TypeScript · Node.js · Express · Django · PostgreSQL</p>
          </div>
        </div>
      </section>

      {/* ── Bento ── */}
      <section className="container" aria-labelledby="travaux">
        <h2 id="travaux" className="rule"><span>Travaux choisis</span><Link href="/projets/" className="muted">Tous les projets →</Link></h2>
        <div className={styles.bento}>
          {large.map((p) => (
            <ProjectTile key={p.slug} project={p} n={projects.indexOf(p) + 1} />
          ))}

          <div className={`${styles.tile} ${styles.portrait}`}>
            <img src="/emile.jpg" alt="Portrait d’Emile Dufoulon" className={styles.portraitImg} width={320} height={320} />
            <div className={styles.portraitBody}>
              <strong>{profile.school}</strong>
              <span className="muted">{profile.languages}</span>
            </div>
          </div>

          {others.map((p) => (
            <ProjectTile key={p.slug} project={p} n={projects.indexOf(p) + 1} />
          ))}

          <div className={`${styles.tile} ${styles.info}`}>
            <span className={styles.tileLabel}>Stack</span>
            <ul className={styles.stackList}>{stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>

          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${styles.tile} ${styles.info}`}>
            <span className={styles.tileLabel}>GitHub</span>
            <span className={styles.big}>{profile.githubHandle} ↗</span>
          </a>

          <a href={profile.cv} className={`${styles.tile} ${styles.info} ${styles.cv}`}>
            <span className={styles.tileLabel}>CV détaillé</span>
            <span className={styles.big}>Télécharger ↗</span>
          </a>
        </div>
      </section>

      {/* ── Tous les projets ── */}
      <section className="container" style={{ paddingBottom: 96 }} aria-labelledby="index">
        <h2 id="index" className="sr-only">Tous les projets</h2>
        <ProjectIndex projects={projects} />
      </section>

      {/* ── Parcours ── */}
      <section id="parcours" className="container" style={{ paddingBottom: 96 }}>
        <h2 className="rule"><span>Parcours</span><span className="muted">Période</span></h2>
        <ul className={styles.timeline}>
          {timeline.map((t) => (
            <li key={t.title} className="grid12">
              <span className={`red ${styles.tlType}`}>{t.type}</span>
              <span className={styles.tlTitle}>{t.title}</span>
              <span className={`muted ${styles.tlPeriod}`}>{t.period}</span>
            </li>
          ))}
        </ul>
      </section>

      <ContactSection />
    </>
  )
}
