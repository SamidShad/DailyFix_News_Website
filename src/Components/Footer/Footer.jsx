import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_elements_container">
          <h1 className="footer-logo">
            <a href="../.././public/index.html">DailyFix</a>
          </h1>
          <div className="social-medias-links">
            <i className="fa-brands fa-linkedin-in social-icons"></i>
            <i className="fa-brands fa-instagram social-icons"></i>
            <i className="fa-brands fa-facebook social-icons"></i>
            <i className="fa-brands fa-twitter social-icons"></i>
            <i className="fa-brands fa-google-plus-g social-icons"></i>
          </div>
          <p className="footer-text f-text-1">
            THANKS FOR COMING IT'S ONLY A DEMO WEBSITE
          </p>
          <p className="footer-text f-text-2">
            COPYRIGHT © 2023 ALL RIGHTS RESERVED DailyFix
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
