import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import "../css/upload.css";
import { uploadFileData } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/CurrentChemicalsSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Upload = () => {
  const [open, setOpen] = useState(false);
  const toggleValue = useSelector((state) => state.upload.upload);
  const dispatch = useDispatch();
  const chemicals = useSelector((state) => state.chemicals.chemicals);

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleSubmitt = (e) => {
    e.preventDefault();
    /**
     * Upload new data to the server
     * then update state with the newly uploaded data
     * then close the upload dialog
     */
    (async () => {
      const uploadFeedback = await uploadFileData();
      console.log(uploadFeedback);
      setTimeout(() => {
        // dispatch(updated());
        dispatch(fetchData());
        setOpen(false);
      }, 1000);
    })();

    // uploadFileData()
    // .then(()=> {
    //   return dispatch(fetchData());
    // })
    // .then(() => {
    //   setOpen(false);
    // })
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpenDialog}
        disabled={toggleValue}
        sx={{ fontWeight: "700", color: "greenYellow", border: "none" }}
        id="upload"
      >
        Upload
      </Button>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle>
          Choose <b>.csv</b> file
        </DialogTitle>
        <DialogContent>
          <form
            action=""
            id="form"
            className="form"
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmitt}
          >
            <input type="file" id="files" name="file" />
            <button type="submit" className="upload-btn">
              SEND FILE
            </button>
          </form>
          <DialogActions>
            <Button
              onClick={handleCloseDialog}
              color="primary"
              className="close-dialog"
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                fontSize: "2rem",
                color: "rgb(30, 101, 36)",
              }}
              autoFocus
            >
              &times;
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Upload;
