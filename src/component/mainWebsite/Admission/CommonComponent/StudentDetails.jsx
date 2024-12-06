import React from "react";
import Captcha from "./CaptchaComponent";
import Profile from "./Profile";
import ReservationAndOtherDetails from "./ReservationAndOtherDetails";
import ContactDetails from "./ContactDetails";

const StudentDetails = () => {
  return (
    <div className="container-fluid bg-F9EEEE">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="card my-4 mb-5 p-0 pb-3 bg-D3D9D4 box-shadow">
            <h3 className="card-header bg-212A31 text-white">
              Student Details
            </h3>
            <Profile />
            <ReservationAndOtherDetails />
            <ContactDetails />
            <div className="mx-5">{<Captcha />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
