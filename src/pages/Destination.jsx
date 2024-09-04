import React, { useState } from "react";
import Filter from "../components/organisms/Filter.jsx";
import SortCategory from "../components/molecules/SortCategory.jsx";
import NusaPenida from "../../src/assets/Destinations/nusa-penida.jpg";
import CardDestinations from "../components/molecules/CardDestinations.jsx";
import destinations from "../data/DataDestinations";
import FilterDestinations from "../data/FilterDestinations.jsx";
import Pagination from "../components/molecules/Pagination";
import DataDetailDestinations from "../data/DataDetailDestinations.jsx";

const ITEMS_PER_PAGE = 9;

const Destination = () => {
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentDestinations = destinations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-12 gap-5 flex flex-col">
      <div className="flex gap-5">
        <div>
          <Filter data={FilterDestinations} />
        </div>
        <div className="flex-1">
          <div
            className="min-h-[45vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/20  rounded-lg"
            style={{
              backgroundImage: `url(${NusaPenida})`,
            }}
          >
            <h2 className="font-Koulen text-[5.5rem] tracking-wider">
              DESTINATION
            </h2>
          </div>
          <div>
            <SortCategory />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentDestinations.map((destination, index) => (
              <CardDestinations
                key={index}
                image={destination.image}
                title={destination.title}
                location={destination.location}
                category={destination.category}
                rating={destination.rating}
                review={destination.review}
                price={destination.price}
                path={destination.path}
                // path={`/destination/${index + 1 + indexOfFirstItem}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-row ml-52 mb-4 mt-4">
        <Pagination
        totalItems={destinations.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default Destination;
