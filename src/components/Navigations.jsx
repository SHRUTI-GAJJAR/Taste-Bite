import React from "react";
import { NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";
import NavigationSubMenu from "./NavigationSubMenu";
import ThemeToggle from "./themeToggle";
import MobileMenu from "./MobileMenu";
const Navigations = () => {
  return (
    <>
      <MobileMenu />
      <ul className="hidden sm:flex">
        <li className="flex cursor-pointer items-center justify-center rounded-full md:h-10 md:w-10 h-6 w-6 border-1 bg-transperent-dark border-theme-light">
          <IoIosSearch className="text-theme-light md:h-8 h-4 hover:md:h-5 hover:h-3.5 transition-all"></IoIosSearch>
        </li>
      </ul>
      <ul className="hidden sm:flex text-[0.825rem] md:gap-10 gap-1.5 items-center justify-between dark:text-font-dark text-black md:text-xl">
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-1 py-0.25 rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-1 py-0.25 rounded border-transparent transition-all"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <NavigationSubMenu />

        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-1 py-0.25 rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-1 py-0.25 rounded border-transparent transition-all"
            }
            to={"/Recipe"}
          >
            Recipe
          </NavLink>
        </li>
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-1 py-0.25 rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-1 py-0.25 rounded border-transparent transition-all"
            }
            to={"/Categories"}
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <ThemeToggle />
    </>
  );
};

export default Navigations;
