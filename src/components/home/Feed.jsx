import React from 'react'
import { useApp } from '../../context/AppContext'
import Post from '../common/Post'

export default function Feed() {
  const { state } = useApp()

  return (
    <div className="space-y-4">
      {state.posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No posts yet</div>
          <p className="text-gray-400 mt-2">Be the first to share something!</p>
        </div>
      ) : (
        state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      )}
    </div>
  )
}
