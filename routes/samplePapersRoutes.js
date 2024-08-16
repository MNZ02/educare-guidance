import express from 'express'
import { createSamplePaper } from '../controllers/samplePapersController.js'
const router = express.Router()

router.post('/upload', createSamplePaper)

export default router
