import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"

const Instructors = () => {
  const [people, setPeople] = useState([])
  let navigate = useNavigate()

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .then((err) => console.log(err))
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <div className="container text-center p-3">
      <h2>Instructors List</h2>
      {/* <div className="d-flex flex-column">
        <Link to="1" state={{name:"INS1"}}>Instructors 1</Link>
        <Link to="2" state={{name:"INS2"}}>Instructors 2</Link>
        <Link to="3" state={{name:"INS3"}}>Instructors 3</Link>
      </div> */}
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person
          return (
            <div
              key={id}
              className="col-sm12 col-md-6 col-lg-4"
              type="button"
              onClick={() => navigate(`/instructors/${id}`, {state:person})}
              // onClick={() => navigate(`${id}`)}
            >
              <img src={avatar} alt="avatar" className="rounded" />
              <h6>
                {first_name}
                {last_name}
              </h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Instructors
