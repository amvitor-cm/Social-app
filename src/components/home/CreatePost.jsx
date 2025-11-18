import React, { useState } from 'react'
import { Image, Smile, MapPin, Users } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { useAuth } from '../../hooks/useAuth'

export default function CreatePost() {
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const { dispatch } = useApp()
  const { user } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!content.trim()) return

    const newPost = {
      id: Date.now().toString(),
      userId: user.id,
      content,
      image,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      reposts: 0,
      likedBy: []
    }

    dispatch({ type: 'ADD_POST', payload: newPost })
    setContent('')
    setImage(null)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="glass-effect rounded-3xl p-6 shadow-glow fade-in">
      <div className="flex space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-2xl object-cover"
        />
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full resize-none border-0 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0 text-lg min-h-[60px]"
              rows="2"
            />
            
            {image && (
              <div className="relative mt-4">
                <img
                  src={image}
                  alt="Post preview"
                  className="w-full rounded-2xl object-cover max-h-80"
                />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
            )}

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <div className="flex space-x-3">
                <label className="p-2 text-gray-500 hover:text-purple-600 cursor-pointer transition-colors">
                  <Image className="w-5 h-5" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <button type="button" className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button type="button" className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                  <MapPin className="w-5 h-5" />
                </button>
                <button type="button" className="p-2 text-gray-500 hover:text-purple-600 transition-colors">
                  <Users className="w-5 h-5" />
                </button>
              </div>
              
              <button
                type="submit"
                disabled={!content.trim()}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
