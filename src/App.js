import React, { useContext } from "react";
import Topbar from "./components/Topbar/Topbar";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <Topbar />
      <Switch>

        {/* ADDING PROTECTED ROUTES */}
        <Route path="/dashboard">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        {/* REDIRECTING USER FROM REGISTERATION AND LOGIN PAGE ONCE IT SIGN IN */}
        <Route path="/login">
          {!user ? <LoginPage /> : <Redirect to="/dashboard" />}
        </Route>
        <Route path="/register">
          {!user ? <RegisterPage /> : <Redirect to="/dashboard" />}
        </Route>
      </Switch>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
