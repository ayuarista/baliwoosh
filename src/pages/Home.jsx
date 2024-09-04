import React from "react";
import heroBg from "../assets/jumbotron.jpg";
import { RiArrowDropDownLine } from "react-icons/ri";
import ExplorationCard from "../components/molecules/ExplorationCard.jsx";
import ExploreCard from "../components/molecules/ExploreCard.jsx";
import CardToDoList from "../components/molecules/CardToDoList.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineHotel } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { GrSwim } from "react-icons/gr";
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
    <div className="lg:mx-12">
      {/* Hero Section */}
      <div
        className="w-full min-h-[82vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/35 lg:rounded-lg"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="lg:px-6 text-center">
          <div className="mt-10 px-">
            <div className="items-center mb-4">
              <h1 className="text-4xl lg:text-7xl font-semibold leading-tight text-center">
                Explore <span className="text-white">Bali’s</span>
              </h1>
            </div>
            <h1 className="text-5xl lg:text-5xl font-semibold mb-7 leading-tight">
              Timeless Magic.
            </h1>
            <p className="max-w-sm lg:max-w-md text-[12.5px] lg:text-sm mb-8">
              Tired of working all the time? Leave your job and let's enjoy a
              relaxing holiday in Bali. We will guide you to find your desired
              destination.
            </p>
            <div className="mt-10">
              <a
                href="#explore"
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
      <section id="explore">
        {/* Cards Section */}
        <div className="mt-16 mx-12">
          <h2 className="text-sm font-regular dark:text-white text-black text-left mb-3">
            It’s time to hit the new path to
          </h2>
          <h2 className="text-3xl lg:text-5xl text-primary font-semibold text-left mb-3">
            EXPLORATION!
          </h2>
          <p className="max-w-sm text-gray-400 text-justify text-sm mb-5">
            Visitors can explore breathtaking vistas, from lush green hills to
            pristine beaches with crystal-clear waters. The area boasts an
            array.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/destination">
              <ExplorationCard
                number="01"
                icon={<GrSwim size={40} />}
                title="Water Sport"
              />
            </Link>
            <Link to="/food-drinks">
              <ExplorationCard
                number="02"
                icon={<IoRestaurant size={40} />}
                title="Restaurant"
              />
            </Link>
            <Link to="/staycations">
              <ExplorationCard
                number="03"
                icon={<MdOutlineHotel size={40} />}
                title="Staycation"
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-16 mx-12 ">
        <div className="flex justify-between items-end  mb-10">
          <div>
            <h3 className="text-birumuda text-regular tracking-widest text-base">
              HIGLIGHT
            </h3>
            <h2 className="lg:text-5xl text-2xl leading-[1] font-semibold  mt-3 dark:text-white text-black">
              Explore Beautiful Places Now!
            </h2>
          </div>
          
          <Link to ="/destination">
          <div className="flex items-center gap-3 px-3 py-2 rounded-full border border-primary hover:border-none hover:bg-primary hover:text-white text-black dark:text-white text-sm transition-all transform duration-150">
              <p>Explore More!</p>
              <FaArrowRightLong/>
          </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link to="/destination/21">
          <ExploreCard image={"https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="Kelingking Beach" />
          </Link>
          <Link to="">
          <ExploreCard image={"https://images.unsplash.com/photo-1724293721683-a8f2eb2b04d1?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="Garuda Wisnu Kencana" />
          </Link>
          <Link to ="">
          <ExploreCard image={"https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title="Taman Raya Bedugul" />
          </Link>
        </div>
      </div>

      <div className="mt-32 mx-12 text-center">
        <div>
          <p className="text-primary dark:birumuda tracking-widest">
            EXPLORE POPULAR PLACE IN BALI
          </p>
          <h1 className="font-semibold text-3xl lg:text-5xl mt-4 dark:text-white text-black">
            What we offer is an unforgettable <br /> journey and experience.
          </h1>
        </div>
        <div className="flex justify-center mb-5 group "></div>
        <div className="flex gap-4"></div>
        <div className="mb-5">
          <PopularPlace />
        </div>
      </div>

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
