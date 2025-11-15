import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthContext'

export default function Profile() {
  const { admin } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 pt-20 pb-30">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Profile Details
        </h2>

        <div className="bg-white rounded-xl shadow-md p-6">
          
          <div className="flex items-center gap-5">
            {/* Profile Circle */}
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-semibold">
              {admin.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">{admin.name}</h3>
              <p className="text-gray-500 text-sm">Administrator</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-6"></div>

          {/* User Info */}
          <div className="space-y-3">
            <p><span className="font-medium">Email:</span> {admin.email}</p>
            <p><span className="font-medium">Address:</span> {admin.address}</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
