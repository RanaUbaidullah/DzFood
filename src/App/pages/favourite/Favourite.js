import React, { useState, useEffect } from "react";
import { Config } from "../../constant/Index";
import Popup from "../../Component/popups/Popup";

function Favourite() {
  const [data, setData] = useState([]);
  const [fdata, setFdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [id, setId] = useState(null);

  const fetchDatap = async () => {
    try {
      const response = await fetch(Config.serverUrlProduct);
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataf = async () => {
    try {
      const token = '241|99nrXNA44oarRLr4QFJueCwNxSabtqMuMlBAeDlV';
      const response = await fetch(Config.serverUrlMe, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jsonData = await response.json();
      setFdata(jsonData.data.user.favourites);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDatap();
    fetchDataf();
  }, []);

  useEffect(() => {
    if (data.length > 0 && fdata.length > 0) {
      setIsLoading(false);
    }
  }, [data, fdata]);

  if (isLoading) {
    return (
      <img
        className="loader"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="logo"
      />
    );
  }

  const productLookup = {};
  data.forEach((item) => {
    productLookup[item.id] = item;
  });

  const handleImageLoad = (image) => {
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

  const popup = document.getElementById("popup");
  function openPopup(sid){
    setId(sid)
    console.log(id)
    console.log(sid)
    if (popup) {
      popup.style.visibility = "visible";
    }
  }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fdata
    .map((fav) => productLookup[fav?.product_id])
    .slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from({ length: Math.ceil(fdata.length / itemsPerPage) }, (_, i) => i + 1);


  

  return (
    <>
      <Popup sendid={id} />
      <div className="menu__section">
        <h1 style={{ color: "#FE734D" }}>Favourite</h1>
        <div className="menu__cards">
          {currentItems.map((item) => {
            if (item) {
              return (
                <div key={item.id} className="card" >
                  <div className="rating">
                    <h4>{item.stars}</h4>
                    <i className="fa-solid fa-star" />
                    <span>({item.review_count})</span>
                  </div>
                  <div className="heart">
                    <i className="fa-regular fa-heart" />
                  </div>
                  <img
                  onClick={() => openPopup(item.id)}
                    onLoad={() => handleImageLoad(item.image)}
                    src={handleImageLoad(item.image)}
                    alt="product img"
                  />
                  <div className="menu__content" onClick={() => openPopup(item.id)}>
                    <div className="title__price">
                      <h3 className="card__title">{item.title.en}</h3>
                      <span className="price">Rs {item.price ? item.price : 0}</span>
                    </div>
                    <div className="time">
                      <i className="fa-solid fa-stopwatch" />
                      <span>{item?.cooking_time} mins</span>
                    </div>
                    <div className="food__type">
                      <span className="type">Burger</span>
                      <span className="type">Chicken</span>
                      <span className="type">Fast Food</span>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="pagination">
          {pageNumbers.map((number) => (
            <span
              key={number}
              className={`page-number ${
                currentPage === number ? "active__pagination" : ""
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favourite;
