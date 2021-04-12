import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/img/logo.svg';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="40" height="40"></img>
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Productos" className="nav-link">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/Proyectos" className="nav-link">
                  Proyectos
                </NavLink>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {" "}
                    <NavLink to="/Proyectos/Proyecto1">Proyecto 1</NavLink>{" "}
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/Proyectos/Proyecto2">Proyecto 2</NavLink>{" "}
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/Contacto" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
