import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import SectionDivider from '../components/SectionDivider.jsx'
import { CANDIDATE, COMMITMENTS } from '../config'
import styles from './Plan.module.css'

export default function Plan() {
  usePageMeta({
    title: `My Plan for ${CANDIDATE.ward} — ${CANDIDATE.shortName}`,
    description:
      "Maureen Ndung'u's plan for Karen Ward: mental health advocacy, early childhood education, adult literacy, public health, water and sanitation, environmental health, community policing, and a wellbeing economy.",
    path: '/plan',
  })

  return (
    <>
      {/* ── PAGE HEADER BAND ── */}
      <section className={styles.band} aria-labelledby="plan-title">
        <div className="container">
          <p className={styles.eyebrow}>{CANDIDATE.year} · {CANDIDATE.office}</p>
          <h1 id="plan-title" className={styles.bandTitle}>
            My Plan for {CANDIDATE.ward}
          </h1>
        </div>
        <SectionDivider position="bottom" />
      </section>

      {/* ── BIO ── */}
      <section className="section" aria-labelledby="bio-title">
        <div className={`container ${styles.narrow}`}>
          <h2 id="bio-title" className="visually-hidden">
            About Maureen
          </h2>
          <p className={styles.bio}>
            Maureen Nyaguthii Ndung'u was raised in Langata and has spent her
            career in community development, working alongside residents,
            traders, and young people across the area.
          </p>
          <p className={styles.bio}>
            She is standing for MCA to bring transparent, accountable, and
            people-first leadership to Karen Ward — delivering the basics well and
            reporting back openly on every shilling.
          </p>
        </div>
      </section>

      {/* ── COMMITMENTS ── */}
      <section className={`section ${styles.commitSection}`} aria-labelledby="commit-title">
        <div className="container">
          <span className="section-label">Commitments</span>
          <h2 id="commit-title" className="section-title">
            Eight things I will deliver
          </h2>

          <ol className={styles.commitList}>
            {COMMITMENTS.map((c) => (
              <li key={c.number} className={styles.commit}>
                <span className={styles.number} aria-hidden="true">
                  {c.number}
                </span>
                <div>
                  <h3 className={styles.commitTitle}>{c.title}</h3>
                  <p className={styles.tagline}>{c.tagline}</p>
                  <p className={styles.detail}>{c.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.pdf}>
            {/* TODO: place the real manifesto at public/manifesto.pdf */}
            <a href="/manifesto.pdf" className="btn btn-outline" download>
              Download full manifesto (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ── END CTA ── */}
      <section className={styles.cta} aria-labelledby="cta-title">
        <div className="container">
          <h2 id="cta-title" className={styles.ctaTitle}>
            Ready to help Karen Ward move forward?
          </h2>
          <Link to="/get-involved" className="btn btn-gold">
            Join the Campaign
          </Link>
        </div>
      </section>
    </>
  )
}
