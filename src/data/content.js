import { photos } from './images'

export const marqueeItems = [
  'Home Improvement',
  'Professional Painting',
  'Wall Repair',
  'Home Maintenance',
  'Quality Craftsmanship',
  'Reliable Service',
]

export const benefits = [
  { icon: 'Award', title: 'Professional Workmanship', text: 'Work carried out with care, the right tools and respect for your home.' },
  { icon: 'CalendarCheck', title: 'Reliable Service', text: 'We show up when we say we will and keep you informed along the way.' },
  { icon: 'ScanSearch', title: 'Attention to Detail', text: 'Clean edges, tidy finishes and a site left the way we found it.' },
  { icon: 'HeartHandshake', title: 'Customer-Focused Approach', text: 'Your priorities, budget and schedule shape how every job is planned.' },
  { icon: 'Clock', title: 'Convenient Scheduling', text: 'We work with you to find a time that fits around your week.' },
  { icon: 'Sparkles', title: 'Quality-Driven Solutions', text: 'Practical recommendations focused on results that hold up.' },
]

export const processSteps = [
  { n: '01', title: 'Tell Us What You Need', text: 'Send a quick request online or reach out directly with a few details about your project.' },
  { n: '02', title: 'Discuss Your Project', text: 'We talk through the scope, your goals and timing, and answer any questions you have.' },
  { n: '03', title: 'Professional Service', text: 'The work is carried out carefully, with clear communication from start to finish.' },
  { n: '04', title: 'Enjoy Your Improved Home', text: 'We walk through the finished work with you so you can enjoy the result with confidence.' },
]

export const detailedProcess = [
  { n: '01', title: 'Inquiry', text: 'You share what you need through the contact form or by reaching out directly.' },
  { n: '02', title: 'Conversation', text: 'We follow up to understand the details, ask about your goals and discuss timing.' },
  { n: '03', title: 'Scope & Quote', text: 'You receive a clear outline of the proposed work so you know what to expect.' },
  { n: '04', title: 'Scheduling', text: 'Together we choose a time that works for your household.' },
  { n: '05', title: 'The Work', text: 'We protect your space, complete the job with care and keep you updated.' },
  { n: '06', title: 'Final Walkthrough', text: 'We review the finished work with you and clean up before we leave.' },
]

/**
 * SAMPLE TESTIMONIALS — placeholders only.
 * These are NOT real customer reviews. Replace them with genuine feedback
 * (with the customer's permission) before launch, and set `isSample: false`.
 */
export const testimonials = [
  {
    isSample: true,
    quote: 'Replace this text with a genuine review from a customer who had interior painting done — what they liked about the process and the finished rooms.',
    name: 'Sample Customer',
    detail: 'Interior Painting',
  },
  {
    isSample: true,
    quote: 'Replace this text with real feedback about a drywall or wall repair project — for example how seamless the repair looks.',
    name: 'Sample Customer',
    detail: 'Wall Repair',
  },
  {
    isSample: true,
    quote: 'Replace this text with a genuine testimonial about general handyman or maintenance work, in the customer’s own words.',
    name: 'Sample Customer',
    detail: 'Home Maintenance',
  },
  {
    isSample: true,
    quote: 'Replace this text with a real review of a home improvement or renovation project, shared with the customer’s permission.',
    name: 'Sample Customer',
    detail: 'Home Improvement',
  },
]

/**
 * Before/after comparisons. These currently use ONE photo per pair with a
 * "before" visual treatment to demonstrate the slider — they are illustrative,
 * not real project results. Replace `before`/`after` with genuine photos of
 * the same space and set `illustrative: false`.
 */
export const transformations = [
  { title: 'Interior Painting', caption: 'Dull, tired walls refreshed with a rich, even finish.', before: photos.greenLivingRoom, after: photos.greenLivingRoom, illustrative: true },
  { title: 'Wall Repair', caption: 'Worn surfaces repaired and prepared for a clean finish.', before: photos.livingSoft, after: photos.livingSoft, illustrative: true },
  { title: 'Home Renovation', caption: 'A dated space brought back to life with thoughtful updates.', before: photos.whiteKitchen, after: photos.whiteKitchen, illustrative: true },
]

