import React from 'react';

function YearDropdown() {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <div>
      <select id="year" name="year" className='form-control' required>
        <option disabled selected>--Select--</option>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YearDropdown;
