
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Code2,
  BriefcaseBusiness,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react'
import './Contact.css'

const contactDetails = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'pandrakadharmateja@gmail.com',
    href: 'mailto:pandrakadharmateja@gmail.com',
  },
  {
    icon: Phone,
    label: 'PHONE',
    value: '+91 9052551462',
    href: 'tel:+91 9052551462',
  },
  {
    icon: MapPin,
    label: 'VELIVOLU',
    value: 'Andhra Pradesh, India',
    href: null,
  },
]

function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const recipient = 'your.email@gmail.com'
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('your.email@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:your.email@gmail.com'
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-eyebrow">
            <Sparkles size={15} />
            LET'S CONNECT
          </span>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it together.</span>
          </h2>

          <p>
            I'm always excited to connect with people, explore opportunities,
            and create meaningful digital experiences.
          </p>
        </motion.div>

        <div className="contact-layout">

          <motion.div
            className="contact-info-panel"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-top">
              <div className="contact-icon-main">
                <Mail size={27} />
              </div>

              <span className="contact-available">
                <span className="availability-dot" />
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            <h3>Let's start a conversation.</h3>

            <p className="contact-info-description">
              Looking for a fresher developer, have a project idea,
              or simply want to say hello? My inbox is always open.
            </p>

            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    className="contact-detail-item"
                    href={item.href || undefined}
                    key={item.label}
                    onClick={!item.href ? (e) => e.preventDefault() : undefined}
                  >
                    <span className="contact-detail-icon">
                      <Icon size={19} />
                    </span>

                    <span className="contact-detail-text">
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>

                    {item.href && <ArrowUpRight size={17} />}
                  </a>
                )
              })}
            </div>

            <div className="contact-email-copy">
              <span>QUICK EMAIL</span>
              <button onClick={copyEmail} type="button">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy email address'}
              </button>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Dharmatejapandraka"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/dharma-teja-pandraka-0132b334a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={20} />
              </a>

              <a
                href="mailto:pandrakadharmateja@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-panel"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="contact-form-heading">
              <span>01 / SEND A MESSAGE</span>
              <h3>Let's talk about your idea.</h3>
              <p>Fill in the details below and let's connect.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">YOUR NAME</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">EMAIL ADDRESS</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">SUBJECT</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send Message
                <Send size={17} />
              </button>
            </form>

            <p className="contact-form-note">
              <Sparkles size={13} />
              Your next great collaboration could start here.
            </p>
          </motion.div>

        </div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>DHARMATEJA © 2026</span>
          <span>DESIGNED WITH CREATIVITY</span>
          <a href="#home">
            BACK TO TOP <ArrowUpRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
