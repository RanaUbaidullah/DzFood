import React, { Component } from "react";
import logo from "../img/logo.png";
import "./footer.css";
import FooterItem from "./footer-component/FooterItem";

export default class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__logo">
          <img src={logo} alt="DZ food Logo" />

          <p className="paragraph">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery.
          </p>
          <div className="footer__icons">
            <a link="">
              <i className="bx bxl-instagram-alt" />
            </a>
            <a link="">
              <i className="bx bxl-facebook" />
            </a>
            <a link="">
              <i className="bx bxl-twitter" />
            </a>
          </div>
        </div>
        <div className="footer__linksection">
          <div className="footer__links">
            <span className="footer__linkheading">About</span>
            <FooterItem item={"About Us"} path={""} />
            <FooterItem item={"Features"} path={""} />
            <FooterItem item={"Menu"} path={""} />
          </div>

          <div className="footer__links">
            <span className="footer__linkheading">Company</span>
            <FooterItem item={"Why DZ food?"} path={""} />
            <FooterItem item={"Partner With Us"} path={""} />
            <FooterItem item={"FAQ"} path={""} />
            <FooterItem item={"Blog"} path={""} />
          </div>

          <div className="footer__links">
            <span className="footer__linkheading">Support</span>

            <FooterItem item={"Account"} path={""} />
            <FooterItem item={"Support Center"} path={""} />
            <FooterItem item={"Feedback"} path={""} />
            <FooterItem item={"Contact Us"} path={""} />
            <FooterItem item={"Accessibilty"} path={""} />
          </div>

          <div className="footer__links">
            <span className="footer__linkheading">Get in Touch</span>

            <FooterItem item={"Question or feedback?"} path={""} />
            <FooterItem item={"We’d love to hear from you"} path={""} />
          </div>
        </div>
      </footer>
    );
  }
}
