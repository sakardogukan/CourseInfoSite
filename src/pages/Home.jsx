import React from "react"
import About from "../components/About"
import Courses from "../components/Courses"
// import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-3">
      <h2>Home Page</h2>
      <About />
      <Courses />
      {/* <Outlet /> */}
    </div>
  )
}

export default Home
