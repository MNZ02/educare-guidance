import mongoose from 'mongoose'

const samplePaperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  // uploadedBy: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Users', // Assuming you have a Users collection
  //     required: true
  //   },
  uploadDate: {
    type: Date,
    default: Date.now
  }
})

const SamplePapers = mongoose.model('SamplePapers', samplePaperSchema)

export default SamplePapers
