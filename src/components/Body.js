import React, { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FETCH_RESTAURENT_URL, IMG_CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const listOfRestaurantsRef = useRef([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_RESTAURENT_URL);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const filteredData = restaurantList?.map((item) => item.info);
    listOfRestaurantsRef.current = filteredData;
    setFilteredRestaurants(filteredData);
  };

  const onClickFilterTop = () => {
    const topRated = listOfRestaurantsRef.current.filter(
      (item) => item.avgRating > 4.4
    );
    setFilteredRestaurants(topRated);
  };

  const onClickSearch = () => {
    if (searchText) {
      const filteredSearch = listOfRestaurantsRef.current.filter((item) =>
        item.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
      );

      if (filteredSearch.length > 0) setFilteredRestaurants(filteredSearch);
    } else {
      setFilteredRestaurants(listOfRestaurantsRef.current);
    }
    return true;
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4 items-center">
          <input
            placeholder="Search Reastaurants..."
            className="border border-solid border-black focus:ring-1 p-2 rounded-md w-96"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={onClickSearch}
            className="px-4 py-2 bg-green-100 m-4 rounded-md"
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-md"
            onClick={onClickFilterTop}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            uniqueId={item.id}
            resName={item.name}
            cuisine={item.cuisines.join(", ")}
            rating={item.avgRating}
            deliveryTime={item.sla.slaString}
            costForTwo={item.costForTwo}
            imageUri={IMG_CDN_URL + item.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
