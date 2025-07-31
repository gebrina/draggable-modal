import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox, TCheboxProps } from "./Checkbox";

describe("<Checkbox/>", () => {
  it("Should render chekbox passed label and id", () => {
    const checkboxProps = {
      label: "Are you robot?",
      id: "check-id",
    } as TCheboxProps;

    const { container } = render(<Checkbox {...checkboxProps} />);
    expect(container.querySelector(`#${checkboxProps.id}`)).toBeTruthy();
    screen.getByLabelText(checkboxProps.label);
  });

  it("Should call 'onChange' with toggled 'checked' state", () => {
    const handleChange = vi.fn();

    const checkboxProps = {
      label: "Are you robot?",
      id: "check-id",
      onChange: handleChange,
      checked: false,
    } as TCheboxProps;

    render(<Checkbox {...checkboxProps} />);
    screen.debug();
    const input = screen.getByLabelText<HTMLInputElement>(checkboxProps.label);
    expect(input.checked).toBeFalsy();

    fireEvent.click(input);

    expect(input.checked).toBeFalsy();
    expect(handleChange).toHaveBeenCalledWith(!checkboxProps.checked);
  });
});
