import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks'
import s from './Hero.module.css'

const PHRASES = [
  'Passionate Web Developer',
  'Clean Code Advocate',
  'Performance Focused',
  'User-Centric Thinker',
  'Driven by Curiosity'
]
const up = (delay = 0) => ({ initial:{opacity:0,y:24}, animate:{opacity:1,y:0}, transition:{duration:.7,delay,ease:[.4,0,.2,1]} })

export default function Hero() {
  const typed = useTypewriter(PHRASES)

  return (
    <section id="home" className={s.hero}>
      <div className={s.bg} aria-hidden="true">
        <div className={`${s.orb} ${s.o1}`} />
        <div className={`${s.orb} ${s.o2}`} />
        <div className={`${s.orb} ${s.o3}`} />
        <div className={s.grid} />
      </div>

      <div className={s.content}>
        <motion.div {...up(0.1)}>
          <span className={s.badge}><span className={s.dot} />Available for Work</span>
        </motion.div>

        <motion.h1 className={s.name} {...up(0.25)}>Pragathi <span>Parthasarathi</span></motion.h1>

        <motion.div className={s.typer} {...up(0.4)} aria-live="polite">
          {typed}<span className={s.cursor} aria-hidden="true" />
        </motion.div>

        <motion.p className={s.sub} {...up(0.5)}>
          I develop responsive, high-performance web applications, combining technical precision with seamless user experience and design.
        </motion.p>

        <motion.div className={s.cta} {...up(0.6)}>
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className="btn btn-primary">View My Work →</button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="btn btn-outline">Contact Me</button>
          </Link>
          <a className="btn btn-outline" href="/Pragathi.pdf" download="Pragathi_arthasarathi_Resume.pdf">⬇ Resume</a>
        </motion.div>

        <motion.div className={s.stats} {...up(0.75)}>
          {[{v:'1.5+',l:'Years Experience'}].map(st => (
            <div className={s.stat} key={st.l}>
              <span className={s.sv}>{st.v}</span>
              <span className={s.sl}>{st.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={s.scroll} aria-hidden="true">
        <span className={s.scrollTxt}>Scroll</span>
        <div className={s.scrollLine} />
      </div>
    </section>
  )
}
