import React from 'react'
import './Home.css'
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


















    {/* <!-- menu__section --> */}
    {/* <!-- menu__section -->/ */}


    <div class="menu__section">

        <div class="sub__title">
            OUR MENU
        </div>

        <h1 class="title menu__title">
            Menu That Always Makes You Fall In Love
        </h1>

        <div class="card__popup" id="popup">

            <i class="fa-solid fa-xmark crossicon" id="crossicon"></i>

            <div class="popup__product">

                <div class="popup__content">


                    <img class="popupimg" src="img/cardimg.png" alt="img" />

                    <h1 class="popup__title">
                        Ground Beef Tacos
                    </h1>

                    <p class="paragraph">
                        Our pride and joy: hand-breaded and fried to
                        perfection in house. 9 pcs of Colonel’s Signature
                        Crispy Fried Chicken. It's finger lickin' good
                    </p>

                    <div class="add__remove">

                        <div class="plus">
                            <i class="fa-solid fa-plus"></i>
                        </div>


                        <span class="">
                            1
                        </span>


                        <div class="minus">
                            <i class="fa-solid fa-minus"></i>
                        </div>

                    </div>

                    <h2 class="popup__price">

                        Product Price:

                        <span>
                            $105.99
                        </span>

                        <div class="btns">

                            <a href="@" class="btn">
                                Add to Cart
                            </a>

                            <a href="@" class="btn">
                                Order Now
                            </a>

                        </div>

                    </h2>

                </div>

                <div class="accessories">

                    <div class="radios">

                        <div class="radio">

                            <input type="radio" class="radio__input" name="Large"/>
                            <label for="input">
                                Large
                            </label>

                        </div>

                        <div class="radio">

                            <input type="radio" class="radio__input" name="Large"/>
                            <label for="input">
                                Medium
                            </label>

                        </div>

                        <div class="radio">

                            <input type="radio" class="radio__input" name="Large"/>
                            <label for="input">
                                Small
                            </label>

                        </div>

                    </div>

                    <div class="accessory">

                        <span>
                            Product Accessories
                        </span>

                        <div class="input__accessories">

                            <div class="input">

                                <div class="checkbox">
                                    <input type="checkbox"/>
                                    <span>
                                        Pepsi Regular
                                    </span>
                                </div>

                                <span class="input__price">
                                    (+RS:80)
                                </span>


                            </div>

                            <div class="input">

                                <div class="checkbox">
                                    <input type="checkbox"/>
                                    <span>
                                        Pepsi Regular
                                    </span>
                                </div>

                                <span class="input__price">
                                    (+RS:80)
                                </span>


                            </div>

                            <div class="input">

                                <div class="checkbox">
                                    <input type="checkbox"/>
                                    <span>
                                        Pepsi Regular
                                    </span>
                                </div>

                                <span class="input__price">
                                    (+RS:80)
                                </span>


                            </div>

                            <div class="input">

                                <div class="checkbox">
                                    <input type="checkbox"/>
                                    <span>
                                        Pepsi Regular
                                    </span>
                                </div>

                                <span class="input__price">
                                    (+RS:80)
                                </span>


                            </div>

                            <div class="input">

                                <div class="checkbox">
                                    <input type="checkbox"/>
                                    <span>
                                        Pepsi Regular
                                    </span>
                                </div>

                                <span class="input__price">
                                    (+RS:80)
                                </span>


                            </div>

                        </div>

                    </div>


                </div>

            </div>

            <div class="review__section">

                <div class="btn__title">

                    <h1 class="review__title">
                        Product Review
                    </h1>

                    <a href="review.html" class="btn">
                        Give Your Review
                    </a>

                </div>

                <div class="reviews">

                    <div class="review">

                        <p class="paragraph">
                            "As a satisfied customer of [SaaS Provider], I want to share my positive experience with
                            others. Their software as a service platform has greatly improved the efficiency and
                            productivity of our business operations. The cloud-based solution is user-friendly and
                            regularly updated to stay ahead of the technology curve."
                        </p>

                        <img class="reviewimg" src="img/reviewprofile.png" alt=""/>


                    </div>

                    <div class="name__rating">

                        <div class="reviewrating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <span class="reviewname">
                            Savannah Nguyen
                        </span>

                        <span class="reviewtype">
                            Customer
                        </span>

                    </div>

                    <div class="sliders">

                        <div class="slider"></div>
                        <div class="slider active__slider"></div>
                        <div class="slider"></div>

                    </div>



                </div>






            </div>

        </div>


        <div class="menu__cards">

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt="img" />

                <div class="menu__content" id="product__card">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>

            <div class="card">

                {/* <!-- card rating --> */}

                <div class="rating">

                    <h4>
                        4.5
                    </h4>

                    <i class="fa-solid fa-star"></i>
                    <span>
                        (25+)
                    </span>
                </div>

                <div class="heart">
                    <i class="fa-regular fa-heart" onclick="changeClass(this)"></i>
                </div>

                <img src="img/cardimg.png" alt=""/>

                <div class="menu__content">

                    <div class="title__price">


                        <h3 class="card__title">
                            Ground Beef Tacos
                        </h3>

                        <span class="price">
                            Rs 225
                        </span>

                    </div>

                    <div class="time">
                        <i class="fa-solid fa-stopwatch"></i>
                        <span>
                            10-15 mins
                        </span>
                    </div>

                    <div class="food__type">

                        <span class="type">
                            Burger
                        </span>

                        <span class="type">
                            Chicken
                        </span>

                        <span class="type">
                            Fast Food
                        </span>

                    </div>

                </div>


            </div>


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