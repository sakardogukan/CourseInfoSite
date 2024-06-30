import React from "react"
import { Link, Outlet } from "react-router-dom"

const Fullstack = () => {
  return (
    <div className="container text-center mt-4">
      <h2>FullStack Path</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        corrupti ducimus explicabo eum adipisci laudantium sint alias, cumque
        error amet harum! Repellat.
      </p>
      <div>
        <button className="btn btn-outline-success mt-4">Learn More</button>
      </div>
      <div className="d-flex gap-3 mt-4 mb-3">
        <Link to="" className={"btn btn-success w-50"}>
          React JS
        </Link>
        <Link to="next" className={"btn btn-danger w-50"}>
          Next JS
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Fullstack
