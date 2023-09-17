import { render, fireEvent,screen } from "@testing-library/react";
import Calculadora from "../../components/calculator/Calculadora";


test("calculates 1 + 1 = 2", () => {
  const { getByText} = render(<Calculadora />);

  fireEvent.click(getByText("1"));

  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("1"));

  fireEvent.click(getByText("="));

  const totalFinalElement = screen.getByRole('article',{name:"result"});
  expect(totalFinalElement.textContent).toBe("2");
});

test("Sumas con decimales", () => {
  const { getByText} = render(<Calculadora />);

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("5"));

  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("3"));
  fireEvent.click(getByText("."));
  fireEvent.click(getByText("7"));
  fireEvent.click(getByText("5"));

  fireEvent.click(getByText("="));

  const totalFinalElement = screen.getByRole('article',{name:"result"});
  expect(totalFinalElement.textContent).toContain("5.25");
});

test("Numeros Negativos", () => {
  const { getByText} = render(<Calculadora />);

  fireEvent.click(getByText("6"));
  fireEvent.click(getByText("9"));


  fireEvent.click(getByText("+"));

  fireEvent.click(getByText("-"));
  fireEvent.click(getByText("7"));
  fireEvent.click(getByText("5"));
  fireEvent.click(getByText("4"));

  fireEvent.click(getByText("="));

  const totalFinalElement = screen.getByRole('article',{name:"result"});
  expect(totalFinalElement.textContent).toBe("-685");
});