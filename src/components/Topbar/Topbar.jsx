import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LogOut } from "../../context/Actions";
import { Context } from "../../context/Context";
import "./topbar.css";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const [path, setPath] = useState("/login");
  const history = useHistory();

  const handleSignUpRedirect = () => {
    setPath("/register");
    history.push("/register");
  };

  const handleSignInRedirect = () => {
    setPath("/login");
    history.push("/login");
  };

  const handleLogout = () => {
    dispatch(LogOut());
    localStorage.setItem("userSBSToken", "");
    window.location.replace("/login");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h3>SBS Bank</h3>
        </Link>
      </div>
      <div className="topRight">
        {user ? (
          <button onClick={handleLogout} className="topBtn">
            Log out
          </button>
        ) : null}
        {!user && path === "/login" ? (
          <button onClick={handleSignUpRedirect} className="topBtn">
            Sign up
          </button>
        ) : null}
        {!user && path === "/register" ? (
          <button onClick={handleSignInRedirect} className="topBtn">
            Log in
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Topbar;
