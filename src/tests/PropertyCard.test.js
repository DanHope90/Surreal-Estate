import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    fields: {
      title: "Stub Title",
      city: "Stub City",
      type: "Stub Type",
      bedrooms: 2,
      bathrooms: 1,
      price: 100000,
      email: "mock@email.com",
    },
  };

  it("renders the correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.fields.title}
        city={validProps.fields.city}
        type={validProps.fields.type}
        bedrooms={validProps.fields.bedrooms}
        bathrooms={validProps.fields.bathrooms}
        price={validProps.fields.price}
        email={validProps.fields.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct prop values", () => {
    const { getByText, getByTestId } = render(
      <PropertyCard
        title={validProps.fields.title}
        city={validProps.fields.city}
        type={validProps.fields.type}
        bedrooms={validProps.fields.bedrooms}
        bathrooms={validProps.fields.bathrooms}
        price={validProps.fields.price}
        email={validProps.fields.email}
      />
    );
    expect(getByText("Stub Title")).toHaveClass("title");
    expect(getByText("Stub City")).toHaveClass("city");
    expect(getByText("Stub Type")).toHaveClass("type");
    expect(getByText(1)).toHaveClass("bathrooms");
    expect(getByText(2)).toHaveClass("bedrooms");
    expect(getByText(100000)).toHaveClass("price");
    expect(getByTestId("cardId-email")).toHaveClass("email");
  });
});
