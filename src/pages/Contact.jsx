const Contact = () => {
  return (
    <>
    <h2>Contact Form</h2>
      <div>
        <input
          type="text"
          className="form-control mb-4"
          placeholder="First and Last name"
          aria-label="First name"

        />
      </div>
      <div>
        <textarea
          type="form-floating"
          className="form-control"
          placeholder="Your Message"
          aria-label="Last name"
          resize= "none"
        />
      </div>
    </>
  )
}

export default Contact
