import React, { useEffect, useState, Fragment } from "react";
import "./cart.css";

function CartItem({ item, cartItems, setCartItems }) {
  const [showAccessories, setShowAccessories] = useState(false);

  const handleToggleAccessories = () => {
    setShowAccessories(!showAccessories);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: updatedQuantity < 0 ? 0 : updatedQuantity,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleDecreaseAccessoryQuantity = (itemId, accessoryId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedAccessories = item.accessories.map((accessory) => {
          if (accessory.id === accessoryId) {
            const updatedQuantity = accessory.quantity - 1;
            return {
              ...accessory,
              quantity: updatedQuantity < 0 ? 0 : updatedQuantity,
            };
          }
          return accessory;
        });
        return {
          ...item,
          accessories: updatedAccessories,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleIncreaseAccessoryQuantity = (itemId, accessoryId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedAccessories = item.accessories.map((accessory) => {
          if (accessory.id === accessoryId) {
            return {
              ...accessory,
              quantity: accessory.quantity + 1,
            };
          }
          return accessory;
        });
        return {
          ...item,
          accessories: updatedAccessories,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <Fragment key={item.id}>
      <div className="cart__item">
        <div className="cart__card__detail">
          <div className="card__img">
            <img src={item.image} alt="" />
          </div>

          <div className="card__detail">
            <div className="title__price">
              <h2 className="card__title">{item.title.en}</h2>

              <span className="card__price">
                ${item.price ? item.price : 0}
                <i
                  className="cart__trash fa-solid fa-trash"
                  onClick={() => handleRemoveItem(item.id)}
                ></i>
              </span>
            </div>
            <div className="add__remove">
              <div
                className="minus"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                <i className="fa-solid fa-minus" />
              </div>
              <span className="quantity">{item.quantity}</span>
              <div
                className="plus"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                <i className="fa-solid fa-plus" />
              </div>
            </div>

            <button className="detail__btn btn" onClick={handleToggleAccessories}>
              Details
              <i className="bx bx-chevron-down"></i>
            </button>

            <span className="card__price total__price">
              ${item.quantity * item.price}
            </span>
          </div>
        </div>
        {showAccessories && item.accessories.length > 0 && (
          <div className="card__accessories">
            {item.accessories.map((accessory) => (
              <Fragment key={accessory.id}>
                <div className="acces__addrem">
                  <span>
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleToggleAccessory(
                          item.id,
                          accessory.id,
                          accessory.price
                        )
                      }
                    />
                    {accessory.title.en}
                  </span>
                  <div className="add__remove">
                    <div
                      className="minus"
                      onClick={() =>
                        handleDecreaseAccessoryQuantity(item.id, accessory.id)
                      }
                    >
                      <i className="fa-solid fa-minus" />
                    </div>
                    <span className="quantity">{accessory.quantity}</span>
                    <div
                      className="plus"
                      onClick={() =>
                        handleIncreaseAccessoryQuantity(item.id, accessory.id)
                      }
                    >
                      <i className="fa-solid fa-plus" />
                    </div>
                  </div>
                </div>
                <span className="accessories__price">
                  {accessory.quantity * accessory.price}$
                </span>
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleToggleAccessory = (itemId, accessoryId, accessoryPrice) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedAccessories = item.accessories.map((accessory) => {
          if (accessory.id === accessoryId) {
            const updatedChecked = !accessory.checked;
            return {
              ...accessory,
              checked: updatedChecked,
            };
          }
          return accessory;
        });
        return {
          ...item,
          accessories: updatedAccessories,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.quantity * item.price;
      item.accessories.forEach((accessory) => {
        if (accessory.checked) {
          totalPrice += accessory.quantity * accessory.price;
        }
      });
    });
    return totalPrice;
  };

  return (
    <div className="cart__section">
      <div className="order__detail">
        <div className="calculation">
          <h3 className="calculationheading">Your Order</h3>
          <div className="calculate">
            <div
              className="subtotal">
              <span className="text">Sub Total :</span>
              <span className="price">Rs 0</span>
            </div>
            <div className="subtotal">
              <span className="text">Delivery Fee :</span>
              <span className="price">Rs 50</span>
            </div>
            <hr />
            <div className="total">
              <span className="text">Total :</span>
              <span className="price">Rs {calculateTotalPrice()}</span>
            </div>
          </div>
          <div className="checkout">
            <div className="items__price">
              <span className="items">{cartItems.length} items</span>
              <span className="price">| {calculateTotalPrice()}</span>
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
            <p className="paragraph">
              You haven't added any items in your cart yet.
            </p>
            <a href="menu.html" className="btn">
              Explore Menu
            </a>
          </>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
