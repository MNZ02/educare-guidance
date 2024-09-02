import mongoose from 'mongoose'

const streamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Science', 'Commerce', 'Arts']
  },
  description: {
    type: String,
    trim: true
  },
  students: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Students'
  },
  image: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})
const Stream = mongoose.model('Stream', streamSchema)
export default Stream
