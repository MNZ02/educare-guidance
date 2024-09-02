import express from 'express'
import cors from 'cors'
import studentsRoutes from './routes/studentsRoutes.js'
import teachersRoutes from './routes/teachersRoutes.js'
import samplePapersRoutes from './routes/samplePapersRoutes.js'
import authRoutes from './routes/authRoutes.js'
import videoRoutes from './routes/videoRoutes.js'
import streamRoutes from './routes/streamRoutes.js'
const app = express()

app.use(express.json())
app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use('/api', studentsRoutes)
app.use('/api', teachersRoutes)
app.use('/api', samplePapersRoutes)
app.use('/api', authRoutes)
app.use('/api', videoRoutes)
app.use('/api', streamRoutes)
export default app
