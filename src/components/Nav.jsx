import { Link, NavLink } from "react-router-dom"
import NavStyle from "./NavStyle.module.scss"
import "../App.scss"

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className={`container-fluid ${NavStyle.divLink}`}>
        <Link to="/" className="navbar-brand">
          <div className={NavStyle.baslik}>Course Information Site</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={`navbar-nav ms-auto mb-2 me-3 mb-lg-0 ${NavStyle.liLink}`}
          >
            <li className="nav-item">
              {/* <Link to="/">Home</Link> */}
              <NavLink
                to="/"
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/instructors"
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Instructors
              </NavLink>
              {/* <NavLink to="/instructors">Instructors</NavLink> */}
            </li>

            <li className="nav-item">
              <NavLink
                to="/paths"
                className="nav-link active"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Paths
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to="/contact"
                aria-current="page"
                style={({ isActive }) => ({ color: isActive && "red" })}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
