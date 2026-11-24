import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text, align = 'left', light = false, className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={`mt-5 text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.4rem] ${light ? '!text-white' : ''}`}>{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-charcoal-600'} ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
