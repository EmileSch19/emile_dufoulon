import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

const contactLinks = [
  { label: 'Email',    value: 'emile.dufoulon@outlook.com', href: 'mailto:emile.dufoulon@outlook.com' },
  { label: 'LinkedIn', value: 'emile-essomba-dufoulon',     href: 'https://linkedin.com/in/emile-essomba-dufoulon/' },
  { label: 'GitHub',   value: 'github.com/EmileSch19',       href: 'https://github.com/EmileSch19' },
  { label: 'Portfolio live', value: 'portfolioemile.vercel.app', href: 'https://portfolio-emile-nine.vercel.app/' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Redirect to mailto as fallback (no backend)
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:emile.dufoulon@outlook.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">// 05 — CONTACT</p>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className={styles.subtitle}>
          Disponible immédiatement pour une alternance ou un stage.<br />
          Rythme 4j/1j — mobilité nationale. Réponse sous 24h.
        </p>

        <div className={styles.grid}>
          {/* Form */}
          <form className={`card ${styles.form}`} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>nom</label>
                <input
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Votre nom"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>email</label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="vous@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>message</label>
              <textarea
                id="message"
                className={styles.textarea}
                placeholder="Bonjour Emile, je voudrais..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className={`btn btn-primary ${styles.submit}`}>
              {sent ? 'Message envoyé ✓' : 'Envoyer ↗'}
            </button>
          </form>

          {/* Links */}
          <div className={styles.links}>
            {contactLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card ${styles.linkCard}`}
              >
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>{l.value} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
