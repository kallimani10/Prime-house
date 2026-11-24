import { Link } from 'react-router-dom'

export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Prime Home Services — home">
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-all duration-500 group-hover:-rotate-6 ${light ? 'bg-white/10 ring-1 ring-white/25 backdrop-blur' : 'bg-navy'}`}>
        <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
          <path d="M12 32 32 14l20 18" fill="none" stroke="#d99a3d" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 30v19h26V30" fill="none" stroke="#faf7f2" strokeWidth="5.5" strokeLinejoin="round" />
          <path d="M29 49V39h6v10" fill="none" stroke="#faf7f2" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[17px] font-extrabold tracking-[0.06em] transition-colors duration-500 ${light ? 'text-white' : 'text-navy'}`}>PRIME HOME</span>
        <span className={`mt-1 block font-display text-[10px] font-bold tracking-[0.46em] transition-colors duration-500 ${light ? 'text-gold-300' : 'text-gold-600'}`}>SERVICES</span>
      </span>
    </Link>
  )
}
