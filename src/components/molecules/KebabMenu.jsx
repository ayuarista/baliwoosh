import React, { useState, useRef, useEffect } from "react";
import { TbMenu } from "react-icons/tb";
import NavLink from "../atoms/NavLink.jsx";

const KebabMenu = () => {
  const [activeNav, setNavActive] = useState(false);
  const menuRef = useRef(null);

  const toggleNav = () => setNavActive(!activeNav);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNavActive(false);
    }
  };

  useEffect(() => {
    if (activeNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeNav]);

  return (
    <>
      <button className="text-xl" onClick={toggleNav}>
        <TbMenu />
      </button>
      <div
        ref={menuRef}
        className={`absolute top-0 bottom-0 left-0 min-w-64 min-h-screen bg-white dark:bg-base-300 z-[-1] transform transition ease-in-out duration-300 ${
          activeNav ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        <div className="pt-24 p-4 flex flex-col gap-5 ">
          <NavLink path="/" nav="Home" />
          <NavLink path="/destination" nav="Destination" />
          <NavLink path="/staycations" nav="Staycations" />
          <NavLink path="/food-drinks" nav="Foods & Drinks" />
        </div>
      </div>
    </>
  );
};

export default KebabMenu;
