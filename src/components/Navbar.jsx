import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const LINKS = [
  { to:'home', label:'Home' }, { to:'about', label:'About' },
  { to:'contact', label:'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      role="navigation" aria-label="Main navigation"
      style={{
        position:'fixed', top:0, left:0, right:0, zIndex:999,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding: scrolled ? '0.9rem 2.5rem' : '1.25rem 2.5rem',
        transition: 'background var(--tr), padding var(--tr)',
        background: scrolled ? (theme === 'dark' ? 'rgba(5,6,15,.8)' : 'rgba(240,239,233,.85)') : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <span style={{ fontFamily:'var(--ff-display)', fontWeight:800, fontSize:'1.25rem', color:'var(--gold)', letterSpacing:'-.02em', userSelect:'none' }} />

      <ul style={{ display:'flex', listStyle:'none', gap:'2.25rem' }} className="hidden md:flex">
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to} smooth duration={600} offset={-80} spy
              style={{ fontSize:'.82rem', letterSpacing:'.06em', textTransform:'uppercase', color:'var(--muted)', cursor:'pointer', transition:'color var(--tr)', padding:'.25rem 0', position:'relative' }}
              activeStyle={{ color:'var(--text)' }}
              className="nav-link"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display:'flex', alignItems:'center', gap:'.75rem' }}>
        <button
          onClick={toggleTheme} aria-label="Toggle theme"
          style={{ background:'var(--glass)', border:'1px solid var(--border)', color:'var(--muted)', padding:'.4rem .9rem', borderRadius:'var(--r-full)', cursor:'pointer', fontSize:'.78rem', fontFamily:'var(--ff-body)', transition:'all var(--tr)' }}
          onMouseEnter={e => { e.target.style.borderColor='var(--gold)'; e.target.style.color='var(--gold)' }}
          onMouseLeave={e => { e.target.style.borderColor='var(--border)'; e.target.style.color='var(--muted)' }}
        >
          {theme === 'dark' ? '☀ Light' : '☽ Dark'}
        </button>
        <button
          className="md:hidden"
          onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}
          style={{ display:'flex', flexDirection:'column', gap:'5px', background:'none', border:'none', cursor:'pointer', padding:'4px' }}
        >
          <span style={{ display:'block', width:'22px', height:'1.5px', background:'var(--muted)', transition:'all var(--tr)', transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none', transformOrigin:'center' }} />
          <span style={{ display:'block', width:'22px', height:'1.5px', background:'var(--muted)', transition:'all var(--tr)', opacity: open ? 0 : 1 }} />
          <span style={{ display:'block', width:'22px', height:'1.5px', background:'var(--muted)', transition:'all var(--tr)', transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none', transformOrigin:'center' }} />
        </button>
      </div>

      {open && (
        <div style={{ position:'fixed', inset:0, background:'var(--bg)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'2rem', zIndex:998 }}>
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} smooth duration={600} offset={-80} onClick={() => setOpen(false)}
              style={{ fontFamily:'var(--ff-display)', fontSize:'2rem', fontWeight:700, color:'var(--muted)', cursor:'pointer', transition:'color var(--tr)' }}
              onMouseEnter={e => e.target.style.color='var(--gold)'}
              onMouseLeave={e => e.target.style.color='var(--muted)'}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
