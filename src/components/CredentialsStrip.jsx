import { CREDENTIALS } from '../data/content'
import useReveal, { revealClass } from '../hooks/useReveal'

const DELAYS = ['delay-0', 'delay-[70ms]', 'delay-[140ms]', 'delay-[210ms]', 'delay-[280ms]']

/**
 * The qualifications, given their own full-width row under the hero rather than
 * a column beside it. They read as a credential line here, which is what they
 * are, and it frees the hero's second column for her photograph.
 */
export default function CredentialsStrip() {
  const [ref, isRevealed] = useReveal({ threshold: 0.1 })

  return (
    <section aria-labelledby="credentials-heading" className="bg-mist">
      <div className="mx-auto max-w-shell px-5 py-10 sm:px-8 sm:py-12">
        <h2 id="credentials-heading" className="eyebrow text-green-600">
          Qualified and registered
        </h2>

        <ul
          ref={ref}
          className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {CREDENTIALS.map((credential, index) => (
            <li
              key={credential.award}
              className={`${revealClass(isRevealed, DELAYS[index % DELAYS.length])} border-t border-edge pt-5`}
            >
              <p className="font-display text-base font-semibold leading-snug tracking-tight text-ink">
                {credential.award}
              </p>
              <p className="mt-2 font-body text-sm leading-snug text-ink-faint">
                {credential.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
