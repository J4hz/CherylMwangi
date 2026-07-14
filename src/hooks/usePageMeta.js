import { useEffect } from 'react'
import { DOMAIN } from '../config'

/**
 * Sets per-page <title>, meta description, and OpenGraph/Twitter tags.
 * Keeps the app dependency-free (no react-helmet) and Lighthouse-friendly.
 */
function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [key, val] = selector.replace(/meta\[|\]/g, '').split('=')
    el.setAttribute(key, val.replace(/["']/g, ''))
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${DOMAIN}${path}`
    document.title = title

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description, path])
}
