import React from 'react'
import { Bell } from 'lucide-react'

export default function Notifications() {
  return (
    <div className="py-4">
      <div className="glass-effect rounded-3xl p-8 text-center">
        <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Notifications</h2>
        <p className="text-gray-600">Stay updated with what's happening</p>
      </div>
    </div>
  )
}
