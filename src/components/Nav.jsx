import React from "react"
import { NavLink } from "react-router-dom"
import NavStyle from "./NavStyle.module.scss"

const Nav = () => {
  return (
    <div className={NavStyle.divLink}>
      <p className={NavStyle.baslik}>
        Course Information Site
      </p>
      <ul className={NavStyle.liLink}>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <NavLink
          to="/instructors"
          style={({ isActive }) => ({ color: isActive && "red" })}
        >
          Instructors
        </NavLink> */}
          <NavLink to="/instructors">Instructors</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
