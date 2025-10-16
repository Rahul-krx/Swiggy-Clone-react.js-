import Body from "../Body";
import { screen, render, fireEvent } from "@testing-library/react";
import MockReslistdata from "../../components/mocks/MockReslistdata.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/MockReslistdata.json"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
 
describe(' Testing Body component RestroCard and search input', () => {
  
it("should search Res List for biryani text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {name: "Search"});

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {target: {value: "biryani"}});

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");


  expect(cards.length).toBe(3);
});

it("should search Res List for biryani text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardBeforeFilter.length).toBe(20);

  const TopRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

  fireEvent.click(TopRatedBtn);

  const cardAfterFilter = screen.getAllByTestId("resCard");

  expect(cardAfterFilter.length).toBe(13);



});

});
