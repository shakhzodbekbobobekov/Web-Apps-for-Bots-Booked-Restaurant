import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="user">
        <div className="user__information">
          <div className="user__img">
            <Link to="/">
              <img src="./images/user.png" alt="user tog'o" />
            </Link>
          </div>
          <div className="user__about">
            <p>Good Morning ✌️</p>
            <h3>Andrew Ainsly</h3>
          </div>
        </div>
        <div className="user__products">
          <Link to="/">
            <img
              className="bell-icon"
              src="./images/bell.svg"
              alt="bell(qo'ng'iroq)"
            />
          </Link>
          <Link to="/">
            <img
              className="heart-icon"
              src="./images/heart.svg"
              alt="heart(yurak)"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
