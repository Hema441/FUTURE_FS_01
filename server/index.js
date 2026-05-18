require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRoutes = require('./routes/contact')

const app = express()
const PORT = process.env.PORT || 5000

// Allow requests from your React dev server
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Contact API route
app.use('/api/contact', contactRoutes)

// Health check route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to My Portfolio API')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
