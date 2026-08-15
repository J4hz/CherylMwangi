import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Reveals an element once it scrolls into view.
 *
 * Content can never get stuck invisible:
 *   - readers who ask for reduced motion start revealed,
 *   - browsers without IntersectionObserver start revealed,
 *   - and a fallback timer reveals anything the observer never reports on.
 *
 * @param {{ threshold?: number, rootMargin?: string, fallbackDelay?: number }} options
 * @returns {[React.RefObject<HTMLElement>, boolean]} ref to attach, and whether it is revealed
 */
export function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  fallbackDelay = 1200,
} = {}) {
  const ref = useRef(null)
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window === 'undefined') return true
    if (typeof window.matchMedia === 'function' && window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      return true
    }
    return typeof IntersectionObserver === 'undefined'
  })

  useEffect(() => {
    if (isRevealed) return undefined

    const node = ref.current
    if (!node) {
      setIsRevealed(true)
      return undefined
    }

    // Safety net: if the observer never fires, detached node, an oversized
    // element that never satisfies the threshold, a throttled tab, show it anyway.
    const fallback = window.setTimeout(() => setIsRevealed(true), fallbackDelay)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsRevealed(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
    }
  }, [isRevealed, threshold, rootMargin, fallbackDelay])

  return [ref, isRevealed]
}

/** Class pair for a revealed / not-yet-revealed element. */
export function revealClass(isRevealed, delayClass = '') {
  return [
    'transition-[opacity,transform] duration-700 ease-settle motion-reduce:transition-none',
    isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
    delayClass,
  ]
    .filter(Boolean)
    .join(' ')
}

export default useReveal
