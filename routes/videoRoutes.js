import express from 'express'
import {
  getVideos,
  createVideo,
  getVideoById,
  deleteVideo
} from '../controllers/videoController.js'
const router = express.Router()

router.get('/', getVideos)
router.post('/', createVideo)
router.get('/:id', getVideoById)
router.delete('/:id', deleteVideo)

export default router
