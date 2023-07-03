import React, { useState, useEffect, useRef } from "react";
import "./menu.css";
import { Config } from "../../constant/Index";
import { getLocalStorage } from "../../Component/local_storage";
function Menu() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [catadata, setCatadata] = useState([]);
  const [sortOption, setSortOption] = useState("Price");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const popupRef = useRef(null);

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

    const fetchDatacata = async () => {
      try {
        const response = await fetch(Config.serverUrlCategories);
        const jsonData = await response.json();
        setCatadata(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    fetchDatacata();
  }, []);

  const toggleOptions = (event) => {
    event.stopPropagation();
    setShow((prevState) => !prevState);
  };
  
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShow(false);
      }
    };
  
    if (show) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
  
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [show]);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredItems =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category_id === selectedCategory);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const sortItems = (option) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const sortedItems = currentItems.sort((a, b) => {
    if (sortOption === "Newest") {
      return b.id - a.id;
    } else if (sortOption === "Oldest") {
      return a.id - b.price;
    } else if (sortOption === "Price") {
      return a.price - b.price;
    } else if (sortOption === "Rating") {
      return b.stars - a.stars;
    }
    return 0;
  });

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="menu__section">
        <div className="category__filter">
          <div className="categories">
            <div
              className={`category ${
                selectedCategory === "All" ? "active__categary" : ""
              }`}
              onClick={() => handleCategoryClick("All")}
            >
              All
            </div>
            {catadata.map((item) => (
              <div
                key={item.id}
                className={`category ${
                  selectedCategory === item.id ? "active__categary" : ""
                }`}
                onClick={() => handleCategoryClick(item.id)}
              >
                {item.name.en}
              </div>
            ))}
          </div>

          <div className="filter">
            <span className="sort">Sort by:</span>
            <div className="selected" id="sort" onClick={(event) => toggleOptions(event)}>
              <span>{sortOption}</span>
              <i className="bx bx-chevron-down" />
            </div>
            {show && (
              <div className="options" id="options" ref={popupRef}>
                <span className="option" onClick={() => sortItems("Rating")}>
                  Rating
                </span>
                <span className="option" onClick={() => sortItems("Price")}>
                  Price
                </span>
                <span className="option" onClick={() => sortItems("Newest")}>
                  Newest
                </span>
                <span className="option" onClick={() => sortItems("Oldest")}>
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
              {getLocalStorage(Config.userDzFoodToken) ? (
              <div className="heart">
                <i className="fa-regular fa-heart" />
              </div>): null
              }
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
