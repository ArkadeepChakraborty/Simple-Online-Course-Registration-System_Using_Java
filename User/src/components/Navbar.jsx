import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">CPC Education</h1>

      <div className="flex gap-6">
        <Link to="/all-courses" className="hover:text-blue-600">Courses</Link>
        <Link to="/my-courses" className="hover:text-blue-600">My Courses</Link>
        {user && <Link to="/profile" className="hover:text-blue-600">Profile</Link>}

        {!user ? (
          <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
