import React from "react";
import Filter from "../components/organisms/Filter.jsx";
import SortCategory from "../components/molecules/SortCategory.jsx";
import NusaPenida from "../../src/assets/Destinations/nusa-penida.jpg";
import CardDestinations from "../components/molecules/CardDestinations.jsx";
import destinations from "../data/DataDestinations";
import FilterDestinations from "../data/FilterDestinations.jsx";

const Destination = () => {
  return (
    <div className="mx-12 gap-5 flex">
      <div>
        <Filter 
        data={FilterDestinations}
        />
       
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
          {destinations.map((destination, index) => (
            <CardDestinations
              key={index}
              image={destination.image}
              title={destination.title}
              location={destination.location}
              desc={destination.desc}
              rating={destination.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
