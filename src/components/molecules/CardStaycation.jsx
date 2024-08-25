import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaWifi,
  FaParking,
  FaUtensils,
} from "react-icons/fa";

const CardStaycation = (props) => {
  // Function to convert the integer rating to star icons
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating > i && rating < i + 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  // Function to render amenities icons based on string values
  const renderAmenities = (amenities) => {
    return amenities.map((amenity, index) => {
      if (amenity === "wifi")
        return <FaWifi key={index} className="text-amenities" />;
      if (amenity === "parking")
        return <FaParking key={index} className="text-amenities" />;
      if (amenity === "restaurant")
        return <FaUtensils key={index} className="text-amenities" />;
      return null;
    });
  };

  return (
    <div className="w-[17.8rem] bg-white shadow-lg rounded-xl overflow-hidden ">
      <div className="relative">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-44 object-cover bg-blend-multiply bg-black/80 bg-cover"
        />
        <div className="absolute bottom-2 left-2 flex items-center text-sm space-x-1 bg-black/35 rounded-full px-2 py-1">
          {renderStars(props.rating)}
        </div>
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <span className="text-white text-xs px-2 py-0.5 items-start rounded">
            <span className="font-semibold bg-primary px-2 py-1 rounded-box mb-1">{props.reviews}</span>
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between border-b pb-2">
          <div>
            <h1 className="text-primary text-lg font-semibold">
              {props.title}
            </h1>
            <div className="flex items-center mt-1">
              <IoLocationOutline className="text-amber-300" />
              <span className="text-xs font-medium text-gray-400 ml-1">
                {props.location}
              </span>
            </div>
          </div>
          <TbMapSearch className="text-3xl text-gray-500" />
        </div>
        <p className="text-gray-500 text-xs mt-2">{props.description}</p>
        <div className="flex gap-3 mt-3 border-b pb-2">
          {renderAmenities(props.amenities)}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-black font-medium">
            From: Rp. <span className="text-amenities">{props.price}</span>/Night
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
