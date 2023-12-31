import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";
import './breadcrums.css'
function Breadcrums({ product }) {
  return (
    <div className="breadcrums">
      HOME <img src={arrow_icon} alt="ev" /> SHOP{" "}
      <img src={arrow_icon} alt="" /> {product.category}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default Breadcrums;