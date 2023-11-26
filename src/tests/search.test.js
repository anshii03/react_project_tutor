import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/restList.json";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(MOCK_DATA),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       console.log("test json");
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

it("should search restaurant data based on name", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(6);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});
