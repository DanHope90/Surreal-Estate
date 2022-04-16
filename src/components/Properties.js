/* eslint-disable react/jsx-no-useless-fragment */
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

function Properties() {
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

  return (
    <>
      <div>
        <SideBar />
      </div>
      <div className="properties">
        {properties.map((property) => (
          <div key={property.id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </>
  );
}

export default Properties;
