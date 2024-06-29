import React from "react"
import { useNavigate } from "react-router-dom"

const Contact = () => {
  let navigate = useNavigate()

  return (
    <div className="p-3">
      <h1>Contact</h1>
      <button
        className="btn btn-success"
        style={{ marginRight: "10px" }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <button className="me-2 btn btn-danger" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  )
}

export default Contact
