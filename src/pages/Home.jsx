import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check, PaintRoller, Wrench, Home as HomeIcon, ArrowUpRight, Info } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Button from '../components/ui/Button'
import TextReveal from '../components/ui/TextReveal'
import Marquee from '../components/ui/Marquee'
import Reveal, { RevealImage, stagger, item } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import ServiceCard from '../components/sections/ServiceCard'
import CompareSlider from '../components/sections/CompareSlider'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'
import { img, photos } from '../data/images'
import { business } from '../data/business'
import { coreServices } from '../data/services'
import { marqueeItems, benefits, transformations, gallery, processSteps } from '../data/content'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        {business.heroVideo ? (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={img(photos.heroHouse, 2000)} aria-hidden="true">
            <source src={business.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={img(photos.heroHouse, 2200)}
            alt="A beautifully lit American craftsman-style home at dusk"
            className="h-full w-full animate-kenburns object-cover object-[50%_60%]"
            fetchpriority="high"
          />
        )}
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/10" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-navy-950/90 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:80px_80px]" />

      <motion.div style={{ y: contentY, opacity: fade }} className="container-x relative pb-28 pt-36 sm:pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pl-1.5 pr-4 text-sm text-white/85 ring-1 ring-white/20 backdrop-blur-md"
          >
            <span className="rounded-full bg-gold-400 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-navy">Prime Home</span>
            Repairs · Painting · Improvement
          </motion.div>

          <TextReveal
            lines={['Your Home Deserves', 'the Best Care.']}
            delay={0.3}
            accentLast
            className="mt-8 text-[2.9rem] font-extrabold leading-[0.98] tracking-tightest !text-white sm:text-7xl lg:text-[6.3rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            From everyday home repairs to beautiful transformations, Prime Home Services brings reliable expertise and quality craftsmanship to every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/services" variant="ghostLight" size="lg">Explore Our Services</Button>
            <Button to="/contact" size="lg">Get a Free Quote</Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating service badges */}
      <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 xl:right-16 xl:block">
        {[
          { Icon: PaintRoller, t: 'Painting', s: 'Interior & exterior', d: 0, c: '' },
          { Icon: Wrench, t: 'Repairs', s: 'Walls, fixtures & more', d: 1.5, c: 'ml-16' },
          { Icon: HomeIcon, t: 'Improvement', s: 'Upgrades & renovation', d: 3, c: '' },
        ].map(({ Icon: I, t, s, d, c }, k) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + k * 0.15, duration: 0.8 }}
            className={`mb-4 ${c}`}
          >
            <div className="flex w-64 animate-float items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur-xl" style={{ animationDelay: `${d}s` }}>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400 text-navy"><I className="h-6 w-6" /></span>
              <span>
                <span className="block font-display font-bold text-white">{t}</span>
                <span className="block text-sm text-white/65">{s}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#intro"
        aria-label="Scroll to introduction"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:flex flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 hover:text-white"
      >
        <span className="flex h-11 w-7 justify-center rounded-full border border-white/40 pt-2">
          <span className="h-2 w-1 animate-scrolldot rounded-full bg-gold-300" />
        </span>
        Scroll
      </motion.a>
    </section>
  )
}

