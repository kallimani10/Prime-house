import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  gold: 'bg-gold-400 text-navy-950 hover:bg-gold-300 shadow-[0_10px_30px_-10px_rgba(217,154,61,.7)]',
  navy: 'bg-navy text-cream hover:bg-navy-700',
  outline: 'border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-cream',
  ghostLight: 'border border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-navy',
}

const sizes = { sm: 'px-5 py-2.5 text-sm', md: 'px-6 py-3.5 text-[15px]', lg: 'px-7 py-4 text-base' }

const MotionLink = motion.create(Link)

/** Premium pill button. Renders a router Link (`to`), anchor (`href`) or button. */
export default function Button({ to, href, children, variant = 'gold', icon = true, className = '', size = 'md', ...rest }) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-tight transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="relative grid h-5 w-5 place-items-center overflow-hidden">
          <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" aria-hidden="true" />
          <ArrowUpRight className="absolute h-[18px] w-[18px] -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" aria-hidden="true" />
        </span>
      )}
    </>
  )
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 } }
  if (to) return <MotionLink to={to} className={cls} {...motionProps} {...rest}>{content}</MotionLink>
  if (href) return <motion.a href={href} className={cls} {...motionProps} {...rest}>{content}</motion.a>
  return <motion.button className={cls} {...motionProps} {...rest}>{content}</motion.button>
}
