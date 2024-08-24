import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../Components/NavBar";

describe("NavBar Component", () => {
  test("renders NavBar with default props", () => {
    render(<NavBar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders NavBar with custom olProps", () => {
    render(<NavBar olProps={{ "data-testid": "custom-ol" }} />);
    const olElement = screen.getByTestId("custom-ol");
    expect(olElement).toBeInTheDocument();
  });

  test("renders NavBar.Item correctly", () => {
    render(
      <NavBar>
        <NavBar.Item>Item 1</NavBar.Item>
      </NavBar>
    );
    const itemElement = screen.getByText("Item 1");
    expect(itemElement).toBeInTheDocument();
  });
});
