import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SearchNav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (!searchQuery) {
      e.preventDefault();
    }
  };

  return (
    <div className="">
      <div className="flex gap-5 border rounded-box py-3 px-4">
        <div className="flex items-center gap-3 ">
          <FaSearch />
          <input
            type="search"
            id="default-search"
            className="min-w-[20rem] text-slate-700 bg-gray-50 px-4 py-1 text-sm focus:border-none focus:outline-none rounded-full dark:bg-slate-700 dark:text-white dark:border-none"
            placeholder="Search Places"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
        <Link
          to={searchQuery ? `search?q=${searchQuery}` : "#"}
          className={`flex items-center px-3 bg-black text-white dark:bg-gray-50 dark:text-black focus:outline-none focus:ring-transparent active:bg-white/50 transition ease-in-out duration-100 font-medium rounded-full text-sm ${
            !searchQuery && "cursor-not-allowed opacity-50"
          }`}
          onClick={handleSearch}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default SearchNav;
