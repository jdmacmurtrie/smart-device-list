import { fireEvent, render, screen } from "@testing-library/react";
import ToggleButton from "../ToggleButton";

describe("<ToggleButton />", () => {
  const props = {
    handleClick: jest.fn(),
    isToggledOn: false,
    label: "test",
  };

  it("clicks the button", () => {
    render(<ToggleButton {...props} />);

    const label = screen.getByText(props.label);

    fireEvent.click(label);

    expect(props.handleClick).toBeCalled();
  });

  it("displays 'on' class", () => {
    render(<ToggleButton {...props} isToggledOn />);

    const button = screen.getByText(props.label);

    expect(button).toHaveClass("toggle-button--on");
  });

  it("does not display 'on' class", () => {
    render(<ToggleButton {...props} />);

    const button = screen.getByText(props.label);

    expect(button).not.toHaveClass("toggle-button--on");
  });
});
