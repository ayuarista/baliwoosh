import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import NavDropdown from "../atoms/NavDropdown.jsx";
import NavLink from "../atoms/NavLink.jsx";
import ThemeToggle from "../atoms/ThemeToggle.jsx";
import SearchNav from "../molecules/SearchNav.jsx";
import SetLanguage from "../molecules/SetLanguage.jsx";
import GetTime from "../atoms/GetTime.jsx";
import { useTranslation } from 'react-i18next';



const Header = () => {
  //   const destinationLink = [
  //     { path: "destination/reccomendation", label: "Reccomendations" },
  //     { path: "destination/beach-club", label: "Beach & Club" },
  //     { path: "destination/mountain", label: "Mountains" },
  //     { path: "destination/parks", label: "Parks" },
  //     { path: "destination/lakes", label: "Lakes" },
  //     { path: "destination/temples", label: "Temples" },
  //   ];
  //   const staycationLink = [
  //     { path: "destination/reccomendation", label: "Reccomendations" },
  //     { path: "destination/beach-club", label: "Beach & Club" },
  //     { path: "destination/mountain", label: "Mountains" },
  //     { path: "destination/parks", label: "Parks" },
  //     { path: "destination/lakes", label: "Lakes" },
  //     { path: "destination/temples", label: "Temples" },
  //   ];
  //   const FoodDrinksLink = [
  //     { path: "destination/reccomendation", label: "Reccomendations" },
  //     { path: "destination/beach-club", label: "Beach & Club" },
  //     { path: "destination/mountain", label: "Mountains" },
  //     { path: "destination/parks", label: "Parks" },
  //     { path: "destination/lakes", label: "Lakes" },
  //     { path: "destination/temples", label: "Temples" },
  //   ];
  const { t, i18n } = useTranslation();
  const languageItems = ["English", "Indonesia"];
  return (
    <header className="flex flex-col gap-2  px-12 py-5">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-8 items-center ">
          <h1 className="text-3xl text-slate-900 dark:text-white font-medium font-Logo">
            BaliWoosh
            
          </h1>
          <nav className="flex gap-2">
            <NavLink path="/" nav="Home" />
            <NavLink path="/destination" nav="Destination" />
            <NavLink path="/staycations" nav="Staycations" />
            <NavLink path="/food-drinks" nav="Foods & Drinks" />
          </nav>
        </div>
        <SetLanguage languageItems={['English', 'Indonesia']} onChange={(lang) => i18n.changeLanguage(lang)} />
      </div>
      <div className="flex justify-between items-center">
        <SearchNav />
        <div className="flex gap-3 items-center">
          <GetTime />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
