import React from "react";
import "./imageProduct.css";

const ImageProduct = () => {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet="image-product-desktop.jpg" />
      <img
        src="image-product-mobile.jpg"
        alt="product Gabrielle Essence Eau De Parfum"
      />
    </picture>
  );
};

export default ImageProduct;
