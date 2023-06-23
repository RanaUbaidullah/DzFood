import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     {/* <!-- nav__bar --> */}
    {/* <!-- nav__bar --> */}

    <nav class="nav__bar">

        {/* <!-- logo --> */}

        <Link to='/' class="logo">
            <img src="img/logo.png" alt=""/>
        </Link>


        {/* <!-- navbar links --> */}

        <div class="nav__links" id="nav__links">

            <Link class="link" to="index.html">
                Why Us?
            </Link>
            <Link class="link" to="about.html">
                About
            </Link>
            <Link class="link" to="menu.html">
                Menu
            </Link>
            <Link class="link active none" to="cart.html">
                Cart
            </Link>
            <Link class="link none" to="login.html">
                Log In
            </Link>
            <Link class="link" to="contact.html">
                Contact
            </Link>

        </div>

        {/* <!-- navbar links --> */}

        <div class="nav__icons">

            <Link to="cart.html" class="active">
                <i class='bx bx-shopping-bag cart__icon active'></i>
            </Link>

            <Link to="login" class="btn">

                <i class="fa-solid fa-arrow-right-to-bracket"></i>

                <Link to="login">Log In</Link>

            </Link>


        </div>

        <div class="menu" id="menu">
            <i class="fa-solid fa-bars"></i>
        </div>

    </nav>
    </>
  )
}

export default Navbar