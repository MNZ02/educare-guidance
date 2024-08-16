import Teachers from '../models/Teachers.js'

export const createTeacher = async (req, res) => {
  try {
    const data = req.body
    const teacher = new Teachers(data)

    await teacher.save()
    console.log('Teacher Id created', teacher.teacherId)
    res.status(201).json(teacher)
  } catch (error) {
    console.error('Error creating teacher', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teachers.find()

    if (!teachers.length) {
      return res.status(404).json({ message: 'No teachers found' })
    }
    res.status(200).json(teachers)
  } catch (error) {
    console.error('Error getting all teachers', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const getTeacherById = async (req, res) => {
  try {
    const id = req.params.id

    const teacher = await Teachers.findById(id)
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }
    res.status(200).json(teacher)
  } catch (error) {
    console.error('Error getting teacher by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const updateTeacherById = async (req, res) => {
  try {
    const data = req.body
    const id = req.params.id

    const teacher = await Teachers.findByIdAndUpdate(id, data, { new: true })

    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }

    res.status(200).json(teacher)
  } catch (error) {
    console.error('Error updating teacher by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const deleteTeacherById = async (req, res) => {
  try {
    const deletedTeacher = await Teachers.findByIdAndDelete(req.params.id)
    if (!deletedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' })
    }
    res.status(200).json(deletedTeacher)
  } catch (error) {
    console.error('Error deleting teacher by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}
