import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Main from "./Main";

describe("Card component", () => {
  it("Card renders", async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    await waitFor(() => {
      screen.getByAltText("poster");
    });
  });
});
