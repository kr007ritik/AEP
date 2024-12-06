import React from "react";

const ReservationAndOtherDetails = () => {
  return (
    <div className="card my-4 mx-4 box-shadow2">
      <h6 className="card-header bg-2E3944 text-white">Reservation And Other Details</h6>
      <div className="card-body">
        <form action="">
          <div className="col-12 d-flex justify-content-between mx-0 mb-4">
            <div className="col-3">
              <label htmlFor="category" className="d-block">
                Category
              </label>
              <select name="category" id="category" className="form-control">
                <option selected disabled>
                  -- Select --
                </option>
                <option value="general" key="">
                  General
                </option>
                <option value="bc-2" key="">
                  BC-II
                </option>
                <option value="bc-1" key="">
                  BC-I
                </option>
                <option value="sc" key="">
                  SC
                </option>
                <option value="st" key="">
                  ST
                </option>
              </select>
            </div>

            <div className="col-3">
              <label htmlFor="subCategory" className="d-block">
                Sub-Category
              </label>
              <select
                name="subCategory"
                id="subCategory"
                className="form-control"
              >
                <option selected disabled>
                  -- Select --
                </option>
                <option value="girls" key="">
                  Girls
                </option>
                <option value="physicalHandicap" key="">
                  Physically Handicap
                </option>
                <option value="ews" key="">
                  EWS
                </option>
                <option value="notApplicable" key="">
                  Not Applicable
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationAndOtherDetails;
