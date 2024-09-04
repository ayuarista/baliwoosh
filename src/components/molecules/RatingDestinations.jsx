import React from "react";
import { FaStar } from "react-icons/fa";

const RatingDestinations = ({ onChecked }) => {
  const ratings = [
    { value: 5, label: [1, 1, 1, 1, 1] },  // 5 stars
    { value: 4, label: [1, 1, 1, 1, 0] },  // 4 stars
    { value: 3, label: [1, 1, 1, 0, 0] },  // 3 stars
  ];

  return (
    <div className="mt-5">
      <div className="mb-2 gap-24 flex">
        <h2 className="font-semibold">Ratings</h2>
      </div>
      <ul className="mb-2 mx-2 mt-2">
        {ratings.map((rating, index) => (
          <li key={index} className="text-yellow-400 flex gap-2 mb-4">
            <input
              type="checkbox"
              onChange={() => onChecked(rating.value)}
            />
            <div className="flex">
              {rating.label.map((filled, i) => (
                <FaStar key={i} className={filled ? "text-yellow-400" : "text-gray-300"} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingDestinations;
