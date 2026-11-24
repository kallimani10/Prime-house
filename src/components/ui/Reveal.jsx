import { motion } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

/** Scroll-triggered fade/slide reveal. */
const tags = { div: motion.div, li: motion.li, section: motion.section }

export default function Reveal({ children, delay = 0, y = 32, x = 0, className = '', once = true, amount = 0.2, as = 'div' }) {
  const M = tags[as] ?? motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </M>
  )
}

/** Image that unveils with a clip-path wipe when scrolled into view. */
export function RevealImage({ src, alt, className = '', imgClassName = '', delay = 0, eager = false, radius = 24 }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      style={{ borderRadius: radius }}
      initial={{ clipPath: `inset(10% 10% 10% 10% round ${radius}px)`, opacity: 0 }}
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius}px)`, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, delay, ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay, ease }}
      />
    </motion.div>
  )
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}
export const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}
