import React from "react"
import { useLocation, useParams } from "react-router-dom"

const InstructorDetail = () => {
  let params = useParams()
  console.log(params)
  // let {id} = useParams()
  // console.log({id});

  let location = useLocation()
  console.log("location: ", location)

  let { state, pathname } = useLocation()
  console.log("state: ", state)
  console.log("pathname: ", pathname)

  return (
    <div className="p-3">
      <h2>Instructors Detail</h2>
      <p>
        from useParams -&#62; I'm Instructors -
        <span className="text-danger fw-bolder">{params.id}</span>
      </p>
      <p>
        from useLocation (pathname) -&#62; I'm Instructors -
        <span className="text-danger fw-bolder">{pathname}</span>
      </p>
      <p>
        from state -&#62; I'm Instructors -
        <span className="text-danger fw-bolder">{state?.name}</span>
        <span className="d-block">Dezavantajı; url'den gelişlerde state data'sı yakalanmıyor...</span>

      </p>
    </div>
  )
}

export default InstructorDetail
