
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from 'lucide-react'
import './Projects.css'

const projects = [
  {
    number: '01',
    name: 'Travel',
    accent: 'Unbounded',
    category: 'TRAVEL EXPERIENCE PLATFORM',
    description:
      'An immersive travel platform designed to make discovering destinations and planning journeys feel effortless.',
    technologies: ['Next.js', 'React', 'JavaScript', 'CSS'],
    image: '/images/travel-unbounded-demo.png',
    statement: 'THE WORLD IS YOURS TO EXPLORE.',
    github: 'https://github.com/Dharmatejapandraka/flock-energy-api',
    demo: 'https://branchboard-m6jm.onrender.com',
  },
  {
    number: '02',
    name: 'Match',
    accent: 'Flow',
    category: 'SMART BLOOD DONATION PLATFORM',
    description:
      'A social-impact platform that connects blood donors with people in need, bringing requests, donor matching and notifications together.',
    technologies: ['Flask', 'Python', 'SQLite', 'JavaScript'],
    image: '/images/matchflow-demo.png',
    statement: 'ONE CONNECTION CAN SAVE A LIFE.',
    github: '#',
    demo: '#',
  },
  {
    number: '03',
    name: 'Document',
    accent: 'Intelligence',
    category: 'AI DOCUMENT QUESTION ANSWERING',
    description:
      'An intelligent document assistant that retrieves relevant information and helps users explore their own documents through natural-language questions.',
    technologies: ['Python', 'RAG', 'ChromaDB', 'Streamlit'],
    image: '/images/document-qa-demo.png',
    statement: 'LET YOUR DOCUMENTS SPEAK.',
    github: '#',
    demo: '#',
  },
  {
    number: '04',
    name: 'Smart URL',
    accent: 'Shortener',
    category: 'LINK MANAGEMENT APPLICATION',
    description:
      'A lightweight web application that transforms long URLs into compact links that are easier to share and manage.',
    technologies: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS'],
    image: '/images/url-shortener-demo.png',
    statement: 'LESS LINK. MORE POSSIBILITIES.',
    github: '#',
    demo: '#',
  },
  {
    number: '05',
    name: 'Smart Queue',
    accent: 'System',
    category: 'QUEUE MANAGEMENT',
    description:
      'A digital queue experience built to organise service requests and make waiting more structured and manageable.',
    technologies: ['Flask', 'SQLite', 'SQLAlchemy', 'JavaScript'],
    image: '/images/smart-queue-demo.png',
    statement: 'WAIT LESS. MOVE SMARTER.',
    github: '#',
    demo: '#',
  },
  {
    number: '06',
    name: 'Object',
    accent: 'Vision',
    category: 'COMPUTER VISION',
    description:
      'A computer-vision experiment that identifies multiple objects in visual input using object detection techniques.',
    technologies: ['Python', 'OpenCV', 'YOLO'],
    image: '/images/object-detection-demo.png',
    statement: 'TEACHING MACHINES TO SEE.',
    github: '#',
    demo: '#',
  },
]

function ProjectPreview({ project }) {
  return (
    <div className="archive-visual-wrap archive-image-wrap">
      <img
        key={project.image}
        className="archive-project-image"
        src={project.image}
        alt={`${project.name} ${project.accent} project preview`}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          event.currentTarget.style.opacity = '0'
        }}
      />

      <div className="archive-image-overlay" />

      <div className="archive-statement">
        {project.statement}
      </div>

      <span className="archive-image-index">
        {project.number} / 06
      </span>
    </div>
  )
}

function ProjectLink({ href, children, icon: Icon }) {
  const unavailable = href === '#'

  return (
    <a
      href={unavailable ? undefined : href}
      target={unavailable ? undefined : '_blank'}
      rel={unavailable ? undefined : 'noopener noreferrer'}
      aria-disabled={unavailable}
      className={unavailable ? 'project-link-disabled' : ''}
      onClick={(event) => {
        if (unavailable) event.preventDefault()
      }}
      title={unavailable ? 'Project link will be added later' : children}
    >
      <Icon size={16} />
      {children}
      <ArrowUpRight size={14} />
    </a>
  )
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const project = projects[activeIndex]

  const changeProject = (index) => {
    setActiveIndex((index + projects.length) % projects.length)
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADING */}

        <motion.div
          className="archive-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="archive-eyebrow">
            <span className="archive-dot" />
            A SELECTION OF THINGS I'VE BUILT
          </div>

          <h2>
            Beyond the <span>Screen.</span>
          </h2>

          <div className="archive-heading-bottom">
            <p>
              Ideas, experiments and digital experiences.
              Every project is another opportunity to build something meaningful.
            </p>

            <span className="archive-total">06 / PROJECTS</span>
          </div>
        </motion.div>

        {/* PROJECT ARCHIVE */}

        <div className="archive-interface">

          {/* LEFT NAVIGATION */}

          <aside className="archive-navigation">
            <div className="archive-nav-label">
              <Layers3 size={15} />
              <span>THE ARCHIVE</span>
            </div>

            <div className="archive-nav-list">
              {projects.map((item, index) => (
                <button
                  key={item.number}
                  className={
                    activeIndex === index
                      ? 'archive-nav-item active'
                      : 'archive-nav-item'
                  }
                  onClick={() => changeProject(index)}
                  aria-current={activeIndex === index ? 'true' : undefined}
                >
                  <span className="archive-nav-number">
                    {item.number}
                  </span>

                  <span className="archive-nav-name">
                    {item.name} {item.accent}
                  </span>

                  <span className="archive-nav-indicator" />
                </button>
              ))}
            </div>

            <div className="archive-nav-foot">
              <span>SELECT A PROJECT</span>
              <ArrowDownRight size={16} />
            </div>
          </aside>

          {/* PROJECT SHOWCASE */}

          <div className="archive-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.number}
                className="archive-project"
                initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="archive-stage-top">
                  <span>
                    FEATURED PROJECT / {project.number}
                  </span>

                  <span>{project.category}</span>
                </div>

                {/* DEMO IMAGE */}

                <ProjectPreview project={project} />

                {/* PROJECT DETAILS */}

                <div className="archive-project-details">
                  <div className="archive-project-copy">
                    <span className="archive-project-category">
                      {project.category}
                    </span>

                    <h3>
                      {project.name}
                      <span>{project.accent}.</span>
                    </h3>

                    <p>{project.description}</p>
                  </div>

                  <div className="archive-project-side">
                    <span className="archive-tech-label">
                      BUILT WITH
                    </span>

                    <div className="archive-tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="archive-links">
                      <ProjectLink
                        href={project.github}
                        icon={Code2}
                      >
                        GitHub
                      </ProjectLink>

                      <ProjectLink
                        href={project.demo}
                        icon={ExternalLink}
                      >
                        Live Demo
                      </ProjectLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}

            <div className="archive-controls">
              <span className="archive-current">
                <b>{project.number}</b>
                <span> / 06</span>
              </span>

              <div className="archive-progress">
                <div
                  className="archive-progress-fill"
                  style={{
                    width: `${((activeIndex + 1) / projects.length) * 100}%`,
                  }}
                />
              </div>

              <div className="archive-arrows">
                <button
                  aria-label="Previous project"
                  onClick={() => changeProject(activeIndex - 1)}
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  aria-label="Next project"
                  onClick={() => changeProject(activeIndex + 1)}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="archive-footer">
          <span className="archive-dot" />
          <span>BUILT WITH CURIOSITY. POWERED BY CODE.</span>
          <span className="archive-footer-mark">DH. / 2026</span>
        </div>

      </div>
    </section>
  )
}

export default Projects
