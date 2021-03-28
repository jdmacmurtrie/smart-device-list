// import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import DeviceList from "../DeviceList";
import { store } from "../../store";

describe("<DeviceList />", () => {
  it("renders heading", () => {
    render(
      <Provider store={store}>
        <DeviceList />
      </Provider>
    );

    expect(screen.getByText("Your Devices")).toBeInTheDocument();
  });
});
