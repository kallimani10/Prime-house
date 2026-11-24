import { motion } from 'framer-motion'
import { stagger, item } from '../ui/Reveal'

/** Horizontal (desktop) / vertical (mobile) animated process timeline. */
export default function ProcessTimeline({ steps, dark = false }) {
  const cols = steps.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
  return (
    <div className="relative">
      {steps.length <= 4 && (
        <motion.span
          aria-hidden="true"
          className={`absolute left-0 right-0 top-[2.1rem] hidden h-px origin-left lg:block ${dark ? 'bg-white/20' : 'bg-navy/15'}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    <motion.ol
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative grid gap-6 sm:grid-cols-2 ${cols}`}
    >
      {steps.map((s) => (
        <motion.li key={s.n} variants={item} className="group relative">
          <span
            className={`relative z-10 grid h-[4.2rem] w-[4.2rem] place-items-center rounded-2xl font-display text-xl font-extrabold transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] ${
              dark ? 'bg-white/10 text-gold-300 ring-1 ring-white/15 group-hover:bg-gold-400 group-hover:text-navy' : 'bg-navy text-gold-300 group-hover:bg-gold-400 group-hover:text-navy'
            }`}
          >
            {s.n}
          </span>
          <h3 className={`mt-7 text-xl font-bold ${dark ? '!text-white' : ''}`}>{s.title}</h3>
          <p className={`mt-3 leading-relaxed ${dark ? 'text-white/65' : 'text-charcoal-600'}`}>{s.text}</p>
        </motion.li>
      ))}
    </motion.ol>
    </div>
  )
}
