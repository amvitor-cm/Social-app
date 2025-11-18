import React from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="py-4">
      <div className="glass-effect rounded-3xl overflow-hidden">
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-500 relative">
          <img
            src={user.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6 -mt-12">
          <div className="flex items-end justify-between">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-2xl border-4 border-white object-cover"
            />
            <button className="bg-white text-purple-600 px-6 py-2 rounded-2xl font-semibold hover:shadow-lg transition-all">
              Edit Profile
            </button>
          </div>
          
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-700 mt-2">{user.bio}</p>
          </div>
          
          <div className="flex space-x-6 mt-4">
            <div className="text-center">
              <div className="font-bold text-gray-900">{user.posts}</div>
              <div className="text-gray-600 text-sm">Posts</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900">{user.followers}</div>
              <div className="text-gray-600 text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900">{user.following}</div>
              <div className="text-gray-600 text-sm">Following</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
