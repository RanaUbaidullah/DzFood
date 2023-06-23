import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <>
     {/* <!-- nav__bar --> */}
    {/* <!-- nav__bar --> */}

    <nav class="nav__bar">

        {/* <!-- logo --> */}

        <div class="logo">
            <img src="img/logo.png" alt=""/>
        </div>


        {/* <!-- navbar links --> */}

        <div class="nav__links" id="nav__links">

            <a class="link" href="index.html">
                Why Us?
            </a>
            <a class="link" href="about.html">
                About
            </a>
            <a class="link" href="menu.html">
                Menu
            </a>
            <a class="link active none" href="cart.html">
                Cart
            </a>
            <a class="link none" href="login.html">
                Log In
            </a>
            <a class="link" href="contact.html">
                Contact
            </a>

        </div>

        {/* <!-- navbar links --> */}

        <div class="nav__icons">

            <a href="cart.html" class="active">
                <i class='bx bx-shopping-bag cart__icon active'></i>
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
    </>
  )
}

export default Navbar