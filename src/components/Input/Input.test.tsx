import React from "react";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Input from "./Input";

const onChange = jest.fn();

describe("Input component", () => {
  it("Input renders", () => {
    render(<Input action={onChange} placeHolder={"Search"} value="" />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("Input renders without placeholder", () => {
    render(<Input action={onChange} value="" />);
  });

  it("OnChage works", () => {
    render(<Input action={onChange} placeHolder={"Search"} value="" />);

    userEvent.type(screen.getByRole("textbox"), "The Witcher");

    expect(onChange).toHaveBeenCalledTimes(11);
  });
});