export const gallery = [
  { image: photos.livingWarm, title: 'Warm, modern living', tag: 'Interior Painting', span: 'md:col-span-2 md:row-span-2' },
  { image: photos.modernKitchen, title: 'Kitchen refresh', tag: 'Renovation', span: '' },
  { image: photos.bedroom, title: 'Calm bedroom finish', tag: 'Interior Painting', span: 'md:row-span-2' },
  { image: photos.colorfulExterior, title: 'Exterior color', tag: 'Exterior Painting', span: '' },
  { image: photos.bathroom, title: 'Bathroom update', tag: 'Home Improvement', span: '' },
  { image: photos.livingBlue, title: 'Living space styling', tag: 'Wall Finishing', span: '' },
  { image: photos.craftsmanHouse, title: 'Front porch & exterior', tag: 'Exterior Care', span: 'md:col-span-2' },
]

export const coreValues = [
  { icon: 'Gem', title: 'Quality', text: 'We take the time to do the job properly, because the finish is what you live with.' },
  { icon: 'ShieldCheck', title: 'Integrity', text: 'Honest advice and clear expectations — including telling you what a job does not need.' },
  { icon: 'CalendarCheck', title: 'Reliability', text: 'Showing up on time, doing what we said, and keeping you in the loop.' },
  { icon: 'BriefcaseBusiness', title: 'Professionalism', text: 'Respect for your home, your time and the people who live there.' },
  { icon: 'Smile', title: 'Customer Satisfaction', text: 'Your feedback shapes how we work — we want you happy with the result.' },
  { icon: 'ScanSearch', title: 'Attention to Detail', text: 'The small things — straight lines, clean edges, tidy cleanup — matter to us.' },
]

export const approach = [
  { icon: 'Ear', title: 'Understanding your requirements', text: 'We start by listening — what you want done, why it matters and what a great result looks like to you.' },
  { icon: 'MessagesSquare', title: 'Discussing the project scope', text: 'We talk through the details together so the work, timing and expectations are clear on both sides.' },
  { icon: 'ClipboardList', title: 'Planning the work', text: 'Materials, preparation and sequencing are thought through before work begins, to keep things running smoothly.' },
  { icon: 'Hammer', title: 'Delivering quality-focused solutions', text: 'The job is carried out carefully, with a focus on a clean, durable finish.' },
  { icon: 'MessageCircle', title: 'Ensuring clear communication', text: 'You always know what is happening, what comes next and who to contact with questions.' },
]

export const faqs = [
  {
    q: 'What home services do you offer?',
    a: 'We offer interior and exterior painting, wall and drywall repair, minor plumbing and electrical tasks, general home maintenance and handyman work, home improvement and minor renovation, and pressure washing. Visit the sections above for details on each service.',
  },
  {
    q: 'How can I request a quote?',
    a: 'The easiest way is to fill in the form on our Contact page with a few details about your project. You can also reach us directly using the contact information listed there.',
  },
  {
    q: 'Do you provide painting services?',
    a: 'Yes. Painting is one of our core services — interior rooms, ceilings and walls, as well as exterior painting with proper surface preparation.',
  },
  {
    q: 'Can I request multiple services?',
    a: 'Absolutely. Many homeowners combine jobs — for example wall repair followed by painting. Select “Multiple services” on the contact form and describe everything you have in mind.',
  },
  {
    q: 'How do I discuss my project requirements?',
    a: 'After you send a request, we will follow up using your preferred contact method to talk through the details, answer questions and discuss next steps.',
  },
  {
    q: 'How can I contact your team?',
    a: 'Use the contact form on our Contact page, or reach out by phone or email using the details listed there.',
  },
]
