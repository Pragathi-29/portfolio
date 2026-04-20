import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { social } from '../data'
import s from './Contact.module.css'

const INIT = { name:'', email:'', subject:'', message:'' }
const ERRS = { name:'', email:'', subject:'', message:'' }

function validate(f) {
  const e = { ...ERRS }
  if (!f.name.trim()) e.name = 'Name is required.'
  if (!f.email.trim()) e.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email.'
  if (!f.subject.trim()) e.subject = 'Subject is required.'
  if (!f.message.trim()) e.message = 'Message is required.'
  else if (f.message.trim().length < 20) e.message = 'At least 20 characters please.'
  return e
}

function Field({ id, name, label, placeholder, value, onChange, error, type='text', textarea }) {
  const props = { id, name, value, onChange, placeholder, className:`${s.input} ${error?s.err:''}`, 'aria-invalid':!!error, 'aria-describedby':error?`${id}-e`:undefined }
  return (
    <div className={s.field}>
      <label htmlFor={id} className={s.label}>{label}</label>
      {textarea ? <textarea {...props} rows={5} /> : <input {...props} type={type} />}
      {error && <span id={`${id}-e`} className={s.error} role="alert">{error}</span>}
    </div>
  )
}

export default function Contact() {
  const { ref, inView } = useInView()
  const [fields, setFields] = useState(INIT)
  const [errors, setErrors] = useState(ERRS)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const onSubmit = async e => {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200)) // replace with your API call
    setLoading(false); setSent(true); setFields(INIT)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref}>
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.5}}>02 — Contact</motion.span>
          <motion.h2 className="section-title" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.1}}>Let's build something <span>great</span></motion.h2>
        </div>

        <div className={s.grid}>
          <motion.div className={s.info} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.2}}>
            <p className={s.infoText}>Have a project in mind or just want to say hi? My inbox is always open — I'll get back within 24 hours.</p>
            <ul className={s.socials}>
              {social.map(sc => (
                <li key={sc.label}>
                  <a href={sc.url} target="_blank" rel="noopener noreferrer" className={s.slink} aria-label={`${sc.label}: ${sc.handle}`}>
                    <span className={s.sicon}>{sc.icon}</span>
                    <span>{sc.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.3}}>
            {sent ? (
              <div className={s.success} role="alert">
                <span className={s.checkCircle}>✓</span>
                <h3 className={s.successTitle}>Message sent!</h3>
                <p className={s.successMsg}>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form className={s.form} onSubmit={onSubmit} noValidate aria-label="Contact form">
                <div className={s.row}>
                  <Field id="name" name="name" label="Name" placeholder="Your name" value={fields.name} onChange={onChange} error={errors.name} />
                  <Field id="email" name="email" label="Email" type="email" placeholder="you@example.com" value={fields.email} onChange={onChange} error={errors.email} />
                </div>
                <Field id="subject" name="subject" label="Subject" placeholder="What's this about?" value={fields.subject} onChange={onChange} error={errors.subject} />
                <Field id="message" name="message" label="Message" placeholder="Tell me about your project..." value={fields.message} onChange={onChange} error={errors.message} textarea />
                <button type="submit" className={`btn btn-primary ${s.submit}`} disabled={loading} aria-busy={loading}>
                  {loading ? <><span className={s.spinner} aria-hidden="true" /> Sending…</> : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
