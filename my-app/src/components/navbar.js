import React, { Component } from 'react'
import logo from '../img/logo.png';
import './navbar.css';

export default class nabar extends Component {
  render() {
    return (
        <nav class="nav__bar">

        {/* logo */}

        <div class="logo">
            <img src={logo} alt='logo'/>
        </div>


        {/* navbar links */}

        <div class="nav__links" id="nav__links">

            <a class="link active" href="index.html">
                Why Us?
            </a>
            <a class="link" href="about.html">
                About
            </a>
            <a class="link" href="menu.html">
                Menu
            </a>
            <a class="link none" href="cart.html">
                Cart
            </a>
            <a class="link none" href="login.html">
                Log In
            </a>
            <a class="link" href="contact.html">
                Contact
            </a>

        </div>

        {/* navbar links */}

        <div class="nav__icons">

            <a href="cart.html">
                <i class='bx bx-shopping-bag cart__icon'></i>
            </a>

            <div class="btn">

                <i class="fa-solid fa-arrow-right-to-bracket"></i>

                <a href="login.html">Log In</a>
            </div>


        </div>

        <div class="menu" id="menu">
            <i class="fa-solid fa-bars"></i>
        </div>



    </nav>

    )
  }
}
