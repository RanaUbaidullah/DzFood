import React from 'react';
import { Config } from "../../constant/Index";

function AddRemoveFav(props) {
  const addFavoriteProduct = async (productId) => {
    try {
      const token = '241|99nrXNA44oarRLr4QFJueCwNxSabtqMuMlBAeDlV';
      await fetch(`${Config.serverUrl}api/user-favourites`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productid: productId }),
      });

      // Handle any further actions after adding the favorite product
    } catch (error) {
      console.error("Error adding favorite product:", error);
    }
  };

  const removeFavoriteProduct = async (productId) => {
    try {
      const token = '241|99nrXNA44oarRLr4QFJueCwNxSabtqMuMlBAeDlV';
      await fetch(`${Config.serverUrl}api/user-favourites/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Handle any further actions after removing the favorite product
    } catch (error) {
      console.error("Error removing favorite product:", error);
    }
  };

  const onClickonf = () => {
    if (props.add) {
      addFavoriteProduct(props.id);
    } else {
      removeFavoriteProduct(props.id);
    }
  };

  return (
    <div className="heart" onClick={onClickonf}>
      <i className="fa-solid fa-heart" />
    </div>
  );
}

export default AddRemoveFav;
