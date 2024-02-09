import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader__container">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
