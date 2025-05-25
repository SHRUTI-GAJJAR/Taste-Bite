import React from "react";
import { NavLink } from "react-router";
import NavigationSubMenu from "./NavigationSubMenu";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import "../../App.css"

const Navigations = () => {
  return (
    <>
      <MobileMenu />
      <ul></ul>
      <ul className="hidden sm:flex text-[0.825rem] md:gap-10 gap-3 items-center justify-between dark:text-font-dark text-black md:text-xl">
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded border-transparent transition-all"
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
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded border-transparent transition-all"
            }
            to={"/Recipe"}
          >
            Recipes
          </NavLink>
        </li>
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded border-transparent transition-all"
            }
            to={"/Categories"}
          >
            Categories
          </NavLink>
        </li>
        <li className="cursor-pointer dark:hover:text-white transition-colors">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-transperent-dark transition-all border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded dark:text-white border-transperent-border-dark"
                : "bg-transparent border-1 md:px-2.5 md:py-0.5 px-2 py-0.5 text-[1rem] rounded border-transparent transition-all"
            }
            to={"/Users"}
          >
            Shafe
          </NavLink>
        </li>
      </ul>
      <ThemeToggle />
    </>
  );
};

export default Navigations;
