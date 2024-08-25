import React from "react";
import DropSort from "../molecules/DropSort";
import { IoWalletOutline, IoLocationOutline } from "react-icons/io5";

const SetSort = () => {
  const dropBudget = [100000, 500000, 1000000, 5000000, 10000000];
  const location = [
    "Denpasar",
    "Badung",
    "Gianyar",
    "Bangli",
    "Tabanan",
    "Buleleng",
    "Jembrana",
    "Karangasem",
    "Klungkung",
  ];
  return (
    <div className="flex min-w-[60%] p-4 py-3  border border-gray-400 rounded-full items-center justify-between    ">
      <div className="flex-">
        <DropSort
          dropName="Budget"
          dropIcon={<IoWalletOutline />}
          dropItems={dropBudget}
        />
      </div>
      <div className="flex-">
        <DropSort
          dropName="Location"
          dropIcon={<IoLocationOutline />}
          dropItems={location}
        />
      </div>
      <div>
        <button className="text-white rounded-full bg-blue-900 px-8 py-3 text-base">Search</button>
      </div>
    </div>
  );
};

export default SetSort;
