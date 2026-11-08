
import { motion } from 'framer-motion'
import {
  Code2,
  Braces,
  Layers3,
  Database,
  Sparkles,
} from 'lucide-react'
import './About.css'

const technologies = [
  { icon: Code2, name: 'HTML / CSS' },
  { icon: Braces, name: 'JavaScript' },
  { icon: Layers3, name: 'React' },
  { icon: Database, name: 'Database' },
  { icon: Sparkles, name: 'AI' },
]

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-background-glow" />
      <div className="about-dot-pattern about-dots-left" />
      <div className="about-dot-pattern about-dots-right" />

      <div className="about-reference-layout">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-reference-content"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-reference-label">About</span>

          <h2 className="about-reference-name">
            Dharmateja<span>.</span>
          </h2>

          <h3 className="about-reference-role">
            Full Stack Developer
          </h3>

          <p className="about-reference-description">
            I'm a passionate Information Technology graduate who
            loves building modern, responsive, and user-friendly
            web applications.
          </p>

          <p className="about-reference-description">
            I enjoy turning creative ideas into real digital
            experiences using clean code, modern technologies,
            and thoughtful design.
          </p>

          <p className="about-reference-description">
            My interests include frontend development, MERN stack
            technologies, and exploring Generative AI. I'm always
            learning and building projects to improve my skills.
          </p>


          <a href="#contact" className="about-reference-cta">
            LET'S CONNECT <span>↗</span>
          </a>
        </motion.div>

        {/* RIGHT PORTRAIT */}
        <motion.div
          className="about-reference-visual"
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-orbit-glow" />

          <div className="about-orbit orbit-one" />
          <div className="about-orbit orbit-two" />
          <div className="about-orbit orbit-three" />

          <div className="about-portrait-circle">
            <img
              src="/images/profile.jpg"
              alt="Dharmateja - Full Stack Developer"
              className="about-reference-photo"
            />
          </div>

          <div className="about-orbit-dot orbit-dot-one" />
          <div className="about-orbit-dot orbit-dot-two" />
          <div className="about-orbit-dot orbit-dot-three" />

          <div className="about-floating-card">
            <span className="about-floating-status" />
            <span>CREATIVE DEVELOPER</span>
          </div>

          <div className="about-visual-caption">
            <span>DESIGN</span>
            <span>DEVELOP</span>
            <span>INNOVATE</span>
          </div>
        </motion.div>

      </div>

      <div className="about-reference-footer">
        <span>DHARMATEJA · 2026</span>
        <span>BUILDING DIGITAL EXPERIENCES</span>
      </div>
    </section>
  )
}

export default About
