/**
 * Sweeping diagonal curve divider — matches the poster.
 * A navy shape with a thin gold edge and a green under-ribbon.
 * Sits between a navy block (above) and the page background (below).
 *
 * Each band fills from the top down to its own curve and is drawn
 * back-to-front (green, then gold, then navy), so only thin gold and
 * green ribbons peek out under the navy sweep. Everything below the
 * lowest curve stays transparent, letting the page background show.
 *
 * Props:
 *   position: 'bottom' (curve at the bottom of a navy block, default)
 *             'top'    (curve at the top of a navy block)
 * The SVG is decorative, so it's hidden from assistive tech.
 */
export default function SectionDivider({ position = 'bottom' }) {
  const flip = position === 'top'
  return (
    <svg
      className="section-divider"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={{
        display: 'block',
        width: '100%',
        height: 'clamp(36px, 6.5vw, 68px)',
        marginBottom: '-1px',
        transform: flip ? 'scaleY(-1)' : 'none',
      }}
    >
      {/* green under-ribbon (lowest curve) */}
      <path d="M0,0 H1440 V56 C960,90 480,42 0,74 Z" fill="var(--green)" />
      {/* thin gold edge */}
      <path d="M0,0 H1440 V50 C960,84 480,36 0,68 Z" fill="var(--gold)" />
      {/* navy sweep (highest curve) */}
      <path d="M0,0 H1440 V42 C960,76 480,28 0,60 Z" fill="var(--navy)" />
    </svg>
  )
}
