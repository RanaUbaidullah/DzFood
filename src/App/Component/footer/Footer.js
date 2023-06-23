import React from "react";
import './footer.css'
function Footer() {
  return (
    // <!-- footer section -->
    <footer className="footer">
      <div className="footer__logo">
        <img src="img/logo.png" alt="DZ food Logo" />
        <p className="paragraph">
          Our job is to filling your tummy with delicious food and with fast and
          free delivery.
        </p>
        <div className="footer__icons">
          <a href="@">
            <i className="bx bxl-instagram-alt" />
          </a>
          <a href="@">
            <i className="bx bxl-facebook" />
          </a>
          <a href="@">
            <i className="bx bxl-twitter" />
          </a>
        </div>
      </div>
      <div className="footer__linksection">
        <div className="footer__links">
          <span className="footer__linkheading">About</span>
          <a className="footer__link" href="@">
            About Us
          </a>
          <a className="footer__link" href="@">
            Features
          </a>
          <a className="footer__link" href="@">
            Menu
          </a>
        </div>
        <div className="footer__links">
          <span className="footer__linkheading">Company</span>
          <a className="footer__link" href="@">
            Why DZ food?
          </a>
          <a className="footer__link" href="@">
            Partner With Us
          </a>
          <a className="footer__link" href="@">
            FAQ
          </a>
          <a className="footer__link" href="@">
            Blog
          </a>
        </div>
        <div className="footer__links">
          <span className="footer__linkheading">Support</span>
          <a className="footer__link" href="@">
            Account
          </a>
          <a className="footer__link" href="@">
            Support Center
          </a>
          <a className="footer__link" href="@">
            Feedback
          </a>
          <a className="footer__link" href="@">
            Contact Us
          </a>
          <a className="footer__link" href="@">
            Accessibilty
          </a>
        </div>
        <div className="footer__links">
          <span className="footer__linkheading">Get in Touch</span>
          <a className="footer__link" href="@">
            Question or feedback?
          </a>
          <a className="footer__link" href="@">
            We’d love to hear from you
          </a>
        </div>
      </div>
    </footer>
    // <!-- footer section -->
  );
}

export default Footer;
