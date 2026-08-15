/**
 * Eyebrow over a Fraunces title, with an optional standfirst to the right.
 * Every section on the site opens the same way, so the rhythm is predictable
 * and the rooms band is the only thing that interrupts it.
 */
export default function SectionHeading({ eyebrow, title, standfirst, id }) {
  return (
    // `self-start` matters: as a grid item this would otherwise stretch to the
    // full row height, and `items-end` would drop the title to the bottom of it.
    <div className="flex flex-col gap-6 self-start md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="max-w-2xl">
        <p className="eyebrow text-green-600">{eyebrow}</p>
        <h2
          id={id}
          className="mt-5 font-display text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.04] tracking-tightest text-ink"
        >
          {title}
        </h2>
      </div>

      {standfirst && (
        <p className="max-w-sm font-body leading-relaxed text-ink-soft md:pb-2">{standfirst}</p>
      )}
    </div>
  )
}
