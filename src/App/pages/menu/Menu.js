import React, { useState, useEffect } from "react";
import "./menu.css";
import { Config } from "../../constant/Index";

function Menu() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [catadata, setCatadata] = useState([]);
  const [sortOption, setSortOption] = useState("price");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Config.serverUrlProduct);
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDatacata = async () => {
      try {
        const response = await fetch(Config.serverUrlCategories);
        const jsonData = await response.json();
        setCatadata(jsonData.data);
        console.log(catadata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchDatacata();
  }, []);

  const toggleOptions = () => {
    setShow((prevState) => !prevState);
  };

  if (loading) {
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const sortItems = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const sortedItems = currentItems.sort((a, b) => {
    if (sortOption === "newest") {
      return b.id - a.id;
    } else if (sortOption === "oldest") {
      return a.id - b.price;
    } else if (sortOption === "price") {
      return a.price - b.price;
    } else if (sortOption === "rating") {
      return b.stars - a.stars;
    }
    return 0;
  });

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
          <a  href="@" className="category active">
              All
              </a>
            {catadata.map((item) => (
              <a key={item.id} href="@" className="category">
                {item.name.en}
              </a>
            ))}
          </div>

          <div className="filter">
            <span className="sort">Sort by :</span>
            <div className="selected" id="sort" onClick={toggleOptions}>
              <span>{sortOption}</span>
              <i className="bx bx-chevron-down" />
            </div>
            {show && (
              <div className="options" id="options">
                <span className="option" onClick={() => sortItems("rating")}>
                  Rating
                </span>
                <span className="option" onClick={() => sortItems("price")}>
                  Price
                </span>
                <span className="option" onClick={() => sortItems("newest")}>
                  Newest
                </span>
                <span className="option" onClick={() => sortItems("oldest")}>
                  Oldest
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="menu__cards">
          {sortedItems.map((item) => (
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
                  <span>{item.cooking_time} mins</span>
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

export default Menu;
