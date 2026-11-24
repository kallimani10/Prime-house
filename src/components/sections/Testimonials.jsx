import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Info } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const n = testimonials.length
  const go = (d) => { setDir(d); setI((p) => (p + d + n) % n) }
  const hasSamples = testimonials.some((t) => t.isSample)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(1), 7000)
    return () => clearInterval(t)
  })

  const t = testimonials[i]

  return (
    <section className="section relative overflow-hidden bg-beige/60" aria-roledescription="carousel" aria-label="Customer testimonials">
      <div aria-hidden="true" className="absolute -left-24 top-10 font-display text-[22rem] font-extrabold leading-none text-navy/[0.04]">“</div>
      <div className="container-x relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Testimonials" title="What Homeowners Say" text="Real feedback from the homeowners we work with will appear here." />
            {hasSamples && (
              <Reveal delay={0.2}>
                <p className="mt-6 flex max-w-md items-start gap-2 rounded-xl border border-gold-400/40 bg-gold-400/10 p-4 text-sm text-charcoal-600">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>These are <strong>sample placeholder testimonials</strong>, not real reviews. Replace them in <code className="font-mono text-xs">src/data/content.js</code> with genuine customer feedback.</span>
                </p>
              </Reveal>
            )}
            <div className="mt-8 flex items-center gap-3">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-14 w-14 place-items-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-white">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid h-14 w-14 place-items-center rounded-full bg-navy text-white transition hover:bg-gold-400 hover:text-navy">
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="ml-3 font-display text-sm font-bold text-charcoal-500">
                <span className="text-navy">{String(i + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
            <div className="relative min-h-[340px] sm:min-h-[300px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={i}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60, rotate: dir * 1.5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: dir * -60, rotate: dir * -1.5 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-navy/5 sm:p-12"
                  aria-live="polite"
                >
                  <span className="absolute -top-6 right-10 grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-navy shadow-lg">
                    <Quote className="h-6 w-6" />
                  </span>
                  {t.isSample && (
                    <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-charcoal-500">Sample testimonial</span>
                  )}
                  <blockquote className="mt-5 font-display text-xl font-semibold leading-relaxed text-navy sm:text-2xl">“{t.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-beige-200 pt-6">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-navy font-display font-bold text-gold-300" aria-hidden="true">
                      {t.name.split(' ').map((w) => w[0]).join('')}
                    </span>
                    <span>
                      <span className="block font-display font-bold text-navy">{t.name}</span>
                      <span className="block text-sm text-charcoal-500">{t.detail}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={k === i}
                  aria-label={`Testimonial ${k + 1}`}
                  onClick={() => { setDir(k > i ? 1 : -1); setI(k) }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-10 bg-navy' : 'w-5 bg-navy/20 hover:bg-navy/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
