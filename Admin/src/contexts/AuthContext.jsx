import React, { createContext, useState } from 'react'


export const AuthContext = createContext()


const DEMO = {
email: 'admin@demo.com',
password: 'admin123',
name: 'Admin Demo',
address: '123 Demo St, Demo City'
}


export function AuthProvider({ children }){
const [admin, setAdmin] = useState(null)


function login({ email, password }){
if(email === DEMO.email && password === DEMO.password){
setAdmin({ email: DEMO.email, name: DEMO.name, address: DEMO.address })
return { ok: true }
}
return { ok: false, message: 'Invalid credentials' }
}


function logout(){
setAdmin(null)
}


function updateProfile(updates){
setAdmin(prev => ({ ...prev, ...updates }))
}


return (
<AuthContext.Provider value={{ admin, login, logout, updateProfile }}>
{children}
</AuthContext.Provider>
)
}