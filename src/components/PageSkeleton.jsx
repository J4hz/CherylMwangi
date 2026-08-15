/**
 * Shown while a route's code is still downloading.
 *
 * It mirrors the shape every interior page opens with, a masthead over a
 * content block, so the layout does not jump when the real page arrives. The
 * bars are deliberately not full width: a skeleton that fills every line reads
 * as a broken page rather than a loading one.
 *
 * `animate-pulse` is disabled by the reduced-motion rule in index.css, which
 * leaves the bars as flat blocks. That is the intended fallback.
 */

function Bar({ className = '' }) {
  return <div className={`rounded bg-edge ${className}`} />
}

export default function PageSkeleton() {
  return (
    <div role="status" aria-live="polite" className="bg-white">
      <span className="sr-only">Loading</span>

      <div className="animate-pulse">
        {/* Masthead */}
        {/* Keep this padding identical to PageHero, or the page shifts when the
            real content replaces the skeleton. */}
        <div className="mx-auto max-w-shell px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
          <Bar className="h-3 w-32" />
          <Bar className="mt-8 h-12 w-full max-w-3xl sm:h-16" />
          <Bar className="mt-4 h-12 w-4/5 max-w-xl sm:h-16" />
          <div className="mt-10 max-w-2xl space-y-3">
            <Bar className="h-4 w-full" />
            <Bar className="h-4 w-11/12" />
            <Bar className="h-4 w-3/4" />
          </div>
        </div>

        {/* Stands in for the rooms band, so the dark block does not appear from
            nowhere once the page loads. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-32 bg-mist lg:h-60" />
          ))}
        </div>

        {/* Content block */}
        <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-4">
                <Bar className="h-1 w-9" />
                <Bar className="h-6 w-2/3" />
                <Bar className="h-4 w-full" />
                <Bar className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
