import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 box-shadow">
              <NavLink to={"/"} className="navbar-brand" href="#">
                AEP
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink to={"/"} className="nav-item nav-link active" href="#">
                    Home
                  </NavLink>
                  <a className="nav-item nav-link" href="#">
                    Admission Portal
                  </a>
                  <a className="nav-item nav-link" href="#">
                    Examination Portal
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
