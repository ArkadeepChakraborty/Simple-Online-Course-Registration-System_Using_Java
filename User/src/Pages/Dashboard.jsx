// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { mockCourses } from "../data/mockCourses";

// export default function Dashboard() {
//   const { user, logout, enrollInCourse, isEnrolled } = useAuth();
//   const navigate = useNavigate();

//   if (!user) {
//     navigate("/");
//     return null;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
//         <div className="flex gap-3">
//           <button onClick={() => navigate("/profile")} className="px-4 py-2 border rounded">
//             Profile
//           </button>
//           <button onClick={() => { logout(); navigate("/"); }} className="px-4 py-2 bg-red-500 text-white rounded">
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Courses */}
//       <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//         {mockCourses.map((course) => (
//           <div key={course.id} className="bg-white p-4 shadow rounded">
//             <img src={course.image} className="rounded mb-3" />
//             <h3 className="font-bold">{course.title}</h3>
//             <p className="text-sm text-gray-600">{course.description}</p>
//             {isEnrolled(course.id) ? (
//               <button className="mt-3 w-full bg-gray-300 px-4 py-2 rounded" disabled>Enrolled</button>
//             ) : (
//               <button onClick={() => enrollInCourse(course.id)} className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded">
//                 Enroll Now
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "./Dashboard/HeroSection";
import AboutSection from "./Dashboard/AboutSection";
import CoursesSection from "./Dashboard/CoursesSection";
import ReviewsSection from "./Dashboard/ReviewsSection";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <ReviewsSection />
      <Footer />
    </>
  );
}

