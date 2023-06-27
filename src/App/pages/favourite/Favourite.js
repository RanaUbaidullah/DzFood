import React, { useState, useEffect } from "react";
import { Config } from "../../constant/Index";

function Favourite() {
  const [data, setData] = useState();
  const [fdata, setFdata] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      console.log(fdata)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDatap();  
    fetchDataf();
  }, []);

  useEffect(() => {
    if (data && fdata) {
      setIsLoading(false);
    }
  }, [data, fdata]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="menu__section">
        <h1 style={{ color: "#FE734D" }}>Favourite</h1>
        <div className="menu__cards">
          {fdata.map((fav) => {
            const matchedData = data.find((item) => item.id === fav.id);
            if (matchedData) {
              return (
                <div key={matchedData.id} className="card">
                  {/* card rating */}
                  <div className="rating">
                    <h4>{matchedData.stars}</h4>
                    <i className="fa-solid fa-star" />
                    <span>({matchedData.cooking_time}+)</span>
                  </div>
                  <div className="heart">
                    <i
                      className="fa-regular fa-heart"
                    />
                  </div>
                  <img
                    src={`https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${matchedData.image}`}
                    alt="product img"
                  />
                  <div className="menu__content">
                    <div className="title__price">
                      <h3 className="card__title">{matchedData.title.en}</h3>
                      <span className="price">
                        Rs {matchedData.price ? matchedData.price : 0}
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
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Favourite;
