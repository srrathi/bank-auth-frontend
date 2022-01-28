import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <div className="footerContainer">
        <div className="socialLinks">
          <a
            href="https://www.facebook.com/rohitsitaram.rathi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" fab fa-2x fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sitaram-rathi-519152197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" fab fa-2x fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/imrathiii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" fab fa-2x fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/SitaramRathi5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" fab fa-2x fa-twitter"></i>
          </a>
          <a
            href="https://github.com/srrathi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className=" fab fa-2x fa-github"></i>
          </a>
        </div>
        <div className="footerItems">
          <p>Copyright &copy; 2022</p>
          <p>Made By - Sitaram Rathi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
