import { business } from '../data/business'

/**
 * ─────────────────────────────────────────────────────────────
 *  CONTACT FORM INTEGRATION POINT
 * ─────────────────────────────────────────────────────────────
 * Sends a validated inquiry to `business.formEndpoint` as JSON.
 *
 * Works out of the box with services that accept JSON POSTs, e.g.
 *   - Formspree:  https://formspree.io/f/<id>
 *   - Getform, Basin, Web3Forms (adjust payload if required)
 *   - Your own API route / serverless function
 *
 * Returns one of:
 *   { status: 'sent' }                      – delivered (2xx response)
 *   { status: 'not-configured' }            – no endpoint set; NOTHING was sent
 *   { status: 'error', message: string }    – network / server error
 *
 * Replace the body of this function if your provider needs a different format.
 */
export async function submitInquiry(data) {
  if (!business.formEndpoint) {
    if (import.meta.env.DEV) {
      console.info('[submitInquiry] No formEndpoint configured — inquiry NOT sent. Payload:', data)
    }
    return { status: 'not-configured' }
  }

  try {
    const res = await fetch(business.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, _subject: `New inquiry: ${data.service}`, source: 'website-contact-form' }),
    })
    if (!res.ok) return { status: 'error', message: `Server responded with ${res.status}` }
    return { status: 'sent' }
  } catch (err) {
    return { status: 'error', message: err?.message || 'Network error' }
  }
}
