import React from 'react'
import { Search, Bell, MessageCircle, Users } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/20">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-glow">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold gradient-text">SocialConnect</h1>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center">
                5
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
