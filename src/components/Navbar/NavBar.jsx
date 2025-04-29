import React from "react";
import testBiteLogo from "../../assets/svg/testBiteLogo.svg";
import { NavLink } from "react-router";
import Navigations from "./Navigations";

const NavBar = () => {

  return (
    <nav className="w-full bg-white sticky top-0 dark:bg-main-dark z-50 h-fit flex flex-col pt-2 justify-center items-center">
      <div className="logoWrap cursor-pointer mb-4">
        <NavLink to="/">
          <img className="h-10 md:h-20" src={testBiteLogo} alt="logoIcon" />
        </NavLink>
      </div>
      <div className="navigation-wrap flex w-full px-2">
        <ul className="relative dark:text-font-dark text-black h-fit w-full flex justify-between text-2xl mb-1">
          <Navigations></Navigations>
        </ul>
      </div>
      <i className="line h-1.5 w-full border-b-3 border-dashed border-theme-light"></i>
    </nav>
  );
};

export default NavBar;
