import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta'
import SectionDivider from '../components/SectionDivider.jsx'
import {
  CANDIDATE,
  MPESA,
  EVENTS,
  HELP_OPTIONS,
  WHATSAPP_LINK,
  VOLUNTEER_ENDPOINT,
} from '../config'
import styles from './GetInvolved.module.css'

export default function GetInvolved() {
  usePageMeta({
    title: `Get Involved — ${CANDIDATE.shortName} for ${CANDIDATE.office}`,
    description:
      "Volunteer, contribute via M-Pesa, or chat with the Maureen Ndung'u campaign on WhatsApp. Help bring people-first leadership to Karen Ward in 2027.",
    path: '/get-involved',
  })

  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      // Placeholder endpoint — see VOLUNTEER_ENDPOINT in src/config.ts.
      await fetch(VOLUNTEER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* ── HEADER BAND ── */}
      <section className={styles.band} aria-labelledby="gi-title">
        <div className="container">
          <p className={styles.eyebrow}>Wanawake Wanaweza</p>
          <h1 id="gi-title" className={styles.bandTitle}>
            Get Involved
          </h1>
        </div>
        <SectionDivider position="bottom" />
      </section>

      {/* ── VOLUNTEER + CONTRIBUTE ── */}
      <section className="section" aria-labelledby="volunteer-title">
        <div className={`container ${styles.grid}`}>
          {/* Volunteer form */}
          <div className={styles.formCard}>
            <span className="section-label">Volunteer</span>
            <h2 id="volunteer-title" className="section-title">
              Lend a hand
            </h2>

            {status === 'success' ? (
              <p className={styles.success} role="status">
                Thank you — we've received your details and the campaign team
                will be in touch soon.
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="07XX XXX XXX"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="help">How you'll help</label>
                  <select id="help" name="help" required defaultValue="">
                    <option value="" disabled>
                      Choose one…
                    </option>
                    {HELP_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {status === 'error' && (
                  <p className={styles.error} role="alert">
                    Sorry, something went wrong. Please try again or reach us on
                    WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-gold"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Sign me up'}
                </button>
              </form>
            )}
          </div>

          {/* Contribute + WhatsApp */}
          <div className={styles.side}>
            <div className={styles.contribute}>
              <span className="section-label">Contribute</span>
              <h2 className={styles.sideTitle}>Support via M-Pesa</h2>
              <dl className={styles.mpesa}>
                <div>
                  <dt>Paybill</dt>
                  <dd>{MPESA.paybill}</dd>
                </div>
                <div>
                  <dt>Account</dt>
                  <dd>{MPESA.account}</dd>
                </div>
              </dl>
              <p className={styles.disclaimer}>
                Contributions are recorded by M-Pesa and are not anonymous.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              className={`btn btn-green ${styles.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with the Campaign on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── EVENTS (hidden entirely when empty) ── */}
      {EVENTS.length > 0 && (
        <section className={`section ${styles.eventsSection}`} aria-labelledby="events-title">
          <div className="container">
            <span className="section-label">Upcoming</span>
            <h2 id="events-title" className="section-title">
              Events
            </h2>
            <ul className={styles.events}>
              {EVENTS.map((ev, i) => (
                <li key={i} className={styles.event}>
                  <span className={styles.eventDate}>{ev.date}</span>
                  <span className={styles.eventTitle}>{ev.title}</span>
                  <span className={styles.eventLoc}>{ev.location}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
