import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setuserRole] = useState('')
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = async data => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        data
      )
      const token = response.data.token
      const role = response.data.role
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
      setuserRole(role)

      if (response.status === 200) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.log('Error during login', error.message)
    }
  }
  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, loading, userRole }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContext
