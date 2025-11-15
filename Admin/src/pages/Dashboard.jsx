import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import CoursesSection from '../components/Coursesection'

export default function Dashboard(){
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ✅ Navbar Should Be Always Visible */}
      <Navbar />

      {/* Page Content */}
      <div className="mx-auto px-1 py-1">
        <Hero />
        <About />
        <CoursesSection/>
      </div>

      <Footer />
    </div>
  )
}
