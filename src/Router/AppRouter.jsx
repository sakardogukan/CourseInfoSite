import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Instructors from "../pages/Instructors"
import NotFound from "../pages/NotFound"
import Path from "../pages/Path"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import InstructorDetail from "../pages/InstructorDetail"
import About from "../components/About"
import Courses from "../components/Courses"
import { Routes, Route } from "react-router-dom"
import Fullstack from "../pages/Fullstack"
import Aws from "../pages/Aws"
import React from "../pages/React"
import Next from "../pages/Next"
import PrivateRouter from "./PrivateRouter"
import Login from "../pages/Login"
import { useState } from "react"

const AppRouter = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  )
  return (
    <div className="app-container">
      <Nav user={user} />
      <div className="content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/CourseInfoSite" element={<Home />}>
            <Route path="about" element={<About />} />
            {/* <Route path="" element={<About />} /> */}
            {/* <Route index element={<About />} /> */}
            <Route path="courses" element={<Courses />} />
          </Route>
          <Route path="/paths" element={<Path />}>
            <Route path="fullstack" element={<Fullstack />}>
              <Route path="react" element={<React />} />
              {/* <Route index element={<React />} /> */}
              <Route path="next" element={<Next />} />
            </Route>
            <Route path="aws" element={<Aws />} />
          </Route>
          <Route element={<PrivateRouter user={user} />}>
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructors/:id" element={<InstructorDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default AppRouter
