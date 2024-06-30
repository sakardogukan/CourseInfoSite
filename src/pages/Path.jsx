import React from "react"
import { Link, Outlet } from "react-router-dom"

const Path = () => {

  return (
    <div className="container mt-4">
      <h2>Online Course Paths</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti,
        accusantium modi aperiam temporibus esse iure dolor itaque, accusamus
        voluptatum in officia id nesciunt quisquam? Corrupti laudantium iusto,
        aliquid repudiandae animi magni velit necessitatibus perferendis optio
        nisi aliquam distinctio, eius quisquam quas sint placeat est.
      </p>
      <div className="d-flex gap-3 mb-3">
        <Link to="fullstack" className={"btn btn-success w-50"}>FullStack</Link>
        <Link to="aws" className={"btn btn-danger w-50"}>AWS-DevOps</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Path
