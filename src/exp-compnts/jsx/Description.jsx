import React, { useEffect, useState } from "react";
import "../css/description.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentStockLogs } from "../../features/CurrentChemicalsSlice";

const Description = ({ searchTerm, setSearchTerm }) => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.chemicals.lastUpdated);
  const date = new Date(logs.changed_on);


  useEffect(() => {
    dispatch(fetchCurrentStockLogs());
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
          <span className="logs-color">{`${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}</span>
        </p>
        <p>
          <b>Updated by: </b>
          <span className="logs-color">{`${logs.name}`}</span>
        </p>
        <hr />
        <form action="" className="search-form">
          <input
            type="text"
            id="search-field"
            className="search-field"
            placeholder="Enter keyword -- ethanol --"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Description;
