import mongoose from 'mongoose'

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },

  enrollmentDate: {
    type: Date,
    required: true
  },
  course: {
    type: String
  }
})

const Students = mongoose.model('Students', studentsSchema)

export default Students
