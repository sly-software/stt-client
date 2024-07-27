import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box, Button, Drawer, Skeleton, TextField, Zoom } from "@mui/material";
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
import { dateFormater, reverseSort } from "../../utils/utils";
import SimpleSnackBar from "./commons/SimpleSnackBar";

const DeliveryNotes = () => {
  const [open, setOpen] = useState(false);
  const [uploadFinish, setUploadFinish] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [fdbkOpen, setfdbOpen] = useState(false);
  const [fdbMessage, setfdbMessage] = useState("");

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
      axios
        .post(`${baseUrl}/api/delivery/notes`, formData, {
          withCredentials: true,
          onUploadProgress: (ProgressEvent) => {
            const percentCompleted = Math.round(
              (ProgressEvent.loaded * 100) / ProgressEvent.total
            );
            setUploadFinish(false);
            setUploadProgress(percentCompleted - 3);
          },
        })
        .then((data) => {
          if (data.status === 200 && data.data.message !== "Record Exists!!") {
            setUploadProgress(100);
            setfdbMessage(`Upload Successfully!`);
            setfdbOpen(true);
          } else {
            setfdbMessage(`${data.data.message}`);
            setfdbOpen(true);
            setUploadProgress(0);
          }
          setOpen(!open);
          setUploadFinish(true);
          setUploadProgress(0);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("Something went wrong!", error.message);
    }
  };

  const handleClick = async () => {
    const inputFile = document.getElementById("fileId");

    if (inputFile.files.length === 1) {
      uploadDN(inputFile);
      dispatch(fetchDns());
    }
  };

  useEffect(() => {
    dispatch(fetchDns()); // Get files record from db
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(fetchUser());
    // const userLoggedIn = useSelector(state => state.user.user).user;
    if (userLoggedIn === "IBTZ") {
      return navigate("/login");
    }
  }, [dispatch, navigate, userLoggedIn]);

  return (
    <div>
      {/* Simple feedback snackbar */}
      <SimpleSnackBar
        open={fdbkOpen}
        setfdbOpen={setfdbOpen}
        fdbMessage={fdbMessage}
      />

      {/* Choose file component and submit button */}
      <div style={{ position: "absolute" }}>
        <Drawer anchor={`bottom`} open={open}>
          <div className="deliveryNoteHeader"></div>
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
              <TextField
                type="file"
                id="fileId"
                required={true}
                accept="*.pdf"
              />

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
                  right: "1rem",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "50%",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                  setUploadProgress(0);
                  setUploadFinish(true);
                }}
                type="submit"
                disabled={!uploadFinish}
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
          style={{ fontSize: "1rem" }}
          // id="search-field"
          placeholder="Enter keyword -- DN name --"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      {/* Files data from DB */}
      {fileData.length === 0 ? (
        <>
          <Skeleton
            variant="text"
            animation="wave"
            width={"70%"}
            height={"5rem"}
            sx={{ fontSize: "1rem", margin: "0 auto" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            width={"70%"}
            height={"5rem"}
            sx={{ fontSize: "1rem", margin: "0 auto" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            width={"70%"}
            height={"5rem"}
            sx={{ fontSize: "1rem", margin: "0 auto" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            width={"70%"}
            height={"5rem"}
            sx={{ fontSize: "1rem", margin: "0 auto" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            width={"70%"}
            height={"5rem"}
            sx={{ fontSize: "1rem", margin: "0 auto" }}
          />
        </>
      ) : (
        fileData
          .filter((item) => {
            return searchTerm.toLowerCase() === ""
              ? true
              : item.filename.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((file, index) => (
            <Zoom
              in={true}
              style={{ transitionDelay: `${index * 50}ms` }}
              key={index}
            >
              <div className="files_data">
                <div>
                  {/* {console.log(dateFormater(file.uploaddate))} */}
                  <b>{file.filename}</b>
                </div>

                <div className="files_data-actions">
                  <span>
                    {`${dateFormater(file.uploaddate).day}`}
                    <sup>{`${dateFormater(file.uploaddate).superString}`}</sup>
                    {` ${dateFormater(file.uploaddate).monthInWord}`}
                    {` ${dateFormater(file.uploaddate).year}`}
                  </span>

                  <a href={`${file.viewlink}`} target="_blank" rel="noreferrer">
                    <OpenInNewSharpIcon />
                  </a>

                  <a href={`${file.downloadlink}`}>
                    <FileDownloadIcon />
                  </a>

                  <span>
                    <button type="submit" id={file.fileid} disabled={true}>
                      <DeleteForeverRoundedIcon />
                    </button>
                  </span>
                </div>
              </div>
            </Zoom>
          ))
      )}
    </div>
  );
};

export default DeliveryNotes;
