import { useState, useEffect, useRef } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('pf-theme') || 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('pf-theme', theme)
  }, [theme])
  return { theme, toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}

export function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const s = el.scrollHeight - el.clientHeight
      setP(s > 0 ? (el.scrollTop / s) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return p
}

export function useTypewriter(phrases, ts = 90, ds = 55, pause = 1800) {
  const [text, setText] = useState('')
  const [pi, setPi] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const cur = phrases[pi]
    const id = setTimeout(() => {
      if (!del) {
        setText(cur.slice(0, text.length + 1))
        if (text.length + 1 === cur.length) setTimeout(() => setDel(true), pause)
      } else {
        setText(cur.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDel(false); setPi(i => (i + 1) % phrases.length) }
      }
    }, del ? ds : ts)
    return () => clearTimeout(id)
  }, [text, del, pi, phrases, ts, ds, pause])
  return text
}

export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); ob.unobserve(el) } }, { threshold })
    ob.observe(el)
    return () => ob.disconnect()
  }, [threshold])
  return { ref, inView }
}
