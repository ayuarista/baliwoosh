import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import { FaPersonSwimming } from "react-icons/fa6";
import { TbAirConditioning } from "react-icons/tb";
import { LuBedDouble } from "react-icons/lu";
import {
  FaStar,
  FaStarHalfAlt,
  FaWifi,
  FaParking,
  FaUtensils,
} from "react-icons/fa";

const CardStaycation = (props) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating > i && rating < i + 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-500" />);
      }
    }
    return stars;
  };

  const renderAmenities = (amenities) => {
    return amenities.map((amenity, index) => {
      if (amenity === "wifi")
        return <FaWifi key={index} className="text-amenities text-xs" />;
      if (amenity === "parking")
        return <FaParking key={index} className="text-amenities text-xs" />;
      if (amenity === "restaurant")
        return <FaUtensils key={index} className="text-amenities text-xs" />;
      if (amenity === "swim")
      return <FaPersonSwimming key={index} className="text-amenities text-xs" />;
      if (amenity === "ac")
      return <TbAirConditioning key={index} className="text-amenities text-xs" />;
      if (amenity === "bed")
      return <LuBedDouble key={index} className="text-amenities text-xs" />;
      return null;
    });
  };

  return (
    <div className="w-[17.8rem] bg-white dark:bg-base-200 dark:text-white text-black shadow-lg rounded-xl overflow-hidden ">
      <div className="relative group hover:cursor-pointer overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-44 object-cover bg-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute left-0 top-0 flex items-center space-x-2 mt-3 mx-3">
          <span className="text-white text-xs rounded-full bg-black/35">
            <span className="font-semibold px-2 py-1 rounded-box mb-1 flex items-center">
              <span className="items-center mx-1 mt-[2px]">{props.rating}</span>
              {renderStars(props.rating)}
            </span>
          </span>
        </div>
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <span className="text-white text-xs px-2 py-0.5 items-start rounded">
            <span className="font-semibold bg-primary px-2 py-1 rounded-box mb-1">
              {props.reviews}
            </span>
          </span>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between border-b pb-2">
          <div>
            <h1 className="text-primary dark:text-birumuda text-[16.5px] font-semibold">
              {props.title}
            </h1>
            <div className="flex items-center mt-1">
              <IoLocationOutline className="text-amber-300" />
              <span className="text-[10px] font-medium text-gray-400 dark:text-white ml-1">
                {props.location}
              </span>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-2 text-justify">{props.description}</p>
        <div className="flex gap-3 mt-3 border-b pb-2">
          <p className="text-xs">Amenities :</p>
          {renderAmenities(props.amenities)}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-black dark:text-white font-medium">
            From: Rp. <span className="text-primary dark:text-amenities">{props.price}</span>
            /Night
          </p>
          <button className="bg-primary text-white px-4 py-1 text-xs font-medium rounded-full">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardStaycation;
