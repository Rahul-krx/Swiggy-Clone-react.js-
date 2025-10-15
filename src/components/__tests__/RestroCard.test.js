import RestroCard from "../RestroCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_API from "../../components/mocks/MOCK_API.json"


it("should load the RestroCard component with prop data", ()=>{

    render(<RestroCard resData ={MOCK_API}/>);

    const name = screen.getByText("Pramod Laddu Bhandar")

    expect(name).toBeInTheDocument()

})