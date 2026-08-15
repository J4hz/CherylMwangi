import { Link } from 'react-router-dom'
import { AFFILIATIONS, CONTACT_CHANNELS, PROFILE, SITE_LINKS } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="font-display text-3xl font-semibold tracking-tightest">
              {PROFILE.fullName}
            </p>
            <p className="mt-5 font-body leading-relaxed text-white/65">
              Trauma-informed care practitioner, trainer, and organizational consultant, supporting
              across the full lifespan of care.
            </p>

            <ul className="mt-8 space-y-2">
              {AFFILIATIONS.map((affiliation) => (
                <li key={affiliation} className="font-body text-sm leading-relaxed text-white/45">
                  {affiliation}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Site">
            <p className="eyebrow text-green-400">This site</p>
            <ul className="mt-6 space-y-3">
              {SITE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body font-medium text-white/75 transition-colors duration-200 hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-green-400">Reach her</p>
            <ul className="mt-6 space-y-3">
              {/* Named links, so the footer reads Email / Phone / LinkedIn
                  rather than a column of raw addresses. */}
              {CONTACT_CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                    className="font-body font-medium text-white/75 transition-colors duration-200 hover:text-green-400"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 border-0 border-t border-white/10" />

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-white/45">
            &copy; {year} {PROFILE.fullName}. {PROFILE.location}.
          </p>
          <p className="font-body text-sm text-white/45">{PROFILE.title}</p>
        </div>
      </div>
    </footer>
  )
}
