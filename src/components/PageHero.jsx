/**
 * The masthead every interior page opens with. Kept on white so the rooms band
 * stays the only heavy block of colour on the site.
 */
export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-shell px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
        <p className="animate-rise eyebrow text-green-600">{eyebrow}</p>

        <h1 className="mt-6 max-w-4xl animate-rise font-display text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[0.98] tracking-tightest text-ink [animation-delay:0.08s]">
          {title}
        </h1>

        {lede && (
          <p className="mt-8 max-w-2xl animate-rise font-body text-lg leading-relaxed text-ink-soft [animation-delay:0.16s] sm:text-xl">
            {lede}
          </p>
        )}

        {children && <div className="mt-10 animate-rise [animation-delay:0.24s]">{children}</div>}
      </div>
    </section>
  )
}
