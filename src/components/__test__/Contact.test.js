import { render, screen } from "@testing-library/react";
import ContactUs from "../../screens/ContactUs";
import "@testing-library/jest-dom";

describe("Contact us Test Cases", () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterAll(() => {});
  afterEach(() => {});

  it("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input boxes inside contact component", () => {
    render(<ContactUs />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
