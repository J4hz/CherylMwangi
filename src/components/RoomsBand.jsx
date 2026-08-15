import { ROOMS } from '../data/content'
import useReveal from '../hooks/useReveal'

/**
 * The site's signature.
 *
 * Six rooms Cheryl has actually worked in, stepping from the lightest green to
 * the deepest. It does the job a portrait would do on a site like this, one
 * glance and you have the whole shape of the practice, which is why it is the
 * only heavily-inked element on a white site, and why nothing else competes
 * with it.
 *
 * Every tint from green-500 down clears 4.5:1 against white text, so the
 * gradient is a real ramp rather than a decorative fade.
 */
const TINTS = [
  'bg-green-500',
  'bg-green-600',
  'bg-green-700',
  'bg-green-800',
  'bg-green-900',
  'bg-green-950',
]

const DELAYS = [
  '[animation-delay:0.05s]',
  '[animation-delay:0.13s]',
  '[animation-delay:0.21s]',
  '[animation-delay:0.29s]',
  '[animation-delay:0.37s]',
  '[animation-delay:0.45s]',
]

export default function RoomsBand({ animateOnLoad = false }) {
  const [ref, isRevealed] = useReveal({ threshold: 0.2 })
  const playing = animateOnLoad || isRevealed

  return (
    <section aria-labelledby="rooms-heading" className="bg-white">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="flex flex-col gap-4 border-t border-edge pt-10 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="rooms-heading"
            className="max-w-xl font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-tightest text-ink"
          >
            Where she has sat
          </h2>
          <p className="max-w-sm font-body leading-relaxed text-ink-soft">
            The same clinician in six very different rooms. Trauma work does not stay in one of
            them.
          </p>
        </div>
      </div>

      <ul
        ref={ref}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6"
      >
        {ROOMS.map((room, index) => (
          <li
            key={room.place}
            className={`${TINTS[index]} ${playing ? `animate-deal ${DELAYS[index]}` : 'opacity-0'} origin-bottom`}
          >
            {/* Stacked on a phone the band is six tiles tall, so the boxes stay
                compact there and only open up once they sit side by side. */}
            <div className="flex h-full min-h-[7.5rem] flex-col justify-between gap-5 px-6 py-6 sm:min-h-[11rem] sm:gap-6 sm:py-8 lg:min-h-[15rem]">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/45"
              />
              <div>
                <p className="font-display text-xl font-semibold leading-tight tracking-tight text-white">
                  {room.place}
                </p>
                <p className="mt-2 font-body text-sm leading-snug text-white/70">{room.work}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
