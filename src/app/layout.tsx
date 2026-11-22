import type { Metadata, Viewport } from 'next'
import '@fontsource-variable/inter-tight'
import '@fontsource-variable/jetbrains-mono'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  metadataBase: new URL('https://emile-dufoulon.netlify.app'),
  title: {
    default: `${profile.name} — Développeur full stack en alternance`,
    template: `%s — ${profile.name}`,
  },
  description:
    'Emile Dufoulon, développeur full stack (React, Next.js, Node.js, Django) à Lyon, ouvert à une alternance — rythme 3 semaines / 1 semaine.',
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: profile.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Emile Dufoulon — développeur full stack, ouvert à une alternance' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0b' },
  ],
}

/* Appliqué avant l'affichage pour éviter un flash de mauvais thème :
   choix enregistré, sinon préférence de l'appareil. */
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only">Aller au contenu</a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <footer className="container" style={{ padding: '32px var(--pad) 48px', fontSize: 13, color: 'var(--muted)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, borderTop: '1px solid var(--line)' }}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Next.js · TypeScript · Netlify</span>
        </footer>
      </body>
    </html>
  )
}
