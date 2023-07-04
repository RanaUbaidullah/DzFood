import React, { useEffect, useState } from "react";
import { Config } from "../../constant/Index";
import "./popup.css";
function Popup(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${Config.serverUrlProduct}/${props.sendid}`
        );
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.sendid]);

  const popup = document.getElementById("popup");
  function closePopup() {
    if (popup) {
      popup.style.visibility = "hidden";
    }
  }

  const handleImageLoad = (image) => {
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

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
             <img
             className="popupimg"
                onLoad={() => handleImageLoad(data?.image)}
                src={handleImageLoad(data?.image)}
                alt="product img"
            
              />
            <h1 className="popup__title">{data?.title?.en}</h1>
            <p className="paragraph">
            {data?.detail?.en}
            </p>
            <div className="add__remove">
              <div className="plus">
                <i className="fa-solid fa-plus" />
              </div>
              <span className=""> 1 </span>
              <div className="minus">
                <i className="fa-solid fa-minus" />
              </div>
            </div>
            <h2 className="popup__price">
              Product Price:
              <span>{data?.price ? data?.price : 0}</span>
              <div className="btns">
                <a href="#" className="btn">
                  Add to Cart
                </a>
                <a href="#" className="btn">
                  Order Now
                </a>
              </div>
            </h2>
          </div>
          <div className="accessories">
            <div className="radios">
              <div className="radio">
                <input type="radio" name="Large" />
                <label htmlFor="input"> Large </label>
              </div>
              <div className="radio">
                <input type="radio" name="Large" />
                <label htmlFor="input"> Medium </label>
              </div>
              <div className="radio">
                <input type="radio" name="Large" />
                <label htmlFor="input"> Small </label>
              </div>
            </div>
            {data?.accessories?.[0] ? <div className="accessory">
              <span> Product Accessories </span>
              <div className="input__accessories">

                {data?.accessories?.map((item)=>(
                    <div key={item?.id} className="popup__input">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span>{item?.accessory.title.en}</span>
                  </div>
                  <span className="input__price"> ({item?.accessory?.price}: {Config.currency}) </span>
                </div>
                ))}
                
                
              </div>
            </div>: null}
            
          </div>
        </div>
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
                "As a satisfied customer of [SaaS Provider], I want to share my
                positive experience with others. Their software as a service
                platform has greatly improved the efficiency and productivity of
                our business operations. The cloud-based solution is
                user-friendly and regularly updated to stay ahead of the
                technology curve."
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
      </div>
    </>
  );
}

export default Popup;
