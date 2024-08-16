import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Restaurant Card Test Cases", () => {
  test("Should render restaurant card component with props data", () => {
    render(
      <BrowserRouter>
        <RestaurantCard
          imageUri={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_90186.JPG"
          }
          resName={"Burger King Burgers"}
          cuisine={"American"}
          rating={4.3}
          deliveryTime={"40-45 mins"}
          costForTwo={"₹350 for two "}
          uniqueId={90186}
        />
      </BrowserRouter>
    );

    const name = screen.getByText("Burger King Burgers");
    expect(name).toBeInTheDocument();
  });
});
