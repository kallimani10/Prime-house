import { motion } from 'framer-motion'
import { Target, Telescope, Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Button from '../components/ui/Button'
import Reveal, { RevealImage, stagger, item } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import Icon from '../components/ui/Icon'
import Marquee from '../components/ui/Marquee'
import PageHero from '../components/sections/PageHero'
import CTASection from '../components/sections/CTASection'
import { img, photos } from '../data/images'
import { coreValues, approach } from '../data/content'

function Story() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-5 gap-4">
            <RevealImage src={img(photos.roofWork, 1000)} alt="A home improvement professional working on the exterior of a house" className="col-span-3 aspect-[3/4] shadow-soft" />
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <RevealImage src={img(photos.blueprint, 700)} alt="Reviewing plans before starting a renovation" className="aspect-square" delay={0.15} />
              <RevealImage src={img(photos.livingBright, 700)} alt="A bright, freshly finished living space" className="aspect-[4/5]" delay={0.3} />
            </div>
          </div>
          <div aria-hidden="true" className="absolute -bottom-8 -left-8 -z-10 h-48 w-48 rounded-[2rem] bg-beige" />
        </div>
        <div className="lg:col-span-6 lg:pl-8">
          <SectionHeading eyebrow="Our Story" title="A Home Service Company Built on Care." />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
              Prime Home Services was created around a simple idea: homeowners deserve a dependable partner for the work that keeps a home comfortable, functional and looking its best.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-600">
              We bring painting, wall repair, maintenance and improvement services together so you do not have to coordinate a different contact for every job. Whether it is a single repair or a series of upgrades, we approach each project with the same attention.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 rounded-3xl border-l-4 border-gold-400 bg-white p-6 shadow-card">
              <p className="font-display text-lg font-semibold leading-relaxed text-navy">
                “Our philosophy is straightforward: listen carefully, communicate honestly, and do work we would be proud to have in our own homes.”
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-charcoal-500">Our brand philosophy</p>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-8 leading-relaxed text-charcoal-600">
              Customer satisfaction guides how we plan, how we work and how we finish. We want every homeowner to feel informed, respected and genuinely happy with the result.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  const cards = [
    { Icon: Target, label: 'Our Mission', text: 'To provide dependable home improvement and maintenance solutions with a focus on quality, attention to detail, and customer satisfaction.', dark: true },
    { Icon: Telescope, label: 'Our Vision', text: 'To become a trusted name in home services by making home maintenance and improvement more convenient and accessible.', dark: false },
  ]
  return (
    <section className="section bg-cream-100">
      <div className="container-x">
        <SectionHeading align="center" eyebrow="Purpose" title="What Drives Us." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map(({ Icon: I, label, text, dark }, i) => (
            <Reveal key={label} delay={i * 0.12}>
              <article className={`group relative h-full overflow-hidden rounded-[2rem] p-10 transition-transform duration-500 hover:-translate-y-2 sm:p-14 ${dark ? 'bg-navy text-white' : 'bg-white shadow-card ring-1 ring-navy/5'}`}>
                <div aria-hidden="true" className={`absolute -right-16 -top-16 h-56 w-56 rounded-full transition-transform duration-700 group-hover:scale-125 ${dark ? 'bg-gold-400/10' : 'bg-beige'}`} />
                <span className={`relative grid h-16 w-16 place-items-center rounded-2xl ${dark ? 'bg-gold-400 text-navy' : 'bg-navy text-gold-300'}`}>
                  <I className="h-8 w-8" />
                </span>
                <h3 className={`relative mt-8 text-3xl font-extrabold sm:text-4xl ${dark ? '!text-white' : ''}`}>{label}</h3>
                <p className={`relative mt-5 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-charcoal-600'}`}>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Core Values" title="The Principles Behind Every Project." />
          <Reveal delay={0.15}><p className="max-w-lg text-lg text-charcoal-600 lg:justify-self-end">These values shape how we treat your home, your time and your trust.</p></Reveal>
        </div>
        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <motion.li key={v.title} variants={item} className="group relative bg-cream p-8 transition-colors duration-500 hover:bg-navy sm:p-10">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-beige text-navy transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-gold-400">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <span className="font-display text-sm font-bold text-charcoal-500 transition-colors group-hover:text-white/40">0{i + 1}</span>
              </div>
              <h3 className="mt-8 text-2xl font-bold transition-colors duration-500 group-hover:!text-white">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-charcoal-600 transition-colors duration-500 group-hover:text-white/70">{v.text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section className="section relative overflow-hidden bg-navy text-white">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading light eyebrow="Our Approach" title="Customer-First, Every Step of the Way." text="We believe great results come from clear understanding and steady communication. Here is how we approach every project." />
            <Reveal delay={0.25} className="mt-10">
              <RevealImage src={img(photos.measuring, 900)} alt="Carefully measuring materials before installation" className="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
        <div className="relative lg:col-span-7">
        <span aria-hidden="true" className="absolute bottom-8 left-[3rem] top-8 w-px bg-gradient-to-b from-gold-400 via-white/20 to-transparent sm:left-[3.45rem]" />
        <ol className="relative space-y-4">
          {approach.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 0.06} x={30} y={0} className="group relative flex gap-6 rounded-3xl p-4 transition-colors duration-500 hover:bg-white/[0.05] sm:p-6">
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-navy-800 text-gold-300 ring-1 ring-white/15 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-navy">
                  <Icon name={a.icon} className="h-7 w-7" />
                </span>
                <div>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-gold-300">Step 0{i + 1}</span>
                  <h3 className="mt-2 text-xl font-bold !text-white sm:text-2xl">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{a.text}</p>
                </div>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}

function WhyHomeowners() {
  const pillars = [
    { t: 'Reliable service', d: 'We respect your schedule, arrive prepared and keep you informed — so you can plan your week with confidence.' },
    { t: 'Professional workmanship', d: 'Careful preparation, the right materials and a clean finish are at the heart of every job we take on.' },
    { t: 'Convenient home improvement', d: 'One team for painting, repairs, maintenance and upgrades means fewer calls and simpler planning for you.' },
  ]
  return (
    <section className="section overflow-hidden">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Why Homeowners Choose Us" title="Dependable Help for the Home You Love." />
          <div className="mt-10 space-y-8">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={0.1 + i * 0.1}>
                <div className="flex gap-5">
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-gold-300"><Check className="h-4 w-4" strokeWidth={3} /></span>
                  <div>
                    <h3 className="text-xl font-bold">{p.t}</h3>
                    <p className="mt-2 leading-relaxed text-charcoal-600">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4} className="mt-10">
            <Button to="/services" variant="navy">Explore Our Services</Button>
          </Reveal>
        </div>
        <div className="relative">
          <RevealImage src={img(photos.livingWindow, 1200)} alt="A comfortable, well-maintained living room filled with natural light" className="aspect-[4/5] shadow-soft" />
          <Reveal delay={0.4} className="absolute -bottom-8 -left-4 max-w-[16rem] sm:-left-10">
            <div className="rounded-3xl bg-gold-400 p-6 text-navy shadow-soft">
              <p className="font-display text-lg font-extrabold leading-snug">Painting, repairs, maintenance &amp; improvement — one trusted team.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Prime Home Services — our story, mission, values and customer-first approach to home repair, painting, maintenance and improvement."
        image={img(photos.modernKitchen, 1200)}
      />
      <PageHero
        image={photos.modernKitchen}
        alt="A beautifully renovated modern kitchen with warm lighting"
        eyebrow="About Prime Home Services"
        crumb="About"
        lines={['Built Around Quality.', 'Focused on Your Home.']}
        text="We help homeowners maintain, repair and improve the spaces they live in — with care, honesty and attention to every detail."
      />
      <Story />
      <Marquee items={['Quality', 'Integrity', 'Reliability', 'Professionalism', 'Customer Satisfaction', 'Attention to Detail']} dark={false} />
      <MissionVision />
      <Values />
      <Approach />
      <WhyHomeowners />
      <div className="pt-16" />
      <CTASection
        eyebrow="Work With Us"
        title="Let’s Make Your Home a Better Place."
        text="Have a repair, a refresh or an improvement in mind? Our team would love to hear about it."
        button="Contact Our Team"
        image={photos.livingWarm}
        alt="A warm, modern living room interior"
      />
    </>
  )
}
