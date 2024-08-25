import React from "react";
import { FaChevronDown } from "react-icons/fa6";
const SortCategory = () => {
  return (
    <div>
      <div className="flex p-5 items-center">
        <h2>Sort by : </h2>
        <details className="dropdown pointer flex">
          <summary className="mx-4 flex border-black border px-4 py-2 text-sm font-medium rounded-full items-center gap-2 cursor-pointer">
            Most Popular
            <FaChevronDown className="w-3 h-3" />
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 shadow bg-white">
            <li>
              <button>High Price</button>
            </li>
            <li>
              <button>Low Price</button>
            </li>
            <li>
              <button>High Rating</button>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default SortCategory;
