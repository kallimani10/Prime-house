/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRAL BUSINESS CONFIGURATION — edit this file first.
 * ─────────────────────────────────────────────────────────────
 *  Every piece of business information shown on the website is read
 *  from here. Values left as `null` render as a clearly marked
 *  placeholder (e.g. "[Add phone number]") instead of invented data.
 *
 *  Nothing below has been made up: fill in only verified details.
 */
export const business = {
  name: 'Prime Home Services',
  shortName: 'Prime Home',
  tagline: 'Home Repair · Painting · Improvement',
  domain: 'https://primehomeservicesva.com',

  // Contact details — replace null with real values.
  phone: null, // e.g. '(555) 123-4567'
  email: null, // e.g. 'hello@primehomeservicesva.com'
  serviceArea: null, // e.g. 'Northern Virginia and surrounding areas'
  address: null, // optional street address; leave null if you don't publish one
  hours: null, // e.g. [{ days: 'Mon – Fri', time: '8:00 AM – 6:00 PM' }, { days: 'Sat', time: '9:00 AM – 2:00 PM' }]

  // Social profiles — add full URLs. Icons without a URL are hidden.
  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null,
  },

  /**
   * Contact form delivery.
   * Paste the endpoint of a form service (Formspree, Getform, Basin, your own
   * API route, etc.). The form POSTs JSON to this URL.
   * While this is null the form validates input but does NOT send anything,
   * and tells the visitor so. See src/lib/submitInquiry.js.
   */
  formEndpoint: null, // e.g. 'https://formspree.io/f/xxxxxxx'

  /**
   * Google Maps embed URL (Google Maps → Share → Embed a map → copy the src).
   * While null, the Contact page shows a neutral placeholder — no random pin.
   */
  mapEmbedUrl: null,

  /**
   * Optional hero background video (MP4). Use a royalty-free clip you have
   * rights to, ideally < 6 MB and 1080p. While null, the hero uses a
   * cinematic still photograph with a slow zoom.
   */
  heroVideo: null,

  privacyPolicyUrl: null, // link target for "Privacy Policy" in the footer
}

/** Returns the value or a labelled placeholder string. */
export const placeholder = (value, label) => value ?? `[Add ${label}]`
export const isSet = (value) => value !== null && value !== undefined && value !== ''
