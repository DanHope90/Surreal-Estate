import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProperty.css";
import Alert from "./Alert";
import "../styles/Alert.css";

function AddProperty() {
  const initialState = {
    fields: {
      title: "",
      city: "",
      type: "",
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
        <div className="div-alert">
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
        <label htmlFor="title">
          Property Description
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="e.g. 2 bed flat Manchester"
          />
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester"> Manchester</option>
              <option value="Liverpool"> Liverpool</option>
              <option value="Sheffield"> Sheffield</option>
              <option value="Leeds"> Leeds</option>
            </select>
            <label htmlFor="type">
              Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat"> Flat</option>
                <option value="Detached"> Detached</option>
                <option value="Semi-Detached"> Semi-Detached</option>
                <option value="Terraced"> Terraced</option>
                <option value="End-of-Terraced"> End of Terraced</option>
                <option value="Cottage"> Cottage</option>
                <option value="Bungalow"> Bungalow</option>
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
                placeholder="e.g. surreal-estate@email.com"
              />
            </label>
          </label>
          <button className="AddProp-Button" type="submit">
            Add
          </button>
        </label>
      </form>
    </div>
  );
}

export default AddProperty;
