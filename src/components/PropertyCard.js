import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";

function PropertyCard(props) {
  const { title, city, type, bedrooms, bathrooms, price, email } = props;
  return (
    <div className="property-card">
      <div className="title">{title}</div>
      <div className="city">{city}</div>
      <div className="type">{type}</div>
      <div className="bedrooms">{bedrooms}</div>
      <div className="bathrooms">{bathrooms}</div>
      <div className="price">{price}</div>
      <div className="email" data-testid="cardId-email">
        <a href={`mailto:${email}`}>Send Email</a>
      </div>
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
