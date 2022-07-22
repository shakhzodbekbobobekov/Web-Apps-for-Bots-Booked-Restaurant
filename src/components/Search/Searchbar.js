import React from "react";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="container">
      <form className="form">
        <label>
          <input type="text" placeholder="🔍" />
          <img className="setting-icon" src="./images/setting.svg" alt="" />
        </label>
      </form>
    </div>
  );
}

export default Searchbar;
