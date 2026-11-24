# Prime Home Services — Website

A four-page marketing website for **Prime Home Services** (home repair, painting, wall services, maintenance and improvement), built with React, Vite, Tailwind CSS, Framer Motion, Lucide icons and React Router.

Pages: `/` Home · `/about` About · `/services` Services · `/contact` Contact

---

## Quick start

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

---

## Before launch — edit these first

All business information lives in **one file: `src/data/business.js`**. Anything left as `null` shows on the site as a clearly marked placeholder such as `[Add phone number]`. Nothing has been made up.

| Setting | What it controls |
| --- | --- |
| `phone`, `email` | Header drawer, footer, contact cards, CTA call buttons |
| `serviceArea`, `address` | Footer, contact cards, map placeholder |
| `hours` | Footer and contact card. Format: `[{ days: 'Mon – Fri', time: '8:00 AM – 6:00 PM' }]` |
| `social.*` | Footer social icons. Icons only appear once a URL is set |
| `formEndpoint` | **Where contact form submissions go.** See below |
| `mapEmbedUrl` | Google Maps embed on the Contact page |
| `heroVideo` | Optional MP4 background video for the homepage hero |
| `privacyPolicyUrl` | Footer "Privacy Policy" link |

### Contact form delivery

The form validates input but **does not send anything until `formEndpoint` is set**. Until then, visitors who submit are told plainly that the message was not sent and are asked to contact you directly.

1. Create a form endpoint with any service that accepts JSON POSTs, such as [Formspree](https://formspree.io), Getform, Basin, or your own API route.
2. Set `formEndpoint: 'https://formspree.io/f/xxxxxxx'` in `src/data/business.js`.
3. To change the payload or add headers, edit **`src/lib/submitInquiry.js`**, the single integration point.

The form sends these fields: `name, email, phone, service, address, contactMethod, details`.

### Testimonials: replace before launch

`src/data/content.js → testimonials` holds **sample placeholders**, labelled "Sample testimonial" on the site. Replace them with genuine customer feedback (with permission) and set `isSample: false`. The disclaimer note disappears automatically once no samples remain.

### Before/after section

`src/data/content.js → transformations` currently uses one photo per pair, with a dulled "before" filter, and is labelled *illustrative*. Replace `before` and `after` with real photos of the same space and set `illustrative: false`.

### Photos

Photography comes from Unsplash (free licence) and is referenced by ID in `src/data/images.js`. To use your own project photos, put them in `src/assets/` or `public/` and change the references.

---

## Project structure

```
src/
├── App.jsx                 # Routes (4 pages; unknown URLs redirect home)
├── main.jsx                # Router + Helmet providers
├── assets/                 # Place your own images here
├── data/
│   ├── business.js         # ★ Central business config (contact, form, map…)
│   ├── services.js         # Service cards + detailed service sections
│   ├── content.js          # Benefits, process, FAQs, values, testimonials, gallery
│   └── images.js           # Photo IDs + URL helper
├── lib/
│   └── submitInquiry.js    # ★ Contact-form integration point
├── components/
│   ├── layout/             # Header (sticky + mobile drawer), Footer, Layout (page transitions, scroll progress, floating quote CTA)
│   ├── ui/                 # Button, Reveal/RevealImage, TextReveal, SectionHeading, Marquee, Logo, Seo, Icon, PlaceholderText
│   └── sections/           # PageHero, ServiceCard, CompareSlider, ProcessTimeline, Testimonials, FAQ, ContactForm, CTASection
├── pages/                  # Home.jsx, About.jsx, Services.jsx, Contact.jsx
└── styles/index.css        # Tailwind layers + design tokens
```

Brand colours and fonts are defined in `tailwind.config.js` (navy, cream, beige, charcoal, gold; Manrope and Inter).

---

## Features

- Four routed pages with page transitions, a scroll-progress bar and a sticky header that turns solid on scroll
- Mobile drawer navigation (Escape to close, focus-friendly)
- Hero headline reveals, scroll-triggered reveals, clip-path image reveals and subtle parallax
- Marquee strips, a before/after comparison slider (drag, click or arrow keys), an editorial gallery and a testimonial carousel
- Services page with a sticky category bar that highlights the current section, alternating layouts, process timeline and accessible FAQ accordion
- Contact form with inline validation, required-field markers, a honeypot spam trap, and loading, success, error and "not configured" states
- `?service=` pre-selection: each "Inquire About This Service" button opens the form with that service already chosen
- Per-page titles, meta descriptions, canonical URLs and Open Graph/Twitter tags (react-helmet-async), plus `robots.txt` and `sitemap.xml`
- Honours the OS "reduce motion" setting (Framer `MotionConfig` + CSS fallback); skip-to-content link and visible focus styles

## Deployment

It is a static single-page app, so `dist/` can be hosted anywhere. Clean URLs (`/about` etc.) need a fallback to `index.html`, which is already configured for:

- **Netlify**: `public/_redirects`
- **Vercel**: `vercel.json`

For other hosts, add a rewrite of all paths to `/index.html`.
