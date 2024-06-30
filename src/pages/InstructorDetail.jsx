import axios from "axios"
import React, { useState, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import NotFound from "../pages/NotFound"
import spinner from "../img/Spinner-2.gif"

const InstructorDetail = () => {
  const [personel, setPersonel] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  let navigate = useNavigate()

  // let params = useParams()
  // console.log(params)
  let { id } = useParams()
  // console.log({id});

  let location = useLocation()
  console.log("location: ", location)

  let { state, pathname } = useLocation()
  console.log("state: ", state)
  console.log("pathname: ", pathname)

  const getPersonn = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then((res) => setPersonel(res.data.data))
      .catch((err) => {
        setError(true)
        console.log(err)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getPersonn()
    // eslint-disable-next-line
  }, [])

  console.log(personel)

  if (error) {
    return <NotFound />
  } else if (loading) {
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" />
      </div>
    )
  }
  // console.log(loading);

  return (
    <div className="p-3">
      <h2>Instructors Detail</h2>
      <div className="container text-center">
        <h3>
          {personel?.first_name} {personel?.last_name}
        </h3>
        <img className="rounded" src={personel?.avatar} alt="" />
        <p>{personel?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            Go Back
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          from useParams -&#62; I'm Instructors -
          <span className="text-danger fw-bolder">{id}</span>
        </p>
        <p>
          from useLocation (pathname) -&#62; I'm Instructors -
          <span className="text-danger fw-bolder">{pathname}</span>
        </p>
        <p>
          from state -&#62; I'm Instructors -
          <span className="text-danger fw-bolder">{personel?.first_name}</span>
          <span className="d-block">
            Dezavantajı; url'den gelişlerde state data'sı yakalanmıyor...
          </span>
        </p>
      </div>
    </div>
  )
}

export default InstructorDetail
