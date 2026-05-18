import { projects } from '../data/portfolioData'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map(project => (
            <article className="project-card" key={project.id}>
              <div className="project-body">
                <div className="project-top">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                    )}
                    {project.live && (
                      <a href={project.live} className="project-link" target="_blank" rel="noreferrer">Live ↗</a>
                    )}
                  </div>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}