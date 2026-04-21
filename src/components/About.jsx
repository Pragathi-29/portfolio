import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { skills } from '../data'

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

        <div className="about-grid">
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.2}}>
            <p style={{ color:'var(--muted)', lineHeight:'1.85', marginBottom:'1.25rem', fontSize:'.97rem' }}>
              I'm a passionate Web Developer with over a year of hands-on experience building responsive, high-performance web applications. I specialize in creating modern, user-friendly interfaces using technologies like React, Next.js, and TypeScript.
            </p>
            <p style={{ color:'var(--muted)', lineHeight:'1.85', marginBottom:'1.25rem', fontSize:'.97rem' }}>
              I enjoy turning design concepts into pixel-perfect digital experiences, focusing on clean, maintainable code and smooth performance. With a strong eye for detail and usability, I strive to build applications that are not only functional but also intuitive and engaging.
            </p>
            <div style={{ marginTop:'2rem' }}>
              <span style={{ display:'block', fontSize:'.72rem', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1rem', fontWeight:500 }}>Core Skills</span>
              <div className="skills-grid">
                {skills.map(sk => (
                  <span key={sk} className="skill-tag">{sk}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.35}}>
            <span style={{ display:'block', fontSize:'.72rem', letterSpacing:'.14em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1rem', fontWeight:500 }}>Timeline</span>
            <ol style={{ position:'relative', paddingLeft:'1.75rem', listStyle:'none' }}>
              <div style={{ content:'', position:'absolute', left:0, top:'10px', bottom:0, width:'1px', background:'linear-gradient(to bottom,var(--gold),transparent)' }} />
              {TL.map((t,i) => (
                <li key={i} style={{ position:'relative', marginBottom:'2rem', display:'flex', flexDirection:'column', gap:'.1rem' }}>
                  <span style={{ position:'absolute', left:'-1.75rem', top:'18px', width:'10px', height:'10px', borderRadius:'50%', background:'var(--gold)', transform:'translateX(-4px)', border:'2px solid var(--bg)', boxShadow:'0 0 8px rgba(232,201,122,.4)' }} />
                  <span style={{ fontSize:'.72rem', color:'var(--gold)', letterSpacing:'.06em' }}>{t.year}</span>
                  <strong style={{ fontFamily:'var(--ff-display)', fontSize:'.93rem', fontWeight:700, color:'var(--text)' }}>{t.title}</strong>
                  <span style={{ fontSize:'.82rem', color:'var(--muted)' }}>{t.sub}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
      <style>{`
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:start; }
        .skills-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:.6rem; }
        .skill-tag { background:var(--glass); border:1px solid var(--border); padding:.45rem .6rem; border-radius:var(--r-sm); font-size:.78rem; text-align:center; color:var(--muted); transition:all var(--tr); cursor:default; }
        .skill-tag:hover { border-color:var(--border-h); color:var(--gold); background:var(--gold-dim); }
        @media(max-width:768px) { .about-grid{grid-template-columns:1fr;gap:3rem;} .skills-grid{grid-template-columns:repeat(3,1fr);} }
        @media(max-width:480px) { .skills-grid{grid-template-columns:repeat(2,1fr);} }
      `}</style>
    </section>
  )
}
