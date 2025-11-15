import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useData } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSearch, FaTrashAlt, FaEdit } from "react-icons/fa";

export default function CourseList() {
  const { courses, setCourses, fetchCourses, deleteCourse } = useData();
  const [q, setQ] = useState("");

  // ✅ Always refresh when page opens
  useEffect(() => {
    fetchCourses();
  }, []);

  async function handleSearch(value) {
    setQ(value);
    if (value.trim() === "") return fetchCourses();

    try {
      const res = await axios.get(`http://localhost:8080/course/search/${value}`);
      if (res.data.status) setCourses(res.data.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 pb-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">All Courses</h2>
          <Link to="/courses/add" className="px-4 py-2 bg-green-600 text-white rounded">
            Add Course
          </Link>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="relative w-full sm:w-96">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              value={q}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full border rounded-lg pl-10 py-2 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {courses.map((c) => (
            <div key={c.id} className="bg-white rounded-xl shadow p-5">
              <h4 className="font-semibold text-lg">{c.name}</h4>
              <p>Duration: {c.duration}</p>
              <p>Price: ₹{c.amount}</p>

              <div className="mt-4 flex gap-2">
                <Link to={`/courses/edit/${c.id}`} className="bg-yellow-400 px-3 py-1 rounded flex items-center gap-1">
                  <FaEdit /> Edit
                </Link>

                <button onClick={() => deleteCourse(c.id)} className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1">
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
