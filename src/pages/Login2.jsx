import React from "react"
// import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Contact = () => {
  // let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = formValues;
    alert(`Username: ${username}
    Email: ${email}
    password:${password}`);
  };
  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    // <div className="p-3">
    //   <h1>Contact</h1>
    //   <button
    //     className="btn btn-success"
    //     style={{ marginRight: "10px" }}
    //     onClick={() => navigate(-1)}
    //   >
    //     Go Back
    //   </button>
    //   <button className="me-2 btn btn-danger" onClick={() => navigate("/")}>
    //     Go Home
    //   </button>
    // </div>
    <div className="container">
    <h2 className="mt-4">CONTACT FORM</h2>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your username"
          value={formValues.username}
          onChange={handleFormValues}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          value={formValues.email}
          onChange={handleFormValues}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          value={formValues.password}
          onChange={handleFormValues}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-danger mb-4">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Contact
