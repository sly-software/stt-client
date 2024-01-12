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

const Home = () => {
  const [redirect, setRedirect] = useState(true);
  const toggleValue = useSelector((state) => state.upload.upload);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeNav = () => {
    document.getElementById("drawer").style.width = "0.5rem";
  };

  const openNav = () => {
    document.getElementById("drawer").style.width = "10rem";
  };

  const handleLogout = async () => {
    const status = await logout();
    if (status === 200) {
      dispatch(toggleOnOff(true));
    } else {
      console.log(statusText);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("stocked/chemicals");
      setRedirect(false);
    }, 500);
  }, []);

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
            <Button variant="outlined" sx={{ color: "white", border: "none" }}>
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
          <Upload />
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
          {
            redirect ? (
              <p style={{ color: "red" }}>Redirecting to home in 1s ...</p>
            ) : (
              <Outlet />
            )
          }
          <BacktoTop />
        </div>
      </main>
      <footer className="footer">All rights reserved</footer>
    </div>
  );
};

export default Home;
