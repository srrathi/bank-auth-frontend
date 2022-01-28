import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./home.css";

const Home = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <div className="container">
        <h1 className="heading">Welcome to Dashboard</h1>
        <div className="userContainer">
          <div className="imgContainer">
            <i className="far fa-3x fa-user"></i>
          </div>
          <div className="detailsContainer">
            <p>
              <b>Name :</b> {user.name}
            </p>
            <p>
              <b>User Id :</b> {user.userId}
            </p>
            <p>
              <b>Email :</b> {user.email}
            </p>
            <p>
              <b>Contact :</b> {user.contact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
