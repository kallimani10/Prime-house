import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'
import Logo from '../ui/Logo'
import PlaceholderText from '../ui/PlaceholderText'
import { navLinks } from './Header'
import { business, isSet } from '../../data/business'
import { coreServices } from '../../data/services'

const socials = [
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'youtube', icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const activeSocials = socials.filter((s) => isSet(business.social[s.key]))

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/70">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container-x relative pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed">
              Home repairs, painting, wall services, maintenance and improvement — handled with care, clear communication and attention to detail.
            </p>
            <div className="mt-8 flex gap-3">
              {activeSocials.length > 0 ? (
                activeSocials.map(({ key, icon: I, label }) => (
                  <a key={key} href={business.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 transition hover:-translate-y-1 hover:bg-gold-400 hover:text-navy">
                    <I className="h-[18px] w-[18px]" />
                  </a>
                ))
              ) : (
                <p className="text-sm">
                  Social links: <PlaceholderText value={null} label="social profile URLs" />
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] !text-white">Explore</h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="link-underline transition hover:text-white">{l.label}</Link></li>
              ))}
              <li><Link to="/contact" className="link-underline transition hover:text-white">Free Quote</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] !text-white">Services</h3>
            <ul className="mt-6 space-y-3">
              {coreServices.slice(0, 7).map((s) => (
                <li key={s.title}><Link to={`/services#${s.anchor}`} className="link-underline transition hover:text-white">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] !text-white">Contact</h3>
            <ul className="mt-6 space-y-4 text-[15px]">
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {isSet(business.phone) ? <a href={`tel:${business.phone}`} className="hover:text-white">{business.phone}</a> : <PlaceholderText value={null} label="phone number" />}
              </li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {isSet(business.email) ? <a href={`mailto:${business.email}`} className="break-all hover:text-white">{business.email}</a> : <PlaceholderText value={null} label="email address" />}
              </li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /><PlaceholderText value={business.serviceArea} label="service area" /></li>
              <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {isSet(business.hours) ? <span>{business.hours.map((h) => `${h.days}: ${h.time}`).join(' · ')}</span> : <PlaceholderText value={null} label="business hours" />}
              </li>
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="select-none overflow-hidden py-6 text-center font-display text-[17vw] font-extrabold leading-none tracking-tightest text-white/[0.04] lg:text-[11rem]">
          PRIME HOME
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center">
          <p>© {year} {business.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {isSet(business.privacyPolicyUrl) ? (
              <a href={business.privacyPolicyUrl} className="link-underline hover:text-white">Privacy Policy</a>
            ) : (
              <span title="Set privacyPolicyUrl in src/data/business.js">Privacy Policy <span className="placeholder-chip">[link pending]</span></span>
            )}
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2 hover:text-white">
              Back to top
              <span className="grid h-8 w-8 place-items-center rounded-full ring-1 ring-white/20 transition group-hover:-translate-y-1 group-hover:bg-gold-400 group-hover:text-navy"><ArrowUp className="h-4 w-4" /></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
