import React from "react";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import "../css/simpleBackdrop.css";

const SimpleBackdrop = ({ message = "" }) => {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <h1 className="backdrop-message">
          {message} &nbsp;
        </h1>
        { message === "" ?  <CircularProgress color="inherit" />: <></>}
        
      </Backdrop>
    </div>
  );
};

export default SimpleBackdrop;
