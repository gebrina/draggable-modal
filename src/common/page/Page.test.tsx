import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Page } from "./Page";

describe("<Page/>", () => {
  it("Should render a page and passed childrens", () => {
    render(
      <Page>
        <div>
          <h1>Home Page</h1>
        </div>
      </Page>
    );

    const pageHeader = screen.getByRole("heading", { level: 1 });
    expect(pageHeader).toBeTruthy();
  });
});
