import React from "react";
import { NavLink } from "react-router";
import pizza from "../assets/svg/pizza.svg";
import { IoIosSearch } from "react-icons/io";
import NavigationSubMenu from "./NavigationSubMenu";
import { useTheme } from "../context/ThemeContext";

const Navigations = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ul>
        <li className="cursor-pointer flex items-center justify-center rounded-full md:h-10 md:w-10 h-6 w-6 border-1 bg-transperent-dark border-theme-light">
          <IoIosSearch className="text-theme-light md:h-8 h-4 hover:md:h-5 hover:h-3.5 transition-all"></IoIosSearch>
        </li>
      </ul>
      <ul className="flex text-sm md:gap-10 gap-2 items-center justify-between dark:text-font-dark text-black md:text-xl">
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
      <ul className="flex items-center justify-center">
        <li className="h-fit w-fit flex justify-center items-center">
          <button onClick={toggleTheme} className={`relative cursor-pointer md:w-14 md:h-8 w-10 h-6 rounded-full bg-[linear-gradient(to_right,#dc2e0bcc,#d75d45cc)] dark:bg-transperent-dark`}>
            <span>
              <img src={pizza} className={`md:h-8 h-6 absolute top-0 transition-transform ${theme === "dark" ? "md:translate-x-6 translate-x-4" : "translate-x-0" }`} alt="pizzaIcon" />
            </span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navigations;
