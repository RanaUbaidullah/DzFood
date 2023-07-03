import React, { useState, useEffect } from "react";
import "./menu.css";
import { Config } from "../../constant/Index";

function Menu() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Config.serverUrlProduct);
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleOptions = () => {
    setShow((prevState) => !prevState);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleImageLoad = (image) => {
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="menu__section">
        <div className="category__filter">
          <div className="categories">
            <a href="@" className="category active">
              ALL
            </a>
            <a href="@" className="category">
              Burger
            </a>
            <a href="@" className="category">
              Pizza
            </a>
            <a href="@" className="category">
              Icecream
            </a>
            <a href="@" className="category">
              Deserts
            </a>
            <a href="@" className="category">
              Deserts
            </a>
          </div>
          <div className="filter">
            <span className="sort">Sort by :</span>
            <div className="selected" id="sort" onClick={toggleOptions}>
              <span>Price</span>
              <i className="bx bx-chevron-down" />
            </div>

            {show ? (
              <div className="options" id="options">
                <span className="option">Rating</span>
                <span className="option">Price</span>
                <span className="option">Newest</span>
                <span className="option">Oldest</span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="menu__cards">
        {currentItems.map((item) => (
            <div key={item.id} className="card">
              <div className="rating">
                <h4>{item?.stars}</h4>
                <i className="fa-solid fa-star" />
                <span>({item?.cooking_time}+)</span>
              </div>
              <div className="heart">
                <i className="fa-regular fa-heart" />
              </div>
              <img
                onLoad={() => handleImageLoad(item.image)}
                src={handleImageLoad(item.image)}
                alt="product img"
              />
              <div className="menu__content">
                <div className="title__price">
                  <h3 className="card__title">{item?.title?.en}</h3>
                  <span className="price">
                    Rs {item?.price ? item?.price : 0}
                  </span>
                </div>
                <div className="time">
                  <i className="fa-solid fa-stopwatch" />
                  <span>10-15 mins</span>
                </div>
                <div className="food__type">
                  <span className="type">Burger</span>
                  <span className="type">Chicken</span>
                  <span className="type">Fast Food</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {pageNumbers.map((number) => (
            <span 
              key={number}
              className={`page-number ${currentPage === number ? "active__pagination" : ""}`}
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

export default Menu;
