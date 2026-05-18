function validateContact(req, res, next) {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  if (message.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' })
  }

  next()
}

module.exports = validateContact