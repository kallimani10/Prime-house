import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import TextReveal from '../ui/TextReveal'
import { img } from '../../data/images'

/** Inner-page hero with parallax background, breadcrumb and word reveal. */
export default function PageHero({ image, alt, eyebrow, lines, text, crumb, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={ref} className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-navy-950 pb-16 pt-36 sm:min-h-[72vh] sm:pb-24">
      <motion.div className="absolute inset-0 -z-10" style={{ y }}>
        <img src={img(image, 2000)} alt={alt} className="h-[120%] w-full animate-kenburns object-cover" fetchpriority="high" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/70 to-transparent" />

      <div className="container-x">
        <motion.nav aria-label="Breadcrumb" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <ol className="flex items-center gap-2 text-sm text-white/60">
            <li><Link to="/" className="transition hover:text-white">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
            <li aria-current="page" className="text-gold-300">{crumb}</li>
          </ol>
        </motion.nav>
        <motion.span className="eyebrow eyebrow-light mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          {eyebrow}
        </motion.span>
        <TextReveal
          lines={lines}
          delay={0.35}
          accentLast
          className="mt-5 max-w-5xl text-[2.6rem] font-extrabold leading-[1.02] !text-white sm:text-6xl lg:text-[5.2rem]"
        />
        {text && (
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }} className="mt-9">
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
