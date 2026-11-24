import { useEffect, useRef, useState } from 'react'
import { useOutlet, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { MessageSquareQuote } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold-400 to-gold-300" style={{ scaleX }} />
}

/** Scrolls to top on route change, or to #hash targets (e.g. /services#plumbing). */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)
  useEffect(() => {
    const changedPage = prevPath.current !== pathname
    prevPath.current = pathname
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Wait for the new page to mount (after the exit transition), then scroll to the target.
    let tries = 0
    const t = setInterval(() => {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        clearInterval(t)
        el.scrollIntoView({ behavior: changedPage ? 'auto' : 'smooth', block: 'start' })
      } else if (++tries > 40) clearInterval(t)
    }, 50)
    return () => clearInterval(t)
  }, [pathname, hash])
  return null
}

/** Floating quote button that appears after the hero (hidden on /contact). */
function FloatingQuote() {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 420
      setShow(window.scrollY > window.innerHeight * 0.9 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (pathname === '/contact') return null
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8" initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.9 }}>
          <Link
            to="/contact"
            className="group flex items-center gap-3 rounded-full bg-navy py-2 pl-2 pr-5 font-display text-sm font-bold text-white shadow-soft ring-1 ring-white/10 transition hover:bg-navy-700"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-navy transition-transform group-hover:rotate-12">
              <MessageSquareQuote className="h-5 w-5" />
            </span>
            Free Quote
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet() // captured element keeps the old page during the exit animation
  return (
    <>
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingQuote />
    </>
  )
}
