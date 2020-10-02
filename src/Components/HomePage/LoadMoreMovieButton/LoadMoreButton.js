import React from "react";
import "./LoadMoreButton.css";

function LoadMoreButton({ buttonText, clickEvent }) {
  return (
    <button className="btn btn-primary" onClick={clickEvent}>
      {buttonText}
    </button>
  );
}

export default LoadMoreButton;
