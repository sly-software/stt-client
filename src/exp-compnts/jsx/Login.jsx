import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { toggleOnOff } from "../../features/UploadSlice";
import { login } from "../../api";
import { fetchUser } from "../../features/Login";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const status = await login(email, password);

    // console.log(status)

    if (status.name) {
      // console.log(status.name);
      dispatch(fetchUser());
      navigate("/stocked/chemicals");
    } else {
      console.log(status);
    }
  };

  return (
    <div className="login">
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
    </div>
  );
};

export default Login;
