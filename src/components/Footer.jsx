import React from 'react'
import { Link } from 'react-scroll'
import { social } from '../data'
import s from './Footer.module.css'

const NAV = [
  { to:'home', label:'Home' }, { to:'about', label:'About' },
  // { to:'projects', label:'Projects' }, { to:'experience', label:'Experience' },
  { to:'contact', label:'Contact' },
]

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        {/* <div className={s.top}>
          <div className={s.brand}>
          </div>
          <nav aria-label="Footer navigation">
            <ul className={s.links}>
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} smooth duration={600} offset={-80} className={s.link} tabIndex={0}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.socials}>
            <p className={s.slabel}>Find me on</p>
            <div className={s.srow}>
              {social.map(sc => (
                <a key={sc.label} href={sc.url} target="_blank" rel="noopener noreferrer" className={s.sicon} aria-label={sc.label}>{sc.icon}</a>
              ))}
            </div>
          </div>
        </div> */}
        <div className={s.bottom}>
          <p>© {new Date().getFullYear()} Pragathi Parthasarthi. All rights reserved.</p>
          {/* <p>Built with React + Framer Motion + Vite</p> */}
        </div>
      </div>
    </footer>
  )
}
