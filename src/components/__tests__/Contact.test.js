import { render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("contact component should be load", () =>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument()

});

test("Button should be load in contact component", () =>{
    render(<Contact/>)

    // can be tested using both.

     const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument()

});
test("input name should be load in contact component", () =>{
    render(<Contact/>)
    
     const inputName = screen.getByPlaceholderText("Enter Name");
    // Assertion
    expect(inputName).toBeInTheDocument()

});

test(" All input box should be load in contact component", () =>{
    render(<Contact/>)
    
     const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes).toBeInTheDocument()

});