import React, { useState, useEffect } from "react";
import "./menu.css";
import { Config } from "../../constant/Index";
import { getLocalStorage } from "../../Component/local_storage";
import Popup from "../../Component/popups/Popup";

function Menu() {
  // State declarations
  const [data, setData] = useState([]); // Holds product data
  const [loading, setLoading] = useState(true); // Indicates if data is being loaded
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(8); // Number of items per page
  const [catadata, setCatadata] = useState([]); // Holds category data
  const [sortOption, setSortOption] = useState("Price"); // Selected sort option
  const [selectedCategory, setSelectedCategory] = useState("All"); // Selected category
  const [id, setId] = useState(); // Holds the ID of the popup item

  useEffect(() => {
    // Fetch product data from the server
    const fetchData = async () => {
      try {
        const response = await fetch(Config.serverUrlProduct);
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    // Fetch category data from the server
    const fetchDatacata = async () => {
      try {
        const response = await fetch(Config.serverUrlCategories);
        const jsonData = await response.json();
        setCatadata(jsonData.data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchData(); // Fetch product data
    fetchDatacata(); // Fetch category data
  }, []); 

  const handleCategoryClick = (category) => {
    // Update selected category and reset current page
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleImageLoad = (image) => {
    // Handle image loading and return the image URL
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

  const sortItems = (event) => {
    // Update selected sort option and reset current page
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  // Filter and sort items based on selected category and sort option
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
    // Update current page
    setCurrentPage(pageNumber);
  };

  // Generate an array of page numbers for pagination
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

  const openPopup = (sid) => {
    // Open the popup and set the ID
    setId(sid);
    console.log(id);
    console.log(sid);
    if (popup) {
      popup.style.visibility = "visible";
    }
  };

  return (
<>
  <div className="menu__section">
    {/* Category filter */}
    <div className="category__filter">
      <div className="categories">
        {/* All category */}
        <div
          className={`category ${
            selectedCategory === "All" ? "active__categary" : ""
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </div>

        {/* Dynamic category  */}
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

      {/* Sort filter */}
      <div className="sort__filter">
        <span>Sort by:</span>
        <select
          className="filter"
          onChange={sortItems}
          value={sortOption}
        >
          <option className="optionS" value="Rating">
            Rating
          </option>
          <option className="optionS" value="Latest">
            Latest
          </option>
          <option className="optionS" value="Price">
            Price
          </option>
          <option className="optionS" value="Oldest">
            Oldest
          </option>
        </select>
      </div>
    </div>

    {/* Popup */}
    <Popup sendid={id} />

    {/* Menu cards */}
    <div className="menu__cards">
      {/* Render menu items */}
      {currentItems.map((item) => (
        <div key={item.id} className="card">
          <div className="rating">
            <h4>{item?.stars}</h4>
            <i className="fa-solid fa-star" />
            <span>({item.review_count})</span>
          </div>

          {/* Conditional heart icon */}
          {getLocalStorage(Config.userDzFoodToken) ? (
            <div className="heart">
              <i className="fa-regular fa-heart" />
            </div>
          ) : null}

          {/* Menu item image */}
          <img
            onClick={() => openPopup(item.id)}
            onLoad={() => handleImageLoad(item.image)}
            src={handleImageLoad(item.image)}
            alt="product img"
            loading="lazy"
          />

          {/* Menu item content */}
          <div className="menu__content" onClick={() => openPopup(item.id)}>
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

            {/* Food types */}
            <div className="food__type">
              <span className="type">Burger</span>
              <span className="type">Chicken</span>
              <span className="type">Fast Food</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="pagination">
      {/* Render page numbers */}
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={`${currentPage === number ? "active__pagination" : ""}`}
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
