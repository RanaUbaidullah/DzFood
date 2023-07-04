import React, { useState, useEffect } from "react";
import "./menu.css";
import { Config } from "../../constant/Index";
import { getLocalStorage } from "../../Component/local_storage";
import Popup from "../../Component/popups/Popup";
function Menu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [catadata, setCatadata] = useState([]);
  const [sortOption, setSortOption] = useState("Price");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [id, setId] = useState()
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleImageLoad = (image) => {
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

  const sortItems = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  const filteredItems =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category_id === selectedCategory);

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOption === "Rating") {
      return b.stars - a.stars;
    } else if (sortOption === "Latest") {
      return b.id - a.id;
    } else if (sortOption === "Price") {
      return a.price - b.price;
    } else if (sortOption === "Oldest") {
      return a.id - b.id;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedItems.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return (
      <img
        className="loader"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="logo"
      />
    );
  }
  const popup = document.getElementById("popup");
  function openPopup(sid){
    setId(sid)
    console.log(id)
    console.log(sid)
    if (popup) {
      popup.style.visibility = "visible";
    }
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

          <div className="sort__filter">
            <span>Sort by:</span>
            <select className="filter" onChange={sortItems} value={sortOption}>
              <option value="Rating">Rating</option>
              <option value="Latest">Latest</option>
              <option value="Price">Price</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
        {/* <Popup/> */}
        <Popup sendid={id}/>
        {/* <Popup/> */}
        <div className="menu__cards" >
          {currentItems.map((item) => (
            <div key={item.id} className="card" onClick={()=>(openPopup(item.id))}>
              
              <div className="rating">
                <h4>{item?.stars}</h4>
                <i className="fa-solid fa-star" />
                <span>({item.review_count})</span>
              </div>
              {getLocalStorage(Config.userDzFoodToken) ? (
                <div className="heart">
                  <i className="fa-regular fa-heart" />
                </div>
              ) : null}
              <img
                onLoad={() => handleImageLoad(item.image)}
                src={handleImageLoad(item.image)}
                alt="product img"
                loading="lazy"
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
                  <span>{item?.cooking_time} mins</span>
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
