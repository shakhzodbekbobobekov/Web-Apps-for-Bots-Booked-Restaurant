import React from "react";
import "./Booking.css";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div className="container">
      <div className="booking">
        <div className="booking-header">
          <div className="booking-header-title">
            <img src="./images/leaf.svg" alt="" width={30} height={30} />
            <span>My Orders</span>
          </div>
          <div className="booking-setting">
            <div className="booking-search">
              <div class="booking-search-box">
                <input
                  type="text"
                  class="booking-search-txt"
                  name=""
                  placeholder="search...."
                />
                <Link to="" class="booking-search-btn">
                  <img
                    src="./images/search-booking.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-category">
          <span className="category active">Active</span>
          <span className="category completed">Completed</span>
        </div>

        <div className="booking-menu">
          <ul className="booking-menu-items">
            <li className="booking-menu-item">
              <img src="./images/product-img.png" alt="" width={120} />
              <div className="booking-menu-description">
                <h2>Player Plant</h2>
                <span className="booking-time">08:00 - 18:00</span>
                <div className="booking-void">
                  <span className="booking-data">05.08.2022</span>
                  <button className="booking-cancellation">Cancel</button>
                </div>
              </div>
            </li>
            {/* ITEM */}
            <li className="booking-menu-item">
              <img src="./images/product-img.png" alt="" width={120} />
              <div className="booking-menu-description">
                <h2>Player Plant</h2>
                <span className="booking-time">08:00 - 18:00</span>
                <div className="booking-void">
                  <span className="booking-data">05.08.2022</span>
                  <button className="booking-cancellation">Cancel</button>
                </div>
              </div>
            </li>
            {/* ITEM */}
            <li className="booking-menu-item">
              <img src="./images/product-img.png" alt="" width={120} />
              <div className="booking-menu-description">
                <h2>Player Plant</h2>
                <span className="booking-time">08:00 - 18:00</span>
                <div className="booking-void">
                  <span className="booking-data">05.08.2022</span>
                  <button className="booking-cancellation">Cancel</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Booking;
