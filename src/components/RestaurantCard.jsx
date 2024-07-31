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
    <div className="res-card" key={uniqueId}>
      <Link to={"/restaurant/" + uniqueId}>
        <img className="res-logo" alt="res-logo" src={imageUri} />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
