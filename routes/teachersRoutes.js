import express from 'express'
import {
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById,
  createTeacher
} from '../controllers/teachersController.js'

const router = express.Router()

router.get('/teachers', getAllTeachers)
router.get('/teachers/:id', getTeacherById)
router.put('/teachers/:id', updateTeacherById)
router.delete('/teachers/:id', deleteTeacherById)
router.post('/teachers', createTeacher)

export default router
