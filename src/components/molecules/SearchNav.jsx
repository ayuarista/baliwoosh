import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SearchNav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div className="">
      <div class=" flex gap-5 ">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
            <FaSearch />
          </div>
          <input
            type="search"
            id="default-search"
            class="min-w-[20rem] text-slate-700 bg-gray-50 p-4 py-3 ps-10 text-base  focus:border-none focus:outline-none rounded-box bg-white/10 "
            placeholder="Search Places"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
        <Link
          to="#"
          class="text-slate-700 flex items-center  bg-gray-50  focus:outline-none focus:ring-transparent active:bg-white/50 transition ease-in-out duration-100  font-medium rounded-box text-sm px-4 py-2 "
          onClick={handleSearch}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default SearchNav;
