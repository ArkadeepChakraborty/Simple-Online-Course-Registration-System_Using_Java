import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
  const { user, enrolledCourses, fetchEnrolledCourses } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchEnrolledCourses(user.id); // Call API to load courses
    }
  }, [user]);

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen relative">

      {/* ✅ Back Button (Top Left) */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-3xl font-bold text-center mb-8">📚 Your Enrolled Courses</h1>

      <div className="max-w-lg mx-auto mt-8">
        {/* <h2 className="text-xl font-semibold mb-3">Your Enrolled Courses</h2> */}

        {enrolledCourses.length === 0 ? (
          <p className="text-gray-600 text-center">No enrolled courses yet.</p>
        ) : (
          enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-3 shadow rounded mb-3 border border-gray-200"
            >
              <h3 className="font-bold text-lg">{course.name}</h3>

              {/* Only show duration & amount */}
              <p className="text-sm text-gray-600 mt-1">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Amount:</strong> ₹{course.amount}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
