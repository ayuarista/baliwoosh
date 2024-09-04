import React from "react";
import { useSearchParams } from "react-router-dom";
import CardStaycation from "./CardStaycation";
import DataStaycations from "../../data/DataStaycations";
import CardDestinations from "./CardDestinations";
import DataDestinations from "../../data/DataDestinations";
import DataDetailDestinations from "../../data/DataDetailDestinations";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredStaycations = Array.isArray(DataStaycations)
    ? DataStaycations.filter((staycation) =>
        staycation.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredDestinations = Array.isArray(DataDestinations)
    ? DataDestinations.filter((destination) =>
        destination.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="search-results p-4 mx-10 items-center">
      <h1 className="text-5xl font-medium text- mb-5 text-center uppercase font-Koulen tracking-wider text-black dark:text-white">StayCation</h1>
      {filteredStaycations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 place-items-center">
          {filteredStaycations.map((staycation, index) => (
            <CardStaycation
              key={index}
              image={staycation.image}
              title={staycation.title}
              location={staycation.location}
              rating={staycation.rating}
              reviews={staycation.reviews}
              description={staycation.description}
              price={staycation.price}
              amenities={staycation.amenities}
              
            />
          ))}
        </div>
      ) : (
        <div className="text-3xl text-center text-gray-500">
          <p>Sorry there's nothing, search another one.</p>
        </div>
      )}
      <h1 className="text-5xl font-medium mb-10 text-center uppercase font-Koulen tracking-wider text-black dark:text-white mt-10">Destination</h1>
      {filteredDestinations.length > 0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center">
          {filteredDestinations.map((destination, index) => (
            <CardDestinations
              key={index}
              image={destination.image}
              title={destination.title}
              location={destination.location}
              rating={destination.rating}
              review={destination.review}
              price={destination.price}
              category={destination.category}
              path={destination.path}
            />
          ))}
        </div>
      ) : (
        <div className="text-3xl text-center text-gray-500">
          <p>Sorry there's nothing, search another one.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
