import React from 'react'
import { LOGO_IMG } from '../utils/constants'
import { useState } from 'react'

export default function NavbarTemp () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <nav className='bg-blue-300 dark:text-white'>
        <div className='max-w-screen-xl flex items-center justify-between mx-auto p-6'>
          <a
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img src={LOGO_IMG} className='h-12' alt='Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
              GUIDANCE EDUCARE
            </span>
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={toggleNavbar}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden md:block md:w-auto' id='navbar-default'>
            <ul className='font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse'>
              <li>
                <a
                  href='/'
                  className='block py-2 px-3 text-white rounded md:bg-transparent md:p-0'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/About'
                  className='block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/admission'
                  className='block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0'
                >
                  Admission
                </a>
              </li>
              <li>
                <a
                  href='/Subjects'
                  className='block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0'
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href='/login'
                  className='block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0'
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  )
}
