import React from "react";
import "./info.css";
import Button from "../../elements/button";
import Breadcrumbs from "../../elements/breadcrumbs";
import Price from "../price";

const Info = () => {
  return (
    <div className="info">
      <Breadcrumbs>Preview</Breadcrumbs>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <Price newPrice="$149.99" oldPrice="$169.99" />
      <Button />
    </div>
  );
};

export default Info;
