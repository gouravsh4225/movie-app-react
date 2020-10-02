import React from "react";
import "./HomePageRow.css";

function HomePageRow({ headerTitle, children }) {
  return (
    <div className="grid-container">
      <h1 className="grid-title">{headerTitle}</h1>
      {children}
    </div>
  );
}
export default HomePageRow;
