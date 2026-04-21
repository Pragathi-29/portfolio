import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { social } from '../data'

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

const inputStyle = (error) => ({
  background:'var(--glass)', border:`1px solid ${error?'var(--danger)':'var(--border)'}`,
  color:'var(--text)', padding:'.75rem 1rem', borderRadius:'var(--r-md)',
  fontFamily:'var(--ff-body)', fontSize:'.9rem', transition:'border-color var(--tr),box-shadow var(--tr)',
  outline:'none', width:'100%', resize:'vertical',
})

function Field({ id, name, label, placeholder, value, onChange, error, type='text', textarea }) {
  const [focused, setFocused] = useState(false)
  const style = {
    ...inputStyle(error),
    boxShadow: focused ? (error ? '0 0 0 3px rgba(248,113,113,.15)' : '0 0 0 3px var(--gold-dim)') : 'none',
    borderColor: focused ? (error ? 'var(--danger)' : 'var(--gold)') : (error ? 'var(--danger)' : 'var(--border)'),
  }
  const props = { id, name, value, onChange, placeholder, style, 'aria-invalid':!!error, 'aria-describedby':error?`${id}-e`:undefined, onFocus:()=>setFocused(true), onBlur:()=>setFocused(false) }
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'.4rem' }}>
      <label htmlFor={id} style={{ fontSize:'.75rem', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--muted)', fontWeight:500 }}>{label}</label>
      {textarea ? <textarea {...props} rows={5} /> : <input {...props} type={type} />}
      {error && <span id={`${id}-e`} style={{ fontSize:'.75rem', color:'var(--danger)' }} role="alert">{error}</span>}
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
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false); setSent(true); setFields(INIT)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref}>
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.5}}>02 — Contact</motion.span>
          <motion.h2 className="section-title" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.1}}>Let's build something <span>great</span></motion.h2>
        </div>

        <div className="contact-grid">
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.2}}>
            <p style={{ color:'var(--muted)', fontSize:'.96rem', lineHeight:'1.85', marginBottom:'2.25rem' }}>
              Have a project in mind or just want to say hi? My inbox is always open — I'll get back within 24 hours.
            </p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'.9rem' }}>
              {social.map(sc => (
                <li key={sc.label}>
                  <a href={sc.url} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex', alignItems:'center', gap:'.85rem', textDecoration:'none', color:'var(--muted)', fontSize:'.9rem', transition:'color var(--tr)' }}
                    aria-label={`${sc.label}: ${sc.handle}`}
                    onMouseEnter={e => { e.currentTarget.style.color='var(--gold)'; e.currentTarget.querySelector('.sicon').style.borderColor='rgba(232,201,122,.4)'; e.currentTarget.querySelector('.sicon').style.background='var(--gold-dim)' }}
                    onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.querySelector('.sicon').style.borderColor='var(--border)'; e.currentTarget.querySelector('.sicon').style.background='var(--glass)' }}
                  >
                    <span className="sicon" style={{ width:'38px', height:'38px', background:'var(--glass)', border:'1px solid var(--border)', borderRadius:'var(--r-sm)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', transition:'all var(--tr)', flexShrink:0 }}>{sc.icon}</span>
                    <span>{sc.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.3}}>
            {sent ? (
              <div role="alert" style={{ background:'var(--glass)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', padding:'3rem 2rem', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:'.75rem' }}>
                <span style={{ width:'52px', height:'52px', borderRadius:'50%', background:'rgba(104,211,145,.15)', border:'1px solid rgba(104,211,145,.3)', color:'var(--success)', fontSize:'1.4rem', display:'flex', alignItems:'center', justifyContent:'center' }}>✓</span>
                <h3 style={{ fontFamily:'var(--ff-display)', fontSize:'1.25rem', fontWeight:700 }}>Message sent!</h3>
                <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:'.5rem' }}>Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form style={{ display:'flex', flexDirection:'column', gap:'1.1rem' }} onSubmit={onSubmit} noValidate aria-label="Contact form">
                <div className="contact-row">
                  <Field id="name" name="name" label="Name" placeholder="Your name" value={fields.name} onChange={onChange} error={errors.name} />
                  <Field id="email" name="email" label="Email" type="email" placeholder="you@example.com" value={fields.email} onChange={onChange} error={errors.email} />
                </div>
                <Field id="subject" name="subject" label="Subject" placeholder="What's this about?" value={fields.subject} onChange={onChange} error={errors.subject} />
                <Field id="message" name="message" label="Message" placeholder="Tell me about your project..." value={fields.message} onChange={onChange} error={errors.message} textarea />
                <button type="submit" className="btn btn-primary" disabled={loading} aria-busy={loading}
                  style={{ alignSelf:'flex-start', minWidth:'160px', justifyContent:'center', opacity:loading?.7:1, cursor:loading?'not-allowed':'pointer' }}>
                  {loading ? (
                    <><span style={{ display:'inline-block', width:'14px', height:'14px', border:'2px solid rgba(8,9,15,.3)', borderTopColor:'#08090f', borderRadius:'50%', animation:'spin .7s linear infinite' }} aria-hidden="true" /> Sending…</>
                  ) : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr 1.6fr; gap:5rem; align-items:start; }
        .contact-row { display:grid; grid-template-columns:1fr 1fr; gap:1.1rem; }
        @media(max-width:768px) { .contact-grid{grid-template-columns:1fr;gap:3rem;} .contact-row{grid-template-columns:1fr;} }
      `}</style>
    </section>
  )
}
