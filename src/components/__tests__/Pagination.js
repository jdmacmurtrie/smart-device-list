import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "../Pagination";

describe("<Pagination />", () => {
  const props = {
    devices: [
      { id: "1", name: "test1", type: "special-lock" },
      { id: "2", name: "test2", type: "special-lock" },
      { id: "3", name: "test3", type: "special-lock" },
      { id: "4", name: "test4", type: "special-lock" },
      { id: "5", name: "test5", type: "special-lock" },
      { id: "6", name: "test6", type: "special-lock" },
    ],
  };

  it("renders five items", () => {
    render(<Pagination {...props} />);

    const listItems = screen.getAllByTestId("list-item");

    expect(listItems.length).toBe(5);
  });

  it("clicks the Next button", () => {
    render(<Pagination {...props} />);

    const nextButton = screen.getByText("Next");

    fireEvent.click(nextButton);

    let listItems = screen.getAllByTestId("list-item");

    expect(listItems.length).toBe(1);

    // check if disabled
    fireEvent.click(nextButton);

    listItems = screen.getAllByTestId("list-item");

    expect(listItems.length).toBe(1);
  });

  it("clicks the Previous button", () => {
    render(<Pagination {...props} />);

    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");

    // check if disabled
    fireEvent.click(previousButton);

    let listItems = screen.getAllByTestId("list-item");

    expect(listItems.length).toBe(5);

    fireEvent.click(nextButton);
    fireEvent.click(previousButton);

    listItems = screen.getAllByTestId("list-item");

    expect(listItems.length).toBe(5);
  });
});
