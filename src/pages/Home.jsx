import React from "react";
import heroBg from "../assets/jumbotron.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import ExplorationCard from "../components/molecules/ExplorationCard.jsx";
import ExploreCard from "../components/molecules/ExploreCard.jsx";
import CardToDoList from "../components/molecules/CardToDoList.jsx";
import { FaWater, FaHiking, FaBeer, FaBinoculars } from "react-icons/fa";
import sekumpul from "../assets/sekumpul.jpg";
import gwk from "../assets/gwk.jpg";
import tamanBedugul from "../assets/taman-raya-bedugul.jpg";
import surfin from "../assets/surfin.jpg";
import diving from "../assets/diving.jpg";
import atv from "../assets/ATV.jpg";
import cinema from "../assets/cinema.jpg";
import fishing from "../assets/fishing.jpg";
import SetSort from "../components/organisms/SetSort";
import { Link } from "react-router-dom";
import PopularPlace from "../components/organisms/PopularPlace.jsx";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="min-h-[80vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/35 mx-12 rounded-lg"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="px-6 text-center">
          <div className="mt-10 px-12">
            <div className="items-center mb-4">
              <h1 className="text-5xl lg:text-7xl font-semibold leading-tight">
                Explore <span className="text-white">Bali’s</span>
              </h1>
            </div>
            <h1 className="text-5xl lg:text-5xl font-semibold mb-7 leading-tight">
              Timeless Magic.
            </h1>
            <p className="max-w-md text-sm mb-8">
              Tired of working all the time? Leave your job and let's enjoy a
              relaxing holiday in Bali. We will guide you to find your desired
              destination.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="border border-white font-medium text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Explore Now
              </a>
            </div>
            <div className="mt-10 flex justify-center text-sm items-center mr-3">
              <div className="animate-bounce flex">
                <RiArrowDropDownLine className="w-5 h-5" />
                <h1 className="">Scroll Down</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-16 mx-12">
        <h2 className="text-sm font-regular dark:text-white text-black text-left mb-3">
          It’s time to hit the new path to
        </h2>
        <h2 className="text-5xl text-primary font-semibold text-left mb-3">
          EXPLORATION!
        </h2>
        <p className="max-w-sm text-gray-400 text-justify text-sm mb-5">
          Visitors can explore breathtaking vistas, from lush green hills to
          pristine beaches with crystal-clear waters. The area boasts an array.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ExplorationCard
            number="01"
            icon={<FaWater size={40} />}
            title="Water Sport"
          />
          <ExplorationCard
            number="02"
            icon={<FaHiking size={40} />}
            title="Adventure"
          />
          <ExplorationCard
            number="03"
            icon={<FaBeer size={40} />}
            title="Bar"
          />
          <ExplorationCard
            number="04"
            icon={<FaBinoculars size={40} />}
            title="Sightseeing"
          />
        </div>
      </div>

      {/* Explore Beautiful Places Section */}
      <div className="mt-16 mx-12 ">
        <div className="flex justify-between items-end  mb-10">
          <div>
            <h3 className="text-birumuda text-regular tracking-widest text-base">
              HIGLIGHT
            </h3>
            <h2 className="text-5xl leading-[1] font-semibold  mt-3 dark:text-white text-black">
              Explore Beautiful Places Now!
            </h2>
          </div>

          <a
            href=""
            className="dark:text-white text-black border-blue-900 border-2 p-3 py-2 rounded-full"
          >
            Explore More →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ExploreCard image={sekumpul} title="Sekumpul Waterfall" />
          <ExploreCard image={gwk} title="Garuda Wisnu Kencana" />
          <ExploreCard image={tamanBedugul} title="Taman Raya Bedugul" />
        </div>
      </div>
      {/* Explore popular place */}
      <div className="mt-32 mx-12 text-center">
        <div>
          <p className="text-primary  tracking-widest">
            EXPLORE POPULAR PLACE IN BALI
          </p>
          <h1 className="font-semibold text-5xl mt-4">
            What we offer is an unforgettable <br /> journey and experience.
          </h1>
        </div>
        <div className="flex justify-center mt-7 mb-3">
          <SetSort />
        </div>
        <div className="flex justify-center mb-5 group "></div>
        <div className="flex gap-4"></div>
        <div className="mb-5">
          <PopularPlace />
          <div className="mt-12">
          <Link className="dark:text-white text-primary border-blue-900 border-2 px-7 hover:bg-primary hover:text-white hover:border-none transition-all duration-300 py-2 text-center rounded-full">
            Explore More →
          </Link>
          </div>
        </div>
      </div>
      {/* To Do List Section */}
      <div className="mt-32 mx-12">
        <p className="text-base font-medium tracking-widest text-birumuda mb-4 uppercase">
          To Do List
        </p>
        <h2 className="max-w-lg dark:text-white text-black text-justify text-4xl font-semibold mb-10">
          Although a picture is worth a thousand words.
        </h2>
        <div className="flex  gap-5 ">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <CardToDoList
                image={surfin}
                title="Surfin"
                link="#"
                style="min-w-72 flex-1"
              />
              <CardToDoList
                image={diving}
                title="Diving"
                link="#"
                style="min-w-72 flex-1"
              />
            </div>
            <CardToDoList
              image={cinema}
              title="Cinema"
              link="#"
              style="min-w-72 flex-1"
            />
          </div>
          <div className="flex flex-col gap-5">
            <CardToDoList
              image={atv}
              title="Wild Sport"
              link="#"
              style="min-w-72 flex-1"
            />
            <CardToDoList
              image={fishing}
              title="Fishing"
              link="#"
              style="min-w-72 flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
