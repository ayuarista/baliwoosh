import React from 'react';

const ExplorationCard = ({ number, icon, title }) => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-100 transition duration-300 group hover:-translate-y-3 mt-3 cursor-pointer">
      <div className="absolute top-0 left-0 bg-primary text-white p-3 rounded-br-xl">
        <span className="font-bold text-lg">{number}</span>
      </div>
      <div className="bg-blue-100 text-primary rounded-full p-6 mb-4 group-hover:bg-primary group-hover:text-white transition duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-900 transition duration-300">{title}</h3>
    </div>
  );
};

export default ExplorationCard;
