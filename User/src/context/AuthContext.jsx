import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const API_BASE = "http://localhost:8080/student";
const API_BASE_ONE = "http://localhost:8080/course";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const register = async (data) => {
    try {
      const response = await axios.post(`${API_BASE}/save`, data);
      return response.data;
    } catch (err) {
      return { status: false };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE}/login`, { email, password });

      if (response.data.status) {
        const jwt = response.data.token;
        setToken(jwt);
        localStorage.setItem("token", jwt);

        const profile = await axios.get(`${API_BASE}/getStudentByEmail/${email}`);
        setUser(profile.data.data);

        return { success: true };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (err) {
      return { success: false, message: "Server Error" };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  // ✅ Fetch Enrolled Courses
  const fetchEnrolledCourses = async (studentId) => {
    try {
      const res = await axios.get(`${API_BASE_ONE}/enrolled/${studentId}`);
      if (res.data.status) {
        setEnrolledCourses(res.data.data);
      }
    } catch (error) {
      console.log("Fetch Enrolled Courses Error", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, register, login, logout, fetchEnrolledCourses, enrolledCourses }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
