import React from 'react'
import './cart.css'
function Cart() {
  return (
  <div className="cart__section">
  <div className="order__detail">
    <h3 className="subheading">Order Details</h3>
    <div className="calculation">
      <h3 className="calculationheading">Your Order</h3>
      <div className="calculate">
        <div className="subtotal">
          <span className="text">Sub Total :</span>
          <span className="price">Rs 0</span>
        </div>
        <div className="subtotal">
          <span className="text">Delivery Fee :</span>
          <span className="price">Rs 0</span>
        </div>
        <hr />
        <div className="total">
          <span className="text">Total :</span>
          <span className="price">Rs 0</span>
        </div>
      </div>
      <div className="checkout">
        <div className="items__price">
          <span className="items">5 items</span>
          <span className="price">| 9600</span>
        </div>
        <a href="address.html" className="checkout__btn">
          Checkout
          <i className="bx bx-chevron-right" />
        </a>
      </div>
      <span className="triangle-1" />
      <span className="triangle-2" />
    </div>
  </div>
  <div className="cart__items">
    <h3 className="subheading">
      <i className="bx bx-chevron-left" />
      Items From Your Cart
    </h3>
    <img src="img/cartempty.png" alt="empty cart img" />
    <p className="paragraph">You haven’t added any items in bucket yet</p>
    <a href="menu.html" className="btn">
      Explore Menu
    </a>
  </div>
</div>

  )
}

export default Cart