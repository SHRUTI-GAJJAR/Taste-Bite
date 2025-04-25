import React, { useState, useRef } from "react";
import NavigationSubMenu from "./NavigationSubMenu";

const Navigations = () => {
  return (
    <>
      <ul>
        {/* <li className="cursor-pointer flex items-center justify-center rounded-full h-10 w-10 bg-theme-light"></li> */}
      </ul>
      <ul className="flex text-sm gap-5 items-center justify-between dark:text-font-dark text-black md:text-2xl">
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors">
          Home
        </li>
        <NavigationSubMenu></NavigationSubMenu>
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors">
          Recipe
        </li>
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors">
          Categories
        </li>
      </ul>
      <ul className="flex">
        <li className="h-10 flex justify-center items-center"></li>
      </ul>
    </>
  );
};

export default Navigations;
