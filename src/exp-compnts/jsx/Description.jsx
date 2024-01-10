import React, { useEffect, useState } from "react";
import "../css/description.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentStockLogs } from "../../features/CurrentChemicalsSlice";

const Description = ({ searchTerm, setSearchTerm }) => {
  const logs = useSelector((state) => state.chemicals.lastUpdated);
  const dispatch = useDispatch();
  
  // console.log(logs[logs.length-1].name, logs[logs.length-1].changed_on);
  // const most= Object.keys(logs[logs.length - 1]) ;
  // console.log(most)
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    // setSearchTerm(e.target.value.trim());
  };

  useEffect(() => {
    dispatch(fetchCurrentStockLogs())
    
  }, [dispatch]);

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
        <p>
          <b>Updated on: </b>
          {}
        </p>
        <p>
          <b>Updated by: </b>
          {}
        </p>
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
