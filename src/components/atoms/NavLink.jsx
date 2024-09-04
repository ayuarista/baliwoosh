import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = (props) => {
  const location = useLocation();

  function setNav() {
    if (location.pathname === props.path) {
      return "text-white  bg-black dark:bg-slate-950";
    } else {
      return "border-transparent text-slate-500 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800";
    }
  }

  return (
    <div>
      <Link
        to={props.path}
        className={`text-[0.90rem] font-medium rounded-box transition ease-in-out duration-300  px-3 py-1 ${setNav()}`}
      >
        {props.nav}
      </Link>
    </div>
  );
};

export default NavLink;
