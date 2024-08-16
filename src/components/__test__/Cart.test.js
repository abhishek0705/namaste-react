import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../../screens/RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../../mocks/mockResMenu";
import { Provider } from "react-redux";
import { store } from "../../store";
import Header from "../Header";
import Cart from "../../screens/Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

describe("Cart Test Cases", () => {
  it("Should load restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(
      screen.getByText("Cart is empty. Add Items to the Cart")
    ).toBeInTheDocument();
  });
});
