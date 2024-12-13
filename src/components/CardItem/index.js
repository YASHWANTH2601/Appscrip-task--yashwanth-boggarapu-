/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";
import "./index.css";
const CardItem = ({ products }) => {
  const { id, category, description, image, price, rating, title } = products;
  const [likes, setLikes] = useState(false);
  return (
    <li className="cardItem">
      <img className="productImg" src={image} />
      <div className="productDetails">
        <div>
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <div>
          <button className="likeBtn">
            {likes ? (
              <FcLike size={30} onClick={() => setLikes(!likes)} />
            ) : (
              <CiHeart size={30} onClick={() => setLikes(!likes)} />
            )}
          </button>
        </div>
      </div>
      <p>{category}</p>
    </li>
  );
};

export default CardItem;
