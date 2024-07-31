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
      <div className="filter">
        <input
          placeholder="Search Reastaurants..."
          className="search-box"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={onClickSearch}>Search</button>
        <button className="filter-btn" onClick={onClickFilterTop}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
