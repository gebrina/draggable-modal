import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { HomePage } from "./HomePage";

describe("<HomePage/>", () => {
  it("should render HomePage", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <HomePage />
      </MemoryRouter>
    );

    const pageTitle = screen.getByRole("heading", { level: 1 });
    const showModalButton = screen.getByRole("button", {
      name: /show modal/i,
    });

    expect(pageTitle.textContent).toBe("Draggable Modal");
    expect(showModalButton).toBeTruthy();
  });
});
