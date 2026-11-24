import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { img } from '../../data/images'
import { business, isSet } from '../../data/business'

/** Full-bleed CTA band with a parallax residential photograph. */
export default function CTASection({ eyebrow = 'Get Started', title, text, button = 'Request a Free Quote', to = '/contact', image, alt }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-950 sm:rounded-[2.5rem]">
        <motion.img
          src={img(image, 2000)}
          alt={alt}
          loading="lazy"
          style={{ y }}
          className="absolute inset-x-0 -top-[12%] -z-10 h-[124%] w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40" />
        <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 h-72 w-72 animate-float rounded-full border border-gold-400/30" />
        <div aria-hidden="true" className="absolute -bottom-24 right-1/4 -z-10 h-56 w-56 rounded-full bg-gold-400/10 blur-2xl" />

        <div className="container-x py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Reveal><span className="eyebrow eyebrow-light">{eyebrow}</span></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.04] !text-white sm:text-5xl lg:text-6xl">{title}</h2>
            </Reveal>
            {text && (
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>
              </Reveal>
            )}
            <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
              <Button to={to} size="lg">{button}</Button>
              {isSet(business.phone) && (
                <Button href={`tel:${business.phone}`} variant="ghostLight" size="lg" icon={false}>Call {business.phone}</Button>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
