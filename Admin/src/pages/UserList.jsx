import { useEffect, useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/student/getallstudents")
      .then(res => res.json())
      .then(data => {
        if(data.status){
          setUsers(data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 pb-30 pt-20">
        <h2 className="text-xl font-semibold mb-4">Registered Users</h2>

        <div className="bg-white p-4 rounded shadow overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-50">
                <th className="p-2">ID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Address</th>
              </tr>
            </thead>

            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-t hover:bg-gray-50">
                  <td className="p-2">{u.id}</td>
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2">{u.address}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
