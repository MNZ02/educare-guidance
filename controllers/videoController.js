import Video from '../models/Video.js'

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find()
    if (!videos) {
      return res.status(404).send('No videos found')
    }
    res.status(200).json(videos)
  } catch (error) {
    console.error('Error getting videos', error.message)
    res.status(500).send('Internal server error')
  }
}

export const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body)
    res.status(201).json(video)
  } catch (error) {
    console.error('Error creating video', error.message)
    res.status(500).send('Internal server error')
  }
}
export const getVideoById = async (req, res) => {
  try {
    const id = req.params.id
    const video = await Video.findById(id)
    if (!video) {
      return res.status(404).send('Video not found')
    }
    res.status(200).json(video)
  } catch (error) {
    console.error('Error getting video by id', error.message)
    res.status(500).send('Internal server error')
  }
}

export const deleteVideo = async (req, res) => {
  try {
    const id = req.params.id

    const video = await Video.findByIdAndDelete(id)
    if (!video) {
      return res.status(404).send('Video not found')
    }
    res.status(200).send('Video deleted successfully')
  } catch (error) {
    console.error('Error deleting video', error.message)
    res.status(500).send('Internal server error')
  }
}
