
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, School, ArrowUpRight } from 'lucide-react'
import './Education.css'

const education = [
  {
    number: '01',
    level: 'UNDERGRADUATE',
    title: 'Bachelor of Technology',
    field: 'Information Technology',
    institution: 'Dhanekula Institute of Engineering and Technology',
    duration: '2022 – 2026',
    result: 'CGPA: 7.72',
    icon: GraduationCap,
  },
  {
    number: '02',
    level: 'INTERMEDIATE',
    title: 'Intermediate Education',
    field: 'MPC',
    institution: 'Vijaya Kranti Junior College',
    duration: '2020 – 2022',
    result: '70.3',
    icon: BookOpen,
  },
  {
    number: '03',
    level: 'SCHOOLING',
    title: 'Secondary Education',
    field: 'SSC',
    institution: 'zilla parishad high school',
    duration: 'Completed 2020',
    result: '84.5',
    icon: School,
  },
]

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="education-eyebrow">
            <span className="education-dot" />
            THE FOUNDATION OF MY JOURNEY
          </span>

          <h2>
            My Learning <span>Journey.</span>
          </h2>

          <p>
            Every stage of education has helped shape the way
            I think, learn, solve problems and build.
          </p>
        </motion.div>

        <div className="education-timeline">
          <div className="education-timeline-line" />

          {education.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                className={`education-item education-item-${index + 1}`}
                key={item.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.15 }}
              >
                <div className="education-marker">
                  <Icon size={20} />
                </div>

                <div className="education-card">
                  <div className="education-card-top">
                    <span>{item.level}</span>
                    <span>{item.number}</span>
                  </div>

                  <div className="education-card-content">
                    <span className="education-duration">
                      {item.duration}
                    </span>

                    <h3>{item.title}</h3>
                    <h4>{item.field}</h4>

                    <p>{item.institution}</p>
                  </div>

                  <div className="education-card-bottom">
                    <span>{item.result}</span>
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="education-footer">
          <GraduationCap size={18} />
          <span>LEARNING NEVER GRADUATES.</span>
          <span className="education-footer-mark">DH. / 2026</span>
        </div>

      </div>
    </section>
  )
}

export default Education
