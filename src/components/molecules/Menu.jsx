import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative">
      <button
        onClick={toggleMenu}
        className="text-xl text-slate-900 dark:text-white focus:outline-none"
      >
        <FaEllipsisV />
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 top-12 w-48 bg-white dark:bg-base-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col">
          <li className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
            <a href="/" className="text-slate-900 dark:text-white">
              Home
            </a>
          </li>
          <li className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
            <a href="/destination" className="text-slate-900 dark:text-white">
              Destination
            </a>
          </li>
          <li className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
            <a href="/staycations" className="text-slate-900 dark:text-white">
              Staycations
            </a>
          </li>
          <li className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800">
            <a href="/food-drinks" className="text-slate-900 dark:text-white">
              Foods & Drinks
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
