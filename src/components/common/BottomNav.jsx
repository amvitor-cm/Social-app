import React from 'react'
import { Home, Search, MessageCircle, Bell, User } from 'lucide-react'

export default function BottomNav({ activePage, setActivePage }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'messages', icon: MessageCircle, label: 'Messages' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'profile', icon: User, label: 'Profile' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-white/20 py-2">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`flex flex-col items-center p-2 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'text-purple-600 bg-white shadow-lg transform scale-110'
                    : 'text-gray-500 hover:text-purple-500'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
