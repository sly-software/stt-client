// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "../css/Miscellaneous.css";
// import { Button, Zoom } from "@mui/material";

/*
  // const services = {
  //     product_code: "748474389",
  //     product_description: "Quick RNA Silvester extraction kit",
  //     product_company: "Charles Group of companies",
  //     offer_validity: "30th December 2025",

  // }

  // const services = {
  //   refferenceLetter: "IBTZ/2024/5",
  //   RLsentTo: "TARI",
  //   RLdate: "25-05-2022",
  //   resolutionPOA: "IBTZ150",
  // };
*/

const institutes = ["TARI", "GCLA", "TMDA", "TRA", "JML", "NM-AIST", "TBS"];

const Miscellaneous = () => {
  const [refference, setRefference] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const ist = formData.get("institute");
    const lr = formData.get("letter_resolution");

    if (ist === "Click to select") {
      alert("please select a correct institution name");
    } else {
      console.log(lr);
      // console.log(ist);

      const ref =
        lr === "l"
          ? `IBTA/${new Date().getFullYear()}/LTNO-${new Date().getDate()}.${new Date().getMonth()}./${ist}`
          : `IBTZ${168}`;

      setTimeout(() => {
        setRefference(ref);
        document.querySelector("#generateBtn").disabled = true;
        console.log(document.querySelector("#generateBtn").disabled);
      }, 1000);

      // Make the result dissapear after 1min
      setTimeout(() => {
        document.querySelector("#generateBtn").disabled = false;
        setRefference("");
      }, 1 * 60 * 1000);
    }
  };

  // Asign result to refference var
  // Update DB for the reference
  // useEffect(() => {
  //   setInstitute(ist);

  //   // console.log(ref);
  // }, [refference, institute, ref]);

  return (
    <div className="services">
      <form onSubmit={handleSubmission} className="services_form">
        <div className="institution">
          <label htmlFor="institute">
            Select institution from list
            <select name="institute" id="institute" className="services_select">
              <option defaultValue={"Click to select"}>Click to select</option>
              {institutes.map((institute, idx) => (
                <option value={institute} key={idx} required>
                  {institute}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="reff_type">
          <label htmlFor="letter">
            <input
              type="radio"
              name="letter_resolution"
              id="letter"
              required
              value={"l"}
            />
            Letter
          </label>

          <label htmlFor="resolution">
            <input
              type="radio"
              name="letter_resolution"
              id="resolution"
              value={"r"}
              required
            />
            Resolution number
          </label>
        </div>

        {refference !== "" ? (
          <div className="result_box">{refference}</div>
        ) : (
          <div className="result_box" hidden></div>
        )}

        <button type="submit" id="generateBtn" className="services_button">
          Generate
        </button>

        {/* <div>will disappear in {} min</div> */}
      </form>
    </div>
  );
};

export default Miscellaneous;
