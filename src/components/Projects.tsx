import { useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../types'
import styles from './Projects.module.css'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`card ${project.featured ? 'featured' : ''} ${styles.card}`}>
      {project.featured && (
        <p className={styles.featuredBadge}>// FEATURED</p>
      )}
      <div className={styles.cardTop}>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <div className={styles.cardLinks}>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBtn}
            style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}
          >
            repo ↗
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkBtn} ${styles.linkBtnGreen}`}
          >
            live ↗
          </a>
        </div>
      </div>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </article>
  )
}

const FILTERS = ['Tous', 'React', 'JavaScript', 'Python', 'HTML/CSS']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => {
          if (activeFilter === 'HTML/CSS') return p.tags.some((t) => t === 'HTML' || t === 'CSS')
          return p.tags.some((t) => t.includes(activeFilter))
        })

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <section id="projets">
      <div className="container">
        <p className="section-label">// 03 — PROJETS</p>
        <div className={styles.titleRow}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Réalisations</h2>
          {/* Filters */}
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {featured && (
            <div className={styles.featured}>
              <ProjectCard project={featured} />
            </div>
          )}
          <div className={styles.rest}>
            {rest.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
