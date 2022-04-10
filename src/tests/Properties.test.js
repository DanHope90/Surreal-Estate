import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  const { asFragment } = render(<Properties />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
