import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
const CardHero = (props) => {
  return (
    <div className="flex-1 h-[480px]">
      <img className="w-full min-h-64 rounded-box object-cover" src={props.image} />
      <div className="p-4 px-2">
        <div className="text-left">
          <h2 className="text-black dark:text-white font-semibold text-xl">{props.judul}</h2>
          <p className="text-xs text-gray-500 mt-2 mb-2 flex items-center gap-1">
            <IoLocationOutline />
            {props.detailTempat}
          </p>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-3 font-medium">
          <p className="flex items-center gap-1 bg-primary rounded px-3 text-white text-xs dark:bg-primary">
            <TbMapSearch />
            {props.category}
          </p>
          <p className="border-x-2 px-5 border-gray-700 items-center flex gap-1 dark:text-white">
            <IoIosStarOutline className="text-lg mb-1 text-yellow-300" />
            {props.rating}
          </p>
          <p className="flex items-center gap-1 dark:text-white">
            <LuUser2 />
            {props.reviews}
          </p>
        </div>
        <div className="text-black dark:text-white mt-8 items-center flex justify-between">
          <div className="flex flex-col text-sm text-gray-400">
            Start From
            <span className="text-xl font-medium text-gray-700 dark:text-white">
              {props.price}
            </span>
          </div>
          <div className="px-4 py-1 border border-black dark:border-white hover:text-white hover:border-none hover:bg-primary ease-in-out transform duration-300 rounded-full text-sm">
            <Link to={props.path}> Detail </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
