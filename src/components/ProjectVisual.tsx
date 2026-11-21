import type { Project } from '@/content/projects'

/** Capture du projet, ou à défaut une vignette sobre dans le style du site. */
export default function ProjectVisual({ project, eager = false }: { project: Project; eager?: boolean }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Capture du projet ${project.title}`}
        loading={eager ? 'eager' : 'lazy'}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
      />
    )
  }
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 6,
        padding: 24,
        background:
          'repeating-linear-gradient(90deg, transparent 0 calc(100%/12 - 1px), var(--line) calc(100%/12 - 1px) calc(100%/12)), var(--surface)',
        fontFamily: 'var(--mono)',
      }}
    >
      <span style={{ fontSize: 12, color: 'var(--muted)' }}>/projets/{project.slug}</span>
      <span style={{ fontSize: 13, color: 'var(--ink)' }}>{project.stack.slice(0, 4).join(' · ')}</span>
    </div>
  )
}
