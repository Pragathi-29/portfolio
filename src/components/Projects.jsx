import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { projects, filters } from '../data'
import ProjectCard from './ProjectCard'
import s from './Projects.module.css'

export default function Projects() {
  const [active, setActive] = useState('all')
  const { ref, inView } = useInView()
  const filtered = active === 'all' ? projects : projects.filter(p => p.tags.includes(active))

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={ref}>
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:.5}}>02 — Projects</motion.span>
          <motion.h2 className="section-title" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.1}}>Things I've <span>built</span></motion.h2>
        </div>

        <motion.div className={s.filters} initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.5,delay:.2}} role="group" aria-label="Filter by technology">
          {filters.map(f => (
            <button key={f.value} className={`${s.btn} ${active===f.value?s.active:''}`} onClick={() => setActive(f.value)} aria-pressed={active===f.value}>
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className={s.grid} aria-live="polite">
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          {filtered.length === 0 && <p className={s.empty}>No projects match this filter.</p>}
        </div>
      </div>
    </section>
  )
}
