import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../Component/local_storage";
import { Config } from "../../constant/Index";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(Config.userDzFoodToken);
    navigate("/");
  };
  const menu = document.querySelector('.menu');
  const sidebar = document.querySelector('.nav__links');
  
  menu.addEventListener("click", () => {
      if (sidebar.classList.contains('active__navbar')) {
          sidebar.classList.remove('active__navbar');
      } else {
          sidebar.classList.add('active__navbar');
      }
  });
  
  function changeClass(element) {
      element.classList.toggle('fa-regular');
      element.classList.toggle('fa-solid');
  }
  return (
    <>
      {/* nav__bar */}
      <nav className="nav__bar">
        {/* logo */}
        <Link to="/" className="logo">
          <img src="img/logo.png" alt="" />
        </Link>

        {/* navbar links */}
        <div className="nav__links" id="nav__links">
          <Link className="link" to="/">
            Why Us?
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/menu">
            Menu
          </Link>
          <Link className="link active none" to="/cart">
            Cart
          </Link>
          <Link className="link none" to="/login">
            Log In
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>

        {/* navbar links */}
        <div className="nav__icons">
          {getLocalStorage(Config.userDzFoodToken) ?
            <Link to="/favourite" className="active">
            <i className="fa-regular fa-heart cart__icon active"></i>
          </Link>: null}
          <Link to="/cart" className="active">
            <i className="bx bx-shopping-bag cart__icon active"></i>
          </Link>

          {getLocalStorage(Config.userDzFoodToken) ? (
            <Link to="/" className="btn">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <Link to="/" onClick={logout}>
                Log Out
              </Link>
            </Link>
          ) : (
            <Link to="/login" className="btn">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <Link to="/login">Log In</Link>
            </Link>
          )}
        </div>

        <div className="menu" id="menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
