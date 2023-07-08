import React, { useState, useEffect } from "react";
import { Config } from "../../constant/Index";
import Popup from "../../Component/popups/Popup";
import AddRemoveFav from "../../Component/add-remove-fav/AddRemoveFav";

function Favourite() {
  const [fdata, setFdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(null);
  const [fav, setFav] = useState(0); // Initialize fav state to 0

  useEffect(() => {
    fetchDataf();
  }, [fav]);

  const fetchDataf = async () => {
    try {
      const token = '241|99nrXNA44oarRLr4QFJueCwNxSabtqMuMlBAeDlV';
      const response = await fetch(`${Config.serverUrl}api/user-favourites`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await response.json();
      setFdata(jsonData.data);
      setIsLoading(false);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (fdata.length > 0) {
      setIsLoading(false);
    }
  }, [fdata]);

  if (isLoading) {
    return (
      <img
        className="loader"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="logo"
      />
    );
  }

  const handleImageLoad = (image) => {
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

  const openPopup = (sid) => {
    setId(sid);
    console.log(id);
    console.log(sid);
    const popup = document.getElementById("popup");
    if (popup) {
      popup.style.visibility = "visible";
    }
  };

  const handleFavClick = (productId) => {
    setFav((prevFav) => prevFav + 1); // Increment fav state
    // You can add further logic here if needed
  };

  return (
    <>
      <Popup sendid={id} />
      <div className="menu__section">
        <h1 style={{ color: "#FE734D" }}>Favourite</h1>
        <div className="menu__cards">
          {fdata.map((item) => {
            const { product } = item;
            if (!product) {
              return null;
            }
            return (
              <div key={product.id} className="card">
                <div className="rating">
                  <h4>{product.stars}</h4>
                  <i className="fa-solid fa-star" />
                  <span>({product.review_count})</span>
                </div>
                <AddRemoveFav onClick={() => handleFavClick(product.id)} id={product.id} add={!item.created_at} />
                <img
                  onClick={() => openPopup(product.id)}
                  onLoad={() => handleImageLoad(product.image)}
                  src={handleImageLoad(product.image)}
                  alt="product img"
                />
                <div className="menu__content" onClick={() => openPopup(product.id)}>
                  <div className="title__price">
                    <h3 className="card__title">{product.title.en}</h3>
                    <span className="price">Rs {product.price || 0}</span>
                  </div>
                  <div className="time">
                    <i className="fa-solid fa-stopwatch" />
                    <span>{product.cooking_time} mins</span>
                  </div>
                  <div className="food__type">
                    <span className="type">Burger</span>
                    <span className="type">Chicken</span>
                    <span className="type">Fast Food</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Favourite;
