import React, { useState } from "react";
import { NavLink } from "react-router";
import NavigationSubMenu from "./NavigationSubMenu";

const Navigations = () => {

  return (
    <>
      <ul>
        {/* <li className="cursor-pointer flex items-center justify-center rounded-full h-10 w-10 bg-theme-light"></li> */}
      </ul>
      <ul className="flex text-sm md:gap-10 gap-5 items-center justify-between dark:text-font-dark text-black md:text-xl">
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={ ({ isActive }) =>
              isActive ? "bg-transperent-dark transition-all border-1 px-2.5 py-0.5 rounded dark:text-white border-transperent-border-dark" : "bg-transparent border-1 px-2.5 py-0.5 rounded border-transparent transition-all"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <NavigationSubMenu />
        
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={ ({ isActive }) =>
              isActive ? "bg-transperent-dark transition-all border-1 px-2.5 py-0.5 rounded dark:text-white border-transperent-border-dark" : "bg-transparent border-1 px-2.5 py-0.5 rounded border-transparent transition-all"
            }
            to={"/Recipe"}
          >
            Recipe
          </NavLink>
        </li>
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={ ({ isActive }) =>
              isActive ? "bg-transperent-dark transition-all border-1 px-2.5 py-0.5 rounded dark:text-white border-transperent-border-dark" : "bg-transparent border-1 px-2.5 py-0.5 rounded border-transparent transition-all"
            }
            to={"/Categories"}
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <ul className="flex">
        <li className="h-10 flex justify-center items-center"></li>
      </ul>
    </>
  );
};

export default Navigations;
