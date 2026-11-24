import { motion } from 'framer-motion'

/** Word-by-word masked reveal for headlines. Pass lines as an array of strings. */
export default function TextReveal({ lines, className = '', delay = 0, as = 'h1', accentLast = false }) {
  const Tag = as
  let i = 0
  return (
    <Tag className={className}>
      <span className="sr-only">{lines.join(' ')}</span>
      <span aria-hidden="true">
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(' ').map((word, wi, arr) => {
              const idx = i++
              const accent = accentLast && li === lines.length - 1 && wi === arr.length - 1
              return (
                <span key={wi} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <motion.span
                    className={`inline-block ${accent ? 'text-gold-300' : ''}`}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: delay + idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                    {wi < arr.length - 1 ? ' ' : ''}
                  </motion.span>
                </span>
              )
            })}
          </span>
        ))}
      </span>
    </Tag>
  )
}
