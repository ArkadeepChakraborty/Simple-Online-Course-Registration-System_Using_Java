import { useNavigate } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import CourseCard from "./CourseCard";

export default function CoursesSection() {
  const { courses } = useData();
  const navigate = useNavigate();

  const visibleCourses = courses.slice(0, 6);

  return (
    <section className="my-16 px-10 md:px-20 lg:px-32">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-800">Our Courses</h3>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
        <p className="text-gray-600 text-sm mt-3">
          Learn and grow with a variety of skill-enhancing courses.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* View More Button */}
      {courses.length > 6 && (
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/courses")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition"
          >
            View More Courses →
          </button>
        </div>
      )}
    </section>
  );
}
