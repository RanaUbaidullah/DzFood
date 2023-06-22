import React, { Component } from "react";
import "./card.css";
import cardImg from "../img/cardimg.png";

export default class card extends Component {
  render() {
    return (
      <div className="card">
        {/* card rating */}
        <div className="rating">
          <h4>4.5</h4>
          <i className="fa-solid fa-star" />
          <span>(25+)</span>
        </div>
        <div className="heart">
          <i className="fa-regular fa-heart" onclick="changeClass(this)" />
        </div>
        <img src={cardImg} alt="Card Image" />

        <div className="menu__content" id="product__card">
          <div className="title__price">
            <h3 className="card__title">Ground Beef Tacos</h3>
            <span className="price">Rs 225</span>
          </div>
          <div className="time">
            <i className="fa-solid fa-stopwatch" />
            <span>10-15 mins</span>
          </div>
          <div className="food__type">
            <span className="type">Burger</span>
            <span className="type">Chicken</span>
            <span className="type">Fast Food</span>
          </div>
        </div>
      </div>
    );
  }
}
