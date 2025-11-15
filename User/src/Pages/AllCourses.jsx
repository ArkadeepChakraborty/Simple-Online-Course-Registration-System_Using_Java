import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CourseCard from "../components/CourseCard";

const API_BASE_ONE = "http://localhost:8080/course";

export default function AllCourses() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ Fetch All Courses initially
  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      const res = await axios.get(`${API_BASE_ONE}/getallcourses`);
      if (res.data.status) {
        setCourses(res.data.data);
      }
    } catch (error) {
      console.log("Fetch All Courses Error:", error);
    }
  };

  // ✅ Handle Search (Call API /search/{name})
  const handleSearch = async (value) => {
    setSearch(value);

    if (value.trim() === "") {
      fetchAllCourses(); // if input is empty → load full list again
      return;
    }

    try {
      const res = await axios.get(`${API_BASE_ONE}/search/${value}`);
      if (res.data.status) {
        setCourses(res.data.data);
      }
    } catch (error) {
      console.log("Search Error:", error);
    }
  };

  return (
    <section className="py-16 px-6 bg-white min-h-screen relative">

      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-3xl font-bold text-center mb-6">All Courses</h2>

      {/* ✅ Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="border px-4 py-2 rounded w-80 shadow-sm"
        />
      </div>

      {/* ✅ Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.length > 0 ? (
          courses.map((course) => <CourseCard key={course.id} course={course} />)
        ) : (
          <p className="text-center text-gray-600 col-span-full">No courses found.</p>
        )}
      </div>
    </section>
  );
}
