import { render, screen } from "@testing-library/react";
import App from "./App";
import Test from "./Test";

test("renders a link that points to little lemon webpage", () => {
  render(<App />);
  const linkElement = screen.getByText("Little Lemou Restaurant");
  expect(linkElement).toBeInTheDocument();
});
