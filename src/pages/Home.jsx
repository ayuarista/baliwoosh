import heroBg from "../assets/jumbotron.jpg";

const Home = () => {
  return (
    <div
      className=" min-h-[80vh] bg-cover bg-center flex items-center text-white bg-blend-multiply bg-black/50 mx-12 rounded-lg"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="px-6 max-w-xl">{/* comming soon bebih!! */}</div>
    </div>
  );
};

export default Home;
