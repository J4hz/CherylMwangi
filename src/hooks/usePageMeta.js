import { useEffect } from 'react'

const SITE_NAME = 'Cheryl N. Mwangi'

/** The values index.html ships with, read once, before any page overrides them. */
const defaults = {
  title: typeof document === 'undefined' ? '' : document.title,
  description:
    typeof document === 'undefined'
      ? ''
      : (document.querySelector('meta[name="description"]')?.content ?? ''),
}

function setMeta(selector, value) {
  if (!value) return
  const tag = document.querySelector(selector)
  if (tag) tag.setAttribute('content', value)
}

/**
 * Sets the document title and description for a route, and puts the defaults
 * back when the route unmounts. Titles are suffixed with the site name unless
 * they already carry it, so the home page does not read "Cheryl N. Mwangi |
 * … | Cheryl N. Mwangi".
 *
 * @param {{ title?: string, description?: string }} meta
 */
export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    if (title) {
      document.title = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
    }

    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)

    return () => {
      document.title = defaults.title
      setMeta('meta[name="description"]', defaults.description)
      setMeta('meta[property="og:title"]', defaults.title)
      setMeta('meta[property="og:description"]', defaults.description)
    }
  }, [title, description])
}

export default usePageMeta
