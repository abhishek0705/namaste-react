import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL, IMG_CDN_URL } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards?.[2]?.card?.card?.info);
    const menu =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const filteredMenu = menu?.map((item) => item.card.info);
    setResMenu(filteredMenu);
  };

  const { name, areaName, cloudinaryImageId, costForTwoMessage, cuisines } =
    resInfo || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu-contianer">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        style={{ width: "100px", height: "100px" }}
      />
      <h1> {name}</h1>
      <h4> {areaName}</h4>
      <h2>
        {cuisines?.join(", ")}- {costForTwoMessage}
      </h2>
      <h3>Menu</h3>
      <ul>
        {resMenu?.map((item) => (
          <li key={item?.id}>
            {item?.name}- Rs.{(item?.price || item?.defaultPrice) / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
