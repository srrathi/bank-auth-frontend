import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginFailure,
  LoginStart,
  LoginSuccessfull,
} from "../../context/Actions";
import { Context } from "../../context/Context";
import {
  toastError,
  toastInfo,
  toastSuccess,
  userIdValidator,
} from "../../utils";
import { API_BASE_URL } from "../../utils/constants";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const { dispatch, isFetching } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);
  const [validUserId, setValidUserId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleValidUserIdCheck = (e) => {
    const userId = e.target.value;
    if (userId === "") {
      setValidUserId("");
    } else if (userIdValidator(userId)) {
      setValidUserId(true);
    } else {
      setValidUserId(false);
    }
    setUserId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userId.trim() !== "" &&
      userIdValidator(userId) &&
      password.trim() !== ""
    ) {
      dispatch(LoginStart());
      try {
        const res = await axios.post(`${API_BASE_URL}/auth/login`, {
          userId,
          password,
        });
        // console.log(res);
        if (res.data) {
          toastSuccess("Login Successfull !");
          dispatch(LoginSuccessfull(res.data));
          toastInfo(`Howdy ${res.data.user.name}, Welcome back !`);
          history.push("/dashboard")
        }
      } catch (error) {
        console.log(error);
        dispatch(LoginFailure());
        toastError(
          "Credentials are invalid. User not Found."
        );
      }
    } else {
      toastError("Mandatory fields are empty or User Id not valid !");
    }
  };

  return (
    <div className="login">
      <h1 className="loginHeading">Login to Your Account</h1>
      <p className="loginSubHeading">
        Use your unique User Id which must contain Minimum eight characters, at
        least one letter, one number and one special character and Password to
        Log In
      </p>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="inputBox">
          <input
            className="loginInput"
            type="text"
            autoFocus
            onChange={handleValidUserIdCheck}
            placeholder="User Id"
          />
          {/* Minimum eight characters, at least one letter, one number and one special character */}
          {validUserId === "" ? (
            <i className="far fa-circle"></i>
          ) : validUserId ? (
            <i className="fas fa-check-circle"></i>
          ) : (
            <i className="fas fa-times-circle"></i>
          )}
        </div>
        <div className="inputBox">
          <input
            className="loginInput"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <i
              onClick={() => setShowPassword(false)}
              className="far fa-eye"
            ></i>
          ) : (
            <i
              onClick={() => setShowPassword(true)}
              className="far fa-eye-slash"
            ></i>
          )}
        </div>
        <button disabled={isFetching} type="submit" className="loginButton">
          <p>Login to Your Account</p> <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Login;
