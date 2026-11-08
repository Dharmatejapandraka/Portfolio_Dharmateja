
import { motion } from 'framer-motion'
import {
  Award,
  ShieldCheck,
  Sparkles,
  BrainCircuit,
  Code2,
  Image,
  ArrowUpRight,
} from 'lucide-react'
import './Certifications.css'

const certificates = [
  {
    number: '01',
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    year: '2026',
    category: 'TECHNOLOGY',
    icon: Award,
  },
  {
    number: '02',
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    year: '2026',
    category: 'DEVELOPMENT',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Add Your Certification',
    issuer: 'Certification Provider',
    year: '2026',
    category: 'PROFESSIONAL',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Generative AI',
    issuer: 'Add Certification Provider',
    year: '2026',
    category: 'ARTIFICIAL INTELLIGENCE',
    icon: BrainCircuit,
  },
  {
    number: '05',
    title: 'Web Development',
    issuer: 'Add Certification Provider',
    year: '2026',
    category: 'WEB TECHNOLOGY',
    icon: Code2,
  },
  {
    number: '06',
    title: 'AI Image Generation',
    issuer: 'Add Certification Provider',
    year: '2026',
    category: 'CREATIVE AI',
    icon: Image,
  },
]

function CertificateCard({ certificate }) {
  const Icon = certificate.icon

  return (
    <motion.article
      className="certificate-card"
      whileHover={{ y: -10, rotate: -1, scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 250, damping: 16 }}
    >
      <div className="certificate-top">
        <span>DH. / CERTIFICATE</span>
        <span>{certificate.number}</span>
      </div>

      <div className="certificate-emblem">
        <div className="certificate-emblem-glow" />
        <Icon size={35} strokeWidth={1.3} />
      </div>

      <div className="certificate-content">
        <span className="certificate-category">
          {certificate.category}
        </span>
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer}</p>
      </div>

      <div className="certificate-bottom">
        <span>{certificate.year}</span>
        <span className="certificate-status">
          <span />
          ADD DETAILS
          <ArrowUpRight size={13} />
        </span>
      </div>
    </motion.article>
  )
}

function CertificateTrack({ items, direction }) {
  const repeatedItems = [...items, ...items]

  return (
    <div className={`certificate-track-window ${direction}`}>
      <div className="certificate-track">
        {repeatedItems.map((certificate, index) => (
          <CertificateCard
            key={`${certificate.number}-${index}`}
            certificate={certificate}
          />
        ))}
      </div>
    </div>
  )
}

function Certifications() {
  const firstRow = certificates.slice(0, 3)
  const secondRow = certificates.slice(3, 6)

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">

        <motion.div
          className="certifications-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="certifications-eyebrow">
            <span className="certifications-dot" />
            MILESTONES & ACHIEVEMENTS
          </span>

          <h2>
            Proof of <span>Progress.</span>
          </h2>

          <p>
            Every certificate represents a new skill, a challenge completed,
            and another step forward in my development journey.
          </p>
        </motion.div>

        <div className="certifications-showcase">
          <div className="certifications-side-label">
            <span>MY LEARNING JOURNEY</span>
            <span>2026 — PRESENT</span>
          </div>

          <CertificateTrack items={certificates} direction="move-left" />
        </div>

        <div className="certifications-footer">
          <Sparkles size={16} />
          <span>LEARN. APPLY. IMPROVE. REPEAT.</span>
          <span className="certifications-footer-mark">DH. / 2026</span>
        </div>

      </div>
    </section>
  )
}

export default Certifications
