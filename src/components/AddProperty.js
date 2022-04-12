import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProperty.css";
import Alert from "./Alert";
import "../styles/Alert.css";

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      Type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:3000/api/v1/PropertyListing`, { ...fields })
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch(() => {
        alert({
          message: "Server error. Please try again.",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    const changedName = event.target.name;
    const changedValue = event.target.value;

    setFields({
      ...fields,
      // eslint-disable-next-line spaced-comment
      [changedName]: changedValue, //why array ?
    });
  };

  return (
    <div className="AddProp">
      <form className="Form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Property Description
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="Type here.."
          />
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="manchester"> Manchester</option>
              <option value="liverpool"> Liverpool</option>
              <option value="sheffield"> Sheffield</option>
              <option value="leeds"> Leeds</option>
            </select>
            <label htmlFor="type">
              Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="flat"> Flat</option>
                <option value="detached"> Detached</option>
                <option value="semi-detached"> Semi-Detached</option>
                <option value="terraced"> Terraced</option>
                <option value="end-of-terraced"> End of Terraced</option>
                <option value="cottage"> Cottage</option>
                <option value="bungalow"> Bungalow</option>
              </select>
            </label>
            <label htmlFor="bedrooms">
              Bedrooms
              <select
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              >
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
              </select>
            </label>
            <label htmlFor="bathrooms">
              Bathrooms
              <select
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              >
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
              </select>
            </label>
            <label htmlFor="price">
              Price
              <input
                type="number"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
                placeholder="0"
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
                placeholder="Type here..."
              />
            </label>
          </label>
          <button className="AddProp-Button" type="submit">
            Add
          </button>
        </label>
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
}

export default AddProperty;
