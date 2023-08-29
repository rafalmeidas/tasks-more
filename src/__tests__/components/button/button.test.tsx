import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Button } from "../../..//components/button";

describe("<Button />", () => {
  it("should renders with the correct text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should applies the correct styles", () => {
    render(<Button>Styled Button</Button>);
    const buttonElement = screen.getByText("Styled Button");
    expect(buttonElement).toHaveClass("button"); // Certifique-se de que 'button' seja a classe correta
  });

  it("shoul calls the provided onClick function when clicked", async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    userEvent.click(buttonElement);

    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
