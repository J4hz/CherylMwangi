import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { CONTACT_CHANNELS, ENQUIRY_TYPES, PROFILE } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import useReveal, { revealClass } from '../hooks/useReveal'

const DELAYS = ['delay-0', 'delay-[80ms]', 'delay-[160ms]', 'delay-[240ms]']

function Enquiries() {
  const [ref, isRevealed] = useReveal()

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-12 sm:px-8 sm:pb-16">
        <ul ref={ref} className="grid gap-px overflow-hidden rounded-2xl bg-edge lg:grid-cols-3">
          {ENQUIRY_TYPES.map((type, index) => (
            <li
              key={type.title}
              className={`${revealClass(isRevealed, DELAYS[index])} bg-white p-9 sm:p-11`}
            >
              <span aria-hidden="true" className="block h-[3px] w-9 bg-green-500" />
              <h2 className="mt-7 font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
                {type.title}
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ink-soft">{type.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Channels() {
  const [ref, isRevealed] = useReveal({ threshold: 0.1 })

  return (
    <section className="bg-green-900">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-2xl">
          <p className="eyebrow text-green-400">Direct</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.04] tracking-tightest text-white">
            No form, no gatekeeper.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/70">
            Email is the surest way to reach her. Everything below goes straight to Cheryl.
          </p>
        </div>

        <ul ref={ref} className="mt-14 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACT_CHANNELS.map((channel, index) => {
            const isExternal = channel.href.startsWith('http')

            return (
              <li
                key={channel.label}
                className={`${revealClass(isRevealed, DELAYS[index])} border-b border-white/15 sm:even:border-l sm:even:border-white/15 lg:border-l lg:first:border-l-0`}
              >
                <a
                  href={channel.href}
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                  className="group flex h-full flex-col gap-3 px-6 py-9 transition-colors duration-200 hover:bg-green-800 focus-visible:ring-offset-green-900"
                >
                  {/* The name is the link. The address underneath is detail, not
                      the thing you click, so it is not what gets announced. */}
                  <span className="flex items-center gap-3 font-display text-2xl font-semibold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-green-400">
                    {channel.label}
                    <span aria-hidden="true" className="text-green-400">
                      {isExternal ? '↗' : '→'}
                    </span>
                  </span>
                  <span className="break-words font-body text-sm leading-snug text-white/55">
                    {channel.value}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <p className="mt-10 font-body text-white/55">{PROFILE.location} · Sessions in person and online</p>
      </div>
    </section>
  )
}

function Expectations() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading eyebrow="Before you write" title="What to say, and what happens next." />

          <div className="max-w-2xl">
            <p className="font-body text-lg leading-relaxed text-ink-soft">
              You do not need to explain everything in a first message. A sentence or two about what
              is going on and what you are hoping for is enough for her to tell you whether she is
              the right person and what her availability looks like.
            </p>
            <p className="mt-6 font-body text-lg leading-relaxed text-ink-soft">
              For training or partnership enquiries, it helps to include who the audience is, roughly
              how many people, and the dates you are working towards.
            </p>

            {/* Sits on the mist section, so the white fill and the shadow carry
                the aside on their own without a rule down the edge. */}
            <div className="mt-10 rounded-2xl bg-white p-7 shadow-card">
              <p className="eyebrow text-green-600">If this is urgent</p>
              <p className="mt-4 font-body leading-relaxed text-ink-soft">
                Email is not monitored around the clock. If you or someone else is in immediate
                danger, contact local emergency services or your nearest hospital rather than waiting
                on a reply.
              </p>
            </div>

            <p className="mt-8 font-body text-sm leading-relaxed text-ink-faint">
              Anything you send is treated as confidential. Please avoid sending detailed clinical or
              third-party information over email until you have agreed how to share it securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  usePageMeta({
    title: 'Contact',
    description:
      'Reach Cheryl N. Mwangi directly in Nairobi, Kenya, for therapy and consultation, training and speaking, or organizational partnership.',
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach her directly."
        lede="Referrals, clinical consultation, training commissions, and speaking requests all come to the same inbox. She reads them herself."
      />
      <Enquiries />
      <Channels />
      <Expectations />
    </>
  )
}
