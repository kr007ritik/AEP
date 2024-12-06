import React from "react";

const Profile = () => {
  return (
    <div className="card my-4 mx-4 box-shadow2">
      <h6 className="card-header bg-2E3944 text-white">
        Profile
      </h6>
      <div className="card-body">
        <form action="">
          <div className="col-12 d-flex justify-content-between mx-0 mb-4">
            <div className="col-4">
              <label htmlFor="fName" className="d-block">
                First Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-3">
              <label htmlFor="mName" className="d-block">
                Middle Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-4">
              <label htmlFor="lName" className="d-block">
                Last Name
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="col-12 d-flex justify-content-between mx-0 mb-4">
            <div className="col-5">
              <label htmlFor="fatherName" className="d-block">
                Father's Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-5">
              <label htmlFor="motherName" className="d-block">
                Mother's Name
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="col-12 d-flex justify-content-between mx-0 mb-4">
            <div className="col-3">
              <label htmlFor="dob" className="d-block">
                Date of Birth
              </label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-2">
              <label htmlFor="gender" className="d-block">
                Gender
              </label>
              <select name="gender" id="gender" className="form-control">
                <option selected disabled>
                  -- Select --
                </option>
                <option value="male" key="">
                  Male
                </option>
                <option value="female" key="">
                  Female
                </option>
                <option value="transgender" key="">
                  Transgender
                </option>
              </select>
            </div>

            <div className="col-2">
              <label htmlFor="religion" className="d-block">
                Religion
              </label>
              <select name="religion" id="religion" className="form-control">
                <option selected disabled>
                  -- Select --
                </option>
                <option value="hindu" key="">
                  Hindu
                </option>
                <option value="muslim" key="">
                  Muslim
                </option>
                <option value="christian" key="">
                  Christian
                </option>
                <option value="sikh" key="">
                  Sikh
                </option>
                <option value="buddhism" key="">
                  Buddhism
                </option>
              </select>
            </div>

            <div className="col-3">
                      <label htmlFor="bGroup" className="d-block">
                        Blood Group
                      </label>
                      <select
                        name="bGroup"
                        id="bGroup"
                        className="form-control"
                      >
                        <option selected disabled>
                          -- Select --
                        </option>
                        <option value="a+" key="">
                          A RhD positive (A+)
                        </option>
                        <option value="muslim" key="">
                          Muslim
                        </option>
                        <option value="christian" key="">
                          Christian
                        </option>
                        <option value="sikh" key="">
                          Sikh
                        </option>
                        <option value="buddhism" key="">
                          Buddhism
                        </option>
                      </select>
                    </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
