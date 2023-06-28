import React, { useState, useEffect } from "react";
import "./menu.css";
import { Config } from "../../constant/Index";

function Menu() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  const [catadata, setCatadata] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(Config.serverUrlProduct);
      const jsonData = await response.json();
      setData(jsonData.data);
      // console.log(data);
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
      console.log("catadata"); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDatacata();
    fetchData();
  }, []);

  const toggleOptions = () => {
    setShow((prevState) => !prevState);
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
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
          {data.map((data) => (
            <div key={data.id} className="card">
              {/* card rating */}
              <div className="rating">
                <h4>{data?.stars}</h4>
                <i className="fa-solid fa-star" />
                <span>({data?.cooking_time}+)</span>
              </div>
              <div className="heart">
                <i className="fa-regular fa-heart"  />
              </div>
              <img
                src={`https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${data.image}`}
                alt="product img"
              />
              <div className="menu__content">
                <div className="title__price">
                  <h3 className="card__title">{data?.title?.en}</h3>
                  <span className="price">
                    Rs {data?.price ? data?.price : 0}
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
      </div>
    </>
  );
}

export default Menu;
