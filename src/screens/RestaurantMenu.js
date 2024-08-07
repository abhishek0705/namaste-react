import React, { useEffect, useState } from "react";
import { FETCH_MENU_URL, IMG_CDN_URL } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import RestaurentCategory from "../components/RestaurentCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resCategoryMenu, setResCategoryMenu] = useState([]);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards?.[2]?.card?.card?.info);

    const categories =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => {
          if (
            item.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) {
            return item;
          }
        }
      );
    setResCategoryMenu(categories);
  };

  const { name, areaName, costForTwoMessage, cuisines } = resInfo || {};

  const handleClick = (index) => {
    if (index === showIndex) setShowIndex(-1);
    else setShowIndex(index);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="px-16 py-8 text-center">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <h4>{areaName}</h4>
      <h2 className="font-bold my-2 text-lg">
        {cuisines?.join(", ")}- {costForTwoMessage}
      </h2>

      {resCategoryMenu.map((category, index) => (
        <RestaurentCategory
          key={category.title}
          data={category?.card?.card}
          showItems={showIndex === index}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
