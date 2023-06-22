import React, { Component } from "react";
import About from './img/about.png';
import './about.css';

export default class about extends Component {
  render() {
    return (
      <div className="about__section">
        <div className="about__img">
          <img src={About} />
        </div>
        <div className="about__content">
          <h3 className="subheading">Know About Us</h3>
          <p className="paragraph">
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </p>
          <a href="#" className="btn">
            Contact us
          </a>
        </div>
      </div>
    );
  }
}
