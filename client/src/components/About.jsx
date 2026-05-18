import { personalInfo, education, certifications, workshopsAndActivities } from '../data/portfolioData'
import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Building digital experiences that matter</h2>
            <p>{personalInfo.bio}</p>
            <p>{personalInfo.bioExtended}</p>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                🎓 Education
              </h3>
              {education.map((edu, i) => (
                <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--text)' }}>{edu.degree}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{edu.school}</div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: '0.25rem' }}>{edu.year} · {edu.grade}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                📜 Certifications
              </h3>
              {certifications.map((cert, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--accent)' }}>▸</span> {cert}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--accent)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                🛠️ Workshops & Activities
              </h3>
              {workshopsAndActivities.map((act, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--accent)', marginTop: '0.15rem' }}>▸</span> 
                  <span>{act}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href={personalInfo.resume} download="Resume.pdf" className="btn btn-primary">
                Download Resume ↓
              </a>
            </div>
          </div>

          <div className="about-image-wrap">
            <div className="about-image-box">
              <img
                src="/profile.jpg"
                alt="Profile"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                onError={e => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '👨‍💻' }}
              />
            </div>
            <div className="about-image-deco" />
          </div>
        </div>
      </div>
    </section>
  )
}