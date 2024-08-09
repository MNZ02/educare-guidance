import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import app from '../../firebase/firebase'
import { getDatabase, ref, set, child } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { LOGO_IMG } from '../../utils/constants'

function SignUpTemp () {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()

  const [submitError, setSubmitError] = useState(null)

  const onSubmit = async data => {
    const { name, email, phone, password } = data
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredentials.user
      writeUserData(user.uid, name, email, phone, password, 'student')
      console.log('User signed up:', user)
    } catch (error) {
      console.error('Error submitting form', error.message)
      setSubmitError('Error submitting form, Please try again later')
    }
  }

  function writeUserData (userId, name, email, phone, password, role) {
    const db = getDatabase(app)
    const usersRef = ref(db, 'users')
    set(child(usersRef, userId), {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role
    })
      .then(() => {
        console.log('Data saved successfully')
      })
      .catch(error => {
        console.error('Error saving data: ', error)
      })
  }
  return (
    <div className='flex flex-col items-center justify-center px-4 py-4 mx-auto md:h-screen lg:py-0 mt-5 mb-18'>
        <h1 className='mt-10 text-xl font-bold text-yellow-500'>GUIDANCE EDUCARE</h1>
        <div className='w-full bg-gray-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create Account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-4 md:space-y-6'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Full Name
                </label>
                <input
                  {...register('name', {
                    required: true,
                    message: 'Name is required',
                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: 'Name can only contain letters'
                    }
                  })}
                  type='name'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter full name'
                />
                {errors.name && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address'
                    }
                  })}
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter email address'
                />
                {errors.email && (
                  <p className='text-red-500 text-sm mt-1'>Email is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Phone
                </label>
                <input
                  {...register('phone', {
                    required: true,
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  type='tel'
                  name='phone'
                  id='phone'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Enter email address'
                />
                {errors.phone && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    },
                    maxLength: {
                      value: 20,
                      message: 'Password must not exceed 20 characters'
                    }
                  })}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Enter password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {errors.password && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Re-type Password
                </label>
                <input
                  {...register('retypePassword', {
                    required: true,
                    validate: {
                      matchesPassword: value => {
                        const { password } = getValues()
                        return password === value || 'Passwords does not match'
                      }
                    },
                    message: 'Password does not match'
                  })}
                  type='password'
                  placeholder='Re-enter password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
                {errors.retypePassword && (
                  <p className='text-red-500 text-sm mt-1'>
                    {errors.retypePassword.message}
                  </p>
                )}
              </div>
              <div>
                <button
                  type='submit'
                  className='w-full text-white bg-primary-600 border focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800'
                >
                  Create an Account
                </button>
                {submitError && <p className='text-red-500'>{submitError}</p>}
              </div>
              <p className='text-sm font-light text-gray-500 '>
                Already Have an Account?{' '}
                <Link to='/login'>
                  <span className='font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer'>
                    Sign In
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignUpTemp
