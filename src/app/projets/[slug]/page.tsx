import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectVisual from '@/components/ProjectVisual'
import ContactSection from '@/components/ContactSection'
import { getProject, projects } from '@/content/projects'
import styles from './project.module.css'

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projets/${project.slug}/` },
    openGraph: { url: `/projets/${project.slug}/`, ...(project.image ? { images: [project.image] } : {}) },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <article className="container">
        <nav className={styles.crumbs} aria-label="Fil d’Ariane">
          <Link href="/projets/">Projets</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{project.title}</span>
        </nav>

        <header className={styles.head}>
          <p className={styles.kicker}>
            <span className="red">{String(index + 1).padStart(2, '0')}</span>
            {project.kind && <span>{project.kind}</span>}
            {project.year && <span className="muted">{project.year}</span>}
          </p>
          <h1 className={styles.title}>{project.title}<span className="red">.</span></h1>
          <p className={styles.hook}>{project.hook ? `« ${project.hook} »` : project.summary}</p>
        </header>

        <dl className={`grid12 ${styles.meta}`}>
          <div><dt>Rôle</dt><dd>{project.role ?? '—'}</dd></div>
          <div><dt>Type</dt><dd>{project.kind ?? '—'}</dd></div>
          <div><dt>Année</dt><dd>{project.year ?? '—'}</dd></div>
          <div>
            <dt>Liens</dt>
            <dd className={styles.links}>
              {project.links?.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="red">Démo ↗</a>}
              {project.links?.repo && <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="red">Code ↗</a>}
            </dd>
          </div>
        </dl>

        <div className={styles.visual}>
          <ProjectVisual project={project} eager />
        </div>

        {(project.context || project.highlights) && (
          <section className={`grid12 ${styles.body}`}>
            {project.context && (
              <div className={styles.context}>
                <h2 className={styles.label}>Contexte</h2>
                <p>{project.context}</p>
              </div>
            )}
            {project.highlights && (
              <div className={styles.highlights}>
                <h2 className={styles.label}>Techniquement</h2>
                <ol>
                  {project.highlights.map((h, i) => (
                    <li key={h}>
                      <span className="red">{String(i + 1).padStart(2, '0')}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </section>
        )}

        {project.architecture && (
          <section className={styles.archi}>
            <h2 className={styles.label}>Architecture</h2>
            <ol className={styles.archiRow}>
              {project.architecture.map((node, i) => (
                <li key={node.label}>
                  <div className={`${styles.node} ${i === 1 ? styles.nodeAccent : ''}`}>
                    <strong>{node.label}</strong>
                    <span className="mono muted">{node.detail}</span>
                  </div>
                  {i < project.architecture!.length - 1 && <span className={styles.arrow} aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className={styles.foot}>
          <ul className={styles.stack} aria-label="Technologies utilisées">
            {project.stack.map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
          <Link href={`/projets/${next.slug}/`} className={styles.next}>
            <span className="muted">Projet suivant</span>
            <strong>{next.title} →</strong>
          </Link>
        </section>
      </article>
      <ContactSection />
    </>
  )
}
