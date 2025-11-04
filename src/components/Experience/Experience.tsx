import React, { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    company: 'NZ Solutions, Pune',
    role: 'Web Developer Intern',
    period: 'May 2025 — Present',
    bullets: [
        'Designed and developed full-stack web applications using PHP, CodeIgniter, jQuery, HTML, JavaScript, MySQL, and Bootstrap', 
        'Gained hands-on experience in dynamic website development, database optimization, and real-world project deployment', 
        'Engaged in debugging, performance optimization, and REST API integration for real-time projects',
        'Collaborating via GitHub for version control, ensuring well-documented code and meaningful commit messages'
    ]
  }
]

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // reveal children with stagger
            const cards = Array.from(el.querySelectorAll(`.${styles.card}`)) as HTMLElement[]
            cards.forEach((c, i) => {
              c.style.transitionDelay = `${i * 120}ms`
              c.classList.add(styles.visible)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      
      <div className={styles.grid}>
        {experiences.map((exp, idx) => (
          <article key={idx} className={styles.card} aria-label={`${exp.role} at ${exp.company}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.role}>{exp.role}</h3>
              <span className={styles.period}>{exp.period}</span>
            </div>
            <p className={styles.company}>{exp.company}</p>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Experience
