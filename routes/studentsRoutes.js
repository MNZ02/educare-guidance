import express from 'express'
import {
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  createStudent
} from '../controllers/studentsContoller.js'

const router = express.Router()

router.get('/students', getAllStudents)
router.get('/students/:id', getStudentById)
router.put('/students/:id', updateStudentById)
router.delete('/students/:id', deleteStudentById)
router.post('/students', createStudent)

export default router
