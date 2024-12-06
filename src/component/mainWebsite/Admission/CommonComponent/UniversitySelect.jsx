import React, { useEffect, useState } from "react";

const UniversitySelect = () => {
  const [universities, SetUniversities] = useState([]);
  useEffect(() => {
    fetch("../jsonFiles/universityList.json")
      .then(response => response.json())
      .then(data => {SetUniversities(data.universities)})
      .catch(error => console.error("Error fetching the JSON data.", error));
  }, []);
  
  return (
    <div>
      <select id="univer" name="univer" className="form-control" required>
        <option disabled selected>--Select--</option>
        {universities.map((university) => (
          <option key={university.key} value={university.name}>
            {`${university.name} (${university.abbreviation})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UniversitySelect;
