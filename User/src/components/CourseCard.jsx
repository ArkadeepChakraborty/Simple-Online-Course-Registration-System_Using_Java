export default function CourseCard({ course }) {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-2">{course.name}</h3>

      {/* Universal Description */}
      <p className="text-gray-600 mb-4">
        This course provides a clear, structured, and practical learning experience to build strong real-world skills.
      </p>

      <div className="text-sm text-gray-500 mb-2">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Amount:</strong> ₹{course.amount}</p>
      </div>
    </div>
  );
}
