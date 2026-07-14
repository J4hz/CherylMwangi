import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import SectionDivider from '../components/SectionDivider.jsx'
import { CANDIDATE, SLOGAN, PRIORITIES } from '../config'
import styles from './Home.module.css'

import cutout from '../assets/maureen-portrait.jpg'
import photo1 from '../assets/photo-1.jpg'
import photo2 from '../assets/photo-2.jpg'
import photo3 from '../assets/photo-3.jpg'
import photo4 from '../assets/photo-4.jpg'
import photo5 from '../assets/photo-5.jpg'

const PHOTOS = [
  { src: photo2, alt: "Maureen Ndung'u, standing portrait" },
  { src: photo3, alt: "Maureen Ndung'u, seated portrait" },
  { src: photo4, alt: "Maureen Ndung'u in a dark suit, full-length portrait" },
  { src: photo5, alt: "Maureen Ndung'u in a white blouse, full-length portrait" },
]

export default function Home() {
  usePageMeta({
    title: "Maureen Ndung'u for MCA — Karen Ward",
    description:
      "Maureen Nyaguthii Ndung'u for MCA, Karen Ward, Langata — 2027. Roads & lighting, youth & jobs, a greener Karen. Wanawake Wanaweza.",
    path: '/',
  })

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero} aria-labelledby="hero-name">
        <span className={styles.ghostYear} aria-hidden="true">
          {CANDIDATE.year}
        </span>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.wardLabel}>— {CANDIDATE.ward.toUpperCase()} —</p>

            <h1 id="hero-name" className={styles.name}>
              <span className={styles.nameWhite}>{CANDIDATE.firstName}</span>
              <span className={styles.nameGold}>{CANDIDATE.middleName}</span>
              <span className={styles.nameWhite}>{CANDIDATE.lastName}</span>
            </h1>

            <div className={styles.pillRow}>
              <span className="pill">
                <strong>{CANDIDATE.year}</strong> {CANDIDATE.office}
              </span>
            </div>

            <p className={`script ${styles.slogan}`}>{SLOGAN.primary}</p>

            <Link to="/get-involved" className="btn btn-gold">
              Join the Campaign
            </Link>
          </div>

          <div className={styles.heroImageWrap}>
            <img
              src={cutout}
              alt={`${CANDIDATE.fullName}, candidate for ${CANDIDATE.office}`}
              className={styles.heroImage}
              width="900"
              height="1350"
            />
          </div>
        </div>
        <SectionDivider position="bottom" />
      </section>

      {/* ── TOP 3 PRIORITIES ── */}
      <section className="section" aria-labelledby="priorities-title">
        <div className="container">
          <span className="section-label">Priorities</span>
          <h2 id="priorities-title" className="section-title">
            What I'll focus on first
          </h2>

          <ul className={styles.cards}>
            {PRIORITIES.map((p) => (
              <li key={p.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardText}>{p.text}</p>
              </li>
            ))}
          </ul>

          <p className={styles.readMore}>
            <Link to="/plan" className="textlink">
              Read the full plan →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHO IS MAUREEN ── */}
      <section className={`section ${styles.about}`} aria-labelledby="about-title">
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutImageWrap}>
            <img
              src={photo1}
              alt={`${CANDIDATE.shortName}, portrait`}
              className={styles.aboutImage}
              loading="lazy"
              width="960"
              height="720"
            />
          </div>
          <div>
            <span className="section-label">About</span>
            <h2 id="about-title" className="section-title">
              Who is Maureen
            </h2>
            <p className={styles.aboutText}>
              Maureen was raised in Langata and has built her career in community
              development. She believes leadership should be transparent,
              accountable, and people-first. Her focus is simple: deliver the
              basics well and involve residents in every decision.
            </p>
            <Link to="/plan" className="textlink">
              More about Maureen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className={`section ${styles.gallery}`} aria-label="Campaign photos">
        <div className="container">
          <ul className={styles.photoGrid}>
            {PHOTOS.map((photo, i) => (
              <li key={i} className={styles.photoItem}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width="800"
                  height="1200"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
