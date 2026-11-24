import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Icon from '../ui/Icon'
import { item } from '../ui/Reveal'
import { img } from '../../data/images'

export default function ServiceCard({ service, index }) {
  return (
    <motion.article variants={item} className="group relative">
      <Link
        to={`/services#${service.anchor}`}
        className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-navy/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
        aria-label={`${service.title} — learn more`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={img(service.image, 800)}
            alt={`${service.title} — ${service.text.split('—')[0].trim()}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-display text-xs font-bold text-navy backdrop-blur">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold-400 text-navy shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-8deg]">
            <Icon name={service.icon} className="h-6 w-6" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold leading-snug">{service.title}</h3>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-charcoal-600">{service.text}</p>
          <span className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-navy">
            <span className="link-underline">Learn More</span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-beige transition-all duration-300 group-hover:rotate-45 group-hover:bg-navy group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
