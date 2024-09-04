import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 bg-primary text-white rounded font-medium disabled:bg-slate-300 disabled:text-white"
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`px-3 py-1 mx-1 ${
            index + 1 === currentPage ? "bg-primary text-white font-medium" : "bg-white dark:bg-base-300 border dark:border-base-100"
          } rounded font-medium`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 bg-primary dark:to-birumuda text-white font-medium rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
