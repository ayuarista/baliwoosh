import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
const DropSort = (props) => {
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState(props.dropSelect);

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <button
      className="flex-1 relative z-10"
      onClick={() => setShowItems(!showItems)}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl text-gray-400">{props.dropIcon}</span>
        <div>
          <p className="flex items-start flex-col  text-gray-400">
            {props.dropName}
            <span className="text-xs text-left">
              Max : Rp.{" "}
              {selectedItem !== undefined && selectedItem !== null
                ? selectedItem.toLocaleString("id-ID", {
                    minimumFractionDigits: 0,
                  })
                : "-"}
            </span>
          </p>
        </div>
        <span
          className={`transform transition ease-in-out duration-300 text-gray-400 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaChevronDown />
        </span>
      </div>
      <ul
        className={`menu absolute bg-white -z-10 w-full text-black ${
          showItems ? "opacity-100" : "opacity-0"
        } `}
      >
        {props.dropItems.map((item, index) => (
          <li key={index} className={`${showItems ? "block" : "hidden"}`}>
            <a
              onClick={() => handleSelectedItem(item)}
              className="text-gray-400"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </button>
  );
};

export default DropSort;
