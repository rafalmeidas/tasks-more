import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TextArea } from "../../../components/textarea";

describe("<TextArea />", () => {
  it("should render the TextArea component with provided props", () => {
    render(<TextArea placeholder="Enter your text" rows={4} />);
    const textAreaElement = screen.getByPlaceholderText("Enter your text");
    expect(textAreaElement).toBeInTheDocument();
    expect(textAreaElement).toHaveAttribute("rows", "4");
  });

  it("should have the correct CSS class applied", () => {
    render(<TextArea />);
    const textAreaElement = screen.getByRole("textbox");
    expect(textAreaElement).toHaveClass("textarea");
  });
});
