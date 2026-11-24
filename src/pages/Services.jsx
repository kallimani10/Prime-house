import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowUpRight, Info } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Button from '../components/ui/Button'
import Reveal, { RevealImage } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import PageHero from '../components/sections/PageHero'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import FAQ from '../components/sections/FAQ'
import CTASection from '../components/sections/CTASection'
import { img, photos } from '../data/images'
import { serviceDetails } from '../data/services'
import { detailedProcess, faqs } from '../data/content'

/** Sticky, horizontally scrollable category nav with scroll-spy. */
function CategoryNav() {
  const [active, setActive] = useState(serviceDetails[0].id)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    serviceDetails.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    document.getElementById(`chip-${active}`)?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [active])

  return (
    <div className="sticky top-[68px] z-30 border-b border-navy/10 bg-cream/90 backdrop-blur-xl">
      <nav aria-label="Service categories" className="container-x">
        <ul className="no-scrollbar flex gap-2 overflow-x-auto py-3">
          {serviceDetails.map((s, i) => (
            <li key={s.id}>
              <Link
                id={`chip-${s.id}`}
                to={`#${s.id}`}
                onClick={(e) => { e.preventDefault(); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }); history.replaceState(null, '', `#${s.id}`) }}
                aria-current={active === s.id ? 'true' : undefined}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 font-display text-sm font-bold transition-all duration-300 ${active === s.id ? 'bg-navy text-white' : 'text-charcoal-600 hover:bg-beige hover:text-navy'}`}
              >
                <span className={`text-[11px] ${active === s.id ? 'text-gold-300' : 'text-charcoal-500'}`}>0{i + 1}</span>
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

/** Layout variants keep the long page from feeling repetitive. */
function ServiceBlock({ s, i }) {
  const variant = i % 3 // 0: image left, 1: image right, 2: wide banner
  const num = String(i + 1).padStart(2, '0')

  const Content = (
    <div>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold-300"><Icon name={s.icon} className="h-7 w-7" /></span>
          <span className="eyebrow">{s.kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl">{s.title}</h2>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mt-6 text-lg leading-relaxed text-charcoal-600">{s.description}</p>
      </Reveal>
      <Reveal delay={0.2}>
        <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.2em] text-charcoal-500">Key features</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {s.features.map((f) => (
            <li key={f} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[15px] font-medium text-navy shadow-card ring-1 ring-navy/5">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-400/20 text-gold-600"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
              {f}
            </li>
          ))}
        </ul>
        {s.note && (
          <p className="mt-4 flex items-start gap-2 text-sm text-charcoal-500"><Info className="mt-0.5 h-4 w-4 shrink-0" />{s.note}</p>
        )}
      </Reveal>
      <Reveal delay={0.26} className="mt-9 flex flex-wrap items-center gap-5">
        <Button to={`/contact?service=${encodeURIComponent(s.title)}`} variant="navy">Inquire About This Service</Button>
        <Link to="/contact" className="link-underline font-display text-sm font-bold text-navy">Ask a question</Link>
      </Reveal>
    </div>
  )

  if (variant === 2) {
    return (
      <section id={s.id} className="scroll-mt-36 py-16 sm:py-24">
        <div className="container-x">
          <div className="group relative overflow-hidden rounded-[2rem]">
            <RevealImage src={img(s.image, 2000)} alt={`${s.title} — ${s.kicker.toLowerCase()}`} className="aspect-[16/10] sm:aspect-[21/9]" imgClassName="transition-transform duration-[1.6s] group-hover:scale-105" radius={32} />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-navy-950/70 to-transparent" />
            <span className="pointer-events-none absolute bottom-6 left-6 font-display text-7xl font-extrabold leading-none text-white/90 sm:bottom-10 sm:left-10 sm:text-9xl">{num}</span>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">{Content}</div>
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <RevealImage src={img(s.image2, 800)} alt={`${s.title} detail`} className="aspect-[3/4] shadow-soft" delay={0.2} />
            </div>
          </div>
        </div>
      </section>
    )
  }

  const imageRight = variant === 1
  return (
    <section id={s.id} className={`scroll-mt-36 py-16 sm:py-24 ${imageRight ? 'bg-cream-100' : ''}`}>
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className={`relative ${imageRight ? 'lg:order-2' : ''}`}>
          <div className="group relative">
            <RevealImage src={img(s.image, 1200)} alt={`${s.title} — ${s.kicker.toLowerCase()}`} className="aspect-[4/5] shadow-soft sm:aspect-[5/5]" imgClassName="transition-transform duration-[1.4s] group-hover:scale-110" />
            <span className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 font-display text-sm font-extrabold text-navy backdrop-blur">{num} / 08</span>
          </div>
          <Reveal delay={0.35} className={`absolute -bottom-8 hidden w-44 sm:block ${imageRight ? '-left-8' : '-right-8'}`}>
            <div className="group overflow-hidden rounded-3xl border-[6px] border-cream shadow-soft">
              <img src={img(s.image2, 500)} alt={`${s.title} detail`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </Reveal>
        </div>
        <div>{Content}</div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="Explore interior and exterior painting, wall and drywall repair, plumbing and electrical tasks, home maintenance, renovation and pressure washing from Prime Home Services."
        image={img(photos.toolWall, 1200)}
      />
      <PageHero
        image={photos.toolWall}
        alt="An organized wall of professional home improvement tools"
        eyebrow="What We Do"
        crumb="Services"
        lines={['Complete Home Services.', 'Professional Results.']}
        text="Discover practical home improvement and maintenance solutions designed to keep your home beautiful, functional, and well maintained."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#interior-painting" variant="ghostLight" icon={false}>Browse Services</Button>
          <Button to="/contact">Get a Free Quote</Button>
        </div>
      </PageHero>

      <CategoryNav />

      <section className="container-x pt-16 sm:pt-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Eight Service Areas" title="Everything Your Home Needs, Thoughtfully Done." />
          <Reveal delay={0.15}>
            <p className="max-w-lg text-lg text-charcoal-600 lg:justify-self-end">Choose a single service or combine several — many homeowners pair wall repair with painting, or bundle a list of maintenance jobs into one visit.</p>
          </Reveal>
        </div>
      </section>

      {serviceDetails.map((s, i) => <ServiceBlock key={s.id} s={s} i={i} />)}

      <section className="section bg-navy text-white">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionHeading light eyebrow="Our Work Process" title="From First Message to Final Walkthrough." />
            <Reveal delay={0.15}><p className="max-w-lg text-lg text-white/70 lg:justify-self-end">A clear, predictable process means fewer surprises and a better result. Here is the journey every project follows.</p></Reveal>
          </div>
          <div className="mt-16">
            <ProcessTimeline steps={detailedProcess} dark />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" text="Quick answers to common questions. Can’t find what you’re looking for? Reach out — we’re happy to help." />
              <Reveal delay={0.2} className="mt-8"><Button to="/contact" variant="outline">Ask Us Anything</Button></Reveal>
            </div>
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <FAQ items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Start a Project"
        title="Have a Home Project in Mind?"
        text="Share a few details and we’ll get back to you to talk through the next steps."
        button="Get in Touch"
        image={photos.suburbanHouse}
        alt="A bright suburban home on a sunny day"
      />
    </>
  )
}
