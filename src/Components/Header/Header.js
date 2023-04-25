import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div>
      <header>
        <div className="logo-container">
          {" "}
          <img
            src="https://logowik.com/content/uploads/images/imdb-internet-movie-database5351.jpg"
            className="logo"
          ></img>
        </div>
        <div className="searchcontainer">
          <input
            type="text"
            className="header-input"
            placeholder="🔍 Search"
          ></input>
        </div>

        <div className="buttoncontainer">
          <p>IMDB Pro</p>
          <p>Sign In</p>
          <p>watchlist</p>
          <p>EN</p>
        </div>
      </header>
    </div>
  );
}
