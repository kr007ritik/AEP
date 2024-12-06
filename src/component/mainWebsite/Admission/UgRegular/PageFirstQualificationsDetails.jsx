import React from "react";
import IntermediateDetails from "../CommonComponent/IntermediateDetails";
import MatricDetails from "../CommonComponent/MatricDetails";
import Captcha from "../CommonComponent/CaptchaComponent";

const PageFirstQualificationsDetails = () => {
  return (
    <div className="card my-4 mb-5 p-0 pb-3 bg-D3D9D4 box-shadow">
      <h3 className="card-header bg-212A31 text-white">
        Qualification Details
      </h3>
      <div className="card-body d-flex justify-content-center">
        <div className="col-10">
          <MatricDetails />
          <IntermediateDetails />
          <div className="d-flex gap-1 mb-3">
            <input type="checkbox" id="markInfoIsCorrect" className="pointer" />
            <label className="pointer" htmlFor="markInfoIsCorrect">
              All Infomations are correct.
            </label>
          </div>
          <Captcha />
        </div>
      </div>
    </div>
  );
};

export default PageFirstQualificationsDetails;
