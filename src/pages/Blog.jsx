import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { formatDate, publishedPosts } from '../content/posts'
import usePageMeta from '../hooks/usePageMeta'
import useReveal, { revealClass } from '../hooks/useReveal'

const DELAYS = ['delay-0', 'delay-[80ms]', 'delay-[160ms]', 'delay-[240ms]']

function PostCard({ post, delay, isRevealed }) {
  return (
    <li className={`${revealClass(isRevealed, delay)} group relative border-t border-edge pt-8`}>
      <article className="flex h-full flex-col">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 eyebrow text-ink-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.kind === 'press' && (
            <>
              <span aria-hidden="true" className="h-3 w-px bg-edge" />
              {/* Names the publication on the card, so a press piece is never
                  mistaken for something Cheryl wrote. */}
              <span className="text-green-600">{post.publication}</span>
            </>
          )}
        </p>

        <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors duration-200 group-hover:text-green-700">
          {/* Stretched link: the whole card is clickable, but only the title is
              in the tab order and announced as the link. */}
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 font-body leading-relaxed text-ink-soft">{post.excerpt}</p>

        {post.tags?.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-auto pt-8">
          <span className="arrowlink">
            {post.kind === 'press' ? 'What she said' : 'Read'}{' '}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </p>
      </article>
    </li>
  )
}

function EmptyState() {
  return (
    <div className="border-t border-edge pt-12">
      <p className="max-w-2xl font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-normal italic leading-snug text-ink">
        Cheryl&rsquo;s first post is on its way.
      </p>
      <p className="mt-7 max-w-prose font-body text-lg leading-relaxed text-ink-soft">
        Writing on trauma-informed practice, caring for the people who do the caring, and what the
        frameworks look like once they meet a real caseload.
      </p>
      <p className="mt-10">
        <Link to="/contact" className="arrowlink">
          Ask her something in the meantime <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
    </div>
  )
}

export default function Blog() {
  const [ref, isRevealed] = useReveal({ threshold: 0.05 })

  usePageMeta({
    title: 'Writing',
    description:
      'Notes from Cheryl N. Mwangi on trauma-informed care, TBRI and ACEs in practice, and sustaining the people who work on the front line.',
  })

  return (
    <>
      <PageHero
        eyebrow="Writing"
        title="Notes from the work."
        lede="Short pieces on trauma-informed practice: what the frameworks mean once they meet a real caseload, and what it costs the people carrying them."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-shell px-5 pb-12 sm:px-8 sm:pb-16">
          {publishedPosts.length === 0 ? (
            <EmptyState />
          ) : (
            <ul ref={ref} className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {publishedPosts.map((post, index) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  delay={DELAYS[index % DELAYS.length]}
                  isRevealed={isRevealed}
                />
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
