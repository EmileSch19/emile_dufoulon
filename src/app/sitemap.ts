import type { MetadataRoute } from 'next'
import { projects } from '@/content/projects'

export const dynamic = 'force-static'

const SITE = 'https://emile-dufoulon.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/projets/`, changeFrequency: 'monthly', priority: 0.8 },
    ...projects.map((p) => ({
      url: `${SITE}/projets/${p.slug}/`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
