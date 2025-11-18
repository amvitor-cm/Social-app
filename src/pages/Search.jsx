import React from 'react'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
  return (
    <div className="py-4">
      <div className="glass-effect rounded-3xl p-8 text-center">
        <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Search</h2>
        <p className="text-gray-600">Find friends, posts, and communities</p>
      </div>
    </div>
  )
}
