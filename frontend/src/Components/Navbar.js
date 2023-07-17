import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">
      Navbar
    </a> */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/login">
            Login
          </NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/recipe">
            Recipes
          </NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/addrecipe">
            Add New Recipe
          </NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Recipe"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>


  )
}

export default Navbar