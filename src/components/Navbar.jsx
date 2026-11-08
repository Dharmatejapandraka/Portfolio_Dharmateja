
import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT', id: 'about' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'CERTIFICATIONS', id: 'certifications' },
  { name: 'EDUCATION', id: 'education' },
  { name: 'CONTACT', id: 'contact' },
]

function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35

      let current = 'home'

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id)

        if (section && scrollPosition >= section.offsetTop) {
          current = link.id
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when a link is selected
  const handleNavigation = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <header className="portfolio-navbar">
      <nav className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => handleNavigation('home')}
        >
          <span className="logo-bracket">&lt;</span>
          DT
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${
                activeSection === link.id ? 'active' : ''
              }`}
              onClick={() => handleNavigation(link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right-side controls */}
        <div className="navbar-actions">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a
            href="#contact"
            className="navbar-cta"
            onClick={() => handleNavigation('contact')}
          >
            LET'S TALK <span>↗</span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
