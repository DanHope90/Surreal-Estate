import React from "react";
// import PropTypes from "prop-types";
import PropertyCard from "./AddProperty";

function Properties() {
  // const propertyProps = {
  //   title: "3 bed house",
  //   city: "Manchester",
  //   type: "Semi-Detached",
  //   bedrooms: "3",
  //   bathrooms: "2",
  //   price: "200000",
  //   email: "dummy@email.com",
  // };
  return (
    <div className="property-card">
      <h2>Properties Page</h2>
      <PropertyCard
        title="big house"
        type="house"
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
