import React, { useEffect, useState } from "react";
import "../css/CurrentChemicalsTable.css";
import Description from "./Description";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/CurrentChemicalsSlice";
import BacktoTop from "./BacktoTop";

const CurrentChemicalsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const chemicalData = useSelector((state) => state.chemicals.chemicals);
  const status = useSelector((state) => state.chemicals.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
      console.log(chemicalData);
    }
  }, [dispatch, status]);

  return (
    <div className="table">
      <Description searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Store</th>
            <th>Box</th>
          </tr>
        </thead>
        <tbody>
          {chemicalData.length <= 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            chemicalData
              .filter((row) => {
                return searchTerm.toLowerCase() === ""
                  ? true
                  : row.product_description
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
              })
              .map((row) => (
                <tr key={row.product_code}>
                  <td>{row.product_code}</td>
                  <td>{row.product_description}</td>
                  <td style={{ textAlign: "center" }}>{row.qty_instock}</td>
                  <td style={{ textAlign: "center" }}>{row.store_location}</td>
                  <td style={{ textAlign: "center" }}>{row.box_number}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
      <BacktoTop />
      {/* <div style={{ margin: "7rem", width: "0.5rem", height: "0.5rem" }}></div> */}
    </div>
  );
};

export default CurrentChemicalsTable;
