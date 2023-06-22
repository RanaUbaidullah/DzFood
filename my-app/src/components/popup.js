import React, { Component } from "react"
import Popup from '../img/cardimg.png';
import './popup.css';

export default class popup extends Component {
  render() {
    return (
      <div className="card__popup" id="popup">
        <i className="fa-solid fa-xmark crossicon" id="crossicon" />
        <div className="popup__product">
          <div className="popup__content">
            <img className="popupimg" src={Popup} />
            <h1 className="popup__title">Ground Beef Tacos</h1>
            <p className="paragraph">
              Our pride and joy: hand-breaded and fried to perfection in house.
              9 pcs of Colonel’s Signature Crispy Fried Chicken. It's finger
              lickin' good
            </p>
            <div className="add__remove">
              <div className="plus">
                <i className="fa-solid fa-plus" />
              </div>
              <span className="">1</span>
              <div className="minus">
                <i className="fa-solid fa-minus" />
              </div>
            </div>
            <h2 className="popup__price">
              Product Price:
              <span>$105.99</span>
              <div className="btns">
                <a href="#" className="btn">
                  Add to Cart
                </a>
                <a href="#" className="btn">
                  Order Now
                </a>
              </div>
            </h2>
          </div>
          <div className="accessories">
            <div className="radios">
              <div className="radio">
                <input type="radio" className="radio__input" name="Large" />
                <label htmlFor="input">Large</label>
              </div>
              <div className="radio">
                <input type="radio" className="radio__input" name="Large" />
                <label htmlFor="input">Medium</label>
              </div>
              <div className="radio">
                <input type="radio" className="radio__input" name="Large" />
                <label htmlFor="input">Small</label>
              </div>
            </div>
            <div className="accessory">
              <span>Product Accessories</span>
              <div className="input__accessories">
                <div className="input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Pepsi Regular</span>
                  </div>
                  <span className="input__price">(+RS:80)</span>
                </div>
                <div className="input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Pepsi Regular</span>
                  </div>
                  <span className="input__price">(+RS:80)</span>
                </div>
                <div className="input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Pepsi Regular</span>
                  </div>
                  <span className="input__price">(+RS:80)</span>
                </div>
                <div className="input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Pepsi Regular</span>
                  </div>
                  <span className="input__price">(+RS:80)</span>
                </div>
                <div className="input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>Pepsi Regular</span>
                  </div>
                  <span className="input__price">(+RS:80)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review__section">
          <div className="btn__title">
            <h1 className="review__title">Product Review</h1>
            <a href="review.html" className="btn">
              Give Your Review
            </a>
          </div>
          <div className="reviews">
            <div className="review">
              <p className="paragraph">
                "As a satisfied customer of [SaaS Provider], I want to share my
                positive experience with others. Their software as a service
                platform has greatly improved the efficiency and productivity of
                our business operations. The cloud-based solution is
                user-friendly and regularly updated to stay ahead of the
                technology curve."
              </p>
              <img className="reviewimg" src="img/reviewprofile.png" alt="" />
            </div>
            <div className="name__rating">
              <div className="reviewrating">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <span className="reviewname">Savannah Nguyen</span>
              <span className="reviewtype">Customer</span>
            </div>
            <div className="sliders">
              <div className="slider" />
              <div className="slider active__slider" />
              <div className="slider" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
