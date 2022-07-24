import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

function User() {
  return (
    <div className="container">
      <div className="user-container">
        <div className="user-title">
          <Link to="/">
            <img
              className="user__leaf-icon"
              src="./images/leaf.svg"
              alt="user-leaf icon"
            />
            <span>Profile</span>
          </Link>
          <img
            className="user__edit-icon"
            src="./images/user-edit-blur.svg"
            alt="user-edit-blur"
          />
        </div>
        <div className="user-about">
          <div className="user__user-img">
            <img className="user-img" src="./images/user.png" alt="" />
            <img className="edit-icon" src="./images/edit-icon.svg" alt="" />
          </div>
          <div className="user-information">
            <h1>Andrew Ainsley</h1>
            <p>+11 111 11 1111 1111 </p>
          </div>
        </div>
        <div className="user-parameter">
          <ul className="user-parameter__item">
            <li className="user-parameter__items">
              <Link to="/a">
                <div>
                  <img src="./images/user-pen-solid.svg" alt="" />
                  <span>EditProfile</span>
                </div>
                <div className="right">
                  <img src="./images/right.svg" alt="" />
                </div>
              </Link>
            </li>

            <li className="user-parameter__items">
              <Link to="/a">
                <div>
                  <img src="./images/location.svg" alt="" />
                  <span>Address</span>
                </div>
                <div className="right">
                  <img src="./images/right.svg" alt="" />
                </div>
              </Link>
            </li>

            <li className="user-parameter__items">
              <Link to="/a">
                <div>
                  <img src="./images/bell.svg" alt="" />
                  <span>Notification</span>
                </div>
                <div className="right">
                  <img src="./images/right.svg" alt="" />
                </div>
              </Link>
            </li>

            <li className="user-parameter__items">
              <Link to="/a">
                <div>
                  <img src="./images/credit-card-icon.svg" alt="" />
                  <span>Payment</span>
                </div>
                <div className="right">
                  <img src="./images/right.svg" alt="" />
                </div>
              </Link>
            </li>

            <li className="user-parameter__items">
              <Link to="/a">
                <div>
                  <img src="./images/user-securty-icon.svg" alt="" />
                  <span>Security</span>
                </div>
                <div className="right">
                  <img src="./images/right.svg" alt="" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;
