import heroBg from "../assets/jumbotron.jpg";
import { MdOutlinePlace } from "react-icons/md";

const Home = () => {
  return (
    <div
      className=" h-screen bg-cover bg-center flex flex-col justify-center items-start text-white bg-blend-multiply bg-black/30 px-16"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
>

      {/* Location */}
      <div className="flex backdrop-blur-lg rounded-box w-60 p-3 mt-24">
      <div className="flex">
        <div className="flex items-center">
        <MdOutlinePlace className="text-white w-11 h-11 mr-4" />
        <div>
        <h1 className="text-white text-xl">Kuta</h1>
          <p className="text-gray-300">Denpasar</p>
        </div>
        </div>
        <div className="right-4 flex-col justify-end">
        <p className="text-white underline cursor-pointer flex-col justify-end">Edit</p>
        </div>
      </div>
    </div>

      {/* Hero Content */}
      <div className="mt-12">
        <div className="flex items-center mb-4">
          <h1 className="text-5xl lg:text-6xl font-medium leading-tight">Explore Bali’s</h1>
        </div>
        <h1 className="text-5xl lg:text-6xl font-medium mb-6 leading-tight">Timeless Magic.</h1>
        <p className="max-w-md text-lg mb-8">
          Tired of working all the time? Leave your job and let's enjoy a relaxing holiday in Bali. We will guide you to find your desired destination.
        </p>
        <a href="#" className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Home;