import React, { useState } from "react";

const SelectedCategory = ({ categories, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState(
    categories.find((category) => category.id === 1)
  );

  const handleClick = (category) => {
    setActiveCategory(category);
    console.log(activeCategory);
    onSelect(category); // This will notify the parent about the selected category
  };

  return (
    <div className="flex gap-2">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleClick(category)}
          className={`w-fit px-4 py-1 font-medium text-sm border border-primary rounded-box ${
            category.id === activeCategory?.id
              ? "bg-primary text-white"
              : "bg-transparent text-primary"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default SelectedCategory;
