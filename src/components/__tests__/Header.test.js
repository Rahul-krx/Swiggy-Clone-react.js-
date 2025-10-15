import  Headers  from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";

describe('Header component test cases', () => {


it("should render the header with login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

//   const loginBtn = screen.getByRole("button", {name: "Login"});  if multiple button existed and i want a specific button in them
  const loginBtn = screen.getByRole("button");

  expect(loginBtn).toBeInTheDocument();
});


it("should render the header with a cart icon empty ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByRole("img")
//   const cart = screen.getByText(/Cart/)

  expect(cart).toBeInTheDocument();
});

it("should render the header with login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headers />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button",{name: "Login"});

  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", {name : "Logout"})

  expect(logoutBtn).toBeInTheDocument();
});

});
