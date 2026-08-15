import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PageSkeleton from './components/PageSkeleton'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'

// Home stays in the main bundle: it is the usual entry point, and splitting it
// would trade a skeleton flash for no real gain. Every other route is split, so
// a visitor who only reads the home page never downloads them.
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Practice = lazy(() => import('./pages/Practice'))

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <ScrollManager />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-green-700 focus:px-6 focus:py-3 focus:font-body focus:text-sm focus:font-bold focus:uppercase focus:tracking-[0.14em] focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        {/* Keyed by path so each route mounts a fresh boundary. React Router
            navigates inside startTransition, and a boundary that already has
            content will keep showing the old page rather than its fallback, so
            without this key the skeleton would never appear on a link click. */}
        <Suspense key={pathname} fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
