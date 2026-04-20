import React from 'react'
import { motion } from 'framer-motion'
import s from './ProjectCard.module.css'

const MAP = { react:'React', ts:'TypeScript', node:'Node.js', python:'Python', next:'Next.js', ml:'ML / AI', aws:'AWS', graphql:'GraphQL' }

export default function ProjectCard({ project, index }) {
  const { icon, title, description, tags, liveUrl, githubUrl } = project
  return (
    <motion.article className={s.card}
      initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
      viewport={{once:true,margin:'-60px'}} transition={{duration:.5,delay:index*.08}}
      whileHover={{y:-8}} aria-label={`Project: ${title}`}>
      <div className={s.glow} aria-hidden="true" />
      <div className={s.header}>
        <div className={s.icon}>{icon}</div>
        <div className={s.links}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={s.link} aria-label={`Demo of ${title}`}>Demo ↗</a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={s.link} aria-label={`GitHub for ${title}`}>GitHub</a>
        </div>
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.desc}>{description}</p>
      <div className={s.tags}>{tags.map(t => <span key={t} className={`tag ${t}`}>{MAP[t]||t}</span>)}</div>
    </motion.article>
  )
}
