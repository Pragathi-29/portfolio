import React from 'react'
import { Link } from 'react-scroll'
import { social } from '../data'

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid var(--border)', marginTop:'4rem' }}>
      <div className="container" style={{ paddingTop:'3.5rem', paddingBottom:'2rem' }}>
        <div style={{ borderTop:'1px solid var(--border)', paddingTop:'1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'.5rem', color:'var(--dim)', fontSize:'.78rem' }} className="footer-bottom">
          <p>© {new Date().getFullYear()} Pragathi Parthasarthi. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        @media(max-width:480px) { .footer-bottom{flex-direction:column;text-align:center;} }
      `}</style>
    </footer>
  )
}
