import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { NotFoundPage } from "./NotFoundPage";

describe("<NotFoundPage/>", () => {
  it("should render NotFoundPage", () => {
    render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <NotFoundPage />
      </MemoryRouter>
    );

    const pageTitle = screen.getByRole("heading", { level: 1 });
    const notFoundMessage = screen.getByText(
      /honestly speaking nothing is here🫡!/i
    );
    const homePageLink = screen.getByRole("link", {
      name: /go to home page/i,
    });

    expect(pageTitle.textContent).toBe("Page Not Found");
    expect(notFoundMessage).toBeTruthy();
    expect(homePageLink).toBeTruthy();
  });
});
