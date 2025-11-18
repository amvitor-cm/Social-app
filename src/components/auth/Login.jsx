import React, { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Users, Sparkles } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  })
  const { login, signup, loading } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isLogin) {
      await login(formData.email, formData.password)
    } else {
      await signup(formData)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-3 shadow-glow">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-white">SocialConnect</h1>
          </div>
          <p className="text-purple-100 text-lg">
            Connect with friends and the world around you
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-effect rounded-3xl p-8 shadow-glow fade-in">
          {/* Tabs */}
          <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                isLogin
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                !isLogin
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'text-white hover:text-purple-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Full Name</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required={!isLogin}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Username</label>
                  <div className="relative">
                    <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                      placeholder="Choose a username"
                      required={!isLogin}
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-purple-600 py-4 px-6 rounded-2xl font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                  {isLogin ? 'Signing In...' : 'Creating Account...'}
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-purple-200 text-sm mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-white font-semibold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
