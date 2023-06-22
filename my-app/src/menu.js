import React, { Component } from "react";
import "./menu.css";
import Card from "./components/card.js";
import Popup from "./components/popup.js";

export default class menu extends Component {
  render() {
    return (
      <div className="menu__section">
        <div className="category__filter">
          <div className="categories">
            <a href="#" className="category active">
              ALL
            </a>
            <a href="#" className="category">
              Burger
            </a>
            <a href="#" className="category">
              Pizza
            </a>
            <a href="#" className="category">
              Icecream
            </a>
            <a href="#" className="category">
              Deserts
            </a>
            <a href="#" className="category">
              Deserts
            </a>
          </div>
          <div className="filter">
            <span className="sort">Sort by :</span>
            <div className="selected" id="sort">
              <span>Price</span>
              <i className="bx bx-chevron-down" />
            </div>
            <div className="options" id="options">
              <span className="option">Rating</span>
              <span className="option">Price</span>
              <span className="option">Newest</span>
              <span className="option">Oldest</span>
            </div>
          </div>
        </div>

        <Popup />

        <div className="menu__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
