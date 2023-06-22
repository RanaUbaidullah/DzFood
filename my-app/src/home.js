import React, { Component } from "react";
import "./home.css";
import Card from "./components/card.js";
import Heroimg from "./img/hero__img.png";
import Ourapp from "./img/appsection.png";

export default class home extends Component {
  render() {
    return (
      <>
        {/* hero__section */}
        {/* hero__section */}
        <div className="hero__section">
          <div className="hero__img mobile">
            <img src={Heroimg} />
          </div>
          <div className="hero__content">
            <div className="sub__title">More than Faster 🍔</div>
            <h1 className="title">Be The Fastest In Delivering Your Food</h1>
            <p className="paragraph">
              Our job is to filling your tummy with delicious food and with fast
              and free delivery
            </p>
            <div className="searchbar__button">
              <div className="search__bar">
                <input type="text" placeholder="Search you want" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <div className="btn">Get Started</div>
            </div>
          </div>
          <div className="hero__img pc">
            <img src={Heroimg} />
          </div>
        </div>
        {/* services__section */}
        {/* services__section */}
        <div className="services__section">
          {/* services__content*/}
          <div className="services__content">
            <span className="sub__title service__subtitle">WHAT WE SERVE</span>
            <h1 className="title service__title">
              Your Favorite
              <br />
              <span>Food Delivery Partner</span>
            </h1>
            <div className="paragraph">
              Danzee Food is the best. Besides the many and delicious meals, the
              service is also very good, especially in the very fast delivery. I
              highly recommend Fudo to you.
            </div>
          </div>
          {/* services__img*/}
          <div className="services__img">
            <img src="img/favorite.png" alt="" />
          </div>
        </div>
        {/* menu__section */}
        {/* menu__section */}
        <div className="menu__section">
          <div className="sub__title">OUR MENU</div>
          <h1 className="title menu__title">
            Menu That Always Makes You Fall In Love
          </h1>

          <div className="menu__cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        {/* app__section */}
        {/* app__section */}
        <div className="app__section">
          <div className="app__content">
            <span className="sub__title">Download App</span>
            <h1 className="title menu__title">
              Get Started With Danzee Food Today!
            </h1>
            <div className="paragraph">
              Discover food wherever and whenever and get your food delivered
              quickly.
            </div>
            <a href="#" className="btn">
              Get The App
            </a>
          </div>
          <div className="app__image">
            <img src={Ourapp} />
          </div>
        </div>
      </>
    );
  }
}
