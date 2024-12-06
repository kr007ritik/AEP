import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MainWebsite = () => {
  return (
    <div>
      <div className="container-fluid bg-F9EEEE vh-100">
        <div className="row">
          <div className="row justify-content-around ">
            <div class="card col-6 mt-4 p-0 border-0 box-shadow2">
              <h5 class="card-header bg-212A31 text-white">Important Links</h5>
              <div class="card-body ">
                <div className="row">
                  <div className="col-12 d-flex flex-wrap justify-content-between gap-1">
                    <NavLink to={"/ugRegular"} type="button" className="btn btn-outline-primary col-6">
                      UG Regular Admission Form
                    </NavLink>
                    <NavLink to={"/pgRegular"} type="button" className="btn btn-outline-primary col-5">
                      PG Regular Admission Form
                    </NavLink>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="card col-4 mt-4 p-0 border-0 box-shadow2">
              <h5 class="card-header bg-212A31 text-white">Updated Notice</h5>
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWebsite;
