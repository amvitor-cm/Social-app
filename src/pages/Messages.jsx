import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function Messages() {
  return (
    <div className="py-4">
      <div className="glass-effect rounded-3xl p-8 text-center">
        <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Messages</h2>
        <p className="text-gray-600">Connect with your friends</p>
      </div>
    </div>
  )
}
