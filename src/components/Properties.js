/* eslint-disable react/jsx-no-useless-fragment */
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

function Properties(props) {
  // eslint-disable-next-line react/prop-types
  const { userID } = props;

  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({
          message: "Axios promise rejected",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = (propertyID) => {
    axios.post(`http://localhost:3000/api/v1/Favourite`, {
      propertyListing: propertyID,
      fbUserId: userID,
    });
  };

  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="properties">
        {properties.map((property) => (
          <div key={property.id} className="col">
            <PropertyCard
              {...property}
              userID={userID}
              onSaveProperty={handleSaveProperty}
            />
          </div>
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </>
  );
}

Properties.propType = {
  userID: PropTypes.number,
}.isRequired;

export default Properties;
