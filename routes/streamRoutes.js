import express from 'express'
const router = express.Router()
import {
  getAllStreams,
  getStreamById,
  createStream,
  deleteStreamById
} from '../controllers/streamController.js'

router.get('/streams', getAllStreams)
router.get('/:id', getStreamById)
router.post('/streams', createStream)
router.delete('/:id', deleteStreamById)

export default router
