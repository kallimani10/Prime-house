import { Asterisk } from 'lucide-react'

/** Continuous, pausable marquee strip (CSS-driven, respects reduced motion). */
export default function Marquee({ items, dark = true, reverse = false, className = '' }) {
  const outline = dark ? '[-webkit-text-stroke:1px_rgba(250,247,242,.6)]' : '[-webkit-text-stroke:1px_rgba(15,31,61,.55)]'
  return (
    <div className={`relative overflow-hidden py-6 sm:py-8 ${dark ? 'bg-navy text-cream' : 'bg-beige text-navy'} ${className}`}>
      <p className="sr-only">{items.join(' • ')}</p>
      <div className={`flex w-max animate-marquee hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`} aria-hidden="true">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {items.map((t, i) => (
              <span key={i} className="flex items-center">
                <span className={`whitespace-nowrap px-6 font-display text-2xl font-extrabold uppercase tracking-tight sm:px-10 sm:text-4xl ${i % 2 ? `text-transparent ${outline}` : ''}`}>{t}</span>
                <Asterisk className="h-6 w-6 shrink-0 text-gold-400 sm:h-8 sm:w-8" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
