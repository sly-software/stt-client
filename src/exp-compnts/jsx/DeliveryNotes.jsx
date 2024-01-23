import React, { useEffect, useState } from "react";
import { Box, Button, Drawer, TextField, Zoom } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import "../css/DeliveryNotes.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchDns } from "../../features/Dns";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { baseUrl } from "../../api";
import { fetchUser } from "../../features/Login";
import { useNavigate } from "react-router-dom";

const DeliveryNotes = () => {
  const [open, setOpen] = useState(false);
  const [uploadFinish, setUploadFinish] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileData = useSelector((state) => state.dns.dns);
  const userLoggedIn = useSelector((state) => state.user.user).user;

  const uploadDN = async (inputFile) => {
    const formData = new FormData();

    for (const file of inputFile.files) {
      formData.append("files", file);
    }

    try {
      const instance = axios.create({
        withCredentials: true,
        baseURL: baseUrl,
      });

      instance.post(`/api/delivery/notes`, formData, {
        onUploadProgress: (ProgressEvent) => {
          const percentCompleted = Math.round(
            (ProgressEvent.loaded * 100) / ProgressEvent.total
          );
          setUploadFinish(false);
          console.log(percentCompleted);
          setUploadProgress(percentCompleted);
        },
      });
      setUploadProgress(0)

      setTimeout(() => {
        setOpen(!open);
        setUploadFinish(true);
      }, 1000 * 60 * 1);

      return "success";
    } catch (error) {
      console.log("Something went wrong!", error.message);
    }
  };

  const handleClick = async () => {
    const inputFile = document.getElementById("fileId");

    if (inputFile.files.length === 1) {
      await uploadDN(inputFile);
      dispatch(fetchDns());
    }
  };

  useEffect(() => {
    dispatch(fetchDns()); // Get files record from db
    dispatch(fetchUser());
    // const userLoggedIn = useSelector(state => state.user.user).user;
    if (userLoggedIn === "IBTZ") {
      return navigate("/login");
    }
  }, [dispatch, fetchDns, fetchUser]);

  return (
    <div>
      {/* Choose file component and submit button */}
      <div style={{ position: "absolute" }}>
        <Drawer anchor={`bottom`} open={open}>
          <div className="deliveryNoteHeader">
            <p></p>
          </div>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30rem" },
              width: "100%",
              height: "100%",
              top: "7rem",
              padding: "1.5rem",
            }}
            component="form"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                justifyItems: "center",
              }}
            >
              <TextField type="file" id="fileId" required={true} />

              <Button
                variant="contained"
                color="success"
                component="span"
                size="large"
                onClick={handleClick}
                startIcon={<CloudUploadIcon />}
                disabled={!uploadFinish}
              >
                Upload
              </Button>

              <button
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "2rem",
                  backgroundColor: "inherit",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                  setUploadProgress(0);
                }}
                type="submit"
              >
                X
              </button>

              <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                  value={uploadProgress}
                  // maxValue={1}
                  text={`${uploadProgress}%`}
                />
              </div>
            </div>
          </Box>
        </Drawer>
      </div>

      {/* Search bar and Add new button */}
      <form action="" name="searchBar" className="search-dn">
        <Button
          variant="outlined"
          sx={{
            margin: "0.2rem",
            fontWeight: "bold",
            // display: "absolute",
            // top: "0.5rem",
            // right: "1rem",
          }}
          onClick={() => setOpen(!open)}
          color="success"
        >
          Add New
        </Button>
        <input
          type="text"
          // id="search-field"
          placeholder="Enter keyword -- DN name --"
          // value={searchTerm}
          // onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </form>

      {/* Files data from DB */}
      {fileData.map((file, index) => (
        <Zoom
          in={true}
          style={{ transitionDelay: `${index * 50}ms` }}
          key={index}
        >
          <div className="files_data">
            <div>
              <b>{file.filename}</b>
            </div>

            <div className="files_data-actions">
              <span>
                {`${new Date(file.uploaddate).getDate()}`}
                <sup>th </sup>
                Jan{` ${new Date(file.uploaddate).getFullYear()}`}
              </span>

              <a href={`${file.viewlink}`} target="_blank">
                <OpenInNewSharpIcon />
              </a>

              <a href={`${file.downloadlink}`}>
                <FileDownloadIcon />
              </a>

              <span>
                <button type="submit" id={file.fileid}>
                  <DeleteForeverRoundedIcon />
                </button>
              </span>
            </div>
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default DeliveryNotes;
