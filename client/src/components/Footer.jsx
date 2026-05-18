import { personalInfo, navLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 0',
      background: 'var(--bg)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} {personalInfo.name}. Built with React + Vite.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{
              color: 'var(--text-dim)',
              fontSize: '0.85rem',
              transition: 'var(--transition)'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}