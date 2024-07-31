import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { IMG_CDN_URL, restaurantList } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setRestaurantList] = useState(restaurantList);
  const onClickBtn = () => {
    const topRated = listOfRestaurants.filter(
      (item) => item.data.avgRating > 3
    );
    setRestaurantList(topRated);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={onClickBtn}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item) => (
          <RestaurantCard
            key={item.data.id}
            uniqueId={item.data.id}
            resName={item.data.name}
            cuisine={item.data.cuisines.join(", ")}
            rating={item.data.avgRating}
            deliveryTime={item.data.slaString}
            costForTwo={item.data.costForTwoString}
            imageUri={IMG_CDN_URL + item.data.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
