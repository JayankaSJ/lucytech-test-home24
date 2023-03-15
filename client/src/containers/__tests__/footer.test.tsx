import React from "react";
import { screen, render } from "@testing-library/react";
import Footer from "containers/footer";

describe("Footer", () => {
  test("footer text", async () => {
    render(<Footer />);
    expect(
      screen.queryByText<HTMLElement>(
        "Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten."
      )
    ).toBeInTheDocument();
  });
});
