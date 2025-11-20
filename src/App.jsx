import React, { useState, useEffect } from 'react'
import { AppProvider } from './context/AppContext'
import { useAuth } from './hooks/useAuth'
import Login from './components/auth/Login'
import Header from './components/common/Header'
import BottomNav from './components/common/BottomNav'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Messages from './pages/Messages'
import Notifications from './pages/Notifications'

function AppContent() {
  const { user, loading } = useAuth()
  const [activePage, setActivePage] = useState('home')

  useEffect(() => {
    // this is a  mock data
    const initializeData = () => {
      if (!localStorage.getItem('social_posts')) {
        const mockPosts = [
          {
            id: '1',
            userId: '1',
            content: 'Welcome to SocialConnect! 🚀 The future of social media is here.',
            image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600',
            timestamp: new Date().toISOString(),
            likes: 42,
            comments: [],
            reposts: 5,
            likedBy: []
          },
          {
            id: '2',
            userId: '2',
            content: 'Just shipped a new feature! The glassmorphism design looks amazing. What do you think?',
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600',
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            likes: 28,
            comments: [],
            reposts: 3,
            likedBy: []
          }
        ]
        localStorage.setItem('social_posts', JSON.stringify(mockPosts))
      }
    }

    initializeData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading SocialConnect...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Login />
  }

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home />
      case 'search': return <Search />
      case 'messages': return <Messages />
      case 'notifications': return <Notifications />
      case 'profile': return <Profile />
      default: return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 pb-20">
      <Header />
      <main className="max-w-2xl mx-auto px-4">
        {renderPage()}
      </main>
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
