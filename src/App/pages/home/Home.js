import { Link } from 'react-router-dom'
import React from 'react'
import './Home.css'
import Card from '../../Component/productCard/Card.js'
function Index() {
  return (
    <>
     {/* <!-- hero__section --> */}
    {/* <!-- hero__section --> */}


    <div class="hero__section">
 
        <div class="hero__img mobile">
            <img src="img/hero__img.png"alt="img" />
        </div>

        <div class="hero__content">

            <div class="sub__title">
                More than Faster 🍔
            </div>

            <h1 class="title">
                Be The Fastest In Delivering Your Food
            </h1>

            <p class="paragraph">
                Our job is to filling your tummy with delicious food and with fast and free delivery
            </p>

            <div class="searchbar__button">

                <div class="search__bar">
                    <input type="text" placeholder="Search you want"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div class="btn">
                    Get Started
                </div>

            </div>

        </div>


        <div class="hero__img pc">
            <img src="img/hero__img.png" alt="img"/>
        </div>

    </div>















    {/* <!-- services__section --> */}
    {/* <!-- services__section --> */}



    <div class="services__section">

        {/* <!-- services__content--> */}

        <div class="services__content">

            <span class="sub__title service__subtitle">
                WHAT WE SERVE
            </span>

            <h1 class="title service__title">

                Your Favorite
                <br/>
                <span>
                    Food Delivery Partner
                </span>

            </h1>

            <div class="paragraph">
                Danzee Food is the best. Besides the many and delicious meals, the service is also very good, especially
                in the very fast delivery. I highly recommend Fudo to you.
            </div>

        </div>


        {/* <!-- services__img--> */}


        <div class="services__img">

            <img src="img/favorite.png" alt=""/>

        </div>

    </div>




















    <div class="menu__section">


        <div class="sub__title">
            OUR MENU
        </div>

        <h1 class="title menu__title">
            Menu That Always Makes You Fall In Love
        </h1>

        


        <div class="menu__cards">

        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>

    </div>


















    {/* <!-- app__section -->
    <!-- app__section --> */}


    <div class="app__section">

        <div class="app__content">


            <span class="sub__title">
                Download App
            </span>

            <h1 class="title menu__title">
                Get Started With Danzee Food Today!
            </h1>

            <div class="paragraph">
                Discover food wherever and whenever and get your food delivered quickly.
            </div>

            <a href="@" class="btn">
                Get The App
            </a>


        </div>


        <div class="app__image">
            <img src="img/downloadapp.png" alt=""/>
        </div>


    </div>
    </>
  )
}

export default Index









