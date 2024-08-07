import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 bg-black shadow-lg mx-5 rounded-md text-white">
                  Add +
                </button>
              </div>
              <img
                src={IMG_CDN_URL + item.card.info.imageId}
                className="w-full rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
