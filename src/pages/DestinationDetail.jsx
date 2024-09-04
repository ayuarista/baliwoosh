import React from "react";
import { useParams } from "react-router-dom";
import { FaMapMarkerAlt, FaGoogle } from "react-icons/fa";
import DataDetailDestinations from "../data/DataDetailDestinations";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { PiMoney, PiMoneyWavy } from "react-icons/pi";
import { BiConfused } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
const DestinationDetail = () => {
  const { id } = useParams();
  const placeId = parseInt(id, 10);
  const place = DataDetailDestinations.find((place) => place.id === placeId);

  if (!place) {
    return <h1 className="text-center text-2xl font-medium">Destination not found</h1>; 
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="min-h-[55vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/30  rounded-lg"
        style={{
          backgroundImage: `url(${place.image})`,
        }}
      >
        <h2 className="font-Koulen text-[5.5rem] tracking-wider">
          {place.title}
        </h2>
      </div>
      <div className="flex gap-3 mt-5 items-center border-b pb-3">
        <h1 className="font-semibold text-4xl">{place.title}</h1>
        <div className="flex items-center gap-2 ml-4">
          <FaStar className="text-yellow-300 text-xl" />
          <span className="text-xl">{place.rating}</span>
        </div>
        <div className="flex ml-auto gap-3 items-center">
          <PiMoney className="text-primary text-3xl" />
          <p className="text-sm font-medium">{place.price}</p>
        </div>
      </div>
      <div className="mt-10 border-b pb-4">
        <p className="tracking-widest uppercase text-primary text-xl font-medium mb-2">
          Overview
        </p>
        <h2 className="font-medium text-3xl mb-3">
          Explore More About {place.title}!
        </h2>
        <p className="text-sm text-justify">{place.description}</p>
      </div>
      <div className="carousel w-full rounded-box mt-5">
        <div id="item1" className="carousel-item w-full rounded-box">
          <img
            src={place.gallery1}
            className="w-full h-screen md:h-[50vh] sm:h-[30vh] object-cover rounded-box"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={place.gallery2}
            className="w-full h-screen md:h-[50vh] sm:h-[30vh] object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={place.gallery3}
            className="w-full h-screen md:h-[50vh] sm:h-[30vh] object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src={place.gallery4}
            className="w-full h-screen md:h-[50vh] sm:h-[30vh] object-cover"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <div className="flex justify-between items-start mt-5">
        <div>
          <div className="flex items-center gap-2">
            <AiOutlineComment className="text-4xl text-primary" />
            <p className="text-lg font-medium">Reviews</p>
          </div>
          <div className="flex items-start gap-5 mt-5">
            <h1 className="font-semibold text-6xl">{place.rating}</h1>
            <div className="items-center">
              <p className="font-medium">Excellent</p>
              <div className="flex items-center gap-2">
                <FaStar className="text-primary" />
                <p>{place.review} Reviews</p>
              </div>
            </div>
          </div>
          <div className="border rounded-box p-5 w-fit mt-5">
            <div className="flex items-center gap-2 mb-3">
              <IoLocationOutline className="text-3xl text-primary" />
              <h1 className="text-lg font-medium">Maps</h1>
            </div>
            <a
              href={place.maps}
              className="mb-2 underline hover:text-primary"
              target="_blank"
            >
              {place.location}
            </a>
            <iframe src={place.iframe} className="w-96 h-72"></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex flex-col items-center mb-3">
            <p className="text-4xl text-left">🤔</p>
            <p className="font-medium text-xl text-left">Question</p>
          </div>
          <div className="p-7">
            <div className="collapse collapse-arrow bg-base-200 mb-4">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {place.questions1}
              </div>
              <div className="collapse-content">
                <p className="text-sm text-justify">{place.answers1}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                {place.questions2}
              </div>
              <div className="collapse-content">
                <p className="text-sm text-justify">{place.answers2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
