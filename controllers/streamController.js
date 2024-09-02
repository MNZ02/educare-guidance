import Stream from '../models/Stream.js'

export const createStream = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res
        .status(400)
        .json({ message: 'Please provide data to create a stream' })
    }
    const stream = new Stream(data)
    await stream.save()
    res.status(201).json(stream)
  } catch (error) {
    console.error('Error creating stream', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const getAllStreams = async (req, res) => {
  try {
    const streams = await Stream.find()
    if (!streams) {
      return res.status(404).json({ message: 'No streams found' })
    }
    res.status(200).json(streams)
  } catch (error) {
    console.error('Error getting all streams', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}
export const getStreamById = async (req, res) => {
  try {
    const id = req.params.id
    const stream = await Stream.findById(id)
    if (!stream) {
      return res.status(404).json({ message: 'Stream not found' })
    }
    res.status(200).json(stream)
  } catch (error) {
    console.error('Error getting stream by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}
export const deleteStreamById = async (req, res) => {
  try {
    const id = req.params.id
    const stream = await Stream.findByIdAndDelete(id)
    if (!stream) {
      return res.status(404).json({ message: 'Stream not found' })
    }
    res.status(200).json({ message: 'Stream deleted successfully' })
  } catch (error) {
    console.error('Error deleting stream by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}
