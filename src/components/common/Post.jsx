import React, { useState } from 'react'
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { useAuth } from '../../hooks/useAuth'

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(post.likedBy.includes('1')) // current user id
  const [likes, setLikes] = useState(post.likes)
  const { dispatch } = useApp()
  const { user } = useAuth()

  const handleLike = () => {
    const newLikedState = !isLiked
    setIsLiked(newLikedState)
    setLikes(prev => newLikedState ? prev + 1 : prev - 1)
    
    dispatch({
      type: 'LIKE_POST',
      payload: {
        postId: post.id,
        userId: user.id
      }
    })
  }

  const formatTime = (timestamp) => {
    const now = new Date()
    const postTime = new Date(timestamp)
    const diff = now - postTime
    
    if (diff < 60000) return 'just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h`
    return `${Math.floor(diff / 86400000)}d`
  }

  return (
    <div className="glass-effect rounded-3xl p-6 shadow-glow fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-2xl object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
            <p className="text-gray-500 text-sm">@{user.username} · {formatTime(post.timestamp)}</p>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-800 text-lg leading-relaxed">{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            className="w-full rounded-2xl mt-4 object-cover max-h-96"
          />
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 px-3 py-2 rounded-2xl transition-all ${
            isLiked 
              ? 'text-red-500 bg-red-50' 
              : 'text-gray-500 hover:text-red-500 hover:bg-red-50'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span className="font-medium">{likes}</span>
        </button>

        <button className="flex items-center space-x-2 px-3 py-2 rounded-2xl text-gray-500 hover:text-blue-500 hover:bg-blue-50 transition-all">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">{post.comments?.length || 0}</span>
        </button>

        <button className="flex items-center space-x-2 px-3 py-2 rounded-2xl text-gray-500 hover:text-green-500 hover:bg-green-50 transition-all">
          <Repeat2 className="w-5 h-5" />
          <span className="font-medium">{post.reposts || 0}</span>
        </button>

        <button className="flex items-center space-x-2 px-3 py-2 rounded-2xl text-gray-500 hover:text-purple-500 hover:bg-purple-50 transition-all">
          <Share className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
