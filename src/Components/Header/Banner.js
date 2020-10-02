import React from "react";

import {
  POSTER_SIZE,
  BASE_IMAGE_URL,
  BACKDROP_SIZE,
} from "../../Services/config";
import "./Banner.css";

function Banner({ bannerData: { title, backdrop_path, overview } }) {
  const backImageUrl = `${BASE_IMAGE_URL}${BACKDROP_SIZE}${backdrop_path}`;
  return (
    <div
      className="heroimage-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 1)), url('${backImageUrl}')`,
      }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-overview">{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
