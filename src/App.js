import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Instructors from "./pages/Instructors"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import "./scss/_reset.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter >

  )
}

export default App
