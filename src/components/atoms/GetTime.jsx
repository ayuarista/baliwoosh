import React, { useState, useEffect } from "react";
import { MdSunnySnowing, MdWbSunny, MdNightlightRound } from "react-icons/md";

const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function setIcontime() {
    if (currentTime.getHours() >= 6 && currentTime.getHours() < 11) {
      return <MdSunnySnowing />;
    } else if (currentTime.getHours() >= 11 || currentTime.getHours() < 18) {
      return <MdWbSunny />;
    }
    return <MdNightlightRound />;
  }

  return (
    <div className="flex border rounded-box items-center justify-between min-w-24">
      <span className="bg-black text-white rounded-full flex items-center px-2 py-2">
        {setIcontime()}
      </span>
      <h1 className="px-4 font-medium">
        {currentTime.toLocaleTimeString("id-bali", {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        WITA
      </h1>
    </div>
  );
};

export default GetTime;
