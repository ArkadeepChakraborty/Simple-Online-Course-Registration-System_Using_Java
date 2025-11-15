import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useData } from "../contexts/DataContext"; // ✅ Import

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchCourses } = useData(); // ✅ Access fetchCourses
  const [course, setCourse] = useState({ name: "", duration: "", amount: "" });

  useEffect(() => { fetchCourse(); }, []);

  async function fetchCourse() {
    const res = await axios.get(`http://localhost:8080/course/getCourseById/${id}`);
    if (res.data.status) setCourse(res.data.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post(`http://localhost:8080/course/update/${id}`, course);
    alert("Course Updated Successfully!");

    await fetchCourses(); // ✅ Refresh Course List
    navigate("/courses"); // ✅ Redirect back
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-xl mx-auto bg-white shadow p-6 mt-10 rounded">
        <h2 className="text-xl font-semibold mb-4">Edit Course</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border px-3 py-2 rounded"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />

          <input
            className="w-full border px-3 py-2 rounded"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
            placeholder="Duration"
          />

          <input
            type="number"
            className="w-full border px-3 py-2 rounded"
            value={course.amount}
            onChange={(e) => setCourse({ ...course, amount: e.target.value })}
            placeholder="Price"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Update
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
