import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "containers/header";

describe("Header", () => {
  test("header title", async () => {
    render(<Header />);
    expect(screen.queryByText<HTMLElement>("home24")).toBeInTheDocument();
  });
});
