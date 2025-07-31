import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button, TButtonProps } from "./Button";

describe("<Button/>", () => {
  it("Should render with a label & call onClick when it is clicked.", () => {
    const handleClick = vi.fn();
    const btnProps: TButtonProps = {
      label: "Click Here",
      variant: "primary",
      onClick: handleClick,
    };

    render(<Button {...btnProps} />);
    const button = screen.getByRole("button", { name: btnProps.label });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
