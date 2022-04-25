import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import { MdLocationCity } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { RiMoneyPoundCircleFill } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

function PropertyCard({
  title,
  city,
  type,
  bedrooms,
  bathrooms,
  price,
  email,
  userID,
  onSaveProperty,
  _id,
}) {
  return (
    <div className="property-card">
      <div className="title" data-testid="card-title">
        {title}
      </div>
      <div className="city" data-testid="card-city">
        <MdLocationCity />
        {city}
      </div>
      <div className="type" data-testid="card-type">
        <FaHouseUser /> {type}
      </div>
      <div className="bedrooms" data-testid="card-bedrooms">
        <IoBedSharp />
        Bedrooms:{bedrooms}
      </div>
      <div className="bathrooms" data-testid="card-bathrooms">
        <GiBathtub />
        Bathrooms:{bathrooms}
      </div>
      <div className="price" data-testid="card-price">
        <RiMoneyPoundCircleFill />
        {price}
      </div>
      <div className="email" data-testid="cardId-email">
        <a href={`mailto:${email}`}>
          <AiOutlineSend /> Email
        </a>
      </div>
      {userID && (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" onClick={() => onSaveProperty(_id)} className="save">
          <i className=" fas fa-star" />
          <TiTickOutline /> Save
        </a>
      )}
    </div>
  );
}

export default PropertyCard;

PropertyCard.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  type: PropTypes.string,
  bedrooms: PropTypes.number,
  bathrooms: PropTypes.number,
  price: PropTypes.number,
  email: PropTypes.string,
  userID: PropTypes.number,
  onSaveProperty: PropTypes.func,
  _id: PropTypes.number,
}.isRequired;
