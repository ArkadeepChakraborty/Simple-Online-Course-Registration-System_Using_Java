import { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8080/student";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE}/updatePassword`, {
        email,
        newPassword,
      });

      if (response.data.status) {
        alert("✅ Password Updated! Please Login.");
        window.location.href = "/"; // redirect to login page
      } else {
        alert("⚠ " + response.data.message);
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Reset Password</h2>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter New Password"
            className="border p-2 rounded w-full"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white w-full p-2 rounded">
            Update Password
          </button>

          <p className="text-center text-sm text-gray-500 cursor-pointer hover:underline"
            onClick={() => (window.location.href = "/auth")}>
            ← Go Back to Login
          </p>
        </form>
      </div>
    </div>
  );
}
