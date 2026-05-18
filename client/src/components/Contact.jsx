import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus({ type: 'success', msg: '✅ Message sent! I\'ll get back to you soon.' })
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error()
      }
    } catch {
      setStatus({ type: 'error', msg: '❌ Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-desc">
            Have a project in mind or want to chat? I'm currently open to new opportunities.
            Drop me a message and I'll get back to you within 24 hours.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project Inquiry" required value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required value={form.message} onChange={handleChange} />
            </div>

            {status && <div className={`form-status ${status.type}`}>{status.msg}</div>}

            <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}