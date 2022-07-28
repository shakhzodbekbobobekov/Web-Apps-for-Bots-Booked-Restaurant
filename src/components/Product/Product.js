import React from "react";
import style from "./Product.module.css";

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
        <div className="product__buy">
          <img
            className="degree-star"
            src="./images/star half.svg"
            alt="yulduzcha"
          />

          <span>4.8 </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
