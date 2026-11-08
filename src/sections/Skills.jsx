
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Layers3,
  Database,
  Terminal,
  ArrowUpRight,
  BrainCircuit,
  Sparkles,
} from 'lucide-react'
import './Skills.css'

const filters = ['Frontend', 'Backend', 'Database', 'AI', 'Tools']

const skills = [
  { name: 'HTML5', category: 'Frontend', symbol: 'HTML' },
  { name: 'CSS3', category: 'Frontend', symbol: 'CSS' },
  { name: 'JavaScript', category: 'Frontend', symbol: 'JS' },
  { name: 'React.js', category: 'Frontend', symbol: 'RE' },
  { name: 'Bootstrap', category: 'Frontend', symbol: 'BS' },
  { name: 'Node.js', category: 'Backend', symbol: 'ND' },
  { name: 'Express.js', category: 'Backend', symbol: 'EX' },
  { name: 'Python', category: 'Backend', symbol: 'PY' },
  { name: 'MySQL', category: 'Database', symbol: 'MY' },
  { name: 'MongoDB', category: 'Database', symbol: 'MG' },
  { name: 'SQLite', category: 'Database', symbol: 'SQ' },
  { name: 'Git & GitHub', category: 'Tools', symbol: 'GH' },
  { name: 'VS Code', category: 'Tools', symbol: 'VS' },
  { name: 'REST APIs', category: 'Tools', symbol: 'API' },
  { name: 'Generative AI', category: 'AI', symbol: 'GEN AI' },
  { name: 'AI Image Generation', category: 'AI', symbol: 'IMG AI' },
  { name: 'Prompt Engineering', category: 'AI', symbol: 'PROMPT' },
    ]

const categoryDetails = [
  { name: 'Frontend', description: 'Building interfaces', icon: Code2 },
  { name: 'Backend', description: 'Application logic', icon: Terminal },
  { name: 'Database', description: 'Data management', icon: Database },
  { name: 'Tools', description: 'Development workflow', icon: Layers3 },
  { name: 'AI',description: 'Intelligent experiences',icon: BrainCircuit,},]

function Skills() {
  const [activeFilter, setActiveFilter] = useState('Frontend')

  const visibleSkills = skills.filter(
  (skill) => skill.category === activeFilter
)

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="skills-eyebrow">
            <span className="skills-dot" />
            WHAT I WORK WITH
          </div>

          <h2>
            My Creative <span>Toolkit.</span>
          </h2>

          <p>
            A collection of technologies I use to design, develop,
            experiment, and bring digital ideas to life.
          </p>
        </motion.div>

        <div className="skills-layout">

          <motion.aside
            className="skills-feature"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="feature-topline">
              <span>MY TECH STACK</span>
              <Sparkles size={18} />
            </div>

            <div className="feature-orbit">
              <div className="feature-orbit-ring ring-one" />
              <div className="feature-orbit-ring ring-two" />
              <div className="feature-orbit-center">
                <Code2 size={42} strokeWidth={1.2} />
              </div>
              <span className="orbit-label orbit-label-one">DEV</span>
              <span className="orbit-label orbit-label-two">BUILD</span>
            </div>

            <div className="feature-copy">
              <span className="feature-index">01 / TECHNOLOGY</span>
              <h3>
                Turning ideas
                <br />
                into <span>experiences.</span>
              </h3>
              <p>
                From designing responsive interfaces to building
                application logic, I enjoy working across different
                parts of the development process.
              </p>
            </div>

            <div className="feature-bottom">
              <span>ALWAYS LEARNING</span>
              <ArrowUpRight size={19} />
            </div>
          </motion.aside>

          <div className="skills-content">

            <div className="skills-category-list">
              {categoryDetails.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.name}
                    className="skills-category"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="category-icon">
                      <Icon size={19} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.description}</span>
                    </div>
                    <span className="category-number">
                      0{index + 1}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <div className="skills-list-header">
              <div>
                <span className="skills-small-label">EXPLORING & BUILDING</span>
                <h3>Technologies</h3>
              </div>
              <span className="skills-total">
                {String(visibleSkills.length).padStart(2, '0')} SKILLS
              </span>
            </div>

            <div className="skills-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={activeFilter === filter ? 'selected' : ''}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <motion.div layout className="skills-grid">
              <AnimatePresence mode="popLayout">
                {visibleSkills.map((skill, index) => (
                  <motion.div
                    layout
                    key={skill.name}
                    className={`skill-tile ${
  activeFilter === 'All' ? 'skill-tile-all' : 'skill-tile-floating'
}`}
style={{ '--float-delay': `${index * 0.16}s` }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{
  type: 'spring',
  stiffness: 180,
  damping: 13,
  delay: index * 0.07,
}}
whileHover={{
  y: -12,
  scale: 1.045,
  rotate: index % 2 === 0 ? 1 : -1,
}}
                  >
                    <span className="skill-symbol">{skill.symbol}</span>
                    <div className="skill-tile-info">
                      <h4>{skill.name}</h4>
                      <span>{skill.category}</span>
                    </div>
                    <ArrowUpRight
                      className="skill-tile-arrow"
                      size={16}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>

        <div className="skills-footer-line">
          <span className="skills-dot" />
          <span>THE BEST WAY TO LEARN IS TO BUILD.</span>
          <span className="skills-footer-year">DH. / 2026</span>
        </div>

      </div>
    </section>
  )
}

export default Skills
