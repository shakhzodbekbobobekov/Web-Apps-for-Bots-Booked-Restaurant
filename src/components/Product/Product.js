import React from "react";
import style from "./Product.module.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="container">
      <div className={style["product-slider"]}>
        <img src="./images/images-product/1.jpg" alt="" />
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={style["product-title"]}>
        <h1>Rayhon milliy taomlar</h1>
        <img src="./images/heart.svg" alt="heart svg product" />
      </div>
      <div className="product__buy">
        <img
          className="degree-star"
          src="./images/star half.svg"
          alt="yulduzcha"
        />
        <span>4.9 (4.79 reviews)</span>
      </div>
      <div className={style["product-description"]}>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
          voluptatum perspiciatis praesentium officia provident, nesciunt porro
          iusto possimus necessitatibus ad dicta.
        </p>
      </div>
      <div className={style["social-network"]}>
        <ul className={style["social-network__item"]}>
          <li className={style["social-network__items"]}>
            <Link to="/">
              <img src="./images/icon-facebook.svg" alt="icon-facebook.svg" />
            </Link>
          </li>
          <li className={style["social-network__items"]}>
            <Link to="/">
              <img src="./images/icon-instagram.svg" alt="icon-instagram.svg" />
            </Link>
          </li>
          <li className={style["social-network__items"]}>
            <Link to="/">
              <img src="./images/icon-telegram.svg" alt="icon-telegram.svg" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.booking}>
        <Link className={style["booking-links"]} to="/calendar">
          Booking
        </Link>
      </div>
    </div>
  );
}

export default Product;
