import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import ForgetPassword from "./Pages/ForgetPassword";
import AllCourses from "./Pages/AllCourses";
import MyCourses from "./Pages/MyCourses";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/my-courses" element={<MyCourses />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
