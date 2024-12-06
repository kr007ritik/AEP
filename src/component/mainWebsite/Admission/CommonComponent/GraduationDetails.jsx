import React from 'react'
import YearDropdown from "../CommonComponent/YearDropdown";
import BoardSelect from "../CommonComponent/UniversitySelect";

const GraduationDetails = () => {
  return (
    <div className="card my-4 box-shadow2">
    <h6 className="card-header bg-2E3944 text-white">Graduation Details</h6>
    <div className="card-body">
      <form action="">
        <div className="mb-3">
          <label className="col-12">University</label>
          <BoardSelect />
        </div>

        <div className="col-12 d-flex justify-content-around mx-0">
          <div className="col-4">
            <label className="d-block">Roll Number</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-4">
            <label className="d-block">Re Enter Roll Number</label>
            <input type="number" className="form-control" />
          </div>
          <div className="col-3">
            <label className="d-block">Passing Year</label>
            <YearDropdown />
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default GraduationDetails