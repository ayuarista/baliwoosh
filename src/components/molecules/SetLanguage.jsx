import { MdOutlinePlace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
const SetLanguage = (props) => {
  const [showLanguage, setShowLanguage] = useState(false);

  function toggleShowLanguage() {
    setShowLanguage(!showLanguage);
  }

  const [selectedItem, setSelectedItem] = useState("English");
  function setItem(item) {
    setSelectedItem(item);
  }
  return (
    <div className="relative">
      <summary className="flex gap-10 backdrop-blur-sm px-4 py-2 border rounded-box">
        <div className="flex gap-2 items-center">
          <CiGlobe className="w-7 h-7" />
          <div>
            <h1
              className=" text-sm font-semibol
            d leading-4"
            ></h1>
            <p className=" text-xs ">{selectedItem}</p>
          </div>
        </div>
        <button
          onClick={() => setShowLanguage((prev) => !prev)}
          className={`text-xs cursor-pointer flex-col justify-end text-black transition ease-in-out duration-300 dark:text-white
          ${showLanguage ? "rotate-180" : "rotate-0"}`}
        >
          <FaChevronDown />
        </button>
      </summary>
      <ul
        class={`menu absolute mt-2 border  bg-white backdrop-blur-sm  w-full  p-2 transform transition ease-in-out duration-300 rounded-box   ${
          showLanguage ? " opacity-100" : " opacity-0"
        }`}
      >
        {props.languageItems.map((item, index) => (
          <li key={index} className={`${showLanguage ? "block" : "hidden"}`}>
            <a
              onClick={() => {
                setItem(item);
                toggleShowLanguage();
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

export default SetLanguage;
