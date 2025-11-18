import { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'

export function useAuth() {
  const { state, dispatch } = useApp()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('social_user'))
    if (user) {
      dispatch({ type: 'SET_USER', payload: user })
    }
    setLoading(false)
  }, [dispatch])

  const login = async (email, password) => {
    setLoading(true)
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          id: '1',
          name: 'Alex Johnson',
          email: email,
          username: 'alexj',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
          coverImage: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800',
          bio: 'Digital creator & tech enthusiast. Building the future of social connection.',
          followers: 1250,
          following: 380,
          posts: 42
        }
        dispatch({ type: 'SET_USER', payload: user })
        setLoading(false)
        resolve(user)
      }, 1000)
    })
  }

  const signup = async (userData) => {
    setLoading(true)
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = {
          id: '1',
          ...userData,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
          coverImage: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=800',
          followers: 0,
          following: 0,
          posts: 0
        }
        dispatch({ type: 'SET_USER', payload: user })
        setLoading(false)
        resolve(user)
      }, 1500)
    })
  }

  const logout = () => {
    dispatch({ type: 'SET_USER', payload: null })
    localStorage.removeItem('social_user')
  }

  return {
    user: state.user,
    loading,
    login,
    signup,
    logout
  }
}
