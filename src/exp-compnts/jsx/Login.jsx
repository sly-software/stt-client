import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { toggleOnOff } from "../../features/UploadSlice";
import { login } from "../../api";
import { fetchUser } from "../../features/Login";
import SimpleBackdrop from "./SimpleBackdrop";
import { Alert, Button, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [authMsg, setAuthMsg] = useState("");
  const [severity, setSeverity] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggedIn(!loggedIn);

    const { status, statusCode } = await login(email, password);

    // console.log("From Login.jsx", status, statusCode);

    if (status.name && statusCode === 200) {
      // console.log(status.name);
      setLoggedIn(loggedIn);
      dispatch(fetchUser());

      setTimeout(() => {
        navigate("/stocked/chemicals");
      }, 1000 * 2);

      // Auth feedback
      setSeverity('success')
      setOpen(true);
      setAuthMsg("Authenticated successfully");
    } else {
      // console.log("Woops", statusCode);
      setLoggedIn(loggedIn);
      // Auth feedback
      setSeverity('error')
      setOpen(true);
      setAuthMsg("Incorrect credentials");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="login">
      {loggedIn ? <SimpleBackdrop message={"let's sign you in ..."} /> : <></>}

      <h1 className="login-header">enter your credentials below..</h1>

      <form
        action=""
        method="post"
        className="login-form"
        onSubmit={handleSubmit}
        >
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="logon-btn" type="submit">
          LOGIN
        </button>
      </form>
      {/* Login feedback */}
      <div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          // action={action}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
          >
          <Alert
            onClose={handleClose}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {authMsg}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;
