import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const getStarColor = (rating, index) => {
  return rating >= index + 1 ? "text-yellow-400" : "text-gray-300";
};

const CardDestinations = (props) => {
  return (
    <div className="w-[18rem] bg-white shadow-lg rounded-xl overflow-hidden hover:-translate-y-4 ease-in-out duration-300 cursor-pointer">
      <div className="p-4 gap-10">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-44 object-cover rounded-box"
        />
      </div>
      <div className="p-3">
        <h2 className="text-lg font-semibold text-gray-900">{props.title}</h2>
        <div className="flex items-center text-gray-600 text-sm my-2">
          <IoLocationOutline className="text-primary" />
          <p className="ml-1">{props.location}</p>
        </div>
        <p className="text-xs text-gray-400 ml-1 mb-2">{props.desc}</p>
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={getStarColor(props.rating, index)}
              />
            ))}
          </div>
          <span className="text-gray-800 font-semibold text-sm ml-2">
            {props.rating.toFixed(1)}
          </span>
          <div className="ml-16">
            <button className="px-5 py-1 bg-primary text-xs text-white rounded-full">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDestinations;
