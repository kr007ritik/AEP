import React, { useState } from "react";
import "../App.css";

const Footer = () => {
  const [currentYear, SetCurrentYear] = useState(new Date().getFullYear());

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="border-top py-3 d-flex align-items-center justify-content-around bg-light box-shadow">
              <div className="d-flex align-items-end gap-3">
                <h2>AEP</h2>
                <p>© {currentYear} AEP. All rights reserved. </p>
              </div>
              <div className="d-flex align-items-end justify-content-around gap-3">
                <i className="fa-brands fa-twitter font-size-22 pointer"></i>
                <i className="fa-brands fa-instagram font-size-22 pointer"></i>
                <i className="fa-brands fa-facebook font-size-22 pointer"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
