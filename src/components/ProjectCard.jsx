import React from 'react'
import { motion } from 'framer-motion'

const MAP = { react:'React', ts:'TypeScript', node:'Node.js', python:'Python', next:'Next.js', ml:'ML / AI', aws:'AWS', graphql:'GraphQL' }

export default function ProjectCard({ project, index }) {
  const { icon, title, description, tags, liveUrl, githubUrl } = project
  return (
    <motion.article
      style={{ background:'var(--glass)', border:'1px solid var(--border)', borderRadius:'var(--r-lg)', padding:'1.6rem', position:'relative', overflow:'hidden', transition:'border-color var(--tr),box-shadow var(--tr)' }}
      initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
      viewport={{once:true,margin:'-60px'}} transition={{duration:.5,delay:index*.08}}
      whileHover={{ y:-8, borderColor:'rgba(232,201,122,.28)', boxShadow:'0 24px 64px rgba(0,0,0,0.5),0 0 40px rgba(232,201,122,0.12)' }}
      aria-label={`Project: ${title}`}>
      {/* Glow overlay */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(232,201,122,.04),transparent 60%)', pointerEvents:'none' }} />
      
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1.1rem' }}>
        <div style={{ width:'42px', height:'42px', borderRadius:'10px', background:'var(--surface)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem' }}>{icon}</div>
        <div style={{ display:'flex', gap:'.4rem' }}>
          {[{ href:liveUrl, label:`Demo of ${title}`, text:'Demo ↗' }, { href:githubUrl, label:`GitHub for ${title}`, text:'GitHub' }].map(({ href, label, text }) => (
            <a key={text} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ color:'var(--muted)', textDecoration:'none', fontSize:'.75rem', padding:'.28rem .65rem', border:'1px solid var(--border)', borderRadius:'6px', transition:'all var(--tr)' }}
              onMouseEnter={e => { e.target.style.color='var(--gold)'; e.target.style.borderColor='rgba(232,201,122,.4)'; e.target.style.background='var(--gold-dim)' }}
              onMouseLeave={e => { e.target.style.color='var(--muted)'; e.target.style.borderColor='var(--border)'; e.target.style.background='transparent' }}
            >{text}</a>
          ))}
        </div>
      </div>
      <h3 style={{ fontFamily:'var(--ff-display)', fontWeight:700, fontSize:'1.05rem', marginBottom:'.55rem', color:'var(--text)' }}>{title}</h3>
      <p style={{ color:'var(--muted)', fontSize:'.85rem', lineHeight:'1.65', marginBottom:'1.1rem' }}>{description}</p>
      <div style={{ display:'flex', gap:'.4rem', flexWrap:'wrap' }}>
        {tags.map(t => <span key={t} className={`tag ${t}`}>{MAP[t]||t}</span>)}
      </div>
    </motion.article>
  )
}
