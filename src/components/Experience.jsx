import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { experiences } from '../data'
import s from './Experience.module.css'

const MAP = { react:'React', ts:'TypeScript', node:'Node.js', python:'Python', next:'Next.js', ml:'ML / AI', aws:'AWS', graphql:'GraphQL' }

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={ref}>
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.5}}>03 — Experience</motion.span>
          <motion.h2 className="section-title" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.1}}>Where I've <span>worked</span></motion.h2>
        </div>

        <ol className={s.timeline} aria-label="Work experience">
          {experiences.map((exp, i) => (
            <motion.li key={exp.id} className={s.item}
              initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}}
              viewport={{once:true,margin:'-60px'}} transition={{duration:.6,delay:i*.12}}>
              <span className={s.dot} aria-hidden="true" />
              <div className={s.card}>
                <div className={s.header}>
                  <div>
                    <h3 className={s.role}>{exp.role}</h3>
                    <p className={s.company}>{exp.company} <span className={s.loc}>· {exp.location}</span></p>
                  </div>
                  <span className={s.period}>{exp.period}</span>
                </div>
                <p className={s.desc}>{exp.description}</p>
                <div className={s.tags}>
                  {exp.tags.map(t => <span key={t} className={`tag ${t}`}>{MAP[t]||t}</span>)}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
