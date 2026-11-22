import type { Metadata } from 'next'
import ProjectIndex from '@/components/ProjectIndex'
import ContactSection from '@/components/ContactSection'
import { projects } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projets',
  alternates: { canonical: '/projets/' },
  description: 'Tous les projets web et mobiles réalisés par Emile Dufoulon, développeur full stack.',
}

export default function ProjetsPage() {
  return (
    <>
      <section className="container" style={{ padding: '56px var(--pad) 32px' }}>
        <h1 style={{ fontSize: 'clamp(56px, 11vw, 160px)', lineHeight: 0.86, letterSpacing: '-0.06em', fontWeight: 800 }}>
          Projets<span className="red">.</span>
        </h1>
        <p className="muted" style={{ marginTop: 24, fontSize: 18 }}>
          {projects.length} projets — du site vitrine à l’application full stack web et mobile.
        </p>
      </section>
      <section className="container" style={{ paddingBottom: 96 }}>
        <ProjectIndex projects={projects} />
      </section>
      <ContactSection />
    </>
  )
}
