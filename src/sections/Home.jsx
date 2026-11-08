
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  BriefcaseBusiness,
  Mail,
  Download,
} from 'lucide-react'
import gsap from 'gsap'

import Scene from '../three/Scene'

const roles = [
  'FRONTEND DEVELOPER',
  'FULL STACK DEVELOPER',
  'MERN STACK DEVELOPER',
]

export default function Home() {
  const heroRef = useRef(null)
  const [roleIndex, setRoleIndex] = useState(0)

  // Automatically change developer role
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  // GSAP hero entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay: 0.25 })

      timeline.fromTo(
        '.hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )

      timeline.fromTo(
        '.hero-heading',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power4.out',
        },
        '-=0.3'
      )

      timeline.fromTo(
        '.hero-description, .hero-actions, .hero-socials',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
        },
        '-=0.5'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="home-section" ref={heroRef}>
      <div className="space-glow glow-one" />
      <div className="space-glow glow-two" />

      <div className="hero-layout">
        <div className="hero-content">

          {/* Animated Developer Role */}
          <div className="hero-label">
            <span className="status-dot" />

            <span
              key={roleIndex}
              className="hero-role-text"
            >
              {roles[roleIndex]}
            </span>

            <span className="label-line" />
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            <span className="heading-light">Hello, I'm</span>

            <span className="heading-name">
              Dharmateja<span className="purple-dot">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            Building the future,
            <br />
            <span>one experience at a time.</span>
          </h2>

          {/* Description */}
          <p className="hero-description">
            I create modern web applications and intelligent
            digital experiences using creative design,
            powerful technology and innovative thinking.
          </p>

          {/* Action Buttons */}
          
<div className="hero-actions">
  <motion.a
    href="#projects"
    className="primary-btn"
    whileHover={{ scale: 1.05, y: -4 }}
    whileTap={{ scale: 0.96 }}
  >
    EXPLORE MY WORK
    <ArrowUpRight size={18} />
  </motion.a>

  <motion.a
    href="#about"
    className="secondary-btn"
    whileHover={{ scale: 1.04, y: -3 }}
    whileTap={{ scale: 0.96 }}
  >
    ABOUT ME
  </motion.a>

  <motion.a
    href="/resume/Dharmateja_Resume.pdf"
    download="Dharmateja_Resume.pdf"
    className="secondary-btn resume-btn"
    whileHover={{ scale: 1.04, y: -3 }}
    whileTap={{ scale: 0.96 }}
  >
    DOWNLOAD RESUME
    <Download size={17} />
  </motion.a>
</div>


          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>

            <a href="#contact" aria-label="Contact">
              <Mail size={18} />
            </a>

            <span className="social-divider" />

            <span>INDIA · OPEN TO OPPORTUNITIES</span>
          </div>
        </div>

        {/* 3D Astronaut Scene */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="astronaut-halo" />

          <div className="scene-container-frame">
            <Scene />
          </div>

          <motion.div
            className="floating-tag tag-top"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="tag-dot" />
            CREATIVE DEVELOPER
          </motion.div>

          <motion.div
            className="floating-tag tag-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            3D · WEB · AI
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Footer */}
      <div className="hero-footer">
        <span>PORTFOLIO — 2026</span>

        <a href="#about">
          SCROLL TO EXPLORE
          <ArrowDown size={15} />
        </a>

        <span>01 / 07</span>
      </div>
    </section>
  )
}
