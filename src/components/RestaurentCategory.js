import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, handleClick }) => {
  const { title, itemCards = [] } = data || {};
  /* Can be used to have open all accordians at once 
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  */
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
