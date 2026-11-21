import type React from 'react'
import { skillCategories, softSkills } from '../data/skills'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">// 02 — COMPÉTENCES</p>
        <h2 className="section-title">Stack technique</h2>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className={`card ${styles.catCard}`}
              style={{ '--cat-color': cat.color } as React.CSSProperties}
            >
              <div className={styles.catHeader}>
                <span className={styles.catLabel}>{cat.label.toUpperCase()}</span>
                <span className={styles.catCount}>{String(cat.skills.length).padStart(2, '0')}</span>
              </div>
              <ul className={styles.skillList}>
                {cat.skills.map((sk) => (
                  <li key={sk} className={styles.skillItem}>
                    <span
                      className={styles.dot}
                      style={{ background: cat.color }}
                    />
                    {sk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className={styles.softSection}>
          <p className={`section-label ${styles.softLabel}`}>// SAVOIR-ÊTRE</p>
          <div className={styles.softList}>
            {softSkills.map((s) => (
              <span key={s} className={`tag ${styles.softTag}`}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
