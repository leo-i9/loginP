import React from 'react'
import { useAuth } from './constext/aouthcontext.jsx'
import { Navigate,Outlet } from 'react-router-dom'
function Protectetd() {
    const {login,isauthenticated}=useAuth();


    if(!isauthenticated && !login)return <Navigate to={"/login"} replace/>
  return (
   <Outlet/>
  )
}

export default Protectetd