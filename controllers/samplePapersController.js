import express from 'express'
import multer from 'multer'
import SamplePapers from '../models/SamplePapers.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES6
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Define upload directory path
const uploadDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir) // Use the correct path resolved with __dirname
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

export const createSamplePaper = [
  upload.single('file'),
  async (req, res) => {
    try {
      const { title, description } = req.body
      const fileUrl = req.file.path

      const samplePaper = new SamplePapers({ title, description, fileUrl })

      await samplePaper.save()
      res.status(201).json({ message: 'Sample paper uploaded successfully' })
    } catch (error) {
      console.log('Error creating sample paper', error.message)
      res.status(500).json({ error: 'Failed to upload sample paper' })
    }
  }
]
