import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

/**
 * Catch-all. `public/_redirects` serves index.html for every path, so without
 * this a mistyped URL would render a header and footer with nothing between.
 */
export default function NotFound() {
  usePageMeta({ title: 'Page not found', description: 'That page could not be found.' })

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
        <p className="eyebrow text-green-600">Page not found</p>
        <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
          There is nothing at this address.
        </h1>
        <p className="mt-7 max-w-prose font-body text-lg leading-relaxed text-ink-soft">
          The link may be out of date or mistyped. Everything on the site is a click away from the
          home page.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link to="/" className="arrowlink">
            Go to the home page <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to="/blog" className="arrowlink">
            Read the blog <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
