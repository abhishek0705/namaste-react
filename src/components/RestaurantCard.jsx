import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  imageUri,
  resName,
  cuisine,
  rating,
  deliveryTime,
  costForTwo,
  uniqueId,
}) => {
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
      key={uniqueId}
    >
      <Link to={"/restaurant/" + uniqueId}>
        <img className="rounded-lg" alt="res-logo" src={imageUri} />
        <h3 className="font-bold py-4 text-lg">{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
