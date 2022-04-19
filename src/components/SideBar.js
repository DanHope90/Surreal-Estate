import React, { useState } from "react";
import "../styles/SideBar.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";

function SideBar() {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const [query, setQuery] = useState("");

  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="search-title" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h2>Filter City</h2>
      <ul className="sidebar-ul-city">
        <Link to={buildQueryString("query", { city: "Manchester" })}>
          Manchester
        </Link>
        <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        <Link to={buildQueryString("query", { city: "Sheffield" })}>
          Sheffield
        </Link>
        <Link to={buildQueryString("query", { city: "Liverpool" })}>
          Liverpool
        </Link>
      </ul>
      <h2>Sort By</h2>
      <ul className="sidebar-ul-sort">
        <Link to={buildQueryString("sort", { price: -1 })}>
          Price Ascending
        </Link>
        <Link to={buildQueryString("sort", { price: 1 })}>
          Price Descending
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
