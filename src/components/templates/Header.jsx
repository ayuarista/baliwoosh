import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import NavDropdown from "../atoms/NavDropdown.jsx";
import SearchNav from "../molecules/SearchNav.jsx";
import NavLink from "../atoms/NavLink.jsx";
import ThemeToggle from "../atoms/ThemeToggle.jsx";
import ModalNavbar from "../molecules/ModalNavbar.jsx";
import SetLanguage from "../molecules/SetLanguage.jsx";
import GetTime from "../atoms/GetTime.jsx";
import KebabMenu from "../molecules/KebabMenu.jsx";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [searchLabel, setSearchLabel] = useState(""); // Atur ini sesuai dengan kondisi Anda

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerHeight = "72px";

  return (
    <>
      <header
        className={`${
          isFixed ? "fixed top-0 left-0 right-0 w-full  bg-white  shadow-sm" : ""
        } flex flex-col w-full gap-2 px-4 lg:px-12 py-5 z-50 bg-white dark:bg-base-100`}
        style={{ height: headerHeight }}
      >
        <div className="flex justify-between items-center w-full">
          <div className="block lg:hidden">
            <KebabMenu />
          </div>
          <h1 className="text-2xl lg:text-3xl text-slate-900 dark:text-white font-medium font-Logo absolute lg:static left-1/2 lg:left-0 transform -translate-x-1/2 lg:-translate-x-0">
            BaliWoosh
          </h1>
          <nav className="hidden lg:flex gap-1 items-center">
            <NavLink path="/" nav="Home" />
            <NavLink path="/destination" nav="Destination" />
            <NavLink path="/staycations" nav="Staycations" />
            <NavLink path="/food-drinks" nav="Foods & Drinks" />
          </nav>
          <div className="flex items-center gap-2">
            <SearchNav searchLabel={searchLabel} />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div style={{ paddingTop: "5px" }}>
        {/* Konten Lain */}
      </div>
    </>
  );
}

export default Header;
