import Link from 'next/link'
import type { Project } from '@/content/projects'
import styles from './ProjectIndex.module.css'

/** Index façon tableau suisse : N°, projet, type, stack, année. */
export default function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <div className={styles.table}>
      <div className={`grid12 ${styles.head}`} aria-hidden="true">
        <span className={styles.cNum}>N°</span>
        <span className={styles.cTitle}>Projet</span>
        <span className={styles.cKind}>Type</span>
        <span className={styles.cStack}>Stack</span>
        <span className={styles.cYear}>Année</span>
      </div>
      <ul>
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/projets/${p.slug}/`} className={`grid12 ${styles.row}`}>
              <span className={`${styles.cNum} red`}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.cTitle}>{p.title}</span>
              <span className={styles.cKind}>{p.kind}</span>
              <span className={`${styles.cStack} muted`}>{p.stack.slice(0, 4).join(', ')}</span>
              <span className={styles.cYear}>{p.year ?? '—'}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
