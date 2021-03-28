import { render, screen } from "@testing-library/react";
import SpecialLock from "../SpecialLock";

describe("<SpecialLock />", () => {
  const props = {
    accessible: true,
    name: "test lock",
  };

  it("renders lock name", () => {
    render(<SpecialLock {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
  });

  it("renders correct accesible status if yes", () => {
    render(<SpecialLock {...props} />);

    expect(screen.getByText("Yes")).toBeInTheDocument();
  });

  it("renders correct accesible status if no", () => {
    render(<SpecialLock {...props} accessible={false} />);

    expect(screen.getByText("No")).toBeInTheDocument();
  });
});
