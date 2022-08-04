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
      </div>
    </div>
  );
}

export default Booking;
