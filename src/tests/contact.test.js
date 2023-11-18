import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact us page test case", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    render(<Contact />);
  });

  afterEach(() => {
    console.log("after each");
  });

  afterAll(() => {
    console.log("after all");
  });

  it("should render contact component", () => {
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load submit button on rendering contact component", () => {
    // render(<Contact />);

    const button = screen.getByRole("button");

    //const submit = screen.getByText("submit");

    //expect(submit).toBeInTheDocument();

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input called name inside contact component", () => {
    //render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes inside the contact component", () => {
    //render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
