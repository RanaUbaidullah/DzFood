import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     {/* <!-- nav__bar --> */}
    {/* <!-- nav__bar --> */}

    <nav  className="nav__bar">

        {/* <!-- logo --> */}

        <Link to='/'  className="logo">
            <img src="img/logo.png" alt=""/>
        </Link>


        {/* <!-- navbar links --> */}

        <div  className="nav__links" id="nav__links">

            <Link  className="link" to="index.html">
                Why Us?
            </Link>
            <Link  className="link" to="about.html">
                About
            </Link>
            <Link  className="link" to="menu.html">
                Menu
            </Link>
            <Link  className="link active none" to="cart.html">
                Cart
            </Link>
            <Link  className="link none" to="login.html">
                Log In
            </Link>
            <Link  className="link" to="contact.html">
                Contact
            </Link>

        </div>

        {/* <!-- navbar links --> */}

        <div  className="nav__icons">

            <Link to="cart.html"  className="active">
                <i  className='bx bx-shopping-bag cart__icon active'></i>
            </Link>

            <Link to="login"  className="btn">

                <i  className="fa-solid fa-arrow-right-to-bracket"></i>

                <Link to="login">Log In</Link>

            </Link>


        </div>

        <div  className="menu" id="menu">
            <i  className="fa-solid fa-bars"></i>
        </div>

    </nav>
    </>
  )
}

export default Navbar