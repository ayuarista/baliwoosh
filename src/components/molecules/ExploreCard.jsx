import React from "react";

const ExploreCard = ({ image, title }) => {
  return (
    <div className="bg-white dark:text-white text-black rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-96 object-cover" />
      </div>
      <div className="mt-4 absolute">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <a href="#" className="text-gray-400 hover:underline hover:text-birumuda text-xs text-left">
          SEE MORE →
        </a>
      </div>
    </div>
  );
};

export default ExploreCard;
