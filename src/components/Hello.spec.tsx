import {Hello} from "./Hello";
import {render,screen} from "@testing-library/react";

it('renders "Hello world"', () => {
  render(<Hello/>);
  const myElement = screen.getByText(/Hello/);
  expect(myElement).toBeInTheDocument();
});