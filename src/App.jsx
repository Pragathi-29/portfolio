import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useTheme } from './hooks'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        {/* <Projects />
        <Experience /> */}
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
