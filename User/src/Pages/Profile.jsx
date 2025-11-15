import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8080/student";

export default function Profile() {
  const { user, logout, token, enrollments } = useAuth();
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    name: user.name,
    email: user.email,
    address: user.address
  });
  const [openEdit, setOpenEdit] = useState(false);

  if (!user) {
    navigate("/");
    return null;
  }


  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${API_BASE}/updateProfile/${user.id}`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.status) {
        alert("✅ Profile Updated Successfully");
        navigate("/dashboard");
      }
    } catch (err) {
      alert("⚠ Error updating profile");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your account?")) return;
    await axios.delete(`${API_BASE}/deleteStudentById/${user.id}`);
    logout();
    navigate("/");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <button onClick={() => navigate("/dashboard")} className="mb-4 underline">← Back</button>
      <div className="pt-20">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

        <div className="space-y-2 text-lg">
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Address:</b> {user.address}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
            onClick={() => setOpenEdit(true)}
          >
            ✏ Edit Profile
          </button>

          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
            onClick={handleDelete}
          >
            🗑 Delete Account
          </button>
        </div>

        <button
          className="text-gray-600 underline mt-4 w-full"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      </div>

      {/* ✅ Edit Profile Modal */}
      {openEdit && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

            <input
              className="border p-2 rounded w-full mb-2"
              placeholder="Name"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            />

            <input
              className="border p-2 rounded w-full mb-2"
              placeholder="Email"
              value={editData.email}
              onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            />

            <input
              className="border p-2 rounded w-full mb-4"
              placeholder="Address"
              value={editData.address}
              onChange={(e) => setEditData({ ...editData, address: e.target.value })}
            />

            <div className="flex gap-3">
              <button
                className="bg-gray-300 px-4 py-2 rounded w-full"
                onClick={() => setOpenEdit(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
