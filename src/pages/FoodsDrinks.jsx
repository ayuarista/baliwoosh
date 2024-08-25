import React from 'react'
import Hero from '../assets/Staycations/home.jpg'
import Home from '../assets/Foods & Drinks/hero.jpg'
import SortCategory from '../components/molecules/SortCategory'
import Filter from '../components/organisms/Filter.jsx'
import FilterFoodsDrinks from '../data/FilterFoodsDrinks'

const FoodsDrinks = () => {
  return (
    <div className='mx-12 gap-5 flex'>
    <div>
      <Filter
      data={FilterFoodsDrinks}
      />
    </div>
    <div className="flex-1">
    <div
      className="min-h-[45vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/35  rounded-lg"
      style={{
        backgroundImage: `url(${Home})`,
      }}
    >
      <h2 className="font-Koulen text-[5.5rem] tracking-wider">FOODS & DRINKS</h2>
    </div>
    <div>
      <SortCategory/>
    </div>
    </div>
</div>
  )
}

export default FoodsDrinks