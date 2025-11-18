import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext()

const initialState = {
  user: null,
  posts: [],
  chats: {},
  notifications: [],
  onlineUsers: new Set(),
  theme: 'light'
}

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_POSTS':
      return { ...state, posts: action.payload }
    case 'SET_CHATS':
      return { ...state, chats: action.payload }
    case 'ADD_POST':
      return { ...state, posts: [action.payload, ...state.posts] }
    case 'UPDATE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      }
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    case 'LIKE_POST':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId
            ? {
                ...post,
                likes: post.likedBy.includes(action.payload.userId)
                  ? post.likes - 1
                  : post.likes + 1,
                likedBy: post.likedBy.includes(action.payload.userId)
                  ? post.likedBy.filter(id => id !== action.payload.userId)
                  : [...post.likedBy, action.payload.userId]
              }
            : post
        )
      }
    case 'ADD_MESSAGE':
      const { chatId, message } = action.payload
      return {
        ...state,
        chats: {
          ...state.chats,
          [chatId]: {
            ...state.chats[chatId],
            messages: [...(state.chats[chatId]?.messages || []), message]
          }
        }
      }
    case 'SET_THEME':
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    // Load initial data from localStorage
    const user = JSON.parse(localStorage.getItem('social_user'))
    const posts = JSON.parse(localStorage.getItem('social_posts')) || []
    const chats = JSON.parse(localStorage.getItem('social_chats')) || {}
    
    if (user) {
      dispatch({ type: 'SET_USER', payload: user })
    }
    if (posts.length > 0) {
      dispatch({ type: 'SET_POSTS', payload: posts })
    }
    if (Object.keys(chats).length > 0) {
      dispatch({ type: 'SET_CHATS', payload: chats })
    }
  }, [])

  useEffect(() => {
    // Save to localStorage when state changes
    localStorage.setItem('social_posts', JSON.stringify(state.posts))
    localStorage.setItem('social_chats', JSON.stringify(state.chats))
    if (state.user) {
      localStorage.setItem('social_user', JSON.stringify(state.user))
    }
  }, [state.posts, state.chats, state.user])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
