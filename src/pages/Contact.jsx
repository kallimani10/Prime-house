import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MapPinned } from 'lucide-react'
import Seo from '../components/ui/Seo'
import Reveal, { stagger, item } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import PlaceholderText from '../components/ui/PlaceholderText'
import PageHero from '../components/sections/PageHero'
import ContactForm from '../components/sections/ContactForm'
import CTASection from '../components/sections/CTASection'
import { img, photos } from '../data/images'
import { business, isSet } from '../data/business'

function InfoCards() {
  const hours = isSet(business.hours) ? business.hours.map((h) => `${h.days}: ${h.time}`).join(' · ') : null
  const cards = [
    { Icon: Phone, title: 'Phone Number', value: business.phone, label: 'phone number', href: isSet(business.phone) ? `tel:${business.phone}` : null, sub: 'Call to talk through your project' },
    { Icon: Mail, title: 'Email Address', value: business.email, label: 'email address', href: isSet(business.email) ? `mailto:${business.email}` : null, sub: 'Send photos or project details' },
    { Icon: MapPin, title: 'Service Location', value: business.serviceArea, label: 'service area', sub: 'Areas where we take on projects' },
    { Icon: Clock, title: 'Business Hours', value: hours, label: 'business hours', sub: 'When our team is available' },
  ]
  return (
    <motion.ul
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="relative z-10 -mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {cards.map(({ Icon: I, title, value, label, href, sub }) => {
        const Inner = (
          <>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold-300 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-gold-400 group-hover:text-navy">
              <I className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-display text-sm font-bold uppercase tracking-[0.18em] !text-charcoal-500">{title}</h2>
            <p className="mt-2 break-words font-display text-lg font-bold text-navy"><PlaceholderText value={value} label={label} /></p>
            <p className="mt-2 text-sm text-charcoal-500">{sub}</p>
          </>
        )
        return (
          <motion.li key={title} variants={item}>
            {href ? (
              <a href={href} className="group block h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-navy/5 transition-transform duration-500 hover:-translate-y-2">{Inner}</a>
            ) : (
              <div className="group h-full rounded-3xl bg-white p-7 shadow-soft ring-1 ring-navy/5 transition-transform duration-500 hover:-translate-y-2">{Inner}</div>
            )}
          </motion.li>
        )
      })}
    </motion.ul>
  )
}

function MapSection() {
  return (
    <section className="pb-20 sm:pb-28" aria-labelledby="map-heading">
      <div className="container-x">
        <SectionHeading eyebrow="Find Us" title={<span id="map-heading">Where We Work</span>} />
        <Reveal delay={0.1} className="mt-10">
          {isSet(business.mapEmbedUrl) ? (
            <div className="overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-navy/5">
              <iframe
                title={`${business.name} location map`}
                src={business.mapEmbedUrl}
                className="h-[420px] w-full border-0 grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative grid h-[380px] place-items-center overflow-hidden rounded-[2rem] bg-navy text-center text-white">
              <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:44px_44px]" />
              <div aria-hidden="true" className="absolute left-[18%] top-[30%] h-40 w-72 rotate-12 rounded-full border border-white/10" />
              <div aria-hidden="true" className="absolute bottom-[12%] right-[14%] h-56 w-56 rounded-full border border-gold-400/20" />
              <div className="relative px-6">
                <span className="mx-auto grid h-20 w-20 animate-float place-items-center rounded-full bg-gold-400 text-navy shadow-[0_0_0_12px_rgba(217,154,61,.15)]">
                  <MapPinned className="h-9 w-9" />
                </span>
                <p className="mt-6 font-display text-2xl font-extrabold">Map coming soon</p>
                <p className="mx-auto mt-2 max-w-md text-white/65">
                  Service area: <PlaceholderText value={business.serviceArea} label="service area" />
                </p>
                <p className="mx-auto mt-4 max-w-md text-xs text-white/45">Site owner: add a Google Maps embed URL as <code className="font-mono">mapEmbedUrl</code> in src/data/business.js.</p>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default function Contact() {
  const [params] = useSearchParams()
  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Prime Home Services to request a free quote for painting, wall repair, maintenance or home improvement. Tell us about your project."
        image={img(photos.colonialHouse, 1200)}
      />
      <PageHero
        image={photos.colonialHouse}
        alt="A classic American home with a welcoming front porch"
        eyebrow="Get in Touch"
        crumb="Contact"
        lines={['Let’s Talk About', 'Your Home Project.']}
        text="Whether you need a repair, maintenance, or home improvement solution, we're ready to hear from you."
      />

      <div className="container-x">
        <InfoCards />
      </div>

      <section id="quote-form" className="section scroll-mt-10" aria-label="Inquiry form">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Free Quote" title="Tell Us About Your Project." text="The more detail you share, the better we can understand what you need. We’ll follow up using the contact method you prefer." />
              <Reveal delay={0.2}>
                <div className="relative mt-10 hidden overflow-hidden rounded-[2rem] lg:block">
                  <img src={img(photos.livingNeutral, 900)} alt="A calm, neutral living room after a refresh" loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-5 backdrop-blur">
                    <p className="font-display font-bold text-navy">What happens next?</p>
                    <ol className="mt-2 space-y-1 text-sm text-charcoal-600">
                      <li>1. We review your request</li>
                      <li>2. We reach out to discuss details</li>
                      <li>3. You receive a clear outline of the work</li>
                    </ol>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <ContactForm defaultService={params.get('service') ?? ''} />
          </Reveal>
        </div>
      </section>

      <MapSection />

      <CTASection
        eyebrow="Ready When You Are"
        title="Your Next Home Improvement Project Starts Here."
        text="Prefer to jump straight in? Use the form above and we’ll take it from there."
        button="Request a Quote"
        to="/contact#quote-form"
        image={photos.livingBlue}
        alt="A stylish living room with a blue sofa"
      />
    </>
  )
}
