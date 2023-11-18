import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCard.json";

it("should render restaurant card component with props data", () => {
  render(<RestaurantCard restaurant_details={MOCK_DATA} />);

  const restaurantName = screen.getByText("KFC");

  expect(restaurantName).toBeInTheDocument();
});
