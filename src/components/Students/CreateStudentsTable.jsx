import React, { useState } from 'react'
import {
  Button,
  TextField,
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import DefaultLayout from '../../layout/DefaultLayout'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CreateStudentForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [formData, setFormData] = useState({
    studentId: '',
    name: '',
    age: '',
    sex: '',
    phone: '',
    address: '',
    course: '',
    enrollmentDate: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = async data => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/students`,
        data
      )
      if (response) {
        toast.success('Student created successfully')
        navigate('/admin/students')
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Student with this phone number already exists')
      } else {
        toast.error('Error creating student')
      }
    }
  }

  return (
    <DefaultLayout>
      <ToastContainer />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: '30px',
            width: '100%',
            maxWidth: '900px',
            borderRadius: '10px'
          }}
        >
          <div className='flex justify-between items-center'>
            <Typography variant='h5' gutterBottom>
              Create Student
            </Typography>
            <IconButton
              onClick={() => navigate('/admin/dashboard')}
              aria-label='Close'
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Box
            className='my-2 mx-2 py-2 px-1'
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              '& .MuiTextField-root': { marginBottom: '20px' }
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('name', { required: true })}
                  label='Name'
                  variant='outlined'
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? 'Name is required' : ''}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('age', { required: true })}
                  label='Age'
                  variant='outlined'
                  fullWidth
                  error={!!errors.age}
                  helperText={errors.age ? 'Age is required' : ''}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant='outlined' error={!!errors.sex}>
                  <InputLabel>Sex</InputLabel>
                  <Select
                    {...register('sex', { required: true })}
                    label='Sex'
                    value={formData.sex}
                    onChange={handleChange}
                    name='sex'
                  >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                  </Select>
                </FormControl>
                {errors.sex && (
                  <Typography variant='caption' color='error'>
                    Sex is required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('phone', { required: true })}
                  label='Phone'
                  variant='outlined'
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone ? 'Phone is required' : ''}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('address', { required: true })}
                  label='Address'
                  variant='outlined'
                  fullWidth
                  error={!!errors.address}
                  helperText={errors.address ? 'Address is required' : ''}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('course', { required: true })}
                  label='Course'
                  variant='outlined'
                  fullWidth
                  error={!!errors.course}
                  helperText={errors.course ? 'Course is required' : ''}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('enrollmentDate', { required: true })}
                  type='date'
                  label='Enrollment Date'
                  variant='outlined'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  error={!!errors.enrollmentDate}
                  helperText={
                    errors.enrollmentDate ? 'Enrollment date is required' : ''
                  }
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              color='primary'
              variant='contained'
              sx={{ alignSelf: 'flex-end', mt: 2 }}
            >
              Create
            </Button>
          </Box>
        </Paper>
      </Box>
    </DefaultLayout>
  )
}

export default CreateStudentForm
