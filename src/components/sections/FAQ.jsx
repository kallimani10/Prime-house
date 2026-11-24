import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  const base = useId()
  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                id={`${base}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${base}-a${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`font-display text-lg font-bold transition-colors sm:text-xl ${isOpen ? 'text-gold-600' : 'text-navy group-hover:text-gold-600'}`}>{f.q}</span>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-navy text-white' : 'bg-beige text-navy group-hover:bg-navy group-hover:text-white'}`}>
                  <Plus className="h-5 w-5" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${base}-a${i}`}
                  role="region"
                  aria-labelledby={`${base}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-charcoal-600">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
