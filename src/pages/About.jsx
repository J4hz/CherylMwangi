import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import RoomsBand from '../components/RoomsBand'
import SectionHeading from '../components/SectionHeading'
import { ABOUT_PARAGRAPHS, CREDENTIALS, PROFILE, TESTIMONIALS_PLACEHOLDER } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'

function Narrative() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-12 sm:px-8 sm:pb-16">
        <div className="grid gap-14 border-t border-edge pt-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="eyebrow text-green-600">In her own practice</p>
            <p className="mt-8 font-display text-2xl font-normal italic leading-snug text-green-700">
              {PROFILE.pullQuote}
            </p>
          </div>

          <div>
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-lg leading-relaxed text-ink-soft [&+&]:mt-7"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-11 flex flex-wrap gap-4">
              <a href="mailto:traumatherapistke@gmail.com?subject=CV%20request" className="btn">
                Request her full CV
              </a>
              <a
                href="https://www.linkedin.com/in/cheryl-mwangi-331048272"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-outline"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Accreditation() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading eyebrow="Accreditation" title="Registered, certified, and current." />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map((credential) => (
            <li key={credential.award} className="bg-white p-8">
              <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">
                {credential.award}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
                {credential.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Testimonials() {
  if (!TESTIMONIALS_PLACEHOLDER) return null

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="Reflections"
          title="What the work leaves behind."
          standfirst="Placeholders, shown only to whoever is building the site. Nothing here is a real quote."
        />

        <ul className="mt-14 grid gap-8 lg:grid-cols-2">
          {[0, 1].map((index) => (
            <li
              key={index}
              className="rounded-2xl border border-dashed border-green-500/45 bg-green-50/60 p-9"
            >
              <p className="eyebrow text-green-600">Placeholder: add a real reflection</p>
              <p className="mt-7 font-display text-xl font-normal italic leading-snug text-ink/45">
                A colleague, a partner organization, or a client who has given explicit written
                permission. Two or three sentences in their own words, not a summary of them.
              </p>
              <p className="mt-7 font-body text-sm font-bold uppercase tracking-[0.12em] text-ink-faint">
                Add name and role
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-prose font-body text-sm leading-relaxed text-ink-faint">
          Clinical work carries a confidentiality duty that a marketing quote does not override.
          Nothing from a client should appear here without their written, un-pressured consent, and
          colleague or partner quotes are usually the safer place to start.
        </p>
      </div>
    </section>
  )
}

function ClosingBand() {
  return (
    <section className="bg-green-900">
      <div className="mx-auto flex max-w-shell flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.06] tracking-tightest text-white">
          Working out whether she is the right fit?
        </h2>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.14em] text-green-900 transition-colors duration-200 hover:bg-green-100 focus-visible:ring-offset-green-900"
        >
          Start a conversation <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default function About() {
  usePageMeta({
    title: 'About Cheryl',
    description:
      'A decade of clinical practice across hospitals, residential care, faith-based institutions, and community settings in Nairobi, and the accreditation behind it.',
  })

  return (
    <>
      <PageHero
        eyebrow="About"
        title="The clinician behind the practice."
        lede="Over more than a decade, Cheryl has worked wherever trauma turns up: wards, residential units, classrooms, and living rooms. Along the way she built the training and systems that let other people do the same work well."
      />
      <RoomsBand />
      <Narrative />
      <Accreditation />
      <Testimonials />
      <ClosingBand />
    </>
  )
}
