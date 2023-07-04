import React, { useState, useEffect } from "react";
import { Config } from "../../constant/Index";
import Popup from "../../Component/popups/Popup";
function Favourite() {
  const [data, setData] = useState([]);
  const [fdata, setFdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState()
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
      {/* <Popup/> */}
      <Popup sendid={id}/>
        {/* <Popup/> */}
      <div className="menu__section">
        <h1 style={{ color: "#FE734D" }}>Favourite</h1>
        <div className="menu__cards">
          {fdata.map((fav) => {
            const item = productLookup[fav?.product_id];
            if (item) {
              return (
                <div key={item.id} className="card" onClick={()=>(openPopup(item.id))}>
                  {/* card rating */}
                  <div className="rating"> 
                    <h4>{item.stars}</h4>
                    <i className="fa-solid fa-star" />
                    <span>({item.cooking_time}+)</span> 
                  </div>
                  <div className="heart">
                    <i className="fa-regular fa-heart" />
                  </div>
                  <img
                    src={`https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/${item.image}`}
                    alt="product img"
                  />
                  <div className="menu__content">
                    <div className="title__price">
                      <h3 className="card__title">{item.title.en}</h3>
                      <span className="price">
                        Rs {item.price ? item.price : 0}
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
