import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks'
import { projects, filters } from '../data'
import ProjectCard from './ProjectCard'

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

        <motion.div style={{ display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'2.75rem' }}
          initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.5,delay:.2}}
          role="group" aria-label="Filter by technology">
          {filters.map(f => (
            <button key={f.value}
              onClick={() => setActive(f.value)} aria-pressed={active===f.value}
              style={{
                background: active===f.value ? 'var(--gold)' : 'var(--glass)',
                border: `1px solid ${active===f.value ? 'var(--gold)' : 'var(--border)'}`,
                color: active===f.value ? '#08090f' : 'var(--muted)',
                fontWeight: active===f.value ? 500 : 400,
                padding:'.42rem 1.1rem', borderRadius:'var(--r-full)', cursor:'pointer',
                fontSize:'.8rem', fontFamily:'var(--ff-body)', transition:'all var(--tr)',
              }}
              onMouseEnter={e => { if (active!==f.value) { e.target.style.borderColor='var(--border-h)'; e.target.style.color='var(--gold)' } }}
              onMouseLeave={e => { if (active!==f.value) { e.target.style.borderColor='var(--border)'; e.target.style.color='var(--muted)' } }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))', gap:'1.4rem' }} aria-live="polite" className="projects-grid">
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          {filtered.length === 0 && <p style={{ color:'var(--muted)', fontSize:'.9rem', gridColumn:'1/-1', textAlign:'center', padding:'3rem 0' }}>No projects match this filter.</p>}
        </div>
      </div>
      <style>{`
        @media(max-width:480px) { .projects-grid{grid-template-columns:1fr!important;} }
      `}</style>
    </section>
  )
}
