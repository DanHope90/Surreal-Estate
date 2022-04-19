import React from "react";
import "../styles/SideBar.css";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

function SideBar() {
  return (
    <div className="sidebar">
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
      {/* ?sort={"<field_to_sort_by>":1} (1 is sort ascending, -1 is sort descending). */}
    </div>
  );
}

export default SideBar;
