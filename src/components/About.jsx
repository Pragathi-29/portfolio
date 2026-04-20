import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { skills } from '../data'
import s from './About.module.css'

const TL = [
  
  { year:'2023', title:'Sri Krishna Arts and Science College', sub:'BSC.Computer Technology' },
  { year:'2020', title:'Sai Vidhya Nikethan Matriculation Higher Secondary School', sub:'Computer Science - 65%' },
  { year:'2018', title:'Saraswathi Vidhyalaya Matriculation school', sub:'General - 76%' },
]

export default function About() {
  const { ref, inView } = useInView()
  const v = (delay=0) => ({ initial:{opacity:0,y:20}, animate:inView?{opacity:1,y:0}:{}, transition:{duration:.6,delay} })

  return (
    <section id="about" className="section">
      <div className="container" ref={ref}>
        <motion.span className="section-label" {...v(0)}>01 — About Me</motion.span>
        <motion.h2 className="section-title" {...v(.1)}>Turning Ideas into <span>Web Experiences</span></motion.h2>

        <div className={s.grid}>
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.2}}>
            <p className={s.bio}>I’m a passionate Web Developer with over a year of hands-on experience building responsive, high-performance web applications. I specialize in creating modern, user-friendly interfaces using technologies like React, Next.js, and TypeScript.</p>
            <p className={s.bio}>I enjoy turning design concepts into pixel-perfect digital experiences, focusing on clean, maintainable code and smooth performance. With a strong eye for detail and usability, I strive to build applications that are not only functional but also intuitive and engaging.</p>
            <div className={s.skillsWrap}>
              <span className={s.slabel}>Core Skills</span>
              <div className={s.skillsGrid}>
                {skills.map(sk => <span className={s.tag} key={sk}>{sk}</span>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.35}}>
            <span className={s.slabel}>Timeline</span>
            <ol className={s.tl}>
              {TL.map((t,i) => (
                <li key={i} className={s.tlItem}>
                  <span className={s.dot} /><span className={s.yr}>{t.year}</span>
                  <strong className={s.role}>{t.title}</strong><span className={s.sub}>{t.sub}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
