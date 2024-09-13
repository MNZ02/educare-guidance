import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../components/context/authContext'
function LoginTemp () {
  const navigate = useNavigate()
  const { login, userRole } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [loginMessage, setLoginMessage] = useState('') // State to store login message
  const [loginError, setLoginError] = useState('') // State to store login error

  const onSubmit = async data => {
    try {
      await login(data)
      const role = localStorage.getItem('role')
      if (role === 'admin') {
        navigate('/admin/dashboard')
      } else if (role === 'user') {
        navigate('/')
      }
    } catch (error) {
      console.error('Login error:', error.message)
    }
  }

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
      <div
        className='w-full h-72 bg-cover'
        style={{
          backgroundImage:
            'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)'
        }}
      ></div>

      <div
        className='w-4/5 max-w-lg bg-white rounded-lg shadow-lg p-8 -mt-36 bg-opacity-80 backdrop-blur-lg'
        style={{
          boxShadow:
            '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.2), 0 15px 45px rgba(0, 0, 0, 0.15)'
        }}
      >
        <h2 className='text-3xl font-bold text-gray-600 text-center mb-6'>
          Sign In now
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-col items-center'>
            <input
              type='email'
              placeholder='Email'
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address'
                }
              })}
            />
            {errors.email && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className='flex flex-col items-center'>
            <input
              type='password'
              placeholder='Password'
              className='w-3/4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
            />
            {errors.password && (
              <span className='text-red-500 text-sm mt-2'>
                {errors.password.message}
              </span>
            )}
          </div>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='w-1/2 py-3 mt-4 bg-blue-600 text-white rounded-full transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Display Success or Error Messages */}
        {loginMessage && (
          <div className='mt-4 text-center text-green-600'>{loginMessage}</div>
        )}
        {loginError && (
          <div className='mt-4 text-center text-red-600'>{loginError}</div>
        )}

        <p className='text-center text-gray-700 mt-6'>
          Don't have an account?{' '}
          <a
            href='/register'
            className='text-blue-500 hover:text-blue-600 underline'
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginTemp
