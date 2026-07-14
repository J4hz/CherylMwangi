import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.css'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/plan', label: 'Plan' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on navigation.
  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.brand} onClick={close} aria-label="MNN27 — home">
          <span className={styles.brandText}>
            MNN<span className={styles.brandYear}>27</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.hamburger}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barTop : ''} />
          <span className={open ? styles.barMid : ''} />
          <span className={open ? styles.barBot : ''} />
        </button>

        <nav
          id="primary-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={close}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
