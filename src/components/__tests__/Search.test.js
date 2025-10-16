import Body from "../Body";
import { screen, render, fireEvent } from "@testing-library/react";
import MockReslistdata from "../../components/mocks/MockReslistdata.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockReslistdata);
    },
  });
});

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
