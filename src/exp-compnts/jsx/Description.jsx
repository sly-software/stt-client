import React, { useEffect, useState } from "react";
import "../css/description.css";
import { useSelector } from "react-redux";

const Description = ({ searchTerm, setSearchTerm }) => {
  const { day, month, year } = useSelector(
    (state) => state.chemicals.lastUpdated
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    // setSearchTerm(e.target.value.trim());
  };


  return (
    <div className="instructions">
      <div className="fore-ground">
        <p>
          All chemicals belong to a specific box, each box has a unique box
          number (look below in Box Number).
        </p>
        <p>
          PLEASE NOTE: When you remove a chemical in the box, you have to
          record, the <b>catalog number</b> of the chemical and <b>quantity</b>{" "}
          taken out.
        </p>
      </div>
      <div className="logs fore-ground">
        <p><b>Updated on: </b>{` ${day}-${month}-${year}`}</p>
        <p><b>Updated by: </b>Inqaba Biotec</p>
        <hr />
        <form action="" className="search-form">
          <input
            type="text"
            id="search-field"
            className="search-field"
            placeholder="Enter keyword -- ethanol --"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Description;
