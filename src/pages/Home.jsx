import React from 'react'
import CreatePost from '../components/home/CreatePost'
import Feed from '../components/home/Feed'

export default function Home() {
  return (
    <div className="space-y-6 py-4">
      <CreatePost />
      <Feed />
    </div>
  )
}
