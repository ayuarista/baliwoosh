import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineLocalCafe } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { GrRestaurant } from "react-icons/gr";
const CardFoodDrinks = (props) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating > i && rating < i + 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-white" />);
      } else {
        stars.push(<FaStar key={i} className="text-white" />);
      }
    }
    return stars;
  };

  const renderIcons = (icons) => {
    return icons.map((icon, index) => {
      if (icon === "Restaurant")
        return <IoRestaurant key={index} className="text-yellow-400" />;
      if (icon === "Cafe")
        return <MdOutlineLocalCafe key={index} className="text-yellow-400" />;
      if (icon === "Others")
        return <GrRestaurant key={index} className="text-yellow-400" />;
      return null;
    });
  };
  return (
    <div className="w-72 bg-white dark:bg-base-200 text-black dark:text-white shadow-lg rounded-xl overflow-hidden">
      <div className="relative">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-44 object-cover bg-cover"
        />
        <div className="flex bottom-2 left-0 items-center rounded-full text-xs font-medium absolute bg-white mx-4 my-2">
          <div className="items-center mx-3 my-1 flex">
            <IoLocationOutline className="text-primary text-sm items-center" />
            <span className="text-black">{props.location}</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center gap-3">
          <p className="text-gray-400 font-medium text-[13px]">{props.tipe}</p>
          <span>{renderIcons(props.icons)}</span>
        </div>
        <div className="items-center">
          <p className="text-[15px] font-medium">{props.title}</p>
          <div className="flex items-center mt-2">
            <span className="flex font-medium text-sm items-center">
              <p className="text-gray-400 text-xs mr-2">({props.rating})</p>{" "}
              {renderStars(props.rating)}
            </span>
          </div>
          <div className="border-b pb-2 mt-3">
          <p className="text-gray- font-medium text-sm">Start from {props.price}</p>
          </div>
        </div>
        <div className="flex mt-4 items-center justify-between">
          <span className="bg-primary rounded-full p-2 text-white text-lg">
            <IoLocationOutline />
          </span>
          <p className="font-medium text-gray-400">Maps</p>
          <p>{props.review}</p>
          <button className="px-3 py-2 bg-primary text-white rounded-full text-xs">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CardFoodDrinks;
