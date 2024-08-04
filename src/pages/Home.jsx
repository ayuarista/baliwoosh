import heroBg from "../assets/jumbotron.jpg";
import { MdOutlinePlace } from "react-icons/md";

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center bg-cover bg-blend-multiply bg-black/30"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
>
    <div className="flex  backdrop-blur-lg rounded">
    <MdOutlinePlace className="text-white w-8 h-8"/>
    <h1>Kuta</h1>
    <p>Denpasar</p>
    </div> 
    </div>
  );
};

export default Home;