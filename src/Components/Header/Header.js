import React from "react";

import movieLogo from "../../assets/images/movie-logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-heading">
        React Movie
        <img src={movieLogo} alt="movie-log" className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
