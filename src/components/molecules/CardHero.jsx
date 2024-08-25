import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
const CardHero = (props) => {
  return (
    <div className="flex-1 h-[480px]">
      <img className="w-full min-h-64 rounded-box" src={props.image} />
      <div className="p-4 px-2">
        <div className="text-left">
          <h2 className="text-black font-semibold text-xl">{props.judul}</h2>
          <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
            <IoLocationOutline />
            {props.detailTempat}
          </p>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2 font-medium">
          <p className="flex items-center gap-1">
            <TbMapSearch />
            {props.distance}
          </p>
          <p className="border-x-2 px-10 border-gray-700 items-center flex gap-1">
            <IoIosStarOutline className="text-lg mb-1" />
            {props.rating}
          </p>
          <p className="flex items-center gap-1">
            <LuUser2 />
            {props.reviews}
          </p>
        </div>
        <div className="text-black mt-12 items-center flex justify-between">
          <div className="flex flex-col text-sm text-gray-400">
            Start From
            <span className="text-xl font-medium text-gray-700">
              {props.price}
            </span>
          </div>
          <Link
            to="/jasia"
            className="border h-fit px-4 py-1 border-black rounded-box"
          >
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
