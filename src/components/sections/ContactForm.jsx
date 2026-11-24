import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, AlertTriangle, Info, Loader2, Send, RotateCcw, ChevronDown } from 'lucide-react'
import { serviceOptions } from '../../data/services'
import { submitInquiry } from '../../lib/submitInquiry'
import { business, isSet } from '../../data/business'

const initial = { name: '', email: '', phone: '', service: '', address: '', contactMethod: 'Email', details: '', website: '' }

const validators = {
  name: (v) => (v.trim().length < 2 ? 'Please enter your full name.' : ''),
  email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Please enter a valid email address.' : ''),
  phone: (v, all) => {
    const digits = v.replace(/\D/g, '')
    if (all.contactMethod === 'Phone' && digits.length === 0) return 'Phone is required when you prefer a call.'
    if (v && (digits.length < 10 || digits.length > 15)) return 'Please enter a valid phone number.'
    return ''
  },
  service: (v) => (!v ? 'Please choose a service.' : ''),
  details: (v) => (v.trim().length < 15 ? 'Please share a few details (at least 15 characters).' : ''),
}

function Field({ id, label, required, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center gap-1 font-display text-sm font-bold text-navy">
        {label}
        {required ? <span className="text-gold-600" aria-hidden="true">*</span> : <span className="font-sans text-xs font-normal text-charcoal-500">(optional)</span>}
      </label>
      {children}
      <AnimatePresence>
        {error ? (
          <motion.p id={`${id}-error`} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 text-sm text-red-600" role="alert">
            {error}
          </motion.p>
        ) : hint ? (
          <p className="mt-1.5 text-xs text-charcoal-500">{hint}</p>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default function ContactForm({ defaultService = '' }) {
  const [values, setValues] = useState(() => ({ ...initial, service: serviceOptions.includes(defaultService) ? defaultService : '' }))
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [state, setState] = useState({ status: 'idle' })

  const validate = (vals) =>
    Object.fromEntries(Object.entries(validators).map(([k, fn]) => [k, fn(vals[k], vals)]).filter(([, e]) => e))

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched[e.target.name] || e.target.name === 'contactMethod') setErrors(validate(next))
  }
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values.website) return // honeypot — silently ignore bots
    const errs = validate(values)
    setErrors(errs)
    setTouched(Object.fromEntries(Object.keys(validators).map((k) => [k, true])))
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus()
      return
    }
    setState({ status: 'loading' })
    const { website, ...payload } = values
    const result = await submitInquiry(payload)
    setState(result)
    if (result.status === 'sent') setValues(initial)
  }

  const err = (k) => (touched[k] ? errors[k] : '')
  const a11y = (k) => ({ 'aria-invalid': !!err(k), 'aria-describedby': err(k) ? `${k}-error` : undefined })
  const cls = (k) => `field ${err(k) ? 'field-error' : ''}`

  if (state.status === 'sent') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center rounded-[2rem] bg-white p-10 text-center shadow-soft ring-1 ring-navy/5 sm:p-14" role="status">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 className="h-10 w-10" /></span>
        <h3 className="mt-6 text-3xl font-extrabold">Thank you — request received.</h3>
        <p className="mt-4 max-w-md text-charcoal-600">Your inquiry has been sent. Our team will be in touch using your preferred contact method.</p>
        <button type="button" onClick={() => setState({ status: 'idle' })} className="mt-8 inline-flex items-center gap-2 font-display font-bold text-navy link-underline">
          <RotateCcw className="h-4 w-4" /> Send another request
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[2rem] bg-white p-6 shadow-soft ring-1 ring-navy/5 sm:p-10" aria-label="Request a free quote">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Request a Free Quote</h2>
        <p className="mt-3 text-charcoal-600">Tell us about your project. Fields marked <span className="text-gold-600">*</span> are required.</p>
      </div>

      {/* Honeypot field (hidden from people, catches basic bots) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" required error={err('name')}>
          <input id="name" name="name" autoComplete="name" className={cls('name')} placeholder="Jane Smith" value={values.name} onChange={onChange} onBlur={onBlur} {...a11y('name')} required />
        </Field>
        <Field id="email" label="Email Address" required error={err('email')}>
          <input id="email" name="email" type="email" autoComplete="email" className={cls('email')} placeholder="you@example.com" value={values.email} onChange={onChange} onBlur={onBlur} {...a11y('email')} required />
        </Field>
        <Field id="phone" label="Phone Number" required={values.contactMethod === 'Phone'} error={err('phone')}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={cls('phone')} placeholder="(555) 555-5555" value={values.phone} onChange={onChange} onBlur={onBlur} {...a11y('phone')} />
        </Field>
        <Field id="service" label="Select a Service" required error={err('service')}>
          <div className="relative">
            <select id="service" name="service" className={`${cls('service')} appearance-none pr-11 ${values.service ? '' : 'text-charcoal-500'}`} value={values.service} onChange={onChange} onBlur={onBlur} {...a11y('service')} required>
              <option value="" disabled>Choose a service…</option>
              {serviceOptions.map((s) => <option key={s} value={s} className="text-charcoal">{s}</option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy" aria-hidden="true" />
          </div>
        </Field>
        <div className="sm:col-span-2">
          <Field id="address" label="Property Address" hint="Helps us understand where the project is located.">
            <input id="address" name="address" autoComplete="street-address" className="field" placeholder="Street, city, ZIP" value={values.address} onChange={onChange} />
          </Field>
        </div>
        <fieldset className="sm:col-span-2">
          <legend className="mb-3 font-display text-sm font-bold text-navy">Preferred Contact Method <span className="text-gold-600" aria-hidden="true">*</span></legend>
          <div className="grid grid-cols-3 gap-3">
            {['Email', 'Phone', 'Text'].map((m) => (
              <label key={m} className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition focus-within:ring-4 focus-within:ring-gold-400/20 ${values.contactMethod === m ? 'border-navy bg-navy text-white' : 'border-beige-200 bg-white text-charcoal hover:border-navy/40'}`}>
                <input type="radio" name="contactMethod" value={m} checked={values.contactMethod === m} onChange={onChange} className="sr-only" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="sm:col-span-2">
          <Field id="details" label="Project Details" required error={err('details')}>
            <textarea id="details" name="details" rows={5} className={`${cls('details')} resize-y`} placeholder="What would you like done? Include rooms, approximate sizes, timing or anything else that helps." value={values.details} onChange={onChange} onBlur={onBlur} {...a11y('details')} required />
          </Field>
        </div>
      </div>

      <AnimatePresence>
        {state.status === 'not-configured' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 flex gap-3 rounded-xl border border-gold-400/50 bg-gold-400/10 p-4 text-sm text-charcoal" role="alert">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
            <div>
              <p className="font-bold text-navy">Your details look good — but online submissions aren’t connected yet.</p>
              <p className="mt-1">This message was <strong>not sent</strong>. Please contact us directly{isSet(business.phone) || isSet(business.email) ? ':' : ' using the details on this page.'}
                {isSet(business.phone) && <> call <a className="font-semibold underline" href={`tel:${business.phone}`}>{business.phone}</a></>}
                {isSet(business.email) && <> or email <a className="font-semibold underline" href={`mailto:${business.email}`}>{business.email}</a></>}
              </p>
              <p className="mt-2 text-xs text-charcoal-500">Site owner: set <code className="font-mono">formEndpoint</code> in <code className="font-mono">src/data/business.js</code> to enable delivery.</p>
            </div>
          </motion.div>
        )}
        {state.status === 'error' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
            <p><strong>Something went wrong and your message wasn’t sent.</strong> Please try again in a moment, or contact us directly. ({state.message})</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-charcoal-500">We only use your details to respond to your inquiry.</p>
        <motion.button
          type="submit"
          disabled={state.status === 'loading'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy px-8 py-4 font-display font-bold text-white transition hover:bg-navy-700 disabled:opacity-60 sm:w-auto"
        >
          {state.status === 'loading' ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</> : <>Send Request <Send className="h-4 w-4" /></>}
        </motion.button>
      </div>
    </form>
  )
}
