import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const SimpleSnackBar = ({ open, setfdbOpen, fdbMessage }) => {
  // const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setfdbOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        // message={fdbMessage}
        onClose={handleClose}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity={ fdbMessage === "Record Exists!!" ? "warning" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {fdbMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SimpleSnackBar;
