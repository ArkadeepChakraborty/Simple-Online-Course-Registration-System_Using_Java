export default function CourseCard({ course }) {

  const description = "This course provides foundational knowledge and hands-on skills to help you build real-world projects and grow your career.";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 w-full max-w-sm mx-auto">

      <h4 className="text-xl font-semibold text-gray-900">{course.name}</h4>

      <p className="text-gray-600 text-sm mt-2">
        {description}
      </p>

      <div className="mt-4 text-gray-600 text-sm space-y-1">
        <p><span className="font-medium text-gray-800">Duration:</span> {course.duration}</p>
        <p><span className="font-medium text-gray-800">Price:</span> ₹{course.amount}</p>
      </div>

    </div>
  );
}
