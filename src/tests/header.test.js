import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../common/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header component test cases", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  it("should render header component with login button", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  it("should render header component with cart items 0", () => {
    const cartItems = screen.getByText("Cart - 0 items");

    expect(cartItems).toBeInTheDocument();
  });

  //   it("should render header component with cart item", () => {
  //     const cartItems = screen.getByText(/cart/);
  //     expect(cartItems).toBeInTheDocument();
  //   });

  it("should open a modal on clicking login button", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const loginModal = screen.getByTestId("login-modal");

    expect(loginModal).toBeVisible();
  });
});
