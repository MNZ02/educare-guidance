import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const register = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    await User.create({
      email,
      password: hashedPassword,
      ...rest
    })

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h'
    })
    res.status(201).json({ message: 'User registered successfully', token })
  } catch (error) {
    console.error('Error registering user', error.message)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h'
    })

    res.status(200).json({
      message: 'User logged in successfully',
      token,
      role: user.role
    })
  } catch (error) {
    console.error('Error logging in', error.message)
    res.status(500).json({ message: 'Internal server error' })
  }
}
