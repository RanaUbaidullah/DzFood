import React, { useEffect, useState } from "react";
import { Config } from "../../constant/Index";
import "./popup.css";

function Popup(props) {
  // State for product data and loading status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for product image
  const [img, setImg] = useState();

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // State for accessory quantities
  const [accessoryQuantities, setAccessoryQuantities] = useState({});

  // Calculate initial product price
  const initialProductPrice = data?.price || 0;


  // State for product size
 const [productSize, setProductSize] = useState("Large");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Config.serverUrlProduct}/${props.sendid}`);
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
        setImg(
          jsonData?.data?.image
            ? Config.digitalOceanLinkProductLargeImg + jsonData?.data?.image
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.sendid]); // Fetch product data on component mount and when props.sendid changes


  function addToCart() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // Check if the product already exists in the cart
    const existingItem = cartItems.find((item) => item.id === data.id);
    if (existingItem) {
      alert("Product already in cart!");
      return;
    }
  
    const newItem = {
      id: data.id,
      title: data.title,
      price: data.price,
      quantity: quantity,
      size: productSize,
      image: img,
      accessories: data.accessories.map((item) => {
        const accessoryData = item.accessory;
        const accessoryQuantity = accessoryQuantities[item.id] || 0;
        return {
          id: accessoryData.id,
          title: accessoryData.title,
          price: accessoryData.price,
          quantity: accessoryQuantity,
        };
      }),
    };
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Item added to cart!");
  }
  

console.log(loading)


  function closePopup() {
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.visibility = "hidden";
    }
  } // Close the popup

  function handleQuantityDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  } // Decrease the quantity

  function handleQuantityIncrease() {
    setQuantity(quantity + 1);
  } // Increase the quantity

  function handleAccessoryQuantityDecrease(accessoryId) {
    if (accessoryQuantities[accessoryId] > 1) {
      setAccessoryQuantities((prevQuantities) => ({
        ...prevQuantities,
        [accessoryId]: prevQuantities[accessoryId] - 1,
      }));
    }
  } // Decrease the quantity of a specific accessory

  function handleAccessoryQuantityIncrease(accessoryId) {
    setAccessoryQuantities((prevQuantities) => ({
      ...prevQuantities,
      [accessoryId]: (prevQuantities[accessoryId] || 1) + 1,
    }));
  } // Increase the quantity of a specific accessory

  return (
    <>
      <div className="card__popup" id="popup">
        <i
          className="fa-solid fa-xmark crossicon"
          id="crossicon"
          onClick={closePopup}
        />
        <div className="popup__product">
          <div className="popup__content">
            <img className="popupimg" src={img} alt="product img" />
            <h1 className="popup__title">{data?.title?.en}</h1>
            <p className="paragraph">{data?.detail?.en}</p>
            <div className="add__remove">
              <div className="minus" onClick={handleQuantityDecrease}>
                <i className="fa-solid fa-minus" />
              </div>
              <span className="">{quantity}</span>
              <div className="plus" onClick={handleQuantityIncrease}>
                <i className="fa-solid fa-plus" />
              </div>
            </div>
            <h2 className="popup__price">
              Product Price:
              <span>{data?.price ? data?.price * quantity : initialProductPrice}{Config.currency}</span>
              <div className="btns">
              <button className="btn" onClick={addToCart}>
            Add to Cart
          </button>
                <a href="order_place_detail" className="btn">
                  Order Now
                </a>
              </div>
            </h2>
          </div>
          <div className="accessories">
          <div className="radios">
            <div className="radio">
              <input
                type="radio"
                name="productSize"
                value="Large"
                checked={productSize === "Large"}
                onChange={() => setProductSize("Large")}
              />
              <label htmlFor="input"> Large </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="productSize"
                value="Medium"
                checked={productSize === "Medium"}
                onChange={() => setProductSize("Medium")}
              />
              <label htmlFor="input"> Medium </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                name="productSize"
                value="Small"
                checked={productSize === "Small"}
                onChange={() => setProductSize("Small")}
              />
              <label htmlFor="input"> Small </label>
            </div>
            </div>
            {data?.accessories?.[0] ? (
              <div className="accessory">
                <span> Product Accessories </span>
                <div className="input__accessories">
                  {data?.accessories?.map((item) => (
                    <div key={item?.id} className="popup__input">
                      <div className="checkbox">
                        <input type="checkbox" />
                        <span>{item?.accessory.title.en}</span>
                      </div>
                      <div className="add__remove">
                        <div
                          className="minus"
                          onClick={() =>handleAccessoryQuantityDecrease(item?.id)}>
                          <i className="fa-solid fa-minus" />
                        </div>
                        <span className="">
                          {accessoryQuantities[item?.id] || 0}
                        </span>
                        <div
                          className="plus"
                          onClick={() =>
                            handleAccessoryQuantityIncrease(item?.id)
                          }
                        >
                          <i className="fa-solid fa-plus" />
                        </div>
                      </div>
                      <span className="input__price">
                        (
                        {item?.accessory?.price}
                        : {Config.currency})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* review__section */}

        {/* <div className="review__section">
          <div className="review__section">
            <div className="btn__title">
              <h1 className="review__title">Product Review</h1>
              <a href="review.html" className="btn">
                {" "}
                Give Your Review{" "}
              </a>
            </div>
            <div className="reviews">
              <div className="review">
                <p className="paragraph">
                  "As a satisfied customer of [SaaS Provider], I want to share
                  my positive experience with others. Their software as a
                  service platform has greatly improved the efficiency and
                  productivity of our business operations. The cloud-based
                  solution is user-friendly and regularly updated to stay ahead
                  of the technology curve."
                </p>
                <img className="reviewimg" src="img/reviewprofile.png" alt="" />
              </div>
              <div className="name__rating">
                <div className="reviewrating">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <span className="reviewname"> Savannah Nguyen </span>
                <span className="reviewtype"> Customer </span>
              </div>
              <div className="sliders">
                <div className="slider" />
                <div className="slider activeslider" />
                <div className="slider" />
              </div>
            </div>
          </div>
        </div> */}

                {/* review__section */}
      </div>
    </>
  );
}

export default Popup;
