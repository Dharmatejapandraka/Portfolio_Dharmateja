
import { useEffect, useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'

const About = lazy(() => import('./sections/About'))
const Skills = lazy(() => import('./sections/Skills'))
const Projects = lazy(() => import('./sections/Projects'))
const Certifications = lazy(() => import('./sections/Certifications'))
const Education = lazy(() => import('./sections/Education'))
const Contact = lazy(() => import('./sections/Contact'))

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false)
    }, 900)

    return () => window.clearTimeout(timer)
  }, [])

  const toggleTheme = () => {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="portfolio-shell" data-theme={theme}>
      {showLoader && <Loader />}

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <CustomCursor />

      <main>
        <Home />

        <Suspense fallback={<div className="section-loading">LOADING EXPERIENCE...</div>}>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <footer className="site-footer">
        © 2026 DHARMATEJA. BUILT WITH CREATIVITY.
      </footer>
    </div>
  )
}

export default App
