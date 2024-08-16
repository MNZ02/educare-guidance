import Students from '../models/Students.js'

export const createStudent = async (req, res) => {
  try {
    const data = req.body
    const student = new Students(data)

    await student.save()
    res.status(201).json(student)
  } catch (error) {
    console.error('Error creating student', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const getAllStudents = async (req, res) => {
  try {
    const students = await Students.find()

    if (!students.length) {
      return res.status(404).json({ message: 'No students found' })
    }
    res.status(200).json(students)
  } catch (error) {
    console.error('Error getting all students', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const getStudentById = async (req, res) => {
  try {
    const id = req.params.id

    const student = await Students.findById(id)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }
    res.status(200).json(student)
  } catch (error) {
    console.error('Error getting student by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const updateStudentById = async (req, res) => {
  try {
    const data = req.body
    const id = req.params.id

    const student = await Students.findByIdAndUpdate(id, data, { new: true })

    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }

    res.status(200).json(student)
  } catch (error) {
    console.error('Error updating student by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}

export const deleteStudentById = async (req, res) => {
  try {
    const deletedStudent = await Students.findByIdAndDelete(req.params.id)
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' })
    }
    res.status(200).json(deletedStudent)
  } catch (error) {
    console.error('Error deleting student by id', error.message)
    res.status(500).json({ message: `Internal server error ${error.message}` })
  }
}
