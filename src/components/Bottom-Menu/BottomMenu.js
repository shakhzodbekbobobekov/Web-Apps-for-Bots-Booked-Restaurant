import React from "react";
import { Link } from "react-router-dom";
import "./BottomMenu.css";

function BottomMenu() {
  return (
    <div className="container bottom-menu">
      <ul className="bottom-menu__items">
        <li className="bottom-menu__item">
          <Link to="/">
            <img src="./images/home.svg" alt="home images" />
          </Link>
        </li>
        <li className="bottom-menu__item">
          <Link to="/booking">
            <img src="./images/shop.svg" alt="shop images" />
          </Link>
        </li>
        <li className="bottom-menu__item">
          <Link to="/user">
            <img src="./images/person.svg" alt="person images" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BottomMenu;
