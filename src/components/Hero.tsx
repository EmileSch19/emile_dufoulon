import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const terminalLines = [
  { text: '$ whoami',                         color: 'green' },
  { text: 'emile_dufoulon',                   color: 'text' },
  { text: '',                                  color: 'none' },
  { text: '$ cat profile.json',               color: 'green' },
  { text: '{',                                 color: 'text' },
  { text: '  "role": "Dev Web Fullstack",', color: 'text' },
  { text: '  "formation": "Bachelor Chef de Projets Digitaux option Développement Web",', color: 'text' },
  { text: '  "stack": ["React","Next.js","Node.js"],', color: 'text' },
  { text: '  "lighthouse": "> 90",',           color: 'text' },
  { text: '  "openToWork": true',              color: 'green' },
  { text: '}',                                 color: 'text' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return
    const timeout = setTimeout(() => setVisibleLines((v) => v + 1), 100)
    return () => clearTimeout(timeout)
  }, [visibleLines])

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={styles.left}>
          <p className={`section-label fade-in ${styles.available}`}>
            // DEV WEB FULL STACK — DISPONIBLE IMMÉDIATEMENT
          </p>

          <h1 className={`${styles.name} fade-in fade-in-delay-1`}>
            Emile<br />Dufoulon
          </h1>

          <p className={`${styles.desc} fade-in fade-in-delay-2`}>
            Bachelor Chef de Projets Digitaux option Développement Web à l'Eemi Lyon.
            Je crée des interfaces rapides, accessibles et bien architecturées.
          </p>

          <div className={`${styles.pills} fade-in fade-in-delay-3`}>
            {['Rythme 3s/1s', 'Mobilité nationale', 'Stage/Alternance'].map((p) => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>

          <div className={`${styles.ctas} fade-in fade-in-delay-4`}>
            <a href="#projets" className="btn btn-primary">
              Voir les projets ↗
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className={`${styles.terminal} fade-in fade-in-delay-2`}>
          <div className={styles.terminalBar}>
            <span className={`${styles.dot} ${styles.red}`} />
            <span className={`${styles.dot} ${styles.yellow}`} />
            <span className={`${styles.dot} ${styles.green}`} />
            <span className={styles.terminalTitle}>profile.json</span>
          </div>
          <div className={styles.terminalBody}>
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={styles.terminalLine}>
                <span className={styles[line.color] ?? ''}>{line.text}</span>
              </div>
            ))}
            {visibleLines < terminalLines.length && (
              <span className={styles.terminalCursor} />
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#skills" className={styles.scrollHint} aria-label="Scroll down">
        <span className={styles.scrollLine} />
      </a>
    </section>
  )
}
