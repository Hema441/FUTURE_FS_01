import { personalInfo } from '../data/portfolioData'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="container" style={{ position: 'relative', width: '100%' }}>
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-desc">{personalInfo.bio}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>

        <div className="hero-socials">
          <a href={personalInfo.github} className="hero-social-link" target="_blank" rel="noreferrer">GitHub</a>
          <a href={personalInfo.linkedin} className="hero-social-link" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}