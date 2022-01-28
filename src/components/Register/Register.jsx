import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  emailValidator,
  toastError,
  toastSuccess,
  userIdValidator,
} from "../../utils";
import "./register.css";
import { API_BASE_URL } from "../../utils/constants";

const Register = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validUserId, setValidUserId] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    userId: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const handleValidUserIdCheck = (e) => {
    const userId = e.target.value;
    if (userId === "") {
      setValidUserId("");
    } else if (userIdValidator(userId)) {
      setValidUserId(true);
    } else {
      setValidUserId(false);
    }
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUserInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();
    if (
      userData.email.trim() !== "" &&
      emailValidator(userData.email) &&
      userData.name.trim() !== "" &&
      validUserId &&
      userData.password !== "" &&
      userData.confirmPassword !== "" &&
      userData.password === userData.confirmPassword
    ) {
      try {
        const userObj = {
          userId: userData.userId,
          password: userData.password,
          email: userData.email,
          name: userData.name,
          contact: userData.contact,
        };
        const res = await axios.post(`${API_BASE_URL}/auth/register`, userObj);
        if (res.data) {
          history.push("/login");
          toastSuccess("User Successfully registered !");
        }
      } catch (error) {
        console.log(error);
        toastError(
          "User already registered with same User Id or email. Please try with Different Credentials !"
        );
      }
    } else {
      toastError(
        "Mandatory fields are empty or Password and Confirm Password doesn't match. Please Try Again !"
      );
    }
  };

  return (
    <div className="register">
      <h1 className="registerHeading">Register New Account</h1>
      <p className="registerSubHeading">
        User Id must contain Minimum eight characters, at least one letter, one
        number and one special character to Register Successfully
      </p>
      <form onSubmit={handleUserRegister} className="registerForm">
        <div className="inputBox">
          <input
            className="registerInput"
            type="text"
            name="email"
            onChange={handleUserInput}
            placeholder="Email"
            autoFocus
          />
          <i className="fas fa-at"></i>
        </div>
        <div className="inputBox">
          <input
            className="registerInput"
            type="text"
            name="name"
            onChange={handleUserInput}
            placeholder="Name"
          />
          <i className="far fa-user"></i>
        </div>
        <div className="inputBox">
          <input
            className="registerInput"
            type="text"
            name="userId"
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
            className="registerInput"
            type="text"
            name="contact"
            onChange={handleUserInput}
            placeholder="Contact"
          />
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="inputBox">
          <input
            className="registerInput"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleUserInput}
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
        <div className="inputBox">
          <input
            className="registerInput"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleUserInput}
          />
          {showConfirmPassword ? (
            <i
              onClick={() => setShowConfirmPassword(false)}
              className="far fa-eye"
            ></i>
          ) : (
            <i
              onClick={() => setShowConfirmPassword(true)}
              className="far fa-eye-slash"
            ></i>
          )}
        </div>
        <button type="submit" className="registerButton">
          <p>Register Your Account</p> <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default Register;
