import { PARTY, CANDIDATE, SLOGAN, LINKEDIN_LINK, WHATSAPP_LINK } from '../config'
import styles from './Footer.module.css'
import kncLogo from '../assets/knc-logo.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img
            src={kncLogo}
            alt={`${PARTY.name} logo`}
            className={styles.logo}
            width="48"
            height="48"
            loading="lazy"
          />
          <div>
            <p className={styles.party}>{PARTY.name}</p>
            <p className={styles.tagline}>{PARTY.tagline}</p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Social and contact">
          <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>

        <p className={styles.copy}>
          © {CANDIDATE.year} {CANDIDATE.shortName} for {CANDIDATE.office} —{' '}
          {CANDIDATE.ward}
        </p>

        <p className={`script ${styles.slogan}`}>{SLOGAN.primary}</p>
      </div>
    </footer>
  )
}
