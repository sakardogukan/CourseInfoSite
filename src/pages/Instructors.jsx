import React from "react"
import { Link } from "react-router-dom"

const Instructors = () => {
  return (
    <div className="p-3">
      <h2>Instructors</h2>
      <div className="d-flex flex-column">
        <Link to="1" state={{name:"INS1"}}>Instructors 1</Link>
        <Link to="2" state={{name:"INS2"}}>Instructors 2</Link>
        <Link to="3" state={{name:"INS3"}}>Instructors 3</Link>
      </div>
    </div>
  )
}

export default Instructors
