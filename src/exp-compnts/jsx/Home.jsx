import React, { useEffect, useState } from "react";
import "../css/home.css";
import "../css/BacktoTop.css";
import { FaBuffer } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Upload from "./Upload";
import Categories from "./Categories";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { toggleOnOff } from "../../features/UploadSlice";
import { logout } from "../../api";
import BacktoTop from "./BacktoTop";
import CurrentUser from "./CurrentUser";
import { fetchUser } from "../../features/Login";

const Home = () => {
  const [redirect, setRedirect] = useState(true);
  // const [disableLogin, setDisableLogin] = useState(false);
  // const toggleValue = useSelector((state) => state.upload.upload);
  // const userLoggedIn = useSelector((state) => state.user.user).user;
  const toggleValue = false;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeNav = () => {
    document.getElementById("drawer").style.width = "0";
  };

  const openNav = () => {
    document.getElementById("drawer").style.width = "11rem";
  };

  const handleLogout = async () => {
    const status = await logout();
    console.log(status);
    if (status === 200) {
      dispatch(fetchUser());
      navigate("/stocked/chemicals");
    } else {
      console.log(status.statusText);
    }
  };

  useEffect(() => {
    dispatch(fetchUser());
    setTimeout(() => {
      navigate("delivery-notes");
      setRedirect(false);
    }, 500);

  }, [dispatch, fetchUser]);

  return (
    <div className="container">
      <header className="header">
        {/* Home icon -- Left situated */}
        <div className="menu" onClick={openNav}>
          <FaBuffer className="home-icon" />
        </div>

        {/* Contains Login, Upload and Registration/Logout buttons -- Right situated */}
        <div className="header-right-navbar">
          <Link to={`login`} className="demo-link">
            <Button
              variant="outlined"
              sx={{ color: "white", border: "none" }}
              // disabled={disableLogin}
            >
              LOGIN
            </Button>
          </Link>
          {!toggleValue ? (
            <Button
              variant="outlined"
              sx={{ color: "white", border: "none" }}
              onClick={handleLogout}
            >
              LOGOUT
            </Button>
          ) : (
            <Link to={`register`} className="demo-link">
              <Button
                variant="outlined"
                sx={{ color: "white", border: "none" }}
              >
                REGISTER
              </Button>
            </Link>
          )}
          <CurrentUser />
          {/* <Upload /> */}
        </div>
      </header>

      <main className="main">
        {/* This is left side navbar */}
        <div className="drawer" id="drawer" autoFocus>
          <div className="close-btn" onClick={closeNav}>
            <FaAnglesLeft />
          </div>
          <div className="categories">
            <Categories />
          </div>
        </div>

        {/* This is the HOME landing page empty for now */}
        <div className="main-content" id="main">
          {redirect ? (
            <p style={{ color: "red" }}>Redirecting to home in 1s ...</p>
          ) : (
            <Outlet />
          )}
          <BacktoTop />
        </div>
      </main>
      <footer className="footer">All rights reserved</footer>
    </div>
  );
};

export default Home;
