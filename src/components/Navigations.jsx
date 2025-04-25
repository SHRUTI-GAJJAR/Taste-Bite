import React from "react";
import pizza from "../assets/svg/pizza.svg";
import { IoSearchOutline } from "react-icons/io5";

import { FaChevronDown } from "react-icons/fa6";

const Navigations = () => {
  return (
    <>
      <ul>
        <li className="cursor-pointer flex items-center justify-center rounded-full h-10 w-10 bg-theme-light">
          <IoSearchOutline className="h-8 text-white" />
        </li>
      </ul>
      <ul className="flex text-2xl gap-5 items-center justify-between dark:text-font-dark text-black">
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors">
          Home
        </li>
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors">
          Recipe
        </li>
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors">
          Categories
        </li>
        <li className="cursor-pointer hover:text-font-dark dark:hover:text-white transition-colors flex items-center">
            <p>Navigation</p>
            <FaChevronDown className="h-4" />
        </li>
      </ul>
      <ul className="flex">
        <li className="h-10 flex justify-center items-center">
          <img className="h-8" src={pizza} alt="pizzaIcon" />
        </li>
      </ul>
    </>
  );
};

export default Navigations;
