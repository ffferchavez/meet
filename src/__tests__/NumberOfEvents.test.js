import { render, fireEvent } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("renders NumberOfEvents component", () => {
    const { container } = render(<NumberOfEvents />);
    expect(container.querySelector("#number-of-events")).toBeInTheDocument();
  });

  test("renders input element with textbox role", () => {
    const { queryByRole } = render(<NumberOfEvents />);
    const inputElement = queryByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("default value of the input field is 32", () => {
    const { queryByRole } = render(<NumberOfEvents />);
    const inputElement = queryByRole("textbox");
    expect(inputElement.value).toBe("32");
  });
});
