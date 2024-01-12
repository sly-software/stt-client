import React from "react";
import "../css/Miscellaneous.css";
import { Button, Zoom } from "@mui/material";

// const services = {
//     product_code: "748474389",
//     product_description: "Quick RNA Silvester extraction kit",
//     product_company: "Charles Group of companies",
//     offer_validity: "30th December 2025",

// }

const services = {
  refferenceLetter: "IBTZ/2024/5",
  RLsentTo: "TARI",
  RLdate: "25-05-2022",
  resolutionPOA: "IBTZ150",
};

const Miscellaneous = () => {
  return (
    <div className="services">
      <Zoom in={true} style={{ transitionDelay: `500ms`}}>
        <div className="services-card">
          <h2>Letter Refference Number</h2>
          <p>
            Current Refference | <b>{services.refferenceLetter}</b>
          </p>
          <p>
            Used to | <b>{services.RLsentTo}</b>
          </p>
          <p>
            On | <b>{services.RLdate}</b>
          </p>
          <Button
            variant="outlined"
            color="success"
            size="larger"
            sx={{ fontWeight: "bold" }}
          >
            Generate New
          </Button>
        </div>
      </Zoom>

      <Zoom in={true} style={{ transitionDelay: `1000ms`}}>
        <div className="services-card">
          <h2>SPOA Resolution Number</h2>
          <p>
            Current RN | <b>{services.resolutionPOA}</b>{" "}
          </p>
          <Button
            variant="outlined"
            color="success"
            size="larger"
            sx={{ fontWeight: "bold" }}
          >
            Generate New
          </Button>
        </div>
      </Zoom>
    </div>
  );
};

export default Miscellaneous;
