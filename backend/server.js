import express from 'express'
import path from 'path'
import contactRoute from './routes/contactRoute.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { fileURLToPath } from 'url'

// Setup environment variables
dotenv.config()

// Connect to the database
connectDB()

// Set up the Express application
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/form/contact', contactRoute)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

// Start the server
app.listen(port, () => console.log(`The server is running at port ${port}`))
