import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import RoomsBand from '../components/RoomsBand'
import SectionHeading from '../components/SectionHeading'
import { FOCUS_AREAS, WHO_SHE_WORKS_WITH } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import useReveal, { revealClass } from '../hooks/useReveal'

const DELAYS = ['delay-0', 'delay-[70ms]', 'delay-[140ms]', 'delay-[210ms]', 'delay-[280ms]', 'delay-[350ms]']

function Areas() {
  const [ref, isRevealed] = useReveal({ threshold: 0.05 })

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <ol ref={ref} className="border-t border-edge">
          {FOCUS_AREAS.map((area, index) => (
            <li
              key={area.title}
              className={`${revealClass(isRevealed, DELAYS[index])} grid gap-6 border-b border-edge py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}
            >
              <div>
                {/* The count is real information here: this is the full list of
                    what she takes on, not a selection. */}
                <p className="font-body text-sm font-bold tabular-nums text-green-500">
                  {String(index + 1).padStart(2, '0')} / {String(FOCUS_AREAS.length).padStart(2, '0')}
                </p>
                <h2 className="mt-5 max-w-md font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.06] tracking-tightest text-ink">
                  {area.title}
                </h2>
              </div>

              <div className="max-w-2xl lg:pt-10">
                <p className="font-body text-lg leading-relaxed text-ink">{area.description}</p>
                <p className="mt-5 font-body leading-relaxed text-ink-soft">{area.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function WhoSheWorksWith() {
  const [ref, isRevealed] = useReveal()

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="Who she works with"
          title="Three ways people arrive."
          standfirst="The referral route differs; the first conversation is much the same."
        />

        <ul ref={ref} className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-edge lg:grid-cols-3">
          {WHO_SHE_WORKS_WITH.map((group, index) => (
            <li
              key={group.title}
              className={`${revealClass(isRevealed, DELAYS[index])} bg-white p-9 sm:p-11`}
            >
              <span aria-hidden="true" className="block h-[3px] w-9 bg-green-500" />
              <h3 className="mt-7 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
                {group.title}
              </h3>
              <p className="mt-4 font-body leading-relaxed text-ink-soft">{group.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading eyebrow="What to expect" title="Before you write." />

          <div className="max-w-2xl">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              A first message does not need to explain everything. A sentence or two about what is
              going on and what you are hoping for is enough for her to say whether she is the right
              person, and what availability looks like.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
              If she is not the right fit, whether because of specialism, capacity, or a conflict
              of interest, she will say so and point you somewhere better. Sessions run individually,
              as couples, as families, or in groups, in person in Nairobi or online.
            </p>
            <p className="mt-6 font-body leading-relaxed text-ink-faint">
              In an emergency, or if someone is in immediate danger, contact local emergency
              services rather than waiting on an email reply.
            </p>

            <p className="mt-10">
              <Link to="/contact" className="arrowlink">
                Ways to reach her <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Practice() {
  usePageMeta({
    title: 'Practice',
    description:
      "Trauma-informed care and TBRI, clinical practice, program and systems design, training, child protection, and mediation: the full range of Cheryl N. Mwangi's work.",
  })

  return (
    <>
      <PageHero
        eyebrow="Practice"
        title="What she actually does."
        lede="Six areas that feed each other: the caseload sharpens the training, the training exposes what the systems are missing, and the systems decide whether any of it survives past her own diary."
      />
      <RoomsBand />
      <Areas />
      <WhoSheWorksWith />
      <HowItWorks />
    </>
  )
}
