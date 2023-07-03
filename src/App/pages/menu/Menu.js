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
  const [sortOption, setSortOption] = useState("Price");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetching product data and category data on component mount
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

  const toggleOptions = () => {
    setShow((prevState) => !prevState);
  };

  // Show a loader while fetching data
  if (loading) {
    return (
      <img
        className="loader"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt="logo"
      />
    );
  }

  // Function to handle image load and provide a fallback image if image is not available
  const handleImageLoad = (image) => {
    if (image == null) {
      return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
    } else {
      return `https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${image}`;
    }
  };

  // Function to handle category selection and reset pagination to the first page
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Filtering the items based on the selected category
  const filteredItems = selectedCategory === "All" ? data : data.filter(item => item.category_id === selectedCategory);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle sorting and reset pagination to the first page
  const sortItems = (Option) => {
    setSortOption(Option);
    setCurrentPage(1);
  };

  // Sorting the current items based on the selected sorting option
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

  // Function to handle pagination and set the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generating an array of page numbers based on the total items and items per page
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
              className={`category ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryClick("All")}
            >
              All
            </div>
            {catadata.map((item) => (
              <div
                key={item.id}
                className={`category ${selectedCategory === item.id ? "active" : ""}`}
                onClick={() => handleCategoryClick(item.id)}
              >
                {item.name.en}
              </div>
            ))}
          </div>

          <div className="filter">
            <span className="sort">Sort by:</span>
            <div className="selected" id="sort" onClick={toggleOptions}>
              <span>{sortOption}</span>
              <i className="bx bx-chevron-down" />
            </div>
            {show && (
              <div className="options" id="options">
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