function Intro() {
  const points = [
    'Repairs, painting and improvements under one roof',
    'Clear communication from first call to final walkthrough',
    'Careful preparation and tidy, respectful work',
  ]
  return (
    <section id="intro" className="section overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <RevealImage src={img(photos.carpentryCrew, 1200)} alt="Home improvement professionals working together on a renovation" className="aspect-[4/5] w-[85%] shadow-soft" />
          <Reveal delay={0.3} className="absolute -bottom-10 right-0 w-[52%]">
            <div className="overflow-hidden rounded-3xl border-[6px] border-cream shadow-soft">
              <img src={img(photos.greenLivingRoom, 800)} alt="A freshly painted living room with a deep green feature wall" loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
          <div aria-hidden="true" className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-beige" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute left-[62%] top-8 grid h-28 w-28 place-items-center rounded-full bg-navy text-center shadow-soft sm:h-32 sm:w-32"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]" aria-hidden="true">
              <defs><path id="circ" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" /></defs>
              <text className="fill-gold-300 font-display text-[9.5px] font-bold uppercase tracking-[0.18em]"><textPath href="#circ">Quality • Care • Craftsmanship •</textPath></text>
            </svg>
            <HomeIcon className="h-8 w-8 text-white" aria-hidden="true" />
          </motion.div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Welcome to Prime Home Services"
            title="Making Every Home Better, One Project at a Time."
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
              Your home works hard for you. We help keep it looking its best and working the way it should — whether that means patching a damaged wall, repainting a tired room, fixing the small things that pile up, or planning a larger improvement.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-600">
              Every project begins with listening. We take the time to understand what you need, explain the work clearly and treat your home with the same care we would want in our own.
            </p>
          </Reveal>
          <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 space-y-4">
            {points.map((p) => (
              <motion.li key={p} variants={item} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold-400/20 text-gold-600"><Check className="h-4 w-4" strokeWidth={3} /></span>
                <span className="font-medium text-navy">{p}</span>
              </motion.li>
            ))}
          </motion.ul>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-6">
            <Button to="/about" variant="navy">More About Us</Button>
            <Link to="/contact" className="link-underline font-display font-bold text-navy">Talk to our team</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CoreServices() {
  return (
    <section className="section bg-cream-100">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Our Core Services" title="Professional Services for Every Corner of Your Home." />
          <Reveal delay={0.2}><Button to="/services" variant="outline">View All Services</Button></Reveal>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {coreServices.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </motion.div>
      </div>
    </section>
  )
}

function WhyChoose() {
  return (
    <section className="section relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading light eyebrow="Why Choose Us" title="Why Choose Prime Home Services?" text="Good home service is about more than the work itself. It is about how you are treated from the first conversation to the final walkthrough." />
            <Reveal delay={0.25} className="mt-10 hidden lg:block">
              <RevealImage src={img(photos.drill, 900)} alt="A professional using a cordless drill on a home repair" className="aspect-[5/4]" />
            </Reveal>
          </div>
        </div>
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-5 sm:grid-cols-2 lg:col-span-7"
        >
          {benefits.map((b, i) => (
            <motion.li
              key={b.title}
              variants={item}
              className={`group relative overflow-hidden rounded-3xl bg-white/[0.04] p-8 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.08] ${i % 2 ? 'sm:translate-y-10' : ''}`}
            >
              <span aria-hidden="true" className="absolute -right-3 -top-5 font-display text-8xl font-extrabold text-white/[0.04] transition-colors group-hover:text-gold-400/10">0{i + 1}</span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/15 text-gold-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-400 group-hover:text-navy">
                <Icon name={b.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold !text-white">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-white/65">{b.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function BeforeAfter() {
  const illustrative = transformations.some((t) => t.illustrative)
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading align="center" eyebrow="Transformations" title="See the Difference Care Makes." text="Drag the slider to compare. A well-prepared surface and a clean finish change how an entire room feels." />
        {illustrative && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-charcoal-500">
              <Info className="h-4 w-4 shrink-0 text-gold-600" /> Illustrative examples — real project photos will be added soon.
            </p>
          </Reveal>
        )}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {transformations.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.1}>
              <CompareSlider {...t} />
              <h3 className="mt-5 text-xl font-bold">{t.title}</h3>
              <p className="mt-1.5 text-charcoal-600">{t.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section bg-cream-100 pt-0 sm:pt-0 lg:pt-0">
      <div className="container-x pt-20 sm:pt-24 lg:pt-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Featured Spaces" title="Spaces Worth Coming Home To." />
          <Reveal delay={0.15}><p className="max-w-md text-charcoal-600">Inspiration for the kind of finished, comfortable spaces we help homeowners create — inside and out.</p></Reveal>
        </div>
        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 0.08} className={`${g.span}`} amount={0.1}>
              <figure className="group relative h-full overflow-hidden rounded-3xl">
                <img src={img(g.image, 1000)} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white">
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gold-300">{g.tag}</span>
                    <span className="mt-1 block font-display text-lg font-bold">{g.title}</span>
                  </span>
                  <span className="grid h-10 w-10 shrink-0 translate-y-3 place-items-center rounded-full bg-white text-navy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="How It Works" title="Simple From Start to Finish." />
          <Reveal delay={0.15}><p className="max-w-lg text-lg text-charcoal-600 lg:justify-self-end">Getting help with your home should be easy. Here is what working with us looks like.</p></Reveal>
        </div>
        <div className="mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
        <Reveal className="mt-14 flex justify-center">
          <Button to="/contact" variant="navy" size="lg">Start With Step 01</Button>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo
        title="Home Repair, Painting & Improvement"
        description="Prime Home Services helps homeowners with interior and exterior painting, drywall and wall repair, home maintenance, handyman work and home improvement. Request a free quote."
      />
      <Hero />
      <Marquee items={marqueeItems} />
      <Intro />
      <CoreServices />
      <WhyChoose />
      <BeforeAfter />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <div className="pt-3 sm:pt-5" />
      <CTASection
        eyebrow="Let’s Get Started"
        title="Ready to Give Your Home the Care It Deserves?"
        text="Tell us about your project — big or small. We’ll listen, talk through the details and help you plan the next step."
        button="Request a Free Quote"
        image={photos.colonialHouse}
        alt="A classic white American colonial home with a manicured lawn"
      />
    </>
  )
}
