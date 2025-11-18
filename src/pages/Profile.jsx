import React from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="py-4">
      <div className="glass-effect rounded-3xl overflow-hidden">
        {/* Cover Photo with Profile Picture positioned over it */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-500">
            <img
              src={user.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Profile Picture positioned over the banner */}
          <div className="absolute -bottom-12 left-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-2xl border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>
        
        {/* Profile Info - with extra top padding to account for the profile picture */}
        <div className="pt-16 px-6 pb-6">
          <div className="flex items-end justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">@{user.username}</p>
            </div>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-2xl font-semibold hover:shadow-lg transition-all border border-gray-200">
              Edit Profile
            </button>
          </div>
          
          <p className="text-gray-700 mt-4 leading-relaxed">{user.bio}</p>
          
          <div className="flex space-x-6 mt-4">
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">{user.posts}</div>
              <div className="text-gray-600 text-sm">Posts</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">{user.followers.toLocaleString()}</div>
              <div className="text-gray-600 text-sm">Followers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">{user.following.toLocaleString()}</div>
              <div className="text-gray-600 text-sm">Following</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
