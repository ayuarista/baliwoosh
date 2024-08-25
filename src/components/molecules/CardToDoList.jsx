import React from "react";

const CardToDoList = (props) => {
  return (
    <div
      className={`relative  overflow-hidden rounded-lg shadow-lg cursor-pointer max-h-96  group ${props.style}`}
    >
      <img
        src={props.image}
        alt={props.title}
        className="object-cover w-full"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h2 className="text-3xl font-semibold mb-2">{props.title}</h2>
        <a
          href={props.link}
          className="text-sm font-medium underline text-white py-2 rounded-lg transition-colors duration-300 opacity-0 group-hover:opacity-100"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default CardToDoList;
