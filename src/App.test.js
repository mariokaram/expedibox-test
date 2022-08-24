import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Testing Application", () => {
  test("full app rendering/navigating", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    expect(screen.getByText("Welcome Home")).toBeInTheDocument();

    await user.click(screen.getByText("About"));
    expect(screen.getByText("About us")).toBeInTheDocument();
    await user.click(screen.getByText("Contact"));
    expect(screen.getByText("Contact us")).toBeInTheDocument();
    await user.click(screen.getByText("Product"));
    expect(screen.getByText("Our Product")).toBeInTheDocument();
  });
});
