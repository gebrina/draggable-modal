import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Modal, TModalProps } from "./Modal";

describe("<Modal/>", () => {
  it("Shoudl render with title, content and footer if 'visible' is truthy.", () => {
    const handleClose = vi.fn();

    const modalProps: TModalProps = {
      title: "Modal Title",
      visible: true,
      children: <div>Modal content</div>,
      footer: <div>Modal footer</div>,
      onClose: handleClose,
    };

    render(<Modal {...modalProps} />);

    expect(screen.getByText(modalProps.title)).toBeTruthy();
    expect(screen.getByText(/modal content/i)).toBeTruthy();
    expect(screen.getByText(/modal footer/i)).toBeTruthy();

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("Should not render if 'visible' is falsy.", () => {
    const modalProps: TModalProps = {
      title: "Modal Title",
      visible: false,
    } as TModalProps;

    render(<Modal {...modalProps} />);
    const modalTitle = screen.queryByText(modalProps.title);
    expect(modalTitle).not.toBeTruthy();
  });
});
