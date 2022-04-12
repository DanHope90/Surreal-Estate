import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();

    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(alert).toMatchSnapshot();
  });

  it("displays success message", () => {
    const { getByText, asFragment } = render(<Alert message="Success!" success />);
    const alert = asFragment();

    expect(getByText(/Success/).textContent).toBe("Success!");
    expect(alert).toMatchSnapshot();
  });

  it("does not render when message is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
