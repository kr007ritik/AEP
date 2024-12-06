import React, { useEffect, useState } from "react";

const BoardSelect = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch("../jsonFiles/board.json")
      .then(response => response.json())
      .then(data => {setBoards(data.boards)})
      .catch(error => console.error("Error fetching the JSON data.", error));
  }, []);
  return (
    <div>
      <select id="intBoard" name="intBoard" className="form-control" required>
        <option disabled selected>--Select--</option>
        {boards.map((board) => (
          <option key={board.key} value={board.name}>
            {`${board.name} (${board.abbreviation})`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BoardSelect;
