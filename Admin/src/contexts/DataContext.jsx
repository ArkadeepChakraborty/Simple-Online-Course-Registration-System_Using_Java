import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  // ✅ Load All Courses
  async function fetchCourses() {
    try {
      const res = await axios.get("http://localhost:8080/course/getallcourses");
      if (res.data.status) setCourses(res.data.data);
    } catch (err) {
      console.log("Error fetching courses:", err);
    }
  }

  // ✅ Delete Course
  async function deleteCourse(id) {
    if (!window.confirm("Delete this course?")) return;
    try {
      const res = await axios.delete(`http://localhost:8080/course/deleteCourseById/${id}`);
      if (res.data.status) {
        fetchCourses(); // ✅ Refresh List after delete
        alert("Course Deleted Successfully");
      }
    } catch (err) {
      console.log("Delete error:", err);
    }
  }

  return (
    <DataContext.Provider value={{ courses, setCourses, fetchCourses, deleteCourse }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
