import { CircularProgress } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../css/Spinloader.css";

export const Spinloader = ({ message }) => {
  return (
    <div className="circularProgress">
      <CircularProgress sx={{color: "inherit"}} />
      <h4 className="cp_text">
        { message }
      </h4>
    </div>
  );
};
