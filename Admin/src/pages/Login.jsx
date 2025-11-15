import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const res = login({ email, password })

    if (res.ok) {
      navigate('/dashboard')
    } else {
      setErr(res.message)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border border-gray-200">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <span className="text-3xl bg-gray-900 text-white p-4 rounded-full">🔐</span>
        </div>

        <h2 className="text-center text-2xl font-bold">Admin Portal</h2>
        <p className="text-center text-gray-500 mb-6">Login to continue</p>

        {err && <div className="text-red-500 text-center mb-3">{err}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input 
              type="email"
              className="border p-2 rounded w-full"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input 
              type="password"
              className="border p-2 rounded w-full"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="bg-gray-900 hover:bg-black text-white w-full p-2 rounded mt-2">
            Login
          </button>

          <p className="text-center text-sm text-gray-500 mt-3">
            Demo: admin@demo.com / admin123
          </p>
        </form>
      </div>
    </div>
  )
}
