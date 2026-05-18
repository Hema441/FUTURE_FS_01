import { skills } from '../data/portfolioData'
import '../styles/Skills.css'

const icons = {
  Languages: '💻',
  'Core Subjects': '🧠',
  Tools: '🚀',
  'Soft Skills': '🤝'
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I Work With</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '0', maxWidth: '500px' }}>
          A collection of technologies and tools I've worked with across projects.
        </p>
        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card" key={skill.category}>
              <div className="skill-category">
                <span>{icons[skill.category] || '💡'}</span>
                {skill.category}
              </div>
              <div className="skill-tags">
                {skill.items.map(item => (
                  <span className="skill-tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}