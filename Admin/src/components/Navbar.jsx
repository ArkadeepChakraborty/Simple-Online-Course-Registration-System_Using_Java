import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'


export default function Navbar(){
const { admin, logout } = useContext(AuthContext)
const nav = useNavigate()


function handleLogout(){
logout()
nav('/login')
}


return (
<nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
<div className="font-bold text-xl"><Link to="/" >CPC Education</Link></div>
<ul className="flex items-center gap-4">
{/* <li><Link to="/" className="hover:underline">Dashboard</Link></li> */}
<li><Link to="/users" className="hover:underline">UserList</Link></li>
<li><Link to="/courses" className="hover:underline">CourseList</Link></li>
<li><Link to="/profile" className="hover:underline">Profile</Link></li>
<li><button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button></li>
</ul>
</nav>
)
}