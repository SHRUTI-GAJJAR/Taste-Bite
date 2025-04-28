import React, { useState } from "react";
import list from "../../../src/assets/svg/listMode.svg";
import grid from "../../../src/assets/svg/gridMode.svg";

const HomePageCategory = () => {
  const [viweMode, setViweMode] = useState("list");

  const handelModeStyle = (mode) => {
    setViweMode(mode);
  };

  return (
    <section className="md:max-w-[75vw] my-3 sm:my-5 w-[97vw] m-auto">
      <div className="titleWrap flex gap-2">
        <div className="title w-full">
          <h2 className="title text-xl font-medium sm:text-2xl px-3 py-1 sm:px-4 sm:py-1.5 rounded-md sm:rounded-xl text-white bg-[linear-gradient(to_right,#e53935,#e35d5b)] md:font-semibold">
            Explore Category
          </h2>
        </div>
        <div className="viweMode flex bg-[#f0f3f5] dark:bg-[#282931] w-fit rounded-md sm:rounded-xl">
          <span
            onClick={() => handelModeStyle("list")}
            className={`viweModeListStyle cursor-pointer transition border rounded-md sm:rounded-xl h-9 sm:h-11 w-9 sm:w-11 flex items-center justify-center ${
              viweMode === "list"
                ? "border-theme-light bg-transperent-dark"
                : "border-transparent bg-transparent"
            }`}
          >
            <img src={list} className="h-5 sm:h-7" alt="modeIco" />
          </span>
          <span
            onClick={() => handelModeStyle("grid")}
            className={`viweModeListStyle cursor-pointer transition border rounded-md sm:rounded-xl h-9 sm:h-11 w-9 sm:w-11 flex items-center justify-center ${
              viweMode === "grid"
                ? "border-theme-light bg-transperent-dark"
                : "border-transparent bg-transparent"
            }`}
          >
            <img src={grid} className="h-5 sm:h-7" alt="modeIco" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomePageCategory;
