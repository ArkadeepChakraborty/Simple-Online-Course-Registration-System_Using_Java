import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import UserList from './pages/UserList'
import CourseList from './pages/CourseList'
import AddCourse from './pages/AddCourse'
import EditCourse from './pages/EditCourse'
import { AuthContext } from './contexts/AuthContext'


export default function App(){
const { admin } = useContext(AuthContext)


return (
<Routes>
<Route path="/login" element={<Login/>} />
<Route path="/" element={admin ? <Dashboard/> : <Navigate to="/login" />} />
<Route path="/profile" element={admin ? <Profile/> : <Navigate to="/login" />} />
<Route path="/users" element={admin ? <UserList/> : <Navigate to="/login" />} />
<Route path="/courses" element={admin ? <CourseList/> : <Navigate to="/login" />} />
<Route path="/courses/add" element={admin ? <AddCourse/> : <Navigate to="/login" />} />
<Route path="/courses/edit/:id" element={admin ? <EditCourse/> : <Navigate to="/login" />} />
<Route path="*" element={<Navigate to={admin ? '/' : '/login'} />} />
</Routes>
)
}