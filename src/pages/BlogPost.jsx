import { Link, useParams } from 'react-router-dom'
import { findPost, formatDate } from '../content/posts'
import usePageMeta from '../hooks/usePageMeta'

function BackLink() {
  return (
    <Link to="/blog" className="arrowlink">
      <span aria-hidden="true">&larr;</span> Back to blog
    </Link>
  )
}

function PostNotFound({ slug }) {
  usePageMeta({ title: 'Post not found', description: 'That post could not be found.' })

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
        <p className="eyebrow text-green-600">Nothing here</p>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
          That post has moved, or never existed.
        </h1>
        <p className="mt-7 max-w-prose font-body text-lg leading-relaxed text-ink-soft">
          There is no post at <span className="font-medium text-ink">/blog/{slug}</span>. It may
          have been renamed, or the link may have been mistyped. Everything Cheryl has published is
          on the blog index.
        </p>
        <p className="mt-10">
          <BackLink />
        </p>
      </div>
    </section>
  )
}

function Post({ post }) {
  usePageMeta({ title: post.title, description: post.excerpt })

  return (
    <article>
      <header className="bg-white">
        <div className="mx-auto max-w-shell px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-10">
          <BackLink />

          {post.draft && (
            <p className="mt-10">
              <span className="inline-block rounded-full border border-dashed border-green-500 px-5 py-2 eyebrow text-green-600">
                Draft, not published
              </span>
            </p>
          )}

          <h1 className="mt-8 max-w-4xl animate-rise font-display text-[clamp(2.5rem,6.4vw,4.5rem)] font-semibold leading-[0.99] tracking-tightest text-ink">
            {post.title}
          </h1>

          {/* The byline belongs to the journalist, so it sits directly under
              the headline rather than in the small print. */}
          {post.kind === 'press' && (
            <p className="mt-7 max-w-3xl font-body text-lg leading-relaxed text-ink-soft">
              By <span className="font-semibold text-ink">{post.byline}</span> for{' '}
              <span className="font-semibold text-ink">{post.publication}</span>. Cheryl contributed
              as a counselling psychologist.
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-edge pt-7">
            <p className="eyebrow text-ink-faint">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            {post.tags?.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </header>

      <div className="bg-white">
        <div className="mx-auto max-w-shell px-5 pb-16 sm:px-8 sm:pb-20">
          {post.draft && (
            <p className="mb-14 max-w-prose rounded-2xl bg-mist px-7 py-6 font-body leading-relaxed text-ink-soft">
              This is unreviewed draft copy, reachable by direct link only. It is not listed on the
              blog and is not public. Set <span className="font-medium text-ink">draft: false</span>{' '}
              in <span className="font-medium text-ink">src/content/posts.js</span> to publish it.
            </p>
          )}

          <div className="max-w-prose">
            {/* The opening paragraph is set larger, a standfirst, without
                needing separate copy for one. */}
            {post.body.map((paragraph, index) => (
              <p
                // Paragraphs carry no id of their own and never reorder.
                key={index}
                className={
                  index === 0
                    ? 'font-body text-xl leading-[1.7] text-ink'
                    : 'mt-7 font-body text-lg leading-[1.78] text-ink-soft'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {post.kind === 'press' && (
            <div className="mt-14 max-w-prose">
              {post.quotes?.length > 0 && (
                <>
                  <p className="eyebrow text-green-600">In her words</p>
                  <ul className="mt-7 space-y-8">
                    {post.quotes.map((quote) => (
                      <li key={quote.slice(0, 40)}>
                        <blockquote className="font-display text-xl font-normal italic leading-snug text-ink">
                          &ldquo;{quote}&rdquo;
                        </blockquote>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Deliberately not the article. It belongs to the publication;
                  this page credits it and sends the reader there. */}
              <div className="mt-12 rounded-2xl bg-mist px-7 py-6">
                <p className="font-body leading-relaxed text-ink-soft">
                  This is a summary of Cheryl&rsquo;s contribution, not the article itself. The full
                  piece was written by {post.byline} and belongs to {post.publication}.
                </p>
                <p className="mt-5">
                  {post.url ? (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="arrowlink"
                    >
                      Read the full article <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : (
                    <span className="font-body text-sm font-semibold text-ink-faint">
                      Print edition, {formatDate(post.date)}. Not yet published online.
                    </span>
                  )}
                </p>
              </div>
            </div>
          )}

          <div className="mt-16 max-w-prose border-t border-edge pt-8">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              <BackLink />
              <Link to="/contact" className="arrowlink">
                Get in touch <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)

  // Hooks must run unconditionally, so each branch is its own component.
  if (!post) return <PostNotFound slug={slug} />
  return <Post post={post} />
}
