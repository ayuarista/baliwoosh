import FilterNominal from "../molecules/FilterNominal.jsx";
import RadioFilter from "../molecules/RadioFilter.jsx";
import RatingDestinations from "../molecules/RatingDestinations.jsx";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = ({ data }) => {
  const history = useNavigate();
  const Location = ["Badung", "Denpasar", "Kintamani", "Gianyar", "Singaraja"];
  const [selectedFilters, setSelectedFilters] = React.useState({
    type: data[0],
    location: Location[0],
    rating: 0,
    price: [0, 100],
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    const query = new URLSearchParams(selectedFilters).toString();
    history({
      pathname: "/destination", // Ganti dengan path halaman filter Anda
      search: `?${query}`,
    });
  }, [selectedFilters, history]);

  return (
    <div className="border rounded p-5 w-fit cursor-pointer">
      <div className="flex mb-6 gap-28">
        <h1 className="font-semibold">Filter</h1>
        <p
          className="font-medium text-gray-400 cursor-pointer"
          onClick={() =>
            setSelectedFilters({
              type: data[0],
              location: Location[0],
              rating: 0,
              price: [0, 100],
            })
          }
        >
          Reset All
        </p>
      </div>
      <div className="">
        <RadioFilter
          listChecked={data}
          titleCheck="What you lookin for?"
          onChange={(value) => handleFilterChange("type", value)}
        />
        <RadioFilter
          listChecked={Location}
          titleCheck="Destinations"
          onChange={(value) => handleFilterChange("location", value)}
        />
        <RatingDestinations
          onChange={(value) => handleFilterChange("rating", value)}
        />
        <FilterNominal
          onChange={(value) => handleFilterChange("price", value)}
        />
      </div>
    </div>
  );
};

export default Filter;
