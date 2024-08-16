import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../../mocks/mockRestaurantListData";
import { act } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body Test Cases", () => {
  test("Should search res list for burger text input", async () => {
    await act(async () => render(<Body />));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Burger" } });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
    expect(cardsBeforeSearch.length).toBe(8);
  });

  // test("Should filter top rated restaurant", async () => {
  //   await act(async () =>
  //     render(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <Body />
  //         </Provider>
  //       </BrowserRouter>
  //     )
  //   );

  // const cardsBeforeFilter = screen.getAllByTestId("resCard");
  // const searchBtn = screen.getByRole("button", {
  //   name: "Top Rated Restaurants",
  // });

  // fireEvent.click(searchBtn);

  // const cards = screen.getAllByTestId("resCard");
  // expect(cards.length).toBe(1);
  // expect(cardsBeforeFilter.length).toBe(8);
  //   });
});
