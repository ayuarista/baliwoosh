import React from "react";
import Hero from "../assets/Staycations/home.jpg";
import Home from "../assets/Foods & Drinks/hero.jpg";
import SortCategory from "../components/molecules/SortCategory";
import Filter from "../components/organisms/Filter.jsx";
import FilterFoodsDrinks from "../data/FilterFoodsDrinks";
import CardFoodDrinks from "../components/molecules/CardFoodDrinks";
import DataFoodDrinks from "../data/DataFoodDrinks";

const FoodsDrinks = () => {
  return (
    <div className="mx-12 gap-5 flex">
      <div>
        <Filter data={FilterFoodsDrinks} />
      </div>
      <div className="flex-1">
        <div
          className="min-h-[45vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/35  rounded-lg"
          style={{
            backgroundImage: `url(${Home})`,
          }}
        >
          <h2 className="font-Koulen text-[5.5rem] tracking-wider">
            FOODS & DRINKS
          </h2>
        </div>
        <div>
          <SortCategory />
        </div>
        <div className="flex-wrap gap-3">
          {DataFoodDrinks.map((DataFoodDrinks) => (
            <CardFoodDrinks
              image={DataFoodDrinks.image}
              location={DataFoodDrinks.location}
              tipe={DataFoodDrinks.tipe}
              icons={DataFoodDrinks.icons}
              title={DataFoodDrinks.title}
              rating={DataFoodDrinks.rating}
              price={DataFoodDrinks.price}
              review={DataFoodDrinks.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodsDrinks;
