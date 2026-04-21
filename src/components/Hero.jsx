import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks'

const PHRASES = ['Web Developer','Open Source Contributor','Problem Solver']
const up = (delay = 0) => ({ initial:{opacity:0,y:24}, animate:{opacity:1,y:0}, transition:{duration:.7,delay,ease:[.4,0,.2,1]} })

export default function Hero() {
  const typed = useTypewriter(PHRASES)
  return (
    <section id="home" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', padding:'7rem 2rem 4rem' }}>
      {/* Background */}
      <div aria-hidden="true" style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', width:'600px', height:'600px', borderRadius:'50%', filter:'blur(90px)', animation:'float 10s ease-in-out infinite', background:'radial-gradient(circle,rgba(124,140,248,.2),transparent 70%)', top:'-150px', right:'-150px' }} />
        <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', filter:'blur(90px)', animation:'float 10s ease-in-out infinite', animationDelay:'3.5s', background:'radial-gradient(circle,rgba(232,201,122,.18),transparent 70%)', bottom:'-100px', left:'-100px' }} />
        <div style={{ position:'absolute', width:'350px', height:'350px', borderRadius:'50%', filter:'blur(90px)', animation:'float 10s ease-in-out infinite', animationDelay:'6s', background:'radial-gradient(circle,rgba(232,121,249,.12),transparent 70%)', top:'45%', left:'35%' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)', backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse at center,black 30%,transparent 80%)' }} />
      </div>

      {/* Content */}
      <div style={{ position:'relative', zIndex:1, maxWidth:'860px', textAlign:'center' }}>
        <motion.div {...up(0.1)}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', background:'var(--glass)', border:'1px solid var(--border)', padding:'.35rem 1rem', borderRadius:'var(--r-full)', fontSize:'.75rem', letterSpacing:'.08em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'1.75rem' }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'var(--success)', boxShadow:'0 0 8px var(--success)', animation:'pulse-dot 2s ease-in-out infinite' }} />
            Available for Work
          </span>
        </motion.div>

        <motion.h1 {...up(0.25)} style={{ fontFamily:'var(--ff-display)', fontSize:'clamp(3.5rem,9vw,6.5rem)', fontWeight:800, lineHeight:1, letterSpacing:'-.04em', marginBottom:'1rem' }}>
          Pragathi <span style={{ color:'var(--gold)' }}>Parthasarathi</span>
        </motion.h1>

        <motion.div {...up(0.4)} aria-live="polite" style={{ fontSize:'clamp(1.1rem,2.5vw,1.5rem)', color:'var(--muted)', fontWeight:300, marginBottom:'1.5rem', minHeight:'2em' }}>
          {typed}
          <span aria-hidden="true" style={{ display:'inline-block', width:'2px', height:'1.1em', background:'var(--gold)', verticalAlign:'middle', marginLeft:'2px', animation:'blink .75s step-end infinite' }} />
        </motion.div>

        <motion.p {...up(0.5)} style={{ color:'var(--muted)', fontSize:'1rem', maxWidth:'560px', margin:'0 auto 2.5rem', lineHeight:'1.8' }}>
          I develop responsive, high-performance web applications, combining technical precision with seamless user experience and design.
        </motion.p>

        <motion.div {...up(0.6)} style={{ display:'flex', gap:'.85rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'4rem' }} className="hero-cta">
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className="btn btn-primary">View My Work →</button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="btn btn-outline">Contact Me</button>
          </Link>
          <a className="btn btn-outline" href="/Pragathi.pdf" download="Pragathi_arthasarathi_Resume.pdf">⬇ Resume</a>
        </motion.div>

        <motion.div {...up(0.75)} style={{ display:'flex', gap:'3rem', justifyContent:'center', flexWrap:'wrap', paddingTop:'2.5rem', borderTop:'1px solid var(--border)' }}>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.2rem' }}>
            <span style={{ fontFamily:'var(--ff-display)', fontSize:'1.8rem', fontWeight:700, color:'var(--gold)', letterSpacing:'-.02em' }}>1.5+</span>
            <span style={{ fontSize:'.78rem', color:'var(--muted)', letterSpacing:'.05em', textTransform:'uppercase' }}>Years Experience</span>
          </div>
        </motion.div>
      </div>

      <div aria-hidden="true" style={{ position:'absolute', bottom:'2.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'.6rem', animation:'bounce-scroll 2.5s ease-in-out infinite' }} className="hidden sm:flex">
        <span style={{ fontSize:'.68rem', letterSpacing:'.15em', textTransform:'uppercase', color:'var(--dim)' }}>Scroll</span>
        <div style={{ width:'1px', height:'42px', background:'linear-gradient(to bottom,var(--gold),transparent)' }} />
      </div>

      <style>{`
        @media(max-width:600px) { .hero-cta { flex-direction:column; align-items:center; } }
      `}</style>
    </section>
  )
}
