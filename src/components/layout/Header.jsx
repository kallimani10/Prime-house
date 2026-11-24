import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { business, isSet } from '../../data/business'

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled

  return (
    <>
      <a href="#main" className="sr-only z-[100] rounded bg-gold-400 px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-cream/85 py-3 shadow-[0_8px_30px_-12px_rgba(15,31,61,.2)] backdrop-blur-xl' : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo light={!solid} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-colors duration-500 ${solid ? '' : 'bg-white/5 ring-1 ring-white/15 backdrop-blur-md'}`}>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `link-underline mx-3 inline-block py-2 font-display text-[15px] font-semibold transition-colors ${
                        solid ? (isActive ? 'text-navy' : 'text-charcoal-600 hover:text-navy') : isActive ? 'text-white' : 'text-white/75 hover:text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/contact" size="sm" className="hidden sm:inline-flex">
              Get a Free Quote
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${solid ? 'bg-navy text-white' : 'bg-white/10 text-white ring-1 ring-white/25 backdrop-blur'}`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-navy px-7 pb-8 pt-6 text-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            >
              <div className="flex items-center justify-between">
                <Logo light />
                <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav aria-label="Mobile" className="mt-12">
                <ul className="space-y-1">
                  {navLinks.map((l, i) => (
                    <motion.li key={l.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 + i * 0.06 }}>
                      <NavLink
                        to={l.to}
                        end={l.to === '/'}
                        className={({ isActive }) =>
                          `group flex items-center justify-between border-b border-white/10 py-5 font-display text-3xl font-extrabold tracking-tight ${isActive ? 'text-gold-300' : 'text-white'}`
                        }
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="text-xs font-semibold text-white/40">0{i + 1}</span>
                          {l.label}
                        </span>
                        <ArrowUpRight className="h-6 w-6 opacity-40 transition group-hover:rotate-45 group-hover:opacity-100" />
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto space-y-4 pt-10">
                <Button to="/contact" className="w-full">Get a Free Quote</Button>
                <div className="space-y-2 text-sm text-white/60">
                  {isSet(business.phone) && (
                    <a href={`tel:${business.phone}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" />{business.phone}</a>
                  )}
                  {isSet(business.email) && (
                    <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" />{business.email}</a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
