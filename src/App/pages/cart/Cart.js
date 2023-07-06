import React, { useEffect, useState } from "react";
import "./cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  function renderCartItem(item) {
    return (
      <div key={item.id} className="cart__item">
        <img src={item.image} alt="product image" />
        <div className="item__details">
          <h4>{item.title.en}</h4>
          <p>Price: Rs {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Size: {item.size}</p>
          {item.accessories.length > 0 && (
            <div className="accessories">
              <h5>Accessories:</h5>
              <ul>
                {item.accessories.map((accessory) => (
                  <li key={accessory.id}>
                    {accessory.title.en} (Quantity: {accessory.quantity}) {accessory.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="cart__section">
      <div className="order__detail">
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
        {cartItems.length === 0 ? (
          <>
            <img src="img/cartempty.png" alt="empty cart img" />
            <p className="paragraph">You haven't added any items in your cart yet.</p>
            <a href="menu.html" className="btn">
              Explore Menu
            </a>
          </>
        ) : (
          cartItems.map(renderCartItem)
        )}
      </div>
    </div>
  );
}

export default Cart;
