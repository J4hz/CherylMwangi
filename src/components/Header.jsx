import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS, PROFILE } from '../data/content'

function Wordmark() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center rounded transition-opacity duration-200 hover:opacity-70"
      aria-label={`${PROFILE.fullName}, home`}
    >
      {/* The CMC monogram from her business card, now the only thing in the
          brand slot. The image is decorative because the link itself carries
          her name — without that aria-label the mark would announce as nothing. */}
      <img
        src="/cmc-logo.png"
        alt=""
        aria-hidden="true"
        width="41"
        height="42"
        className="h-[2.6rem] w-auto shrink-0"
      />
    </Link>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the panel whenever the route changes, including when the link tapped
  // was the page already showing.
  useEffect(() => setIsOpen(false), [pathname])

  // A fixed-position panel over a scrollable body is disorienting; freeze the
  // page behind it while it is open.
  useEffect(() => {
    if (!isOpen) return undefined
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const linkClass = ({ isActive }) =>
    `font-body text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-200 hover:text-green-600 ${
      isActive ? 'text-green-700' : 'text-ink-soft'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-edge bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-[4.5rem] max-w-shell items-center justify-between gap-6 px-5 sm:px-8">
          <Wordmark />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  {/* `end` so "/" is only active on the home page itself. */}
                  <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="rounded-full bg-green-700 px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:bg-green-500"
            >
              Get in touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="-mr-2 flex items-center gap-3 p-2 lg:hidden"
          >
            <span className="eyebrow text-ink-soft">{isOpen ? 'Close' : 'Menu'}</span>
            <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full bg-ink transition-transform duration-200 ${
                  isOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-[2px] w-full bg-ink transition-opacity duration-200 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-[2px] w-full bg-ink transition-transform duration-200 ${
                  isOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* This panel must stay OUTSIDE <header>. The header carries
          `backdrop-blur`, and a backdrop-filter makes an element the containing
          block for its `position: fixed` descendants. Nested inside, the panel
          resolved `top-[4.5rem] bottom-0` against the 4.5rem header rather than
          the viewport, and collapsed to a 1px strip. */}
      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="fixed inset-x-0 bottom-0 top-[4.5rem] z-50 overflow-y-auto border-t border-edge bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-shell px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="border-b border-edge">
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block py-5 font-display text-3xl font-semibold tracking-tightest transition-colors duration-200 ${
                      isActive ? 'text-green-700' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mx-auto max-w-shell px-5 pb-10 sm:px-8">
            <Link to="/contact" className="btn w-full justify-center">
              Get in touch
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
