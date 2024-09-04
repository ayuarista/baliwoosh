import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <div className="relative flex items-center">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="hidden"
          onChange={handleThemeChange}
          checked={theme === "dark"}
        />
        <div className="flex items-center">
          <div className="mx-2 text-black dark:text-white text-xl">
            {theme === "dark" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
