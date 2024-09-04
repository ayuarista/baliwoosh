import React from 'react'
import Hero from '../assets/Staycations/home.jpg'
import Home from '../assets/Staycations/hero.jpg'
import SortCategory from '../components/molecules/SortCategory'
import Filter from '../components/organisms/Filter.jsx'
import FilterStaycations from '../data/FilterStaycations'
import CardStaycation from '../components/molecules/CardStaycation'
import DataStaycations from '../data/DataStaycations'

const Staycations = () => {
   
  return (
    <div className='mx-12 gap-5 flex'>
        <div>
          <Filter
          data={FilterStaycations}
          />
        </div>
        <div className="flex-1">
        <div
          className="min-h-[45vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/35  rounded-lg"
          style={{
            backgroundImage: `url(${Home})`,
          }}
        >
          <h2 className="font-Koulen text-[5.5rem] tracking-wider">STAYCATION</h2>
        </div>
        <div>
          <SortCategory/>
        </div>
        <div className="flex-wrap gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {DataStaycations.map(DataStaycations => (
        <CardStaycation
          image={DataStaycations.image}
          title={DataStaycations.title}
          location={DataStaycations.location}
          rating={DataStaycations.rating}
          reviews={DataStaycations.reviews}
          description={DataStaycations.description}
          price={DataStaycations.price}
          amenities={DataStaycations.amenities}
        />
      ))}
    </div>
        </div>
    </div>
  )
}

export default Staycations