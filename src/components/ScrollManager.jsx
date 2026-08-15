import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Restores the scrolling a single-page site got for free.
 *
 * A hash in the URL scrolls to that section, which is what makes the header's
 * "/#focus" links work from the blog as well as from the home page. Anything
 * else lands at the top of the new page.
 *
 * Smoothness is left to CSS (`html { scroll-behavior: smooth }`), so the
 * reduced-motion override in index.css governs both paths. Jumping to the top
 * of a fresh page passes `behavior: 'auto'` to skip that animation, since
 * gliding through a page the reader never asked to see is just disorienting.
 *
 * Keyed on `location.key` rather than pathname + hash so that clicking a nav
 * link you are already on scrolls again instead of doing nothing.
 */
export default function ScrollManager() {
  const { key, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // The id may not be mounted on the very first paint after a route change.
      const frame = window.requestAnimationFrame(() => {
        const target = document.querySelector(hash)
        if (target) target.scrollIntoView()
        else window.scrollTo({ top: 0, behavior: 'auto' })
      })
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    return undefined
  }, [key, hash])

  return null
}
