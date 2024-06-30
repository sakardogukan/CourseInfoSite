import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = ({user}) => {
  // const user = true  

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
