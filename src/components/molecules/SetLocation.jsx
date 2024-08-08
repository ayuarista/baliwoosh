import { MdOutlinePlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
const SetLocation = (props) => {
  const [showLocations, setShowLocations] = useState(false);

  function toggleShowLocations() {
    setShowLocations(!showLocations);
  }

  const [selectedItem, setSelectedItem] = useState("Others");
  function setItem(item) {
    setSelectedItem(item);
  }
  return (
    <div className="relative">
      <summary className="flex items-end gap-10 backdrop-blur-sm px-4 py-2 border rounded-box">
        <div className="flex gap-2 items-center">
          <MdOutlinePlace className=" w-7 h-7" />
          <div>
            <h1 className=" text-sm font-semibold leading-4">Your Location</h1>
            <p className=" text-xs ">{selectedItem}</p>
          </div>
        </div>
        <button
          onClick={toggleShowLocations}
          className=" underline text-xs cursor-pointer flex-col justify-end"
        >
          Edit
        </button>
      </summary>
      <ul
        class={`menu absolute mt-2 border  bg-white backdrop-blur-sm  w-full  p-2 transform transition ease-in-out duration-300 rounded-box   ${
          showLocations ? " opacity-100" : " opacity-0"
        }`}
      >
        {props.locationsItems.map((item, index) => (
          <li key={index} className={`${showLocations ? "block" : "hidden"}`}>
            <a
              onClick={() => {
                setItem(item);
                toggleShowLocations();
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetLocation;
