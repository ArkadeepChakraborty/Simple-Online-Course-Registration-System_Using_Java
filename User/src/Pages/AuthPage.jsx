import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const { register, login } = useAuth();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    role: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await login(loginEmail, loginPassword);

    if (res.success) {
      navigate("/dashboard");
    } else {
      alert(res.message || "Invalid Credentials");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register(formData);

    if (res.status) {
      alert("Registration Successful! Please Login.");
      setActiveTab("login");
    } else {
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border border-gray-200">
        <div className="flex justify-center mb-4">
          <span className="text-3xl bg-gray-900 text-white p-4 rounded-full">🎓</span>
        </div>

        <h2 className="text-center text-2xl font-bold">Student Portal</h2>
        <p className="text-center text-gray-500 mb-6">Access your learning dashboard</p>

        <div className="flex mb-6 border-b">
          <button
            className={`w-1/2 py-2 font-medium ${
              activeTab === "login"
                ? "border-b-4 border-gray-900 text-gray-900"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={`w-1/2 py-2 font-medium ${
              activeTab === "register"
                ? "border-b-4 border-gray-900 text-gray-900"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="border p-2 rounded w-full"
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="border p-2 rounded w-full"
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>

            <button className="bg-gray-900 hover:bg-black text-white w-full p-2 rounded mt-2">
              Login
            </button>

            {/* ✅ Added Forget Password Link */}
           <p className="text-center text-sm text-blue-600 mt-3">
              Forgot password?{" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/forget-password")}
              >
                Click Here
              </span>
            </p>
          </form>
        )}

        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-4">
            {["name", "email", "password", "address", "role"].map((field) => (
              <div key={field}>
                <label className="text-sm font-medium">
                  {field[0].toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  className="border p-2 rounded w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                />
              </div>
            ))}

            <button className="bg-gray-900 hover:bg-black text-white w-full p-2 rounded mt-2">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}