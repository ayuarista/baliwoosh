import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLabel, setSearchLabel] = useState(false);
  const modalRef = useRef(null);

  const toggleSearchLabel = () => setSearchLabel(!searchLabel);

  const handleSearch = (e) => {
    if (!searchQuery) {
      e.preventDefault();
    }
    setSearchLabel(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSearchLabel(false);
    }
  };

  useEffect(() => {
    if (searchLabel) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchLabel]);

  return (
    <>
      <button onClick={toggleSearchLabel}>
        <FaSearch className="dark:text-white text-black" />
      </button>
      <div
      ref={modalRef}
      className={`gap-10 bg-white shadow-lg dark:bg-base-300 min-h-48 lg:w-[30rem] w-80 py-2 px-4 flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 rounded-md z-10 ${
        searchLabel ? "block" : "hidden"
      }`}
    >
        <h2 className="font-semibold text-xl text-center text-black dark:text-white pt-3">What You Lookin For?</h2>
        <div className="flex items-center max-w-sm mx-auto">
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-base-100 dark:border-base-200 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search Places..."
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              required
            />
          </div>
          <Link
            className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSearch}
            to={searchQuery ? `search?q=${searchQuery}` : "#"}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchNav;
