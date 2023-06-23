import React from 'react'
import './popup.css'
function Popup() {
  return (
    <>
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
    </>
  )
}

export default Popup