import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import s from './Navbar.module.css'

const LINKS = [
  { to:'home', label:'Home' }, { to:'about', label:'About' },
  // { to:'projects', label:'Projects' }, { to:'experience', label:'Experience' },
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
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <span className={s.logo}></span>

      <ul className={s.links}>
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} smooth duration={600} offset={-80} className={s.link} activeClass={s.active} spy tabIndex={0}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={s.right}>
        <button className={s.themeBtn} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀ Light' : '☽ Dark'}
        </button>
        <button className={`${s.burger} ${open ? s.open : ''}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className={s.mobile}>
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} smooth duration={600} offset={-80} className={s.mobileLink} onClick={() => setOpen(false)} tabIndex={0}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
