import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function AddCourse(){
  const [form, setForm] = useState({ name: '', duration: '', amount: '', studentId: '' })
  const [studentIds, setStudentIds] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchStudentIds();
  }, []);

  async function fetchStudentIds(){
    try {
      const res = await fetch("http://localhost:8080/student/getAllStudentIds")
      const data = await res.json()
      if(data.status){
        setStudentIds(data.data)
      }
    } catch (err){
      console.log(err);
    }
  }

  async function handleSave(e){
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:8080/course/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          duration: form.duration,
          amount: Number(form.amount),
          student: form.studentId ? { id: Number(form.studentId) } : null   // ✅ Correct format for Many-to-One
        })
      });

      const result = await response.json();
      if(result.status){
        alert("Course added successfully ✅");
        nav("/courses");
      } else {
        alert("Failed: " + result.message);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto p-6 pb-30 pt-20">
        <h2 className="text-xl font-semibold mb-4">Add Course</h2>
        <form onSubmit={handleSave} className="bg-white p-4 rounded shadow">

          <label className="block">Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} className="w-full border p-2 rounded mb-2" />

          <label className="block">Duration</label>
          <input value={form.duration} onChange={e=>setForm({...form, duration: e.target.value})} className="w-full border p-2 rounded mb-2" />

          <label className="block">Amount</label>
          <input value={form.amount} onChange={e=>setForm({...form, amount: e.target.value})} type="number" className="w-full border p-2 rounded mb-2" />

          {/* ✅ Student Select Box */}
          <label className="block">Select Student ID</label>
          <select 
            value={form.studentId}
            onChange={e => setForm({...form, studentId: e.target.value})}
            className="w-full border p-2 rounded mb-2"
          >
            <option value="">-- Choose Student ID --</option>
            {studentIds.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>

          <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </form>
      </div>

      <Footer />
    </div>
  )
}
