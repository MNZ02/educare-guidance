import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  gender: {
    type: String
  },
  address: {
    type: String
  },
  stream: {
    type: String,
    enum: ['Science', 'Commerce', 'Arts'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    required: true
  }
})
const User = mongoose.model('User', userSchema)
export default User
