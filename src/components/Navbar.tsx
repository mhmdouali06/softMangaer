import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navHome navbar-expand-lg ">
        <div className="container-fluid ms-5">
          {/* Logo on the left */}
          <NavLink to={"/"} style={{ all: "unset" }}>
            <a href="#" className="navbar-brand">
              <img
                src="/logo.png"
                alt="logo"
                // className="navbar-brand"
                width={150}
              />
            </a>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Menu in the center */}
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav  text-center ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  À propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactez nous
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
