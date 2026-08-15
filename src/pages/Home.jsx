import { Link } from 'react-router-dom'
import CredentialsStrip from '../components/CredentialsStrip'
import RoomsBand from '../components/RoomsBand'
import SectionHeading from '../components/SectionHeading'
import { formatDate, publishedPosts } from '../content/posts'
import { ABOUT_PARAGRAPHS, FOCUS_AREAS, HERO, STATS } from '../data/content'
import usePageMeta from '../hooks/usePageMeta'
import useReveal, { revealClass } from '../hooks/useReveal'

const DELAYS = ['delay-0', 'delay-[80ms]', 'delay-[160ms]', 'delay-[240ms]', 'delay-[320ms]', 'delay-[400ms]']

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
        <div className="max-w-4xl">
          <p className="animate-rise eyebrow text-green-600">{HERO.eyebrow}</p>

          <h1 className="mt-7 animate-rise font-display text-[clamp(2.75rem,7.6vw,5.75rem)] font-semibold leading-[0.96] tracking-tightest text-ink [animation-delay:0.08s]">
            {HERO.headline}{' '}
            <em className="font-normal italic text-green-700">{HERO.headlineEmphasis}</em>
          </h1>

          <p className="mt-9 max-w-2xl animate-rise font-body text-lg leading-relaxed text-ink-soft [animation-delay:0.16s] sm:text-xl">
            {HERO.lede}
          </p>

          <div className="mt-11 flex animate-rise flex-wrap gap-4 [animation-delay:0.24s]">
            <Link to="/contact" className="btn">
              Get in touch
            </Link>
            <Link to="/about" className="btn-outline">
              Meet Cheryl
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Focus() {
  const [ref, isRevealed] = useReveal()

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="What she works on"
          title="Six areas, one practice."
          standfirst="Clinical work, the systems around it, and the training that keeps both standing."
        />

        <ul ref={ref} className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-edge sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS_AREAS.map((area, index) => (
            <li
              key={area.title}
              className={`${revealClass(isRevealed, DELAYS[index])} group bg-white p-8 transition-colors duration-300 hover:bg-green-50 sm:p-10`}
            >
              <span
                aria-hidden="true"
                className="block h-[3px] w-9 bg-green-500 transition-all duration-300 group-hover:w-16 group-hover:bg-green-700"
              />
              <h3 className="mt-7 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
                {area.title}
              </h3>
              <p className="mt-3.5 font-body leading-relaxed text-ink-soft">{area.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12">
          <Link to="/practice" className="arrowlink">
            See the full practice <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </div>
    </section>
  )
}

function AboutPreview() {
  const [ref, isRevealed] = useReveal()

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading eyebrow="Who she is" title="A decade of sitting with the hardest parts." />

          <div>
            {ABOUT_PARAGRAPHS.slice(0, 2).map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="font-body text-lg leading-relaxed text-ink-soft [&+&]:mt-6"
              >
                {paragraph}
              </p>
            ))}

            <p className="mt-9">
              <Link to="/about" className="arrowlink">
                Read her full background <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>

        {/* `flex-col-reverse` keeps the required <dt> before <dd> in the markup
            while showing the number above its label. The label used to be
            repeated in a visually-hidden <dt>, which meant screen readers and
            anyone copying the page got every stat twice. */}
        <dl ref={ref} className="mt-14 grid gap-x-8 gap-y-14 border-t border-edge pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`${revealClass(isRevealed, DELAYS[index])} flex flex-col-reverse items-center text-center`}
            >
              <dt className="mt-4 max-w-[14rem] font-body text-sm leading-snug text-ink-soft">
                {stat.label}
              </dt>
              <dd className="font-display text-[3.25rem] font-semibold leading-none tracking-tightest text-green-700">
                {stat.num}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function LatestWriting() {
  const posts = publishedPosts.slice(0, 3)

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          eyebrow="Writing"
          title="Notes from the work."
          standfirst="Short pieces on trauma-informed practice, and what it costs the people carrying it."
        />

        {posts.length === 0 ? (
          <div className="mt-14 border-t border-edge pt-14">
            <p className="max-w-xl font-display text-2xl font-normal italic leading-snug text-ink">
              Cheryl&rsquo;s first post is on its way.
            </p>
            <p className="mt-5 max-w-prose font-body leading-relaxed text-ink-soft">
              Writing on trauma-informed practice, caring for the people who do the caring, and what
              the frameworks look like once they meet a real caseload.
            </p>
            <p className="mt-9">
              <Link to="/contact" className="arrowlink">
                Ask her something in the meantime <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        ) : (
          <>
            <ul className="mt-14 grid gap-10 border-t border-edge pt-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="group relative border-t border-edge pt-8">
                  <p className="eyebrow text-ink-faint">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </p>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors duration-200 group-hover:text-green-700">
                    <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-ink-soft">{post.excerpt}</p>
                </li>
              ))}
            </ul>

            <p className="mt-12">
              <Link to="/blog" className="arrowlink">
                All writing <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </>
        )}
      </div>
    </section>
  )
}

function ContactBand() {
  return (
    <section className="bg-green-900">
      <div className="mx-auto flex max-w-shell flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.04] tracking-tightest text-white">
            Referrals, training, or a first conversation.
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/70">
            Everything comes to the same inbox, and she reads it herself.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-white px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.14em] text-green-900 transition-colors duration-200 hover:bg-green-100 focus-visible:ring-offset-green-900"
        >
          Get in touch <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta({
    title: 'Cheryl N. Mwangi | Trauma-Informed Care Practitioner, Trainer & Organizational Consultant',
    description:
      'Cheryl N. Mwangi is a counseling psychologist and trauma specialist in Nairobi, Kenya, and a certified TBRI Practitioner with over a decade of clinical and program-leadership experience.',
  })

  return (
    <>
      <Hero />
      <CredentialsStrip />
      <RoomsBand animateOnLoad />
      <Focus />
      <AboutPreview />
      <LatestWriting />
      <ContactBand />
    </>
  )
}
