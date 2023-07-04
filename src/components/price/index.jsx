import React from "react";
import "./price.css";

const Price = ({ newPrice, oldPrice }) => {
  return (
    <div className="price">
      <span>{newPrice}</span>
      <del>{oldPrice}</del>
    </div>
  );
};

export default Price;
