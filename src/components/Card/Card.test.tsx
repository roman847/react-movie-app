import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("Card renders", () => {
    render(<Card title={"The witcher"} />);
    expect(screen.getByText("The witcher")).toBeInTheDocument();
  });
  it("Card renders without data", () => {
    render(<Card />);
    expect(screen.queryByText("The witcher")).toBeNull();
  });
  it("Card snapshot", () => {
    const card = render(<Card title={"The witcher"} />);
    expect(card).toMatchSnapshot();
  });
});
