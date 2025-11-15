import { useState, useEffect } from "react";
import CourseCard from "../../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function CoursesSection() {
  const navigate = useNavigate();
  const { user, enrolledCourses, fetchEnrolledCourses } = useAuth();
  const [search, setSearch] = useState("");

  // ✅ Fetch from Backend
  useEffect(() => {
    if (user?.id) {
      fetchEnrolledCourses(user.id);
    }
  }, [user]);

  // ✅ Search Filter
  const filteredCourses = enrolledCourses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleCourses = filteredCourses.slice(0, 6);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">My Courses</h2>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search courses..."
          className="border px-4 py-2 rounded w-80 shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleCourses.length > 0 ? (
          visibleCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No courses found.
          </p>
        )}
      </div>

      {filteredCourses.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/my-courses")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}
