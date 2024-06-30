import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Instructors from "./pages/Instructors"
import NotFound from "./pages/NotFound"
import Path from "./pages/Path"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import InstructorDetail from "./pages/InstructorDetail"
import "./App.scss"
import "./scss/_reset.scss"
import About from "./components/About"
import Courses from "./components/Courses"

function App() {
  return (

    <div className="app-container">
      <Nav />
      <div className="content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} >
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="" element={<About />} /> */}
            <Route index element={<About />} />
            <Route path="/courses" element={<Courses />} />
          </Route>
          <Route path="/paths" element={<Path />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
