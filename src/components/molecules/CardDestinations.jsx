import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar, FaUmbrellaBeach, FaMountain } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { GiWaterfall } from "react-icons/gi";
import { BsWater } from "react-icons/bs";

const CardDestinations = (props) => {
  const renderCategoryIcon = (category) => {
    switch (category) {
      case "Beach":
        return <FaUmbrellaBeach className="text-white" />;
      case "Waterfall":
        return <GiWaterfall className="text-white" />;
      case "Lake":
        return <BsWater className="text-white" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="w-[17.8rem] h-[240px] overflow-hidden rounded-box relative group hover:cursor-pointer">
        <img
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          src={props.image}
          alt={props.title}
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-35 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 px-2">
        <div className="text-left">
          <h2 className="text-black dark:text-white font-semibold text-xl">
            {props.title}
          </h2>
          <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <IoLocationOutline className="text-lg" />
            {props.location}
          </p>
        </div>
        <div className="flex justify-between text-sm text-gray-600 font-medium mt-4">
          <div className="flex items-center gap-1 bg-primary px-2 rounded text-white">
            {renderCategoryIcon(props.category)}
            <span className="ml-1">{props.category}</span>
          </div>
          <p className="border-x-2 px-7 border-gray-700 items-center flex gap-1 dark:text-white">
            <IoIosStarOutline className="text-lg mb-1 text-secondary" />
            {props.rating}
          </p>
          <p className="flex items-center gap-1 dark:text-white">
            <LuUser2 />
            {props.review}
          </p>
        </div>
        <div className="text-black mt-12 items-center flex justify-between">
          <div className="flex flex-col text-sm text-gray-400">
            Start From
            <span className="text-xl font-medium text-gray-700 dark:text-white">
              {props.price}
            </span>
          </div>
          <div className="px-4 py-1 border border-black dark:border-white dark:text-white hover:text-white hover:border-none hover:bg-primary ease-in-out transform duration-300 rounded-full text-sm">
            <Link to={props.path}> Detail </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDestinations;
