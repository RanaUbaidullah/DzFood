import React from 'react'
import './card.css'
function card() {
  return (
  <>
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

    <span class="add">Add to Cart</span>

</div>


</div>

  </>
  )
}

export default card