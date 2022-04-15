import React from "react";
// import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";

function Properties() {
  return (
    <div className="properties">
      <PropertyCard
        title="Big House"
        type="House"
        bedrooms="5"
        bathrooms="2"
        city="Manchester"
        price="200000"
        email="house@gmail.com"
      />
    </div>
  );
}

export default Properties;
