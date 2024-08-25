import React from "react";
import { FaStar } from "react-icons/fa";
const RatingDestinations = () => {
  return (
    <div className="mt-5">
        <div className="mb-2 gap-24 flex">
        <h2 className="font-semibold">Ratings</h2>
        </div>
      <ul className="mb-2 mx-2 mt-2">
        <li className="text-yellow-400 flex gap-2 mb-4">
          <input type="checkbox" />
        <div className="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
        </li>
        <li className="text-yellow-400 flex gap-2 mb-3">
          <input type="checkbox" />
        <div className="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-300"/>
          </div>
        </li>
        <li className="text-yellow-400 flex gap-2 mb-3">
          <input type="checkbox" />
        <div className="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-300"/>
          <FaStar className="text-gray-300"/>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RatingDestinations;
