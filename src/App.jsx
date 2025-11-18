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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
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
